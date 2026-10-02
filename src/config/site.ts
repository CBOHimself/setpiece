import type { SiteAddress, SiteConfig } from '@/types'

export const siteConfig = {
  name: 'Set Piece',
  url: 'https://www.setpiecegh.com',
  tagline: 'Wholesale Coloplast products for healthcare providers in Ghana',
  description:
    'Set Piece is a Ghana-based wholesale supplier of Coloplast ostomy, continence, wound care, and urology products.',
  email: 'admin@setpiecegh.com',
  phoneDisplay: '+233 534 727 954',
  phoneTel: '+233534727954',
  whatsapp: '233534727954',
  address: {
    street: 'Jupiter House, Abofu 1st Junction',
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
  return `${address.street}. ${address.city}, ${address.country}`
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
