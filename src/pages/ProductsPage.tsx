import { useEffect } from 'react'
import { ExternalLink } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { categories, productsByCategory } from '@/data/products'
import { ProductCard } from '@/components/products/ProductCard'
import { Seo } from '@/components/seo/Seo'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export function ProductsPage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash])

  return (
    <>
      {/* TODO(content): replace the products page introduction */}
      <Seo
        title="Products | Set Piece"
        description="Ostomy, continence, wound care, and urology listings from Set Piece. Contact us for pricing and availability."
        path="/products"
      />
      <Section
        headingLevel="h1"
        eyebrow="Catalogue"
        title="Products"
        intro="Listings are grouped by category. Contact us for pricing and availability."
      >
        <nav aria-label="Product categories" className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className="border-brand-200 bg-surface text-brand-800 hover:border-brand-400 rounded-full border px-4 py-2 text-sm font-medium"
            >
              {category.name}
            </a>
          ))}
        </nav>
      </Section>

      {categories.map((category) => (
        <section
          key={category.slug}
          id={category.slug}
          aria-labelledby={`${category.slug}-title`}
          className="scroll-mt-24 pb-16"
        >
          <Container>
            <h2
              id={`${category.slug}-title`}
              className="text-brand-800 text-2xl font-semibold"
            >
              {category.name}
            </h2>
            <p className="text-muted mt-2 max-w-2xl">
              {category.shortDescription}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {productsByCategory(category.slug).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section className="bg-surface border-t border-neutral-200">
        <Container className="py-12">
          <p className="text-muted">Contact us for pricing and availability.</p>
          <p className="mt-3">
            <a
              href="https://docshub.coloplast.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-800 inline-flex items-center gap-2 font-medium underline-offset-2 hover:underline"
            >
              Coloplast product documentation
              <ExternalLink aria-hidden="true" className="size-4" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </p>
        </Container>
      </section>
    </>
  )
}
