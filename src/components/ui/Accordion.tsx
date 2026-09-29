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
  const [openId, setOpenId] = useState<string | null>(null)
  const baseId = useId()

  return (
    <div className="bg-surface divide-y divide-neutral-200 rounded-lg border border-neutral-200">
      {items.map((item) => {
        const open = openId === item.id
        const buttonId = `${baseId}-${item.id}-button`
        const panelId = `${baseId}-${item.id}-panel`
        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className="text-brand-900 flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    'text-brand-700 size-5 shrink-0 motion-safe:transition-transform',
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
              <p className="text-muted px-5 pb-5">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
