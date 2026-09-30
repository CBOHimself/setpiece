import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ContactPage } from '@/pages/ContactPage'

function renderContact(path = '/contact') {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <ContactPage />
    </MemoryRouter>,
  )
}

function fillRequired(email = 'ama@example.com') {
  fireEvent.change(screen.getByLabelText(/name/i), {
    target: { value: 'Ama Mensah' },
  })
  fireEvent.change(screen.getByLabelText(/^email/i), {
    target: { value: email },
  })
  fireEvent.change(screen.getByLabelText(/message/i), {
    target: { value: 'Please quote 20 pouches.' },
  })
}

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('Contact form', () => {
  it('shows field errors and focuses the first invalid field', async () => {
    renderContact()
    fireEvent.click(screen.getByRole('button', { name: 'Send enquiry' }))

    expect(await screen.findByText('Enter your name')).toBeInTheDocument()
    expect(screen.getByText('Enter your email')).toBeInTheDocument()
    expect(screen.getByText('Enter a message')).toBeInTheDocument()
    await waitFor(() => {
      expect(document.activeElement).toHaveAttribute('id', 'name')
    })
  })

  it('rejects an invalid email', async () => {
    renderContact()
    fillRequired('not-an-email')
    fireEvent.click(screen.getByRole('button', { name: 'Send enquiry' }))
    expect(await screen.findByText('Enter a valid email')).toBeInTheDocument()
  })

  it('shows a spinner while the enquiry is sending, then confirms success', async () => {
    let resolveFetch: (value: Response) => void = () => undefined
    let sentBody = ''
    const fetchMock = vi.fn((_input: RequestInfo | URL, init?: RequestInit) => {
      sentBody = String(init?.body ?? '')
      return new Promise<Response>((resolve) => {
        resolveFetch = resolve
      })
    })
    vi.stubGlobal('fetch', fetchMock)
    renderContact()
    fillRequired()
    fireEvent.change(screen.getByLabelText(/^phone/i), {
      target: { value: '+233 24 000 0000' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Send enquiry' }))

    const sending = await screen.findByRole('button', {
      name: 'Sending enquiry',
    })
    expect(sending).toBeDisabled()

    resolveFetch({
      ok: true,
      json: async () => ({ ok: true }),
    } as Response)

    expect(await screen.findByRole('status')).toHaveTextContent('Thank you, we will be in touch')
    const body = JSON.parse(sentBody) as { phone: string }
    expect(body.phone).toBe('+233240000000')
    expect(fetchMock).toHaveBeenCalledOnce()
  })

  it('shows a fallback when sending fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network')))
    renderContact()
    fillRequired()
    fireEvent.click(screen.getByRole('button', { name: 'Send enquiry' }))

    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent('could not send your enquiry')
    expect(
      within(alert).getByRole('link', { name: '+233 00 000 0000' }),
    ).toBeInTheDocument()
    expect(
      within(alert).getByRole('link', { name: /chat on whatsapp/i }),
    ).toBeInTheDocument()
  })
})
