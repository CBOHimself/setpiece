import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'

type AccordionItem = {
  id: string
  question: string
  answer: string
}

type AccordionProps = {
  items: readonly AccordionItem[]
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)
  const baseId = useId()

  return (
    <div className="divide-sp-border overflow-hidden rounded-sp-card border border-sp-border bg-white">
      {items.map((item) => {
        const open = openId === item.id
        const buttonId = `${baseId}-${item.id}-button`
        const panelId = `${baseId}-${item.id}-panel`
        return (
          <div key={item.id}>
            <h3
              className={
                open
                  ? 'relative before:absolute before:bottom-0 before:left-5 before:h-2 before:w-12 before:rounded-full before:bg-sp-teal'
                  : ''
              }
            >
              <button
                id={buttonId}
                type="button"
                className="flex min-h-16 w-full items-center justify-between gap-4 px-6 py-5 text-left text-[17px] font-bold text-sp-navy"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    'size-9 shrink-0 rounded-full bg-sp-tint p-2 text-sp-navy motion-safe:transition-transform',
                    open && 'rotate-180',
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
            >
              <p className="px-6 pb-7 text-[17px] text-sp-muted">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
