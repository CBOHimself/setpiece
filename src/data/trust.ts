import type { IconName } from '@/types'

// TODO(content): replace these proof points with claims that have been approved.

export const trustPoints: readonly {
  title: string
  body: string
  icon: IconName
}[] = [
  {
    icon: 'ShieldCheck',
    title: 'Wholesale supply',
    body: 'Orders are prepared for clinics, pharmacies, hospitals, and distributors rather than individual retail checkout.',
  },
  {
    icon: 'Package',
    title: 'Quote-based pricing',
    body: 'Pricing and availability are confirmed when you enquire, so the catalogue does not show a public price list.',
  },
  {
    icon: 'Truck',
    title: 'Delivery in Ghana',
    body: 'Delivery areas and timing will be confirmed in the final copy. Ask the team what applies to your location.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Support for institutions',
    body: 'Professional buyers can ask for product information, samples, or a demonstration when they get in touch.',
  },
]
