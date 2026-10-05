import type { Faq } from '@/types'

// TODO(content): replace these answers with approved policy text.

export const faqs: readonly Faq[] = [
  {
    id: 'who-can-buy',
    group: 'Ordering',
    question: 'Who can buy from Set Piece?',
    answer:
      'Wholesale accounts are intended for licensed clinics, hospitals, pharmacies, and distributors in Ghana. Contact the team to confirm that your organisation can open an account.',
  },
  {
    id: 'minimum-order',
    group: 'Ordering',
    question: 'Is there a minimum order?',
    answer:
      'Minimum quantities depend on the product. Share the items and volumes you need when you request a quote, and the team will confirm what can be supplied.',
  },
  {
    id: 'genuine-products',
    group: 'Products',
    question: 'Are the products genuine?',
    answer:
      'Set Piece supplies Coloplast products for professional buyers. The final authenticity statement, including any authorisation wording, still needs to be approved.',
  },
  {
    id: 'request-quote',
    group: 'Ordering',
    question: 'How do I request a quote?',
    answer:
      'Use the enquiry form or call the published phone number. Include the product, quantity, and your organisation so the reply is useful.',
  },
  {
    id: 'delivery',
    group: 'Ordering',
    question: 'Where do you deliver?',
    answer:
      'Delivery coverage and lead times are still being confirmed. Ask for the current schedule when you enquire, especially for orders outside Accra.',
  },
  {
    id: 'payment-terms',
    group: 'Ordering',
    question: 'What are your payment terms?',
    answer:
      'Payment terms are agreed per account. The quote will set out the accepted methods and when payment is due. Do not treat this sentence as the final policy.',
  },
  {
    id: 'product-information',
    group: 'Products',
    question: 'Where can I find product information?',
    answer:
      'Each listing is a short summary. Official instructions and specifications are published in Coloplast product documentation, which is linked from the products page.',
  },
  {
    id: 'samples',
    group: 'Products',
    question: 'Can institutions request samples or demonstrations?',
    answer:
      'Clinics and training teams can ask about samples or a demonstration when they enquire. Availability depends on the product and is confirmed case by case.',
  },
]
