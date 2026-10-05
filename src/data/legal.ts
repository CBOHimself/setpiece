import { formatAddress, siteConfig } from '@/config/site'
import type { LegalDocument, LegalSlug } from '@/types'

// TODO(legal): replace with the full registered company name once confirmed,
// and have a Ghanaian lawyer review these documents before launch.
const legalName = 'Set Piece'

export const legalLastUpdated = '5 October 2026'

const email = `[${siteConfig.email}](mailto:${siteConfig.email})`
const phone = `[${siteConfig.phoneDisplay}](tel:${siteConfig.phoneTel})`
const address = formatAddress()

const privacy: LegalDocument = {
  slug: 'privacy',
  path: '/privacy',
  title: 'Privacy Policy',
  navLabel: 'Privacy Policy',
  description:
    'How Set Piece collects, uses and protects personal information submitted through setpiecegh.com.',
  intro: `This policy explains what personal information ${legalName} collects through www.setpiecegh.com, why we collect it, who sees it, and the rights you have over it. We handle personal data in line with the Data Protection Act, 2012 (Act 843) of Ghana.`,
  sections: [
    {
      id: 'who-we-are',
      heading: 'Who we are',
      blocks: [
        `${legalName} ("Set Piece", "we", "us") is a wholesale supplier of Coloplast ostomy, continence, wound care and urology products in Ghana. We are the data controller for personal data collected through this website.`,
        {
          list: [`Address: ${address}`, `Email: ${email}`, `Phone: ${phone}`],
        },
      ],
    },
    {
      id: 'what-we-collect',
      heading: 'What personal data we collect',
      blocks: [
        'Information you give us. When you use the enquiry form we collect your name, email address, message, and, if you choose to provide them, your organisation, job role, phone number and the product category you are interested in. We also keep what you send us by email, phone or WhatsApp.',
        'Information collected automatically. Like most websites, our hosting provider records technical information when a page is requested, such as your IP address, browser type, the pages requested and the date and time. The enquiry form also keeps a scrambled (hashed) form of your IP address with the times of recent submissions, used only to limit spam and repeated submissions.',
        'Patient and health information. This website is for healthcare professionals and businesses. Please do not put patient names, diagnoses or other health details in an enquiry. If you need to report a problem with a product, tell us what happened and we will ask for anything further we need.',
      ],
    },
    {
      id: 'how-we-use',
      heading: 'How and why we use it',
      blocks: [
        'We use personal data to:',
        {
          list: [
            'reply to your enquiry and prepare quotes, samples or demonstrations you ask about;',
            'set up and manage a wholesale account, if you open one with us;',
            'protect the website and our systems from spam, abuse and security incidents;',
            'handle product complaints and safety reports and pass them to the manufacturer and regulators where required; and',
            'meet our legal, tax, accounting and regulatory obligations.',
          ],
        },
        'Our grounds for doing this are your consent (which you give when you send us an enquiry), steps you ask us to take before entering into a contract, our legal obligations, and our legitimate interest in running a secure and responsible wholesale business. We do not send marketing emails unless you ask us to, and we do not make decisions about you by automated means.',
      ],
    },
    {
      id: 'who-we-share-with',
      heading: 'Who we share it with',
      blocks: [
        'We do not sell your personal data. We share it only where needed, with:',
        {
          list: [
            'our website hosting and email providers, who store and deliver the information on our behalf;',
            'Coloplast, where necessary to process a quote or order, or to report a product complaint or safety issue;',
            'professional advisers such as accountants and lawyers, under duties of confidentiality; and',
            'regulators, courts or law enforcement, where the law requires or allows it.',
          ],
        },
        'If you contact us through WhatsApp or follow our social media links, those services collect information under their own privacy policies, which we do not control.',
      ],
    },
    {
      id: 'transfers',
      heading: 'Transfers outside Ghana',
      blocks: [
        'Our hosting and email providers may store or process data on servers outside Ghana. Where this happens we take reasonable steps to make sure your data is protected to a standard comparable with Ghanaian law.',
      ],
    },
    {
      id: 'cookies',
      heading: 'Cookies',
      blocks: [
        'This website does not use cookies, analytics, advertising trackers or social media pixels, and our fonts are served from our own site. See our [Cookie Notice](/cookies) for details. If we add any of these in future, we will update this policy and ask for your consent where required.',
      ],
    },
    {
      id: 'retention',
      heading: 'How long we keep it',
      blocks: [
        'We keep enquiries for up to 24 months after our last contact with you, unless you become a customer. For customers we keep account and order records for as long as the relationship lasts and for the period needed to meet tax, accounting and regulatory requirements. Product complaint and safety records are kept for as long as the manufacturer or regulators require. When we no longer need personal data we delete or anonymise it.',
      ],
    },
    {
      id: 'security',
      heading: 'How we protect it',
      blocks: [
        'The website is served over HTTPS, enquiry form submissions are validated and rate limited, and access to the mailbox that receives them is restricted to authorised staff. No system is completely secure. If a breach puts your personal data at risk we will notify you and the Data Protection Commission as the law requires.',
      ],
    },
    {
      id: 'your-rights',
      heading: 'Your rights',
      blocks: [
        'Under the Data Protection Act you may:',
        {
          list: [
            'ask us whether we hold personal data about you and request a copy;',
            'ask us to correct data that is inaccurate or incomplete;',
            'ask us to delete data we no longer have a good reason to keep;',
            'withdraw your consent, or object to processing, including for direct marketing; and',
            'complain to the Data Protection Commission of Ghana if you believe your data has been mishandled.',
          ],
        },
        `To use any of these rights, email ${email}. We may need to confirm your identity first, and we will respond within the time the law requires.`,
      ],
    },
    {
      id: 'children',
      heading: 'Children',
      blocks: [
        'This website is intended for businesses and healthcare professionals. It is not directed at children and we do not knowingly collect personal data from anyone under 18.',
      ],
    },
    {
      id: 'links',
      heading: 'Links to other websites',
      blocks: [
        'This website links to third-party sites, including Coloplast product documentation and social media pages. We are not responsible for their content or privacy practices.',
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to this policy',
      blocks: [
        'We may update this policy from time to time. The date at the top of the page shows when it was last changed. Material changes will be highlighted on this page.',
      ],
    },
    {
      id: 'contact',
      heading: 'Contact us',
      blocks: [
        `Questions about this policy or your personal data? Email ${email}, call ${phone}, or write to us at ${address}.`,
      ],
    },
  ],
}

const terms: LegalDocument = {
  slug: 'terms',
  path: '/terms',
  title: 'Terms of Use',
  navLabel: 'Terms of Use',
  description:
    'The terms that apply when you use www.setpiecegh.com, operated by Set Piece in Ghana.',
  intro: `These terms apply to your use of www.setpiecegh.com (the "website"), operated by ${legalName}. By using the website you agree to them. If you do not agree, please do not use the website.`,
  sections: [
    {
      id: 'who-its-for',
      heading: 'Who the website is for',
      blocks: [
        'The website provides information about the Coloplast products we supply on a wholesale basis in Ghana. It is intended for healthcare professionals and for businesses and institutions such as clinics, hospitals, pharmacies and distributors. It is not an online shop.',
      ],
    },
    {
      id: 'quotes-and-orders',
      heading: 'Quotes and orders',
      blocks: [
        'Nothing on the website is an offer to sell. Product listings are an invitation to enquire. Prices are not published; we provide quotes on request. A contract exists only when we confirm an order in writing, and wholesale supply is then governed by the written terms agreed for your account or order. Availability, sizes and lead times depend on stock and on supply from Coloplast.',
      ],
    },
    {
      id: 'product-information',
      heading: 'Product information',
      blocks: [
        'Product listings are short summaries to help you identify a product range. They may not cover every variant, size, warning or limitation, and manufacturer specifications can change. Always rely on the manufacturer’s instructions for use and product documentation, and see our [Product, Medical and Trademark Notice](/disclaimer). Product images are for illustration.',
      ],
    },
    {
      id: 'acceptable-use',
      heading: 'Acceptable use',
      blocks: [
        'You agree not to:',
        {
          list: [
            'use the website for anything unlawful or in a way that could damage it or interrupt it for others;',
            'try to gain unauthorised access to the website, our servers or any connected system;',
            'send malware, or use automated tools to scrape, overload or submit forms in bulk;',
            'submit false, misleading or abusive enquiries, or impersonate another person or organisation; or',
            'submit patient names or health details through the enquiry form.',
          ],
        },
      ],
    },
    {
      id: 'intellectual-property',
      heading: 'Intellectual property',
      blocks: [
        `The website design, text, logos and other original content belong to ${legalName} or its licensors. Coloplast and its product names, logos, descriptions and images belong to Coloplast A/S and its group companies (see our [Product, Medical and Trademark Notice](/disclaimer)). You may view and print pages for your own internal business use. You may not copy, republish or sell website content without our written permission.`,
      ],
    },
    {
      id: 'your-enquiries',
      heading: 'Enquiries you send us',
      blocks: [
        'Please make sure the details you give us are accurate. We may reply by email, phone or WhatsApp using the details you provide. How we use your information is explained in our [Privacy Policy](/privacy).',
      ],
    },
    {
      id: 'third-party-links',
      heading: 'Links to other websites',
      blocks: [
        'The website links to third-party sites and services such as Coloplast documentation, WhatsApp and social media. We do not control them and are not responsible for their content, availability or policies.',
      ],
    },
    {
      id: 'availability',
      heading: 'Availability of the website',
      blocks: [
        'We try to keep the website available and accurate, but it is provided "as is". We do not promise that it will be uninterrupted or error-free, and we may change, suspend or remove content at any time, including for maintenance.',
      ],
    },
    {
      id: 'liability',
      heading: 'Limits on our liability',
      blocks: [
        'To the fullest extent the law allows, we are not liable for any indirect or consequential loss, or for loss of profit, business or data, arising from your use of or reliance on the website. Nothing in these terms limits liability that cannot be limited by law, including liability for death or personal injury caused by negligence, or for fraud.',
        'The website does not provide medical advice. Decisions about the selection and use of medical products must be made by a qualified healthcare professional.',
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to these terms',
      blocks: [
        'We may update these terms from time to time. The date at the top of the page shows when they were last changed. Continuing to use the website after a change means you accept the updated terms.',
      ],
    },
    {
      id: 'governing-law',
      heading: 'Governing law',
      blocks: [
        'These terms are governed by the laws of Ghana, and the courts of Ghana have jurisdiction over any dispute arising from them.',
      ],
    },
    {
      id: 'contact',
      heading: 'Contact us',
      blocks: [
        `Questions about these terms? Email ${email} or write to us at ${address}.`,
      ],
    },
  ],
}

const cookies: LegalDocument = {
  slug: 'cookies',
  path: '/cookies',
  title: 'Cookie Notice',
  navLabel: 'Cookie Notice',
  description:
    'This website does not use cookies or tracking technologies. Here is what that means for you.',
  intro:
    'Cookies are small files that websites store on your device to remember information or track activity. This notice explains how this website uses them.',
  sections: [
    {
      id: 'what-we-use',
      heading: 'What we use',
      blocks: [
        'At the date shown above, www.setpiecegh.com does not set cookies and does not use analytics, advertising trackers, social media pixels or other tracking technologies. For that reason we do not show a cookie banner.',
        'Our fonts and images are served from our own website rather than from a third-party service, so loading them does not share your details with anyone else.',
      ],
    },
    {
      id: 'external-services',
      heading: 'Links to other services',
      blocks: [
        'If you follow a link to WhatsApp, a social media page or Coloplast documentation, that service may set its own cookies under its own policy. We do not control those cookies.',
      ],
    },
    {
      id: 'your-browser',
      heading: 'Your browser settings',
      blocks: [
        'You can block or delete cookies at any time through your browser settings. Doing so will not affect your use of this website.',
      ],
    },
    {
      id: 'future-changes',
      heading: 'If this changes',
      blocks: [
        'If we add analytics or any other technology that uses cookies, we will update this notice, explain what is used and why, and ask for your consent where the law requires it. See our [Privacy Policy](/privacy) for how we handle personal data.',
      ],
    },
    {
      id: 'contact',
      heading: 'Contact us',
      blocks: [`Questions? Email ${email}.`],
    },
  ],
}

const disclaimer: LegalDocument = {
  slug: 'disclaimer',
  path: '/disclaimer',
  title: 'Product, Medical and Trademark Notice',
  navLabel: 'Product & medical notice',
  description:
    'Important information about product details, medical use, reporting product problems, and the Coloplast trademarks shown on this website.',
  intro:
    'Please read this notice before relying on any product information on this website.',
  sections: [
    {
      id: 'not-medical-advice',
      heading: 'Not medical advice',
      blocks: [
        'The information on this website is general product information for healthcare professionals and purchasers. It is not medical advice and does not replace the judgement of a qualified clinician. Choosing and using ostomy, continence, wound care and urology products should be guided by a doctor, nurse or other qualified healthcare professional who knows the patient’s needs. If you are a patient, please speak to your healthcare professional before using or changing any product.',
      ],
    },
    {
      id: 'instructions-for-use',
      heading: 'Follow the instructions for use',
      blocks: [
        'Product listings are short summaries. They do not include every warning, precaution, contraindication or technique. Always read and follow the instructions for use supplied with the product, and use the manufacturer’s published documentation for full and current information. Many of these products are intended for single use only; do not reuse a product unless its instructions say you may.',
      ],
    },
    {
      id: 'availability-and-regulation',
      heading: 'Availability, sizes and approvals',
      blocks: [
        'Not every product, size or variant described on the website is necessarily in stock or available in Ghana, and specifications can change without notice. Product images are for illustration, and packaging may differ. Ask us to confirm current availability and details when you request a quote.',
      ],
    },
    {
      id: 'report-a-problem',
      heading: 'Reporting a product problem',
      blocks: [
        'If a product does not work as expected, is damaged, or you believe it has caused or contributed to harm, please tell us as soon as possible by emailing ' +
          email +
          ' or calling ' +
          phone +
          '. It helps if you can tell us:',
        {
          list: [
            'the product name and the batch or lot number on the packaging;',
            'what happened and when;',
            'whether anyone was harmed; and',
            'where the product was supplied from, if you know.',
          ],
        },
        'Please keep the product and its packaging. We will pass reports to the manufacturer and, where required, to the Food and Drugs Authority of Ghana. Please do not include patient names in your first message. If someone needs medical help, contact a healthcare professional or emergency services immediately; do not wait for a reply from us.',
      ],
    },
    {
      id: 'trademarks',
      heading: 'Trademarks and our relationship with Coloplast',
      blocks: [
        `Coloplast and the product names shown on this website, including SpeediCath, SenSura, Brava, Conveen and Biatain, are trademarks of Coloplast A/S. Product names, descriptions and images are shown to help you identify the products we supply and remain the property of their owners.`,
        `${legalName} is a separate company from Coloplast. This website is operated by ${legalName}, not by Coloplast, and the use of Coloplast names and images does not mean Coloplast has reviewed or endorsed this website.`,
      ],
    },
    {
      id: 'contact',
      heading: 'Contact us',
      blocks: [
        `Questions about a product or this notice? Email ${email} or call ${phone}. See also our [Terms of Use](/terms).`,
      ],
    },
  ],
}

const accessibility: LegalDocument = {
  slug: 'accessibility',
  path: '/accessibility',
  title: 'Accessibility Statement',
  navLabel: 'Accessibility',
  description:
    'How Set Piece works to make www.setpiecegh.com usable by everyone, and how to tell us about a problem.',
  intro: `${legalName} wants everyone, including people who use assistive technology, to be able to use this website.`,
  sections: [
    {
      id: 'our-aim',
      heading: 'Our aim',
      blocks: [
        'We aim for the website to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA. We have not yet had the site independently audited, so we cannot claim full conformance.',
      ],
    },
    {
      id: 'what-weve-done',
      heading: 'What we have done',
      blocks: [
        {
          list: [
            'a "Skip to content" link at the top of every page;',
            'a visible focus outline so keyboard users can see where they are;',
            'text labels on every form field, with errors announced to screen readers;',
            'descriptive alternative text on product images;',
            'a layout that adapts to phones, tablets and desktops; and',
            'reduced animation for visitors who have asked their device for it.',
          ],
        },
      ],
    },
    {
      id: 'known-limits',
      heading: 'Known limitations',
      blocks: [
        'Documents and pages hosted by Coloplast and other third parties, which we link to, are outside our control and may not be fully accessible. If you cannot use one, contact us and we will try to help you get the information another way.',
      ],
    },
    {
      id: 'tell-us',
      heading: 'Tell us about a problem',
      blocks: [
        `If something on the website is hard to use, email ${email} or call ${phone}. Please tell us the page, what you were trying to do, and the device or assistive technology you use. We will reply within a few working days and work on a fix or an alternative.`,
      ],
    },
  ],
}

export const legalDocuments: readonly LegalDocument[] = [
  privacy,
  terms,
  cookies,
  disclaimer,
  accessibility,
]

export const legalPaths: readonly string[] = legalDocuments.map((d) => d.path)

export function getLegalDocument(slug: LegalSlug): LegalDocument {
  const doc = legalDocuments.find((d) => d.slug === slug)
  if (!doc) throw new Error(`Unknown legal document: ${slug}`)
  return doc
}
