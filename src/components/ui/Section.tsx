import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/cn'

type SectionProps = {
  id?: string
  eyebrow?: string
  title?: string
  intro?: string
  children?: ReactNode
  className?: string
  tone?: 'default' | 'muted' | 'inverse'
  headingLevel?: 'h1' | 'h2'
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
  tone = 'default',
  headingLevel = 'h2',
}: SectionProps) {
  const Heading = headingLevel
  const inverse = tone === 'inverse'

  return (
    <section
      id={id}
      className={cn(
        'py-16 sm:py-20',
        tone === 'muted' && 'bg-brand-50',
        inverse && 'bg-brand-800 text-white',
        className,
      )}
    >
      <Container>
        {eyebrow ? (
          <p
            className={cn(
              'text-sm font-semibold tracking-wide uppercase',
              inverse ? 'text-accent-500' : 'text-accent-700',
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <Heading
            className={cn(
              'text-3xl font-semibold tracking-tight text-balance sm:text-4xl',
              eyebrow && 'mt-2',
              inverse ? 'text-white' : 'text-brand-800',
            )}
          >
            {title}
          </Heading>
        ) : null}
        {intro ? (
          <p
            className={cn(
              'mt-4 max-w-2xl text-pretty',
              inverse ? 'text-brand-100' : 'text-muted',
            )}
          >
            {intro}
          </p>
        ) : null}
        {children ? (
          <div className={title || intro || eyebrow ? 'mt-10' : undefined}>
            {children}
          </div>
        ) : null}
      </Container>
    </section>
  )
}
