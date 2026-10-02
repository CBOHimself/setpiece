import { ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
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

const parts = [
  ['Product', 'The right products for each person and care setting.'],
  ['Guidance', 'Clear information to make daily care less uncertain.'],
  ['Access', 'Practical supply routes from hospital to home.'],
  ['Support', 'A team that listens and stays connected.'],
]

const journey = [
  'Discover',
  'Understand',
  'Select',
  'Educate',
  'Access',
  'Support',
  'Reorder',
  'Follow-up',
]

export function AboutPage() {
  return (
    <>
      <Seo
        title="About | Setpiece"
        description="About Setpiece, your healthcare partner."
        path="/about"
      />
      <section className="py-14 lg:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">About Setpiece</p>
              <h1 className="section-title mt-4 text-4xl lg:text-[56px]">
                Who setpiece is.
              </h1>
              <p className="text-muted mt-6 max-w-xl text-lg">
                setpiece is a specialist intimate healthcare company in Ghana.
                We supply thoughtful products and practical support to
                hospitals, clinics, pharmacies, clinicians, and people managing
                long-term health needs.
              </p>
              <Bars />
            </div>
            <div className="bg-brand-50 relative min-h-72 overflow-hidden rounded-[28px]">
              <div className="bg-brand-100 absolute bottom-0 left-0 h-1/2 w-full" />
              <div className="bg-brand-500 absolute bottom-0 left-14 h-56 w-28 rounded-t-full" />
              <div className="bg-accent-600 absolute bottom-0 left-43 h-44 w-24 rounded-t-full" />
              <div className="bg-accent-500/40 absolute top-12 right-12 h-28 w-28 rounded-full" />
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-brand-50 py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <div className="flex min-h-82 items-center justify-center rounded-[40px] bg-white p-12">
              <img
                src="/images/setpiece-symbol.png"
                alt="Setpiece symbol"
                width={260}
                height={291}
                className="max-w-[240px] object-contain"
              />
            </div>
            <div>
              <p className="eyebrow">How we work</p>
              <h2 className="section-title mt-4">Four parts, one care.</h2>
              <Bars />
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {parts.map(([t, b], i) => (
                  <div key={t} className="border-brand-100 border-l-4 pl-4">
                    <p className="text-accent-600 text-[13px] font-bold">
                      0{i + 1}
                    </p>
                    <h3 className="text-brand-800 mt-1 text-xl">{t}</h3>
                    <p className="text-muted mt-1 text-[16px]">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <article className="bg-brand-800 rounded-[28px] p-8 text-white">
              <p className="eyebrow !text-accent-500 before:!bg-accent-500">
                Our mission
              </p>
              <h2 className="mt-5 text-3xl text-white">
                To make specialist healthcare easier to access, understand and
                live with.
              </h2>
            </article>
            <article className="border-brand-100 rounded-[28px] border bg-white p-8">
              <p className="eyebrow">Our vision</p>
              <h2 className="text-brand-800 mt-5 text-3xl">
                A Ghana where people can find the care support they need with
                dignity.
              </h2>
            </article>
          </div>
        </Container>
      </section>
      <section className="bg-brand-50 py-16">
        <Container>
          <p className="eyebrow">A care journey</p>
          <h2 className="section-title mt-4">
            Support is a continuous conversation.
          </h2>
          <div className="mt-8 flex gap-3 overflow-x-auto pb-3">
            {journey.map((x, i) => (
              <div
                key={x}
                className={`min-w-36 rounded-[24px] p-5 ${['bg-brand-800 text-white', 'bg-brand-500 text-white', 'bg-accent-600 text-white', 'bg-accent-500 text-brand-800'][i % 4]}`}
              >
                <p className="text-2xl font-bold opacity-70">0{i + 1}</p>
                <p className="mt-8 text-[16px] font-bold">{x}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Corporate responsibility</p>
            <h2 className="section-title mt-4">
              Care includes how we do business.
            </h2>
            <p className="text-muted mt-5 text-lg">
              We aim to be thoughtful with the products we supply, the partners
              we work with, and the people who trust us with their questions.
            </p>
          </div>
          <div>
            <p className="eyebrow">Resources</p>
            <h2 className="text-brand-800 mt-4 text-3xl">
              Useful information, when you need it.
            </h2>
            <a
              className="text-brand-500 mt-5 inline-flex items-center gap-2 text-[17px] font-bold underline"
              href="https://docshub.coloplast.com"
              target="_blank"
              rel="noreferrer"
            >
              Coloplast product documentation{' '}
              <ExternalLink className="size-4" />
            </a>
          </div>
        </Container>
      </section>
      <section className="pb-12">
        <Container>
          <div className="border-brand-100 bg-brand-50 rounded-[28px] border p-8">
            <p className="eyebrow">Careers</p>
            <h2 className="text-brand-800 mt-4 text-3xl">
              Join a team that puts people first.
            </h2>
            <p className="text-muted mt-3">
              We welcome thoughtful people who care about practical support. Get
              in touch to share your CV.
            </p>
            <Link
              to="/contact"
              className="text-brand-500 mt-5 inline-flex items-center gap-2 text-[17px] font-bold underline"
            >
              Contact us <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
      <section className="px-4 py-12">
        <div className="bg-brand-800 mx-auto flex max-w-[1344px] flex-col justify-between gap-6 rounded-[40px] p-10 text-white md:flex-row md:items-center">
          <h2 className="text-3xl text-white">
            Let’s make care feel more supported.
          </h2>
          <Button
            to="/contact"
            className="bg-accent-500 text-brand-800 hover:bg-accent-500"
          >
            Talk to us
          </Button>
        </div>
      </section>
    </>
  )
}
