import type { Product, ProductCategory } from '@/types'

// TODO(content): replace names, descriptions, sizes, image paths, and alt text
// with the approved Coloplast catalogue. Home shows the first six products.
// Expected photo: /images/products/<slug>.webp at 800×600.

const placeholderImage = '/images/placeholder-product.svg'

export const categories: readonly ProductCategory[] = [
  {
    slug: 'ostomy',
    name: 'Ostomy',
    shortDescription:
      'Pouching systems and supporting products for ostomy care.',
    icon: 'CircleDot',
  },
  {
    slug: 'continence',
    name: 'Continence (Bladder & Bowel)',
    shortDescription: 'Products for bladder and bowel management.',
    icon: 'Droplets',
  },
  {
    slug: 'wound-care',
    name: 'Wound Care',
    shortDescription: 'Dressings and skin-protection products for wound care.',
    icon: 'Bandage',
  },
  {
    slug: 'urology',
    name: 'Urology',
    shortDescription: 'Catheters and drainage products for urology.',
    icon: 'Stethoscope',
  },
]

export const products: readonly Product[] = [
  {
    id: 'ostomy-one-piece',
    slug: 'one-piece-ostomy-pouch',
    name: 'One-piece ostomy pouch',
    category: 'ostomy',
    shortDescription: 'A sample listing for a one-piece pouching system.',
    image: placeholderImage,
    imageAlt: 'Placeholder image for a one-piece ostomy pouch',
    sizes: ['Cut-to-fit'],
  },
  {
    id: 'continence-catheter',
    slug: 'intermittent-catheter',
    name: 'Intermittent catheter',
    category: 'continence',
    shortDescription: 'A sample listing for an intermittent catheter range.',
    image: placeholderImage,
    imageAlt: 'Placeholder image for an intermittent catheter',
  },
  {
    id: 'wound-foam',
    slug: 'foam-wound-dressing',
    name: 'Foam wound dressing',
    category: 'wound-care',
    shortDescription: 'A sample listing for a foam dressing range.',
    image: placeholderImage,
    imageAlt: 'Placeholder image for a foam wound dressing',
    sizes: ['10 × 10 cm', '15 × 15 cm'],
  },
  {
    id: 'urology-catheter',
    slug: 'urethral-catheter',
    name: 'Urethral catheter',
    category: 'urology',
    shortDescription: 'A sample listing for a urethral catheter range.',
    image: placeholderImage,
    imageAlt: 'Placeholder image for a urethral catheter',
  },
  {
    id: 'ostomy-two-piece',
    slug: 'two-piece-ostomy-barrier',
    name: 'Two-piece ostomy barrier',
    category: 'ostomy',
    shortDescription: 'A sample listing for a two-piece barrier and pouch.',
    image: placeholderImage,
    imageAlt: 'Placeholder image for a two-piece ostomy barrier',
  },
  {
    id: 'continence-leg-bag',
    slug: 'urine-leg-bag',
    name: 'Urine leg bag',
    category: 'continence',
    shortDescription: 'A sample listing for a urine leg bag.',
    image: placeholderImage,
    imageAlt: 'Placeholder image for a urine leg bag',
    sizes: ['500 ml', '750 ml'],
  },
  {
    id: 'wound-alginate',
    slug: 'alginate-wound-dressing',
    name: 'Alginate wound dressing',
    category: 'wound-care',
    shortDescription: 'A sample listing for an alginate dressing.',
    image: placeholderImage,
    imageAlt: 'Placeholder image for an alginate wound dressing',
  },
  {
    id: 'urology-drainage',
    slug: 'urine-drainage-bag',
    name: 'Urine drainage bag',
    category: 'urology',
    shortDescription: 'A sample listing for a bedside drainage bag.',
    image: placeholderImage,
    imageAlt: 'Placeholder image for a urine drainage bag',
  },
  {
    id: 'ostomy-accessories',
    slug: 'ostomy-accessory-pack',
    name: 'Ostomy accessory pack',
    category: 'ostomy',
    shortDescription: 'A sample listing for ostomy accessories.',
    image: placeholderImage,
    imageAlt: 'Placeholder image for an ostomy accessory pack',
  },
  {
    id: 'continence-irrigation',
    slug: 'anal-irrigation-system',
    name: 'Anal irrigation system',
    category: 'continence',
    shortDescription: 'A sample listing for bowel irrigation products.',
    image: placeholderImage,
    imageAlt: 'Placeholder image for an anal irrigation system',
  },
  {
    id: 'wound-barrier',
    slug: 'skin-barrier-film',
    name: 'Skin barrier film',
    category: 'wound-care',
    shortDescription: 'A sample listing for a skin barrier film.',
    image: placeholderImage,
    imageAlt: 'Placeholder image for a skin barrier film',
  },
  {
    id: 'urology-insertion',
    slug: 'catheter-insertion-pack',
    name: 'Catheter insertion pack',
    category: 'urology',
    shortDescription: 'A sample listing for a catheter insertion pack.',
    image: placeholderImage,
    imageAlt: 'Placeholder image for a catheter insertion pack',
  },
]

export function productsByCategory(slug: Product['category']): Product[] {
  return products.filter((product) => product.category === slug)
}
