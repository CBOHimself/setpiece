export const productCategorySlugs = [
  'ostomy',
  'continence',
  'wound-care',
  'urology',
] as const

export type ProductCategorySlug = (typeof productCategorySlugs)[number]

export type IconName =
  | 'CircleDot'
  | 'Droplets'
  | 'Bandage'
  | 'Stethoscope'
  | 'ShieldCheck'
  | 'Package'
  | 'Truck'
  | 'HeartHandshake'

export type ProductCategory = {
  slug: ProductCategorySlug
  name: string
  shortDescription: string
  icon: IconName
}

export type Product = {
  id: string
  slug: string
  name: string
  category: ProductCategorySlug
  shortDescription: string
  image: string
  imageAlt: string
  sizes?: readonly string[]
}

export type Faq = {
  id: string
  group: string
  question: string
  answer: string
}

export type NavLink = {
  to: string
  label: string
}

export type SocialLinks = {
  facebook?: string
  instagram?: string
  linkedin?: string
  x?: string
}

export type SiteAddress = {
  street: string
  city: string
  region: string
  country: string
}

export type SiteConfig = {
  name: string
  url: string
  tagline: string
  description: string
  email: string
  phoneDisplay: string
  phoneTel: string
  whatsapp: string
  address: SiteAddress
  hoursDisplay: string
  hoursSchema: string
  socials: SocialLinks
}

export type ContactCategory = ProductCategorySlug | 'other' | ''

export type ContactFormValues = {
  name: string
  organisation: string
  role: string
  email: string
  phone: string
  category: ContactCategory
  message: string
  companyWebsite: string
}
