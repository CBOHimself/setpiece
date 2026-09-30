import { faqs } from '@/data/faqs'
import { Seo } from '@/components/seo/Seo'
import { Accordion } from '@/components/ui/Accordion'
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

const groups = ['Ordering', 'Products', 'Delivery', 'Working with us']

const fallback = (group: string) =>
  Array.from({ length: 3 }, (_, i) => ({
    id: `${group}-${i}`,
    question: [
      'How do I get started?',
      'Can I ask for help choosing products?',
      'When will someone reply?',
    ][i],
    answer:
      'Our team will help you understand the next practical step. Contact us with your needs and we will respond as soon as we can.',
  }))

export function FaqPage() {
  return (
    <>
      <Seo
        title="FAQ | Setpiece"
        description="Frequently asked questions."
        path="/faq"
      />
      <section className="py-14 lg:py-20">
        <Container>
          <p className="eyebrow">Help and support</p>
          <h1 className="section-title mt-4 text-4xl lg:text-[56px]">
            Frequently asked questions
          </h1>
          <p className="text-muted mt-5 max-w-2xl text-lg">
            Helpful answers about access, products, and working with Setpiece.
          </p>
          <Bars />
        </Container>
      </section>
      <section className="pb-16">
        <Container className="space-y-12">
          {groups.map((group) => {
            const items = faqs.filter(
              (x) => x.group.toLowerCase() === group.toLowerCase(),
            )
            return (
              <div key={group}>
                <h2 className="text-brand-800 mb-5 text-3xl">{group}</h2>
                <Accordion
                  items={items.length >= 3 ? items : fallback(group)}
                />
              </div>
            )
          })}
        </Container>
      </section>
      <section className="px-4 pb-12">
        <div className="bg-brand-50 mx-auto flex max-w-[1344px] flex-col justify-between gap-5 rounded-[28px] p-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-brand-800 text-3xl">Still have a question?</h2>
            <p className="text-muted mt-2">
              We are here to help you find a practical answer.
            </p>
          </div>
          <Button to="/contact">Talk to us</Button>
        </div>
      </section>
    </>
  )
}
