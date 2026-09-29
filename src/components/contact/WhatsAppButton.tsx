import { MessageCircle } from 'lucide-react'
import { whatsappHref } from '@/config/site'
import { cn } from '@/lib/cn'

type WhatsAppButtonProps = {
  message?: string
  className?: string
}

export function WhatsAppButton({
  message = 'Hello Set Piece, I would like to enquire about your products.',
  className,
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'bg-brand-800 hover:bg-brand-900 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-white',
        className,
      )}
    >
      <MessageCircle aria-hidden="true" className="size-4" />
      Chat on WhatsApp
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}
