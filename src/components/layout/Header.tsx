import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Logo } from '@/components/layout/Logo'
import { Container } from '@/components/ui/Container'

const links = [
  ['/products', 'Care Areas'],
  ['/about', 'About'],
  ['/faq', 'FAQ'],
  ['/contact', 'Contact'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  return (
    <header className="sticky top-0 z-40 border-b border-sp-border bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center">
        <Link to="/" className="mr-auto" aria-label="Setpiece home">
          <Logo
            alt="Setpiece"
            src="/images/setpiece-logo-no-bg.png"
            className="h-8 sm:h-10"
          />
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
        </nav>
        <button
          type="button"
          className="text-sp-navy inline-flex size-12 items-center justify-center rounded-full lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
        >
          <motion.span
            className="inline-flex"
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
          >
            {open ? <X /> : <Menu />}
          </motion.span>
        </button>
      </Container>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            className="overflow-hidden lg:hidden"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col gap-2 px-4 pb-4 sm:px-6">
              {links.map(([to, label], index) => (
                <motion.div
                  key={to}
                  initial={reduceMotion ? false : { opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.28,
                    delay: reduceMotion ? 0 : 0.06 + index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    to={to}
                    onClick={() => setOpen(false)}
                    className="bg-sp-navy block rounded-xl px-5 py-4 text-[18px] font-bold text-white"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
