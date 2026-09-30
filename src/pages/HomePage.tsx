import {
  ArrowRight,
  BadgeCheck,
  Building2,
  HeartHandshake,
  PackageCheck,
  Pill,
  ShieldCheck,
  Stethoscope,
  UsersRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { PillDivider } from '@/components/ui/Section'

const care = [
  {
    name: 'Ostomy',
    desc: 'Thoughtful products for everyday confidence.',
    color: 'bg-brand-800 text-white',
    icon: Pill,
  },
  {
    name: 'Continence',
    desc: 'Practical support for bladder and bowel care.',
    color: 'bg-brand-500 text-white',
    icon: HeartHandshake,
  },
  {
    name: 'Urology',
    desc: 'Reliable solutions for comfortable routines.',
    color: 'bg-accent-600 text-white',
    icon: Stethoscope,
  },
  {
    name: 'Wound and Skin Care',
    desc: 'Gentle care for skin and healing needs.',
    color: 'bg-accent-500 text-brand-800',
    icon: ShieldCheck,
  },
]

const products = [
  ['Ostomy', 'Two-piece ostomy pouching system'],
  ['Continence', 'Intermittent catheter'],
  ['Wound and Skin Care', 'Hydrocolloid dressing'],
  ['Urology', 'Urinary drainage bag'],
  ['Ostomy', 'Skin barrier accessories'],
  ['Continence', 'Compact urine collection bag'],
]

const support = [
  [
    'Patients and caregivers',
    'Clear, respectful support for people managing long-term health needs.',
    UsersRound,
  ],
  [
    'Healthcare professionals',
    'Dependable supply and responsive service for clinical teams.',
    Stethoscope,
  ],
  [
    'Institutional partners',
    'A practical partner for hospitals, clinics and pharmacies.',
    Building2,
  ],
]

const four = [
  ['01', 'Product', 'The right products for each care routine.'],
  ['02', 'Guidance', 'Helpful information when it matters.'],
  ['03', 'Access', 'A more direct route from hospital to home.'],
  ['04', 'Support', 'Human support that stays present.'],
]

function Bars() { return <PillDivider /> }

function ProductVisual({ i }: { i: number }) {
  return (
    <div className="bg-brand-50 relative flex aspect-[4/3] items-center justify-center overflow-hidden">
      <div className="bg-accent-500/25 absolute -top-8 -right-10 h-32 w-20 rounded-full" />
      <div
        className={`border-brand-100 relative h-24 w-20 rounded-[22px] border-2 bg-white shadow-sm ${i % 3 === 1 ? 'w-14 rounded-full' : ''}`}
      >
        <div className="bg-accent-500 mx-auto mt-4 h-2 w-9 rounded-full" />
        <div className="bg-brand-50 mx-auto mt-3 h-9 w-12 rounded-xl" />
      </div>
    </div>
  )
}

export function HomePage() {
  return (
    <>
      <Seo
        title="Setpiece | Your Healthcare Partner"
        description="Intimate healthcare products, guidance and support in Ghana."
        path="/"
      />
      <main>
        <section className="px-4 pt-6 pb-12 sm:px-6">
          <div className="bg-brand-800 relative mx-auto max-w-[1344px] overflow-hidden rounded-[40px] px-7 py-12 text-white lg:px-16 lg:py-18">
            <div className="absolute -bottom-24 -left-12 h-72 w-28 rotate-90 rounded-full bg-white/8" />
            <div className="relative grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
              <div>
                <p className="eyebrow !text-accent-500 before:!bg-accent-500">
                  Your Healthcare Partner
                </p>
                <h1 className="mt-5 max-w-xl text-4xl leading-[1.04] text-white sm:text-5xl lg:text-[56px]">
                  Better-supported intimate healthcare.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 lg:text-xl">
                  From hospital to home, Setpiece stays present with the right
                  products, guidance and support.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    to="/contact"
                    size="lg"
                    className="w-full bg-accent-500 text-brand-800 hover:bg-accent-500 sm:w-auto"
                  >
                    Talk to us
                  </Button>
                  <Button
                    to="/products"
                    size="lg"
                    variant="secondary"
                    className="w-full border-white bg-transparent text-white hover:bg-white/10 sm:w-auto"
                  >
                    Explore Care Areas
                  </Button>
                </div>
              </div>
              <div className="relative min-h-[330px] overflow-hidden rounded-[28px] bg-[#dce8ee] p-7">
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-white/45" />
                <div className="relative mx-auto flex h-full max-w-md items-end justify-center gap-5">
                  <div className="bg-brand-500 mb-4 w-36 rounded-t-[80px] px-5 pt-12 pb-8 text-center text-sm font-bold text-white">
                    A caring
                    <br />
                    conversation
                  </div>
                  <div className="text-brand-800 w-40 rounded-t-[90px] bg-white px-5 pt-16 pb-8 text-center text-sm font-bold">
                    Here for
                    <br />
                    everyday life
                  </div>
                </div>
                <p className="text-brand-800 absolute bottom-5 left-6 text-sm font-semibold">
                  Warm, practical support
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8">
          <Container className="border-brand-100 grid gap-5 border-y py-6 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <BadgeCheck className="text-accent-600 size-8" />
              <p className="text-brand-800 text-[16px] font-bold">
                Specialist healthcare supplies
              </p>
            </div>
            <div className="flex items-center gap-3">
              <PackageCheck className="text-accent-600 size-8" />
              <p className="text-brand-800 text-[16px] font-bold">
                Support from hospital to home
              </p>
            </div>
            <div className="flex items-center gap-3">
              <HeartHandshake className="text-accent-600 size-8" />
              <p className="text-brand-800 text-[16px] font-bold">
                Serving Ghana with care
              </p>
            </div>
          </Container>
        </section>
        <section className="py-16 lg:py-24">
          <Container>
            <p className="eyebrow">Care areas</p>
            <h2 className="section-title mt-4">
              Care that meets people where they are.
            </h2>
            <Bars />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {care.map(({ name, desc, color, icon: Icon }) => (
                <Link
                  to="/products"
                  key={name}
                  className={`group relative min-h-72 overflow-hidden rounded-[28px] p-7 transition-transform hover:rotate-1 ${color}`}
                >
                  <div className="absolute -right-8 -bottom-6 h-40 w-20 rounded-full bg-white/15" />
                  <div className="text-brand-800 flex size-13 items-center justify-center rounded-full bg-white">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-10 text-2xl leading-tight">{name}</h3>
                  <p className="mt-3 max-w-52 text-[16px] leading-snug opacity-85">
                    {desc}
                  </p>
                  <span className="absolute bottom-7 left-7 flex size-11 items-center justify-center rounded-full bg-white/20">
                    <ArrowRight className="size-5" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
        <section className="bg-brand-50 py-16 lg:py-24">
          <Container>
            <p className="eyebrow">Who we support</p>
            <h2 className="section-title mt-4">
              A partner for every care setting.
            </h2>
            <Bars />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {support.map(([title, body, Icon]) => {
                const C = Icon as typeof UsersRound
                return (
                  <article
                    key={title as string}
                    className="border-brand-100 rounded-[28px] border bg-white p-8"
                  >
                    <div className="bg-brand-50 text-accent-600 flex size-13 items-center justify-center rounded-full">
                      <C className="size-6" />
                    </div>
                    <h3 className="text-brand-800 mt-6 text-2xl">
                      {title as string}
                    </h3>
                    <p className="text-muted mt-3 text-[17px]">
                      {body as string}
                    </p>
                    <Link
                      className="text-brand-500 mt-6 inline-flex items-center gap-2 text-[16px] font-bold underline"
                      to="/contact"
                    >
                      Find out more <ArrowRight className="size-4" />
                    </Link>
                  </article>
                )
              })}
            </div>
          </Container>
        </section>
        <section className="py-16 lg:py-24">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="eyebrow">Featured products</p>
                <h2 className="section-title mt-4">
                  Everyday essentials, carefully selected.
                </h2>
                <Bars />
              </div>
              <Button to="/products" variant="secondary">
                View all products
              </Button>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.map(([area, name], i) => (
                <article
                  key={name}
                  className="border-brand-100 overflow-hidden rounded-[28px] border bg-white"
                >
                  <ProductVisual i={i} />
                  <div className="p-6">
                    <span className="bg-accent-500 text-brand-800 rounded-full px-3 py-1 text-[13px] font-bold">
                      {area}
                    </span>
                    <h3 className="text-brand-800 mt-4 text-xl">{name}</h3>
                    <p className="text-muted mt-2 min-h-13 text-[16px]">
                      Practical support designed for a more comfortable everyday
                      routine.
                    </p>
                    <Link
                      className="border-brand-800 text-brand-800 hover:bg-brand-50 mt-5 inline-flex min-h-12 items-center rounded-full border px-5 text-[16px] font-bold"
                      to="/contact"
                    >
                      Enquire
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
        <section className="bg-brand-50 py-16 lg:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
              <div>
                <p className="eyebrow">The Setpiece way</p>
                <h2 className="section-title mt-4">Four parts, one care.</h2>
                <Bars />
                <p className="text-muted mt-7 max-w-md text-lg">
                  The right supply is only one part of feeling supported. We
                  bring the practical pieces together with care.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {four.map(([num, title, body], i) => (
                  <article key={title} className="rounded-[28px] bg-white p-6">
                    <p className="text-accent-600 text-4xl font-bold">{num}</p>
                    <div
                      className={`mt-5 h-2 w-14 rounded-full ${['bg-brand-800', 'bg-brand-500', 'bg-accent-600', 'bg-accent-500'][i]}`}
                    />
                    <h3 className="text-brand-800 mt-5 text-xl">{title}</h3>
                    <p className="text-muted mt-2 text-[16px]">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>
        <section className="px-4 py-16 sm:px-6">
          <div className="bg-brand-100 mx-auto grid max-w-[1344px] overflow-hidden rounded-[40px] md:grid-cols-2">
            <div className="bg-brand-50 min-h-72 p-8">
              <div className="relative h-full overflow-hidden rounded-[28px] bg-white">
                <div className="absolute right-0 bottom-0 left-0 h-1/2 bg-[#dce8ee]" />
                <div className="bg-brand-500 absolute top-12 left-12 h-44 w-24 rounded-t-full" />
                <div className="bg-accent-600 absolute top-18 left-31 h-38 w-20 rounded-t-full" />
                <div className="bg-accent-500/35 absolute top-10 right-10 h-24 w-24 rounded-full" />
              </div>
            </div>
            <div className="flex flex-col justify-center p-9 lg:p-14">
              <p className="eyebrow">Making access easier</p>
              <h2 className="section-title mt-4">
                The practical work behind better care.
              </h2>
              <p className="text-muted mt-5 text-lg">
                Setpiece works across hospitals, clinics, pharmacies and homes
                to help the right products reach the people who need them.
              </p>
            </div>
          </div>
        </section>
        <section className="px-4 py-12 sm:px-6">
          <div className="bg-brand-800 mx-auto flex max-w-[1344px] flex-col justify-between gap-8 rounded-[40px] px-8 py-12 text-white md:flex-row md:items-center lg:px-16">
            <div>
              <p className="eyebrow !text-accent-500 before:!bg-accent-500">
                Let’s talk
              </p>
              <h2 className="mt-4 text-3xl text-white lg:text-[40px]">
                How can we support your care?
              </h2>
            </div>
            <Button
              to="/contact"
              size="lg"
              className="bg-accent-500 text-brand-800 hover:bg-accent-500"
            >
              Talk to us <ArrowRight className="size-5" />
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}
