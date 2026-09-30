import { Link } from 'react-router-dom'
import { icons } from '@/lib/icons'
import type { ProductCategory } from '@/types'

type CategoryTileProps = {
  category: ProductCategory
}

export function CategoryTile({ category }: CategoryTileProps) {
  const Icon = icons[category.icon]

  return (
    <Link
      to={`/products#${category.slug}`}
      className="flex h-full min-h-64 flex-col rounded-sp-card border border-sp-border bg-white p-6 transition-transform hover:-translate-y-1 hover:border-sp-teal"
    >
      <span className="flex size-12 items-center justify-center rounded-full bg-sp-tint"><Icon aria-hidden="true" className="text-sp-teal size-6" /></span>
      <h3 className="text-sp-navy mt-4 text-lg font-semibold">
        {category.name}
      </h3>
      <p className="text-muted mt-2 flex-1 text-sm">
        {category.shortDescription}
      </p>
      <span className="text-sp-blue mt-4 text-sm font-medium">
        View products
      </span>
    </Link>
  )
}
