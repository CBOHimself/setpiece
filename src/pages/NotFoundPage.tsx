import { Link } from 'react-router-dom'
import { Seo } from '@/components/seo/Seo'
import { Container } from '@/components/ui/Container'

export function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page not found | Set Piece"
        description="The page you requested is not on the Set Piece website."
        path="/404"
      />
      <Container className="py-24">
        <p className="text-accent-700 text-sm font-semibold tracking-wide uppercase">
          404
        </p>
        <h1 className="text-brand-800 mt-3 text-4xl font-semibold">
          Page not found
        </h1>
        <p className="text-muted mt-4 max-w-xl">
          That address is not part of this site. Use the menu or return home.
        </p>
        <p className="mt-8">
          <Link className="text-brand-800 font-medium underline" to="/">
            Back to home
          </Link>
        </p>
      </Container>
    </>
  )
}
