import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Logo } from '@/components/layout/Logo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

const links = [
  ['/products', 'Care Areas'],
  ['/about', 'About'],
  ['/faq', 'FAQ'],
  ['/contact', 'Contact'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 h-20 border-b border-sp-border bg-white/95 backdrop-blur">
      <Container className="flex h-full items-center">
        <Link to="/" className="mr-auto" aria-label="Setpiece home">
          <Logo alt="Setpiece" className="h-8 sm:h-10" />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map(([to, label]) => (
            <Link
              key={to}
              to={to}
              className="text-sp-navy hover:text-sp-blue text-[16px] font-bold"
            >
              {label}
            </Link>
          ))}
          <Button to="/contact" size="sm">
            Request a Quote
          </Button>
        </nav>
        <button
          className="text-sp-navy inline-flex size-12 items-center justify-center rounded-full lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </Container>
      {open && (
        <div className="bg-sp-navy fixed inset-0 top-20 z-50 px-6 py-10 lg:hidden">
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {links.map(([to, label]) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="font-display border-b border-white/15 py-3 text-3xl font-bold text-white"
              >
                {label}
              </Link>
            ))}
            <Button
              to="/contact"
              variant="primary-on-dark"
              className="mt-4"
            >
              Request a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
