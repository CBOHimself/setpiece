import type { SiteAddress, SiteConfig } from '@/types'

// TODO(content): replace every value below with the confirmed company details.

export const siteConfig = {
  name: 'Set Piece',
  url: 'https://www.setpiecegh.com',
  tagline: 'Wholesale Coloplast products for healthcare providers in Ghana',
  description:
    'Set Piece is a Ghana-based wholesale supplier of Coloplast ostomy, continence, wound care, and urology products.',
  email: 'hello@setpiecegh.com',
  phoneDisplay: '+233 00 000 0000',
  phoneTel: '+233000000000',
  whatsapp: '233000000000',
  address: {
    street: 'Street address to be confirmed',
    city: 'Accra',
    region: 'Greater Accra',
    country: 'Ghana',
  },
  hoursDisplay: 'Monday to Friday, 8:00–17:00 GMT',
  hoursSchema: 'Mo-Fr 08:00-17:00',
  socials: {
    facebook: 'https://facebook.com/setpiecegh',
    instagram: 'https://instagram.com/setpiecegh',
    linkedin: 'https://linkedin.com/company/setpiecegh',
    x: 'https://x.com/setpiecegh',
  },
} as const satisfies SiteConfig

export function formatAddress(
  address: SiteAddress = siteConfig.address,
): string {
  return [address.street, address.city, address.region, address.country].join(
    ', ',
  )
}

export function whatsappHref(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export function getSocialLinks(): { label: string; href: string }[] {
  const entries: [string, string | undefined][] = [
    ['Facebook', siteConfig.socials.facebook],
    ['Instagram', siteConfig.socials.instagram],
    ['LinkedIn', siteConfig.socials.linkedin],
    ['X', siteConfig.socials.x],
  ]
  return entries.flatMap(([label, href]) => (href ? [{ label, href }] : []))
}
