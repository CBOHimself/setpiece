import { Fragment, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  getLegalDocument,
  legalDocuments,
  legalLastUpdated,
} from '@/data/legal'
import { Seo } from '@/components/seo/Seo'
import { Container } from '@/components/ui/Container'
import type { LegalBlock, LegalSlug } from '@/types'

const linkClass = 'text-sp-blue font-medium underline underline-offset-2'

// Turns "[label](href)" into links without ever injecting raw HTML.
function renderInline(text: string): ReactNode[] {
  const pattern = /\[([^\]]+)\]\(([^)\s]+)\)/g
  const nodes: ReactNode[] = []
  let last = 0
  for (const match of text.matchAll(pattern)) {
    const [whole, label, href] = match
    const start = match.index ?? 0
    if (start > last) nodes.push(text.slice(last, start))
    nodes.push(
      href.startsWith('/') ? (
        <Link key={start} to={href} className={linkClass}>
          {label}
        </Link>
      ) : (
        <a key={start} href={href} className={linkClass}>
          {label}
        </a>
      ),
    )
    last = start + whole.length
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes
}

function Block({ block }: { block: LegalBlock }) {
  if (typeof block === 'string') {
    return <p className="mt-4">{renderInline(block)}</p>
  }
  return (
    <ul className="mt-4 list-disc space-y-2 pl-6">
      {block.list.map((item) => (
        <li key={item}>{renderInline(item)}</li>
      ))}
    </ul>
  )
}

export function LegalPage({ slug }: { slug: LegalSlug }) {
  const doc = getLegalDocument(slug)
  const others = legalDocuments.filter((d) => d.slug !== slug)

  return (
    <>
      <Seo
        title={`${doc.title} | Setpiece`}
        description={doc.description}
        path={doc.path}
      />
      <section className="py-14 lg:py-20">
        <Container>
          <p className="eyebrow">Legal</p>
          <h1 className="section-title mt-4 text-4xl lg:text-[56px]">
            {doc.title}
          </h1>
          <p className="text-muted mt-3 text-[16px]">
            Last updated {legalLastUpdated}
          </p>
          <div className="four-bars">
            <span className="bg-brand-800" />
            <span className="bg-brand-500" />
            <span className="bg-accent-600" />
            <span className="bg-accent-500" />
          </div>
        </Container>
      </section>
      <section className="pb-16">
        <Container className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-14">
          <nav
            aria-label="On this page"
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <h2 className="text-sp-navy text-lg">On this page</h2>
            <ol className="mt-3 space-y-2 text-[16px]">
              {doc.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sp-muted hover:text-sp-blue underline-offset-2 hover:underline"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <article className="text-sp-ink max-w-3xl text-[17px]">
            <p className="text-lg">{renderInline(doc.intro)}</p>
            {doc.sections.map((section) => (
              <Fragment key={section.id}>
                <h2
                  id={section.id}
                  className="text-sp-navy mt-10 scroll-mt-28 text-2xl"
                >
                  {section.heading}
                </h2>
                {section.blocks.map((block, index) => (
                  <Block key={`${section.id}-${index}`} block={block} />
                ))}
              </Fragment>
            ))}
            <div className="border-sp-border mt-12 border-t pt-6">
              <h2 className="text-sp-navy text-lg">Other policies</h2>
              <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[16px]">
                {others.map((other) => (
                  <li key={other.slug}>
                    <Link to={other.path} className={linkClass}>
                      {other.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Container>
      </section>
    </>
  )
}
