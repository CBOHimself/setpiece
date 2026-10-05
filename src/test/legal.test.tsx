import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { App } from '@/App'
import { legalDocuments } from '@/data/legal'
import { LegalPage } from '@/pages/LegalPage'

describe('Legal pages', () => {
  it.each(legalDocuments.map((doc) => [doc.title, doc] as const))(
    'renders %s with every section heading',
    (_title, doc) => {
      render(
        <MemoryRouter initialEntries={[doc.path]}>
          <LegalPage slug={doc.slug} />
        </MemoryRouter>,
      )
      expect(
        screen.getByRole('heading', { level: 1, name: doc.title }),
      ).toBeInTheDocument()
      for (const section of doc.sections) {
        expect(
          screen.getByRole('heading', { level: 2, name: section.heading }),
        ).toBeInTheDocument()
      }
    },
  )

  it('turns inline markup into working links', () => {
    render(
      <MemoryRouter initialEntries={['/privacy']}>
        <LegalPage slug="privacy" />
      </MemoryRouter>,
    )
    const cookieLinks = screen.getAllByRole('link', { name: 'Cookie Notice' })
    expect(cookieLinks.length).toBeGreaterThan(0)
    for (const link of cookieLinks)
      expect(link).toHaveAttribute('href', '/cookies')
    expect(
      screen.getAllByRole('link', { name: 'admin@setpiecegh.com' })[0],
    ).toHaveAttribute('href', 'mailto:admin@setpiecegh.com')
  })

  it('shows the site header and footer on legal routes', async () => {
    render(
      <MemoryRouter initialEntries={['/terms']}>
        <App />
      </MemoryRouter>,
    )
    expect(
      await screen.findByRole('heading', { level: 1, name: 'Terms of Use' }),
    ).toBeInTheDocument()
    const footer = screen.getByRole('contentinfo')
    expect(
      within(footer).getByRole('link', { name: 'Privacy Policy' }),
    ).toHaveAttribute('href', '/privacy')
  })

  it('has no unresolved placeholder text', () => {
    const text = JSON.stringify(legalDocuments)
    expect(text).not.toMatch(/\[\[|TODO|lorem/i)
  })
})
