import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { formatAddress, siteConfig } from '@/config/site'
import { products } from '@/data/products'
import { ContactForm } from '@/components/contact/ContactForm'
import { Seo } from '@/components/seo/Seo'
import { Container } from '@/components/ui/Container'

function Bars() {
  return (
    <div className="four-bars">
      <span className="bg-brand-800" />
      <span className="bg-brand-500" />
      <span className="bg-accent-600" />
      <span className="bg-accent-500" />
    </div>
  )
}

export function ContactPage() {
  const [params] = useSearchParams()
  const product = products.find((p) => p.slug === params.get('product'))
  return (
    <>
      <Seo
        title="Contact | Setpiece"
        description="Contact Setpiece."
        path="/contact"
      />
      <section className="py-14">
        <Container>
          <p className="eyebrow">Contact</p>
          <h1 className="section-title mt-4 text-4xl lg:text-[56px]">
            Let’s talk about care.
          </h1>
          <p className="text-muted mt-5 max-w-2xl text-lg">
            Tell us what you need and a person from our team will reply.
          </p>
          <Bars />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
            <div className="border-brand-100 rounded-[28px] border bg-white p-6 lg:p-9">
              {product && (
                <p className="bg-brand-50 text-muted mb-5 rounded-full px-4 py-2 text-[16px]">
                  Enquiring about{' '}
                  <strong className="text-brand-800">{product.name}</strong>
                </p>
              )}
              <ContactForm
                key={product?.slug ?? 'general'}
                initialCategory={product?.category ?? ''}
                initialMessage={
                  product ? `I would like a quote for ${product.name}.` : ''
                }
              />
            </div>
            <aside className="bg-brand-800 rounded-[28px] p-8 text-white">
              <p className="eyebrow text-sp-teal">
                Contact details
              </p>
              <h2 className="mt-5 text-3xl text-white">
                Here when you need us.
              </h2>
              <ul className="mt-8 space-y-5 text-[17px] text-white/80">
                <li className="flex gap-3">
                  <Phone className="text-accent-500 mt-1 size-5" />
                  <a href={`tel:${siteConfig.phoneTel}`}>
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="text-accent-500 mt-1 size-5" />
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="text-accent-500 mt-1 size-5" />
                  {formatAddress()}
                </li>
                <li className="flex gap-3">
                  <Clock className="text-accent-500 mt-1 size-5" />
                  {siteConfig.hoursDisplay}
                </li>
              </ul>
            </aside>
          </div>
        </Container>
      </section>
      <section className="pb-12">
        <Container>
          <div className="bg-brand-50 min-h-72 overflow-hidden rounded-[28px] p-8">
            <div className="border-brand-100 flex h-full min-h-56 items-center justify-center rounded-[22px] border bg-white text-center">
              <div>
                <MapPin className="text-accent-600 mx-auto size-8" />
                <p className="text-brand-800 mt-3 text-lg font-bold">
                  Setpiece, Accra
                </p>
                <p className="text-muted mt-1 text-[16px]">{formatAddress()}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
