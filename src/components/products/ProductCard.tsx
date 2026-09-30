import { Link } from 'react-router-dom'
import type { Product } from '@/types'

const labels: Record<Product['category'], string> = {
  ostomy: 'Ostomy',
  continence: 'Continence',
  'wound-care': 'Wound and Skin Care',
  urology: 'Urology',
}
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-sp-card border border-sp-border bg-white">
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-sp-tint">
        <div className="absolute -top-4 -right-5 h-24 w-14 rounded-full bg-sp-cyan/25" />
        <div className="h-23 w-17 rounded-[22px] border-2 border-sp-border bg-white p-4 shadow-sm">
          <div className="h-2 w-full rounded-full bg-sp-cyan" />
          <div className="mt-3 h-9 rounded-lg bg-sp-tint" />
        </div>
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
