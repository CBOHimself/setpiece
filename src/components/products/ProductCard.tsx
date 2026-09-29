import { Button } from '@/components/ui/Button'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import type { Product } from '@/types'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-surface flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200">
      <PlaceholderImage
        src={product.image}
        alt={product.imageAlt}
        width={800}
        height={600}
        className="aspect-[4/3] w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-brand-800 text-lg font-semibold">{product.name}</h3>
        <p className="text-muted mt-2 text-sm">{product.shortDescription}</p>
        {product.sizes && product.sizes.length > 0 ? (
          <p className="mt-3 text-sm text-neutral-700">
            Options: {product.sizes.join(', ')}
          </p>
        ) : null}
        <div className="mt-5">
          <Button
            to={`/contact?product=${product.slug}`}
            variant="secondary"
            size="sm"
          >
            Enquire
          </Button>
        </div>
      </div>
    </article>
  )
}
