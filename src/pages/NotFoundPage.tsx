import { Mail, MessageCircle } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

function Bars() {
  return (
    <div className="four-bars">
      <span className="bg-brand-800" />
      <span className="bg-brand-500" />
      <span className="bg-accent-600" />
      <span className="bg-accent-500" />
    </div>
  )
}

function ComponentSheet() {
  return (
    <section className="py-14">
      <Container>
        <p className="eyebrow">Setpiece UI</p>
        <h1 className="section-title mt-4">Component sheet</h1>
        <Bars />
        <div className="mt-10 grid gap-8">
          <article className="border-brand-100 rounded-[28px] border p-7">
            <h2 className="text-brand-800 text-2xl">Buttons</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button disabled>Disabled</Button>
            </div>
          </article>
          <article className="border-brand-100 rounded-[28px] border p-7">
            <h2 className="text-brand-800 text-2xl">Inputs</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <input
                className="border-brand-100 bg-brand-50 min-h-12 rounded-full border px-5 text-[17px]"
                placeholder="Default"
              />
              <input
                className="border-accent-600 bg-brand-50 min-h-12 rounded-full border-3 px-5 text-[17px]"
                value="Focused"
                readOnly
              />
              <div>
                <input
                  className="bg-brand-50 min-h-12 w-full rounded-full border border-[#B42318] px-5 text-[17px]"
                  value="Incorrect email"
                  readOnly
                />
                <p className="mt-1 text-[15px] text-[#B42318]">
                  Enter a valid email.
                </p>
              </div>
            </div>
          </article>
          <article className="border-brand-100 rounded-[28px] border p-7">
            <h2 className="text-brand-800 text-2xl">Chips, tabs and cards</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="bg-accent-500 text-brand-800 rounded-full px-4 py-2 text-[15px] font-bold">
                Ostomy
              </span>
              <span className="bg-brand-800 rounded-full px-5 py-3 text-[16px] font-bold text-white">
                Active tab
              </span>
              <span className="bg-brand-50 text-brand-800 rounded-full px-5 py-3 text-[16px] font-bold">
                Inactive tab
              </span>
            </div>
            <div className="border-brand-100 mt-6 max-w-sm rounded-[28px] border p-6">
              <p className="eyebrow">Card</p>
              <h3 className="text-brand-800 mt-3 text-xl">
                A calm, useful component.
              </h3>
            </div>
          </article>
        </div>
      </Container>
    </section>
  )
}

export function NotFoundPage() {
  const { pathname } = useLocation()
  if (pathname === '/components') return <ComponentSheet />
  return (
    <>
      <Seo
        title="Page not found | Setpiece"
        description="The page you requested is not on the Setpiece website."
        path="/404"
      />
      <section className="bg-brand-800 m-4 flex min-h-[70vh] items-center rounded-[40px] text-white">
        <Container className="py-16 text-center">
          <div className="mx-auto inline-block rounded-md bg-white p-2">
            <img
              src="/images/setpiece-logo.png"
              alt="Setpiece"
              className="h-9 w-auto"
            />
          </div>
          <p className="text-accent-500 mt-8 text-lg">
            Your Healthcare Partner
          </p>
          <h1 className="mt-4 text-4xl text-white lg:text-[56px]">
            Page not found
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">
            The page you’re looking for isn’t here. Let’s get you back to
            somewhere useful.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              to="/"
              className="bg-accent-500 text-brand-800 hover:bg-accent-500"
            >
              Back to home
            </Button>
            <a
              href="mailto:admin@setpiecegh.com"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white px-5 text-[17px] font-bold"
            >
              <Mail className="size-5" />
              Email us
            </a>
            <a
              href="#whatsapp"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white px-5 text-[17px] font-bold"
            >
              <MessageCircle className="size-5" />
              WhatsApp
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}
