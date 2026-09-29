import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { formatAddress, siteConfig } from '@/config/site'
import { products } from '@/data/products'
import { ContactForm } from '@/components/contact/ContactForm'
import { SocialLinks } from '@/components/contact/SocialLinks'
import { WhatsAppButton } from '@/components/contact/WhatsAppButton'
import { Seo } from '@/components/seo/Seo'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export function ContactPage() {
  const [searchParams] = useSearchParams()
  const productSlug = searchParams.get('product') ?? ''
  const product = products.find((item) => item.slug === productSlug)

  return (
    <>
      {/* TODO(content): replace the contact introduction */}
      <Seo
        title="Contact | Set Piece"
        description="Request a quote from Set Piece or reach the team by email, phone, or WhatsApp."
        path="/contact"
      />
      <Section
        headingLevel="h1"
        eyebrow="Contact"
        title="Contact us"
        intro="Send an enquiry for pricing and availability. A person on the team will reply."
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
          <Card>
            {product ? (
              <p className="text-muted mb-5 text-sm">
                Enquiring about{' '}
                <span className="text-brand-800 font-medium">
                  {product.name}
                </span>
                .
              </p>
            ) : null}
            <ContactForm
              key={product?.slug ?? 'general'}
              initialCategory={product?.category ?? ''}
              initialMessage={
                product ? `I would like a quote for ${product.name}.` : ''
              }
            />
          </Card>
          <aside className="space-y-6">
            <Card>
              <h2 className="text-brand-800 text-lg font-semibold">
                Contact details
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex gap-3">
                  <Mail
                    aria-hidden="true"
                    className="text-accent-700 mt-0.5 size-4 shrink-0"
                  />
                  <a
                    className="text-brand-800 break-all underline"
                    href={`mailto:${siteConfig.email}`}
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone
                    aria-hidden="true"
                    className="text-accent-700 mt-0.5 size-4 shrink-0"
                  />
                  <a
                    className="text-brand-800 underline"
                    href={`tel:${siteConfig.phoneTel}`}
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin
                    aria-hidden="true"
                    className="text-accent-700 mt-0.5 size-4 shrink-0"
                  />
                  <span>{formatAddress()}</span>
                </li>
                <li className="flex gap-3">
                  <Clock
                    aria-hidden="true"
                    className="text-accent-700 mt-0.5 size-4 shrink-0"
                  />
                  <span>{siteConfig.hoursDisplay}</span>
                </li>
              </ul>
              <div className="mt-5">
                <WhatsAppButton />
              </div>
            </Card>
            <Card>
              <h2 className="text-brand-800 text-lg font-semibold">Social</h2>
              <div className="mt-3">
                <SocialLinks />
              </div>
            </Card>
          </aside>
        </div>
      </Section>

      <section className="pb-16" aria-labelledby="map-heading">
        <Container>
          <h2
            id="map-heading"
            className="text-brand-800 text-2xl font-semibold"
          >
            Location
          </h2>
          <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100">
            {/* TODO: embed the warehouse map iframe once the address is confirmed.
                <iframe
                  title="Set Piece location"
                  src=""
                  className="h-72 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
            */}
            <p className="text-muted px-6 py-16 text-center text-sm">
              Map embed will appear here.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
