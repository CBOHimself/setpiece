import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, AtSign, MessageCircle } from 'lucide-react'
import { formatAddress, siteConfig } from '@/config/site'
import { Logo } from '@/components/layout/Logo'
import { Container } from '@/components/ui/Container'

export function Footer() {
  return (
    <footer className="px-4 pt-12 pb-4 sm:px-6">
      <div className="bg-sp-navy mx-auto max-w-[1344px] rounded-sp-panel text-white">
        <Container className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.8fr_1fr]">
          <div>
            <Logo
              alt="Setpiece"
              src="/images/setpiece-logo-white-mono.png"
              className="h-8 sm:h-9"
            />
            <p className="text-sp-cyan mt-5 text-lg">
              Your Healthcare Partner
            </p>
            <p className="mt-4 max-w-xs text-[16px] text-white/75">
              Compassionate, practical support for people and the teams who care
              for them.
            </p>
          </div>
          <div>
            <h2 className="text-lg text-white">Explore</h2>
            <ul className="mt-4 space-y-3 text-[16px] text-white/75">
              <li>
                <Link to="/products">Care Areas</Link>
              </li>
              <li>
                <Link to="/about">About Setpiece</Link>
              </li>
              <li>
                <Link to="/faq">Frequently asked questions</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg text-white">Get in touch</h2>
            <ul className="mt-4 space-y-3 text-[16px] text-white/75">
              <li className="flex gap-2">
                <Mail className="text-sp-cyan mt-1 size-4 shrink-0" />
                <a
                  className="break-all underline-offset-2 hover:underline"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-2">
                <Phone className="text-sp-cyan mt-1 size-4 shrink-0" />
                <a
                  className="underline-offset-2 hover:underline"
                  href={`tel:${siteConfig.phoneTel}`}
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin className="text-sp-cyan mt-1 size-4 shrink-0" />
                {formatAddress()}
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg text-white">Stay connected</h2>
            <div className="mt-4 flex gap-3">
              <a
                className="flex size-11 items-center justify-center rounded-full bg-white/10"
                href={`mailto:${siteConfig.email}`}
                aria-label="Email us"
              >
                <AtSign className="size-5" />
              </a>
              <a
                className="flex size-11 items-center justify-center rounded-full bg-white/10"
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message us on WhatsApp"
              >
                <MessageCircle className="size-5" />
              </a>
            </div>
            <p className="mt-8 text-[15px] text-white/65">
              Authorised distributor of Coloplast
            </p>
          </div>
        </Container>
        <div className="border-t border-white/15">
          <Container className="py-4 text-[14px] text-white/60">
            © {new Date().getFullYear()} Setpiece. All rights reserved.
          </Container>
        </div>
      </div>
    </footer>
  )
}
