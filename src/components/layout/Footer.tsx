import { Link } from 'react-router-dom'
import { formatAddress, getSocialLinks, siteConfig } from '@/config/site'
import { navLinks } from '@/data/nav'
import { Logo } from '@/components/layout/Logo'
import { Container } from '@/components/ui/Container'

const year = new Date().getFullYear()

export function Footer() {
  const socials = getSocialLinks()

  return (
    <footer className="bg-brand-900 text-brand-50">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Logo className="h-9 rounded-md bg-white px-2 py-1 sm:h-10" />
          <p className="text-brand-100 mt-3 max-w-sm text-sm">
            {siteConfig.tagline}
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase">
            Contact
          </h2>
          <ul className="text-brand-100 mt-3 space-y-2 text-sm">
            <li>
              <a
                className="break-all underline-offset-2 hover:underline"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                className="underline-offset-2 hover:underline"
                href={`tel:${siteConfig.phoneTel}`}
              >
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>{formatAddress()}</li>
            <li>{siteConfig.hoursDisplay}</li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase">
            Quick links
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  className="text-brand-100 underline-offset-2 hover:underline"
                  to={link.to}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {socials.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    className="text-brand-100 underline-offset-2 hover:underline"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="text-brand-200 py-4 text-sm">
          © {year} {siteConfig.name}. All rights reserved.
        </Container>
      </div>
    </footer>
  )
}
