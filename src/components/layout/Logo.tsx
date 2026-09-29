import { cn } from '@/lib/cn'

type LogoProps = {
  className?: string
  alt?: string
}

export function Logo({ className, alt = 'Set Piece' }: LogoProps) {
  return (
    <img
      src="/images/setpiece-logo.png"
      alt={alt}
      width={1197}
      height={291}
      className={cn('h-8 w-auto sm:h-10', className)}
    />
  )
}
