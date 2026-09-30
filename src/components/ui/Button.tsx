import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'primary-on-dark' | 'secondary' | 'ghost'
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
  primary: 'bg-sp-blue text-white hover:bg-sp-navy',
  'primary-on-dark': 'bg-sp-cyan text-sp-navy hover:bg-sp-cyan',
  secondary: 'border border-sp-navy bg-white text-sp-navy hover:bg-sp-tint',
  ghost: 'text-sp-blue hover:bg-sp-tint',
}
const sizes: Record<Size, string> = {
  sm: 'min-h-12 px-5 text-[16px]',
  md: 'min-h-12 px-6 text-[17px]',
  lg: 'min-h-13 px-7 text-[17px]',
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
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-full font-bold whitespace-nowrap transition-colors disabled:opacity-60',
    variants[variant],
    sizes[size],
    className,
  )
  return to ? (
    <Link to={to} className={classes}>
      {children}
    </Link>
  ) : (
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
