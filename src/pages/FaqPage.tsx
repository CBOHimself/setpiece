import { faqs } from '@/data/faqs'
import { Seo } from '@/components/seo/Seo'
import { Accordion } from '@/components/ui/Accordion'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export function FaqPage() {
  const groups = [...new Set(faqs.map((faq) => faq.group))]

  return (
    <>
      {/* TODO(content): replace the FAQ introduction if the approved questions change */}
      <Seo
        title="FAQ | Set Piece"
        description="Answers to common questions about buying Coloplast products wholesale from Set Piece in Ghana."
        path="/faq"
      />
      <Section
        headingLevel="h1"
        eyebrow="Help"
        title="Frequently asked questions"
        intro="Short answers for professional buyers. Policy details still need a final review."
      />
      <section className="pb-16">
        <Container className="space-y-10">
          {groups.map((group) => (
            <div key={group}>
              <h2 className="text-brand-800 mb-4 text-xl font-semibold">
                {group}
              </h2>
              <Accordion items={faqs.filter((faq) => faq.group === group)} />
            </div>
          ))}
        </Container>
      </section>
    </>
  )
}
