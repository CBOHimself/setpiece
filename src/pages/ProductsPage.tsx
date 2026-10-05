import {
  ExternalLink,
  HeartHandshake,
  Pill,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react'
import { categories, productsByCategory } from '@/data/products'
import { ProductCard } from '@/components/products/ProductCard'
import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

const icons = [Pill, HeartHandshake, ShieldCheck, Stethoscope]

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

export function ProductsPage() {
  return (
    <>
      <Seo
        title="Care Areas | Setpiece"
        description="Care areas and products from Setpiece."
        path="/products"
      />
      <section className="pt-14 pb-9">
        <Container>
          <p className="eyebrow">Care areas</p>
          <h1 className="section-title mt-4 text-4xl lg:text-[56px]">
            Care that stays present.
          </h1>
          <p className="text-muted mt-5 max-w-2xl text-lg">
            Explore specialist products for people managing long-term health
            needs, and the teams who support them.
          </p>
          <Bars />
        </Container>
      </section>
      <section className="border-brand-100 sticky top-20 z-20 border-y bg-white/95 py-4 backdrop-blur">
        <Container>
          <nav
            className="flex gap-2 overflow-x-auto pb-1"
            aria-label="Care area tabs"
          >
            <a
              href="#all"
              className="bg-brand-800 min-h-12 rounded-full px-5 py-3 text-[16px] font-bold whitespace-nowrap text-white"
            >
              All
            </a>
            {categories.map((c) => (
              <a
                key={c.slug}
                href={`#${c.slug}`}
                className="bg-brand-50 text-brand-800 min-h-12 rounded-full px-5 py-3 text-[16px] font-bold whitespace-nowrap"
              >
                {c.name}
              </a>
            ))}
          </nav>
        </Container>
      </section>
      <div id="all">
        {categories.map((c, i) => {
          const Icon = icons[i]
          return (
            <section
              key={c.slug}
              id={c.slug}
              className="scroll-mt-36 py-14 lg:py-20"
            >
              <Container>
                <div className="flex items-start gap-5">
                  <div
                    className={`flex size-15 shrink-0 items-center justify-center rounded-full ${['bg-brand-800 text-white', 'bg-brand-500 text-white', 'bg-accent-600 text-white', 'bg-accent-500 text-brand-800'][i]}`}
                  >
                    <Icon className="size-7" />
                  </div>
                  <div>
                    <p className="eyebrow">{c.name}</p>
                    <h2 className="text-brand-800 mt-3 text-3xl lg:text-[40px]">
                      {c.name}
                    </h2>
                    <p className="text-muted mt-3 max-w-2xl text-lg">
                      {c.shortDescription} Practical choices and respectful
                      support for everyday routines.
                    </p>
                  </div>
                </div>
                <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {productsByCategory(c.slug).map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </Container>
            </section>
          )
        })}
      </div>
      <section className="bg-brand-50 py-14">
        <Container>
          <p className="text-muted text-lg">
            Contact us for pricing and availability.
          </p>
          <a
            href="https://docshub.coloplast.com"
            target="_blank"
            rel="noreferrer"
            className="text-brand-500 mt-4 inline-flex items-center gap-2 text-[17px] font-bold underline"
          >
            Coloplast product documentation <ExternalLink className="size-4" />
          </a>
        </Container>
      </section>
      <section className="px-4 py-12">
        <div className="bg-brand-800 mx-auto flex max-w-[1344px] flex-col justify-between gap-6 rounded-[40px] p-10 text-white md:flex-row md:items-center">
          <h2 className="text-3xl text-white">
            Need help finding the right product?
          </h2>
          <Button
            to="/contact"
            className="bg-accent-500 text-brand-800 hover:bg-accent-500"
          >
            Talk to us
          </Button>
        </div>
      </section>
    </>
  )
}
