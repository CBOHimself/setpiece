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
        'bg-surface rounded-lg border border-neutral-200 p-6',
        className,
      )}
    >
      {children}
    </div>
  )
}
