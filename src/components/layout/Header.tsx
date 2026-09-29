import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { siteConfig } from '@/config/site'
import { navLinks } from '@/data/nav'
import { Logo } from '@/components/layout/Logo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/cn'

export function Header() {
  const { pathname } = useLocation()
  const [openPath, setOpenPath] = useState<string | null>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const open = openPath === pathname

  useEffect(() => {
    if (!open) return
    const firstLink = document.querySelector<HTMLAnchorElement>('#mobile-nav a')
    firstLink?.focus()
  }, [open])

  useEffect(() => {
    if (!open) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      setOpenPath(null)
      toggleRef.current?.focus()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex flex-wrap items-center gap-3 py-3">
          <Link
            to="/"
            className="mr-auto flex min-w-0 items-center gap-2"
            aria-label={`${siteConfig.name} home`}
          >
            <Logo alt="" />
          </Link>
          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 md:flex"
          >
            {navLinks.map((link) => {
              const current = pathname === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  aria-current={current ? 'page' : undefined}
                  className={cn(
                    'hover:text-brand-800 text-sm font-medium text-neutral-700',
                    current && 'text-brand-800',
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
          <div className="flex items-center gap-2">
            <Button to="/contact" size="sm">
              Request a Quote
            </Button>
            <button
              ref={toggleRef}
              type="button"
              className="text-brand-800 inline-flex size-10 items-center justify-center rounded-md md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpenPath(open ? null : pathname)}
            >
              {open ? (
                <X aria-hidden="true" className="size-5" />
              ) : (
                <Menu aria-hidden="true" className="size-5" />
              )}
              <span className="sr-only">
                {open ? 'Close menu' : 'Open menu'}
              </span>
            </button>
          </div>
        </div>
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          hidden={!open}
          className="flex flex-col gap-1 border-t border-neutral-200 py-3 md:hidden"
        >
          {navLinks.map((link) => {
            const current = pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={current ? 'page' : undefined}
                className={cn(
                  'rounded-md px-2 py-2 text-base font-medium text-neutral-800',
                  current && 'bg-brand-50 text-brand-800',
                )}
                onClick={() => setOpenPath(null)}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </Container>
    </header>
  )
}
