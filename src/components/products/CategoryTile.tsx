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
      className="bg-surface hover:border-brand-300 flex h-full flex-col rounded-lg border border-neutral-200 p-6"
    >
      <Icon aria-hidden="true" className="text-accent-700 size-6" />
      <h3 className="text-brand-800 mt-4 text-lg font-semibold">
        {category.name}
      </h3>
      <p className="text-muted mt-2 flex-1 text-sm">
        {category.shortDescription}
      </p>
      <span className="text-brand-800 mt-4 text-sm font-medium">
        View products
      </span>
    </Link>
  )
}
