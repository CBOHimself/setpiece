<?php
declare(strict_types=1);

// TODO: set this to the inbox that should receive enquiries.
const ADMIN_EMAIL = 'admin@setpiecegh.com';

// TODO: confirm this mailbox exists on setpiecegh.com before go-live.
const FROM_EMAIL = 'admin@setpiecegh.com';

const ALLOWED_ORIGIN = 'https://www.setpiecegh.com';
const MAX_BODY_BYTES = 20000;
const RATE_LIMIT = 5;
const RATE_WINDOW_SECONDS = 3600;

const ALLOWED_CATEGORIES = ['ostomy', 'continence', 'wound-care', 'urology', 'other', ''];

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

if (!apply_cors()) {
    respond(403, ['ok' => false, 'error' => 'Origin not allowed']);
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($method === 'OPTIONS') {
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Max-Age: 600');
    http_response_code(204);
    exit;
}

if ($method !== 'POST') {
    header('Allow: POST, OPTIONS');
    respond(405, ['ok' => false, 'error' => 'Method not allowed']);
}

$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
if (!str_contains($contentType, 'application/json')) {
    respond(415, ['ok' => false, 'error' => 'Invalid request']);
}

$raw = file_get_contents('php://input');
if ($raw === false || strlen($raw) > MAX_BODY_BYTES) {
    respond(400, ['ok' => false, 'error' => 'Invalid request']);
}

try {
    $decoded = json_decode($raw, true, 8, JSON_THROW_ON_ERROR);
} catch (JsonException) {
    respond(400, ['ok' => false, 'error' => 'Invalid request']);
}

if (!is_array($decoded)) {
    respond(400, ['ok' => false, 'error' => 'Invalid request']);
}

$honeypot = field($decoded, 'companyWebsite');
if ($honeypot !== '') {
    respond(200, ['ok' => true]);
}

$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
if (is_rate_limited($ip)) {
    respond(429, ['ok' => false, 'error' => 'Please wait a while before sending another enquiry.']);
}

$name = clean_header(field($decoded, 'name'), 100);
$organisation = clean_header(field($decoded, 'organisation'), 120);
$role = clean_header(field($decoded, 'role'), 80);
$email = clean_header(field($decoded, 'email'), 254);
$phone = clean_phone(field($decoded, 'phone'));
$category = clean_header(field($decoded, 'category'), 40);
$message = clean_message(field($decoded, 'message'), 2000);

if ($name === '' || $email === '' || $message === '') {
    respond(400, ['ok' => false, 'error' => 'Please check the form and try again.']);
}

if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    respond(400, ['ok' => false, 'error' => 'Please check the form and try again.']);
}

if (!in_array($category, ALLOWED_CATEGORIES, true)) {
    respond(400, ['ok' => false, 'error' => 'Please check the form and try again.']);
}

$replyName = display_name($name);
$subject = 'Website enquiry from setpiecegh.com';
$body = implode("\n", [
    'New website enquiry',
    '',
    'Name: ' . $name,
    'Organisation: ' . ($organisation !== '' ? $organisation : '—'),
    'Role: ' . ($role !== '' ? $role : '—'),
    'Email: ' . $email,
    'Phone: ' . ($phone !== '' ? $phone : '—'),
    'Category: ' . ($category !== '' ? $category : '—'),
    '',
    $message,
]);

$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Set Piece <' . FROM_EMAIL . '>',
    'Reply-To: ' . $replyName . ' <' . $email . '>',
]);

$sent = mail(ADMIN_EMAIL, $subject, $body, $headers);
if ($sent !== true) {
    respond(500, ['ok' => false, 'error' => 'Could not send your enquiry.']);
}

respond(200, ['ok' => true]);

function apply_cors(): bool
{
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if ($origin === '') {
        return true;
    }
    if ($origin !== ALLOWED_ORIGIN) {
        return false;
    }
    header('Access-Control-Allow-Origin: ' . ALLOWED_ORIGIN);
    header('Vary: Origin');
    return true;
}

/**
 * @param array<mixed> $payload
 */
function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

/**
 * @param array<mixed> $data
 */
function field(array $data, string $key): string
{
    if (!array_key_exists($key, $data) || !is_string($data[$key])) {
        return '';
    }
    return $data[$key];
}

function clean_header(string $value, int $max): string
{
    $value = str_replace(["\r", "\n", "\0", '%0a', '%0d', '%0A', '%0D'], '', $value);
    $value = trim($value);
    return limit_text($value, $max);
}

function clean_message(string $value, int $max): string
{
    $value = str_replace(["\0", "\r"], '', $value);
    $value = trim($value);
    if (text_length($value) > $max) {
        return '';
    }
    return $value;
}

function clean_phone(string $value): string
{
    $value = clean_header($value, 30);
    if ($value === '') {
        return '';
    }
    $plus = str_starts_with($value, '+');
    $digits = preg_replace('/\D+/', '', $value);
    if (!is_string($digits) || $digits === '') {
        return '';
    }
    return limit_text(($plus ? '+' : '') . $digits, 20);
}

function display_name(string $name): string
{
    $stripped = preg_replace("/[^\p{L}\p{N} .'-]/u", '', $name);
    $stripped = is_string($stripped) ? trim($stripped) : '';
    return $stripped !== '' ? $stripped : 'Website enquiry';
}

function text_length(string $value): int
{
    if (function_exists('mb_strlen')) {
        return mb_strlen($value, 'UTF-8');
    }
    return strlen($value);
}

function limit_text(string $value, int $max): string
{
    if (text_length($value) <= $max) {
        return $value;
    }
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $max, 'UTF-8');
    }
    return substr($value, 0, $max);
}

function is_rate_limited(string $ip): bool
{
    $dir = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'setpiece-contact';
    if (!is_dir($dir) && !mkdir($dir, 0700, true) && !is_dir($dir)) {
        return false;
    }

    $path = $dir . DIRECTORY_SEPARATOR . hash('sha256', $ip) . '.json';
    $handle = fopen($path, 'c+');
    if ($handle === false) {
        return false;
    }
    if (!flock($handle, LOCK_EX)) {
        fclose($handle);
        return false;
    }

    $now = time();
    $raw = stream_get_contents($handle);
    $hits = [];
    if (is_string($raw) && $raw !== '') {
        $decoded = json_decode($raw, true);
        if (is_array($decoded)) {
            foreach ($decoded as $stamp) {
                if (is_int($stamp) && $stamp > $now - RATE_WINDOW_SECONDS) {
                    $hits[] = $stamp;
                }
            }
        }
    }

    $blocked = count($hits) >= RATE_LIMIT;
    if (!$blocked) {
        $hits[] = $now;
    }

    rewind($handle);
    ftruncate($handle, 0);
    fwrite($handle, json_encode($hits) ?: '[]');
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);

    return $blocked;
}
