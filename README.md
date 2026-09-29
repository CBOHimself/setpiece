# Set Piece

Static marketing site for [Set Piece](https://www.setpiecegh.com), a Ghana-based wholesale supplier of Coloplast ostomy, continence, wound care, and urology products. The production build is a set of files for Namecheap shared hosting. There is no Node server in production.

Body copy, contact details, and the product catalogue are placeholders. Search the repo for `TODO(content)` before launch.

## Setup

Requires Node.js and npm.

```bash
npm install
npm run dev
```

The dev server mocks `POST /api/contact.php` and returns `{ "ok": true }` for a valid enquiry. Apache runs `public/api/contact.php` after deploy.

## Scripts

| Script              | Purpose                                  |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Start the Vite dev server                |
| `npm run build`     | Typecheck and build `dist/`              |
| `npm run preview`   | Serve the production build locally       |
| `npm run lint`      | ESLint, zero warnings                    |
| `npm run format`    | Prettier, including Tailwind class order |
| `npm run test`      | Vitest smoke tests                       |
| `npm run typecheck` | `tsc -b`                                 |

## Folder map

```
src/config/site.ts          Company details
src/data/products.ts        Categories and products
src/data/faqs.ts            FAQ entries
src/data/nav.ts             Primary navigation
src/data/trust.ts           Homepage proof points
src/components/             Layout, UI, form, product cards
src/pages/                  One file per route
public/api/contact.php      Production form handler
public/.htaccess            HTTPS, SPA fallback, cache, gzip, maintenance switch
public/maintenance.html     Standalone downtime page
```

Brand colours are the `@theme` tokens in `src/index.css`. Change them there only.

## Add a product

Edit `src/data/products.ts`. Give the item an `id`, `slug`, `name`, `category` (`ostomy`, `continence`, `wound-care`, or `urology`), `shortDescription`, `image`, and `imageAlt`. The home page shows the first six items. The products page groups by category. No component changes are required.

Add an FAQ by appending an object to `src/data/faqs.ts`. Use `group` values of `Ordering` or `Products`, or add a new group name and it will render as its own section.

## Deployment checklist (Namecheap)

1. Run `npm run build`.
2. Upload the **contents** of `dist/` to `public_html` (not the `dist` folder itself).
3. Confirm `.htaccess` and `api/contact.php` uploaded. Hidden files are easy to miss in cPanel.
4. Set `ADMIN_EMAIL` and `FROM_EMAIL` at the top of `api/contact.php`. Both need to be real mailboxes on the domain.
5. Enable SSL for `www.setpiecegh.com` and confirm HTTP redirects to HTTPS.
6. Submit the form from the live site and check the admin inbox, including spam.
7. Check SPF and DKIM for the domain so `mail()` is not spam-filed.
8. Visit `/products`, `/about`, `/faq`, and `/contact` directly, then refresh each one.

To take the site down, uncomment the maintenance block in `public/.htaccess` (or in the uploaded copy) and upload it again. Preview the page at `/maintenance.html` before you switch it on. Comment those lines out when the site should come back.

## Still to supply

Final brand colours, approved copy, real product data and images, the admin inbox, the public phone number, and the WhatsApp number (digits only, country code included). The wordmark in `public/images/setpiece-logo.png` is the official logo.
