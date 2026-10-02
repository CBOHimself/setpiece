import { cn } from '@/lib/cn'

type LogoProps = {
  className?: string
  alt?: string
  src?: string
  width?: number
  height?: number
}

export function Logo({
  className,
  alt = 'Set Piece',
  src = '/images/setpiece-logo-no-bg.png',
  width = 1197,
  height = 291,
}: LogoProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn('h-8 w-auto sm:h-10', className)}
    />
  )
}
