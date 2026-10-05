import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import type { Product } from '@/types'

const labels = Object.fromEntries(
  categories.map((category) => [category.slug, category.name]),
) as Record<Product['category'], string>
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-sp-card border border-sp-border bg-white">
      <div className="relative aspect-[4/3] overflow-hidden bg-sp-tint">
        <img
          src={product.image}
          alt={product.imageAlt}
          width={800}
          height={600}
          className="absolute inset-0 h-full w-full object-contain p-4"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="w-fit rounded-full bg-sp-cyan px-3 py-1 text-[13px] font-bold text-sp-navy">
          {labels[product.category]}
        </span>
        <h3 className="mt-4 text-xl text-sp-navy">{product.name}</h3>
        <p className="mt-2 flex-1 text-[16px] text-sp-muted">
          {product.shortDescription}
        </p>
        <Link
          to={`/contact?product=${product.slug}`}
          className="mt-5 inline-flex min-h-12 w-fit items-center rounded-full border border-sp-navy px-5 text-[16px] font-bold text-sp-navy hover:bg-sp-tint"
        >
          Enquire
        </Link>
      </div>
    </article>
  )
}
