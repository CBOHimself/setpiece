import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

const HomePage = lazy(() =>
  import('@/pages/HomePage').then((module) => ({ default: module.HomePage })),
)
const ProductsPage = lazy(() =>
  import('@/pages/ProductsPage').then((module) => ({
    default: module.ProductsPage,
  })),
)
const AboutPage = lazy(() =>
  import('@/pages/AboutPage').then((module) => ({ default: module.AboutPage })),
)
const FaqPage = lazy(() =>
  import('@/pages/FaqPage').then((module) => ({ default: module.FaqPage })),
)
const ContactPage = lazy(() =>
  import('@/pages/ContactPage').then((module) => ({
    default: module.ContactPage,
  })),
)
const LegalPage = lazy(() =>
  import('@/pages/LegalPage').then((module) => ({
    default: module.LegalPage,
  })),
)
const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then((module) => ({
    default: module.NotFoundPage,
  })),
)

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy" element={<LegalPage slug="privacy" />} />
        <Route path="terms" element={<LegalPage slug="terms" />} />
        <Route path="cookies" element={<LegalPage slug="cookies" />} />
        <Route path="disclaimer" element={<LegalPage slug="disclaimer" />} />
        <Route
          path="accessibility"
          element={<LegalPage slug="accessibility" />}
        />
        <Route path="components" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
