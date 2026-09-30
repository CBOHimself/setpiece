import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type CardProps = {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-sp-card border border-sp-border bg-white p-6',
        className,
      )}
    >
      {children}
    </div>
  )
}
