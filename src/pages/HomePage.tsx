import { categories, products } from '@/data/products'
import { trustPoints } from '@/data/trust'
import { siteConfig } from '@/config/site'
import { CategoryTile } from '@/components/products/CategoryTile'
import { ProductCard } from '@/components/products/ProductCard'
import { LocalBusinessJsonLd } from '@/components/seo/LocalBusinessJsonLd'
import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { icons } from '@/lib/icons'

const featured = products.slice(0, 6)

export function HomePage() {
  return (
    <>
      <Seo
        title="Set Piece | Wholesale Coloplast products in Ghana"
        description={siteConfig.description}
        path="/"
      />
      <LocalBusinessJsonLd />

      <section className="bg-surface">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-accent-700 text-sm font-semibold tracking-wide uppercase">
              Wholesale medical supplies
            </p>
            {/* TODO(content): replace the hero headline and subheading */}
            <h1 className="text-brand-800 mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              {siteConfig.tagline}
            </h1>
            <p className="text-muted mt-4 max-w-xl text-lg text-pretty">
              Ostomy, continence, wound care, and urology products for clinics,
              pharmacies, and distributors. Ask us for pricing and availability.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/products" size="lg">
                View Products
              </Button>
              <Button to="/contact" variant="secondary" size="lg">
                Request a Quote
              </Button>
            </div>
          </div>
          <div className="bg-brand-800 text-brand-50 rounded-lg p-8">
            <p className="text-accent-500 text-sm font-semibold tracking-wide uppercase">
              Ranges we supply
            </p>
            <ul className="mt-4 space-y-3">
              {categories.map((category) => (
                <li
                  key={category.slug}
                  className="border-b border-white/15 pb-3 last:border-b-0 last:pb-0"
                >
                  <p className="font-medium text-white">{category.name}</p>
                  <p className="text-brand-100 text-sm">
                    {category.shortDescription}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <Section
        eyebrow="Catalogue"
        title="Product categories"
        intro="Four ranges for professional buyers. Open a category to see the current listings."
      >
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryTile key={category.slug} category={category} />
            ))}
          </div>
        </Reveal>
      </Section>

      <Section
        tone="muted"
        eyebrow="Sample listings"
        title="Featured products"
        intro="These six listings are the first entries in the product data file. Pricing is confirmed by quote."
      >
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Reveal>
      </Section>

      <Section
        eyebrow="Working with us"
        title="Why Set Piece"
        intro="Short notes for the homepage. Replace them when the approved story is ready."
      >
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point) => {
              const Icon = icons[point.icon]
              return (
                <article
                  key={point.title}
                  className="bg-surface rounded-lg border border-neutral-200 p-6"
                >
                  <Icon aria-hidden="true" className="text-accent-700 size-6" />
                  <h3 className="text-brand-800 mt-4 text-lg font-semibold">
                    {point.title}
                  </h3>
                  <p className="text-muted mt-2 text-sm">{point.body}</p>
                </article>
              )
            })}
          </div>
        </Reveal>
      </Section>

      <section className="bg-brand-50" aria-labelledby="stock-heading">
        <Container className="grid items-center gap-8 py-16 lg:grid-cols-2">
          <PlaceholderImage
            src="/images/placeholder-warehouse.svg"
            alt="Placeholder image of a wholesale stock area"
            width={1600}
            height={700}
            className="w-full rounded-lg"
          />
          <div>
            {/* TODO(content): replace the stock band copy and photograph */}
            <h2
              id="stock-heading"
              className="text-brand-800 text-3xl font-semibold tracking-tight"
            >
              Stock ready for wholesale orders
            </h2>
            <p className="text-muted mt-4">
              A photograph of the warehouse will sit here. Until then, this band
              holds the space and a short note about how orders are prepared.
            </p>
          </div>
        </Container>
      </section>

      <Section
        tone="inverse"
        title="Request a wholesale quote"
        intro="Tell us the products and quantities you need. We will reply with pricing and availability."
      >
        <div className="flex flex-wrap gap-3">
          <Button to="/contact" size="lg">
            Request a Quote
          </Button>
          <Button
            to="/products"
            variant="secondary"
            size="lg"
            className="border-white bg-transparent text-white hover:bg-white/10"
          >
            View Products
          </Button>
        </div>
      </Section>
    </>
  )
}
