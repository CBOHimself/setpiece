import { useState } from 'react'
import { cn } from '@/lib/cn'

type PlaceholderImageProps = {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function PlaceholderImage({
  src,
  alt,
  width,
  height,
  className,
}: PlaceholderImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn('bg-brand-100', className)}
      >
        <svg aria-hidden="true" viewBox="0 0 800 600" className="h-auto w-full">
          <rect width="800" height="600" fill="#E3EEF1" />
          <rect x="70" y="70" width="660" height="460" rx="20" fill="#0F3D5E" />
          <circle cx="400" cy="270" r="72" fill="#C45C38" />
        </svg>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className={cn('h-auto max-w-full', className)}
      onError={() => setFailed(true)}
    />
  )
}
