import { getSocialLinks } from '@/config/site'

export function SocialLinks() {
  const socials = getSocialLinks()
  if (socials.length === 0) return null

  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-2">
      {socials.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-800 text-sm font-medium underline-offset-2 hover:underline"
          >
            {social.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
