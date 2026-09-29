import { siteConfig } from '@/config/site'
import { Seo } from '@/components/seo/Seo'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Link } from 'react-router-dom'

export function AboutPage() {
  return (
    <>
      {/* TODO(content): replace the about page copy */}
      <Seo
        title="About | Set Piece"
        description="About Set Piece, a Ghana-based wholesale supplier of Coloplast medical products."
        path="/about"
      />
      <Section
        headingLevel="h1"
        eyebrow="About"
        title="About Set Piece"
        intro="Set Piece supplies Coloplast ostomy, continence, wound care, and urology products to professional buyers in Ghana. This overview is placeholder copy."
      />

      <Section title="Company overview" className="pt-0">
        <p className="text-muted max-w-3xl">
          The company story, where the team is based, and who the business
          serves will go here. Keep the tone calm and practical: this is a
          wholesale supplier, not a clinic and not a consumer shop.
        </p>
      </Section>

      <Section tone="muted" title="Purpose">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-brand-800 text-xl font-semibold">Mission</h3>
            <p className="text-muted mt-3">
              Placeholder mission statement. Describe the practical job Set
              Piece does for healthcare providers.
            </p>
          </Card>
          <Card>
            <h3 className="text-brand-800 text-xl font-semibold">Vision</h3>
            <p className="text-muted mt-3">
              Placeholder vision statement. Describe the longer-term aim without
              inventing awards or certifications.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Corporate responsibility">
        <p className="text-muted max-w-3xl">
          Placeholder note on how the business handles product stewardship,
          staff conduct, and community commitments. Replace this with the
          approved statement before launch.
        </p>
      </Section>

      <Section tone="muted" title="Resources">
        <ul className="space-y-3">
          <li>
            <a
              href="https://docshub.coloplast.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-800 font-medium underline-offset-2 hover:underline"
            >
              Coloplast product documentation
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <Link
              className="text-brand-800 font-medium underline-offset-2 hover:underline"
              to="/contact"
            >
              Request a quote
            </Link>
          </li>
        </ul>
      </Section>

      <section className="pb-16">
        <Container>
          <Card>
            <h2 className="text-brand-800 text-2xl font-semibold">Careers</h2>
            <p className="text-muted mt-3 max-w-3xl">
              Open roles are not listed yet. To send a CV, email{' '}
              <a
                className="text-brand-800 font-medium underline"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </Card>
        </Container>
      </section>
    </>
  )
}
