import { z } from 'zod'
import { productCategorySlugs, type ContactFormValues } from '@/types'

const categorySchema = z.union([
  z.literal(''),
  z.literal('other'),
  z.enum(productCategorySlugs),
])

export function sanitisePhone(value: string): string {
  const trimmed = value.trim()
  if (!trimmed) return ''
  const leadingPlus = trimmed.startsWith('+')
  const digits = trimmed.replace(/\D/g, '')
  if (!digits) return ''
  return `${leadingPlus ? '+' : ''}${digits}`.slice(0, 20)
}

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Enter your name')
    .max(100, 'Enter a shorter name'),
  organisation: z.string().trim().max(120, 'Enter a shorter organisation name'),
  role: z.string().trim().max(80, 'Enter a shorter role'),
  email: z
    .string()
    .trim()
    .min(1, 'Enter your email')
    .max(254, 'Enter a shorter email')
    .refine(
      (value) => z.email().safeParse(value).success,
      'Enter a valid email',
    ),
  phone: z
    .string()
    .trim()
    .max(30, 'Enter a shorter phone number')
    .transform(sanitisePhone),
  category: categorySchema,
  message: z
    .string()
    .trim()
    .min(1, 'Enter a message')
    .max(2000, 'Message must be 2,000 characters or fewer'),
  companyWebsite: z.string(),
})

type Expect<T extends true> = T
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false

export type ContactFormSchemaMatches = Expect<
  Equal<z.infer<typeof contactSchema>, ContactFormValues>
>
