import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

type SharedProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

type ButtonAsButton = SharedProps & {
  to?: undefined
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
  'aria-busy'?: boolean
}

type ButtonAsLink = SharedProps & {
  to: string
  type?: undefined
  disabled?: undefined
  onClick?: undefined
  'aria-busy'?: undefined
}

const variants: Record<Variant, string> = {
  primary: 'bg-accent-700 text-white hover:bg-accent-800',
  secondary:
    'border border-brand-800 bg-surface text-brand-800 hover:bg-brand-50',
  ghost: 'text-brand-800 hover:bg-brand-50',
}

const sizes: Record<Size, string> = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-5 py-3 text-base',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  to,
  type = 'button',
  disabled,
  onClick,
  'aria-busy': ariaBusy,
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap transition-colors disabled:cursor-not-allowed disabled:opacity-60',
    variants[variant],
    sizes[size],
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-busy={ariaBusy}
    >
      {children}
    </button>
  )
}
