import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { products } from '@/data/products'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { FaqPage } from '@/pages/FaqPage'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProductsPage } from '@/pages/ProductsPage'
import type { ReactElement } from 'react'

function renderPage(ui: ReactElement, path = '/') {
  return render(<MemoryRouter initialEntries={[path]}>{ui}</MemoryRouter>)
}

describe('HomePage', () => {
  it('renders the hero and the first six products', () => {
    renderPage(<HomePage />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /wholesale coloplast products/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: products[0].name }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: products[6].name }),
    ).not.toBeInTheDocument()
  })
})

describe('ProductsPage', () => {
  it('renders every product from the catalogue data', () => {
    renderPage(<ProductsPage />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Products' }),
    ).toBeInTheDocument()
    for (const product of products) {
      expect(
        screen.getByRole('heading', { name: product.name }),
      ).toBeInTheDocument()
    }
  })
})

describe('AboutPage', () => {
  it('renders the company overview headings', () => {
    renderPage(<AboutPage />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'About Set Piece' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Careers' })).toBeInTheDocument()
  })
})

describe('FaqPage', () => {
  it('renders the question list', () => {
    renderPage(<FaqPage />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Frequently asked questions',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /who can buy from set piece/i }),
    ).toBeInTheDocument()
  })
})

describe('ContactPage', () => {
  it('renders the enquiry form', () => {
    renderPage(<ContactPage />, '/contact')
    expect(
      screen.getByRole('heading', { level: 1, name: 'Contact us' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
  })

  it('prefills the message when a product query is present', () => {
    renderPage(<ContactPage />, '/contact?product=foam-wound-dressing')
    expect(screen.getByLabelText(/message/i)).toHaveValue(
      'I would like a quote for Foam wound dressing.',
    )
  })
})

describe('NotFoundPage', () => {
  it('renders the missing-page heading', () => {
    renderPage(<NotFoundPage />, '/missing')
    expect(
      screen.getByRole('heading', { level: 1, name: 'Page not found' }),
    ).toBeInTheDocument()
  })
})
