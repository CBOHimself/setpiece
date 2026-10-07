import type { Product, ProductCategory } from '@/types'

// Product content and photography reflect Coloplast's own product ranges
// (as shown on products.coloplast.co.za), adapted into Set Piece's catalogue.
// Photo convention: /images/products/<slug>.webp at 800×600.

// HIDDEN (not in stock): only needed by the hidden products below. Restore with them.
// const placeholderImage = '/images/placeholder-product.svg'

export const categories: readonly ProductCategory[] = [
  // HIDDEN (no stock at the moment) - uncomment to restore
  // {
  //   slug: 'ostomy',
  //   name: 'Ostomy',
  //   shortDescription:
  //     'Pouching systems and supporting products for ostomy care.',
  //   icon: 'CircleDot',
  // },
  {
    slug: 'continence',
    name: 'Continence (Bladder & Bowel)',
    shortDescription: 'Products for bladder and bowel management.',
    icon: 'Droplets',
  },
  // HIDDEN (no stock at the moment) - uncomment to restore
  // {
  //   slug: 'wound-care',
  //   name: 'Wound Care',
  //   shortDescription: 'Dressings and skin-protection products for wound care.',
  //   icon: 'Bandage',
  // },
  // HIDDEN (no stock at the moment) - uncomment to restore
  // {
  //   slug: 'urology',
  //   name: 'Urology',
  //   shortDescription: 'Catheters and drainage products for urology.',
  //   icon: 'Stethoscope',
  // },
]

export const products: readonly Product[] = [
  // IN STOCK. Content from the Coloplast South Africa product pages:
  // https://products.coloplast.co.za/coloplast/continence-care/speedicath/speedicath-standard/speedicath-female/
  // https://products.coloplast.co.za/coloplast/continence-care/speedicath/speedicath-standard/speedicath-standard-male/speedicath-male/
  // TODO(image): swap in dedicated Female / Male photos once supplied or approved by Coloplast.
  {
    id: 'speedicath-female',
    slug: 'speedicath-female',
    name: 'SpeediCath® Female',
    category: 'continence',
    shortDescription:
      'The proven and reliable standard catheter. SpeediCath is the instantly ready-to-use catheter, simple and intuitive to use. Its hydrophilic coating, with polished eyelets, is designed to reduce friction and increase comfort, and needs no added water or lubrication. A ring-pull opening makes the pack easy to open, an adhesive dot keeps the catheter where it is placed, and the catheter is PVC- and phthalate-free.',
    image: '/images/products/speedicath-intermittent-catheter.webp',
    imageAlt: 'SpeediCath hydrophilic intermittent catheter, ready to use',
  },
  {
    id: 'speedicath-male',
    slug: 'speedicath-male',
    name: 'SpeediCath® Male',
    category: 'continence',
    shortDescription:
      'The proven and reliable standard catheter. SpeediCath is the instantly ready-to-use catheter for safe, convenient and simple catheterisation. Its hydrophilic coating, with polished eyelets, is designed to reduce friction and increase comfort, and needs no added water or lubrication. A ring-pull opening makes the pack easy to open, an adhesive dot keeps the catheter securely in place, and the catheter is PVC- and phthalate-free. Please read the Instructions for Use before use.',
    image: '/images/products/speedicath-intermittent-catheter.webp',
    imageAlt: 'SpeediCath hydrophilic intermittent catheter, ready to use',
  },

  /*
  HIDDEN: the client only wants products currently in stock on the site.
  These entries are kept (not deleted) so they can be restored later: move an
  entry out of this comment block (and restore its category in `categories`
  above and `placeholderImage` if needed) and it reappears everywhere.

  {
    id: 'ostomy-one-piece',
    slug: 'one-piece-ostomy-pouch',
    name: 'One-piece ostomy pouch',
    category: 'ostomy',
    shortDescription:
      'Based on the SenSura® Mio one-piece system, this pouch combines a soft, body-flexible baseplate with the collecting bag in a single unit, so the skin barrier moves with the body instead of against it. The fabric cover is designed to feel discreet under clothing, and a built-in filter helps manage gas and odour during wear. Available in closed and drainable designs for colostomy and ileostomy use, with pre-cut and cut-to-fit baseplate options to suit different stoma sizes.',
    image: '/images/products/one-piece-ostomy-pouch.webp',
    imageAlt:
      'SenSura Mio one-piece ostomy pouch with soft fabric cover and flexible skin barrier',
    sizes: ['Cut-to-fit', 'Pre-cut 10–35 mm'],
  },
  {
    id: 'continence-catheter',
    slug: 'intermittent-catheter',
    name: 'Intermittent catheter',
    category: 'continence',
    shortDescription:
      'A compact intermittent catheter in the SpeediCath® range, pre-lubricated with a hydrophilic coating that activates with water for a smooth, ready-to-use surface on first contact. The shortened, discreet design folds down small enough to carry in a pocket or bag, making it suited to users who self-catheterise away from home. The closed, no-touch style tip reduces the chance of contaminating the catheter during insertion, and the catheter is intended for single use only.',
    image: '/images/products/intermittent-catheter.webp',
    imageAlt:
      'SpeediCath compact hydrophilic intermittent catheter in its compact packaging',
    sizes: ['CH 6–CH 16 (Nelaton tip)'],
  },
  {
    id: 'wound-foam',
    slug: 'foam-wound-dressing',
    name: 'Foam wound dressing',
    category: 'wound-care',
    shortDescription:
      'Modelled on Biatain® Silicone, a highly absorbent foam dressing with a gentle silicone adhesive border that holds the dressing in place without pulling on fragile peri-wound skin at removal. The three-dimensional foam structure locks away wound exudate and helps maintain a moist healing environment for low to heavily exuding wounds, while the waterproof outer film acts as a barrier to external bacteria and fluid. Can typically stay in place for several days between changes, reducing disturbance to the healing wound bed.',
    image: '/images/products/foam-wound-dressing.webp',
    imageAlt:
      'Biatain Silicone foam wound dressing with soft silicone adhesive border',
    sizes: ['10 × 10 cm', '15 × 15 cm', '20 × 20 cm'],
  },
  {
    id: 'urology-catheter',
    slug: 'urethral-catheter',
    name: 'Urethral catheter',
    category: 'urology',
    shortDescription:
      "A urethral catheter for short- or longer-term bladder drainage in a clinical setting, used where continuous rather than intermittent emptying is required. Constructed from a soft, biocompatible material designed to sit comfortably in the urethra, with a balloon-retention design to keep the catheter in position once placed. Sizing and material (latex-free options included) should be matched to the patient and the clinical indication; always follow the manufacturer's instructions for use and insertion technique. Coloplast-equivalent product details were not available on the regional sites reviewed, so this listing uses general category information — please contact us for current Coloplast catalogue options.",
    image: placeholderImage,
    imageAlt: 'Placeholder image for a urethral catheter',
  },
  {
    id: 'ostomy-two-piece',
    slug: 'two-piece-ostomy-barrier',
    name: 'Two-piece ostomy barrier',
    category: 'ostomy',
    shortDescription:
      "Based on SenSura® Mio Click, a two-piece system that separates the skin barrier from the pouch, so the barrier can stay on the skin for several days while pouches are changed as needed without disturbing it. The audible and tactile 'click' coupling gives reassurance that the pouch is securely attached, and the flexible barrier material is designed to follow body movement and reduce leakage risk around the stoma. Offered in convex and flat baseplate versions to suit different stoma and peristomal skin profiles.",
    image: '/images/products/two-piece-ostomy-barrier.webp',
    imageAlt:
      'SenSura Mio Click two-piece ostomy baseplate and pouch with click coupling',
  },
  {
    id: 'continence-leg-bag',
    slug: 'urine-leg-bag',
    name: 'Urine leg bag',
    category: 'continence',
    shortDescription:
      'Based on Conveen® Security+, a discreet urine leg bag designed to be worn under clothing and connected to an indwelling catheter or a urisheath for continuous drainage. Fabric backing is positioned against the skin for comfort, a anti-reflux valve helps limit backflow of urine towards the user, and a twist/click or lever-style tap allows controlled, low-splash emptying. Available with different tubing lengths and inlet valve types to suit left- or right-leg wear and different mobility needs.',
    image: '/images/products/urine-leg-bag.webp',
    imageAlt:
      'Conveen Security+ urine leg bag with fabric backing and drainage tap',
    sizes: ['350 ml', '500 ml', '750 ml'],
  },
  {
    id: 'wound-alginate',
    slug: 'alginate-wound-dressing',
    name: 'Alginate wound dressing',
    category: 'wound-care',
    shortDescription:
      'Based on Biatain® Alginate, a soft non-woven dressing made from calcium alginate fibres that gel on contact with wound exudate, helping to maintain a moist wound environment and supporting autolytic debridement of moderately to heavily exuding wounds. The gelling action also assists in managing minor bleeding at the wound surface. Supplied as flat sheets or rope/ribbon format for packing deeper or cavity wounds, and is intended to be used with a secondary dressing to hold it in place.',
    image: '/images/products/alginate-wound-dressing.webp',
    imageAlt: 'Biatain Alginate soft wound dressing sheet',
    sizes: ['10 × 10 cm', 'Rope 2 g', 'Rope 4.4 g'],
  },
  {
    id: 'urology-drainage',
    slug: 'urine-drainage-bag',
    name: 'Urine drainage bag',
    category: 'urology',
    shortDescription:
      'Based on Conveen® bedside drainage bags, a larger-capacity bag intended for overnight or extended continuous drainage, typically connected to a leg bag or catheter via a link tube. Features an anti-reflux valve to reduce backflow, a hanging strap or stand hook for bedside or wheelchair positioning, and a simple drainage outlet for emptying without disconnecting the system. Designed for single use within the period specified by local clinical guidance.',
    image: '/images/products/urine-drainage-bag.webp',
    imageAlt: 'Conveen bedside urine drainage bag with hanging strap',
    sizes: ['2 litre'],
  },
  {
    id: 'ostomy-accessories',
    slug: 'ostomy-accessory-pack',
    name: 'Ostomy accessory pack',
    category: 'ostomy',
    shortDescription:
      'Based on the Brava® accessories range, a set of skin-care and leak-prevention products designed to be used alongside any ostomy pouching system. Typically includes a protective barrier seal or ring to fill uneven skin contours around the stoma and reduce the risk of leakage and skin irritation, along with options such as skin barrier spray or wipes to protect skin at baseplate changes, and adhesive remover wipes for gentler, residue-free removal. Suitable for sensitive peristomal skin and for use regardless of pouch brand.',
    image: '/images/products/ostomy-accessory-pack.webp',
    imageAlt: 'Brava ostomy accessories including protective skin barrier seal',
  },
  {
    id: 'continence-irrigation',
    slug: 'anal-irrigation-system',
    name: 'Anal irrigation system',
    category: 'continence',
    shortDescription:
      'A bowel (transanal) irrigation system used, under guidance from a healthcare professional, to help manage chronic constipation, faecal incontinence, or bowel emptying difficulties by instilling water into the bowel through a rectal catheter or cone. Intended to give users a structured, predictable bowel routine as part of a wider bowel management programme. This product category was not listed with full specifications on the regional Coloplast sites reviewed, so this entry uses general category information — please contact us for current Coloplast catalogue options and clinical guidance material.',
    image: placeholderImage,
    imageAlt: 'Placeholder image for an anal irrigation system',
  },
  {
    id: 'wound-barrier',
    slug: 'skin-barrier-film',
    name: 'Skin barrier film',
    category: 'wound-care',
    shortDescription:
      'Based on Brava® Skin Barrier spray/wipe, a no-sting liquid film that dries to form a thin, breathable protective layer on the skin before a dressing, pouch baseplate, or adhesive device is applied. Helps shield skin from adhesive trauma, moisture, and friction at removal, which can reduce the risk of skin stripping with frequent dressing or baseplate changes. Suitable for use around wounds, stomas, and other skin areas subject to repeated adhesive contact.',
    image: '/images/products/skin-barrier-film.webp',
    imageAlt: 'Brava no-sting skin barrier film spray',
  },
  {
    id: 'urology-insertion',
    slug: 'catheter-insertion-pack',
    name: 'Catheter insertion pack',
    category: 'urology',
    shortDescription:
      'Based on SpeediCath® Compact Set, an all-in-one intermittent catheter with an integrated collection bag, designed for users who need a fully self-contained, no-spill option for catheterising outside the home. The hydrophilic catheter is pre-lubricated and activates with the water already sealed inside the pack, so no extra water source is needed, and the compact folded format fits discreetly into a small bag or pocket. A closed system from insertion to disposal, intended for single use.',
    image: '/images/products/catheter-insertion-pack.webp',
    imageAlt:
      'SpeediCath Compact Set all-in-one catheter with integrated collection bag',
  },
  {
    id: 'continence-speedicath',
    slug: 'speedicath-intermittent-catheter',
    name: 'SpeediCath®',
    category: 'continence',
    shortDescription:
      "Coloplast's flagship hydrophilic intermittent catheter range, available in male, female, and paediatric lengths and in Standard, Compact, and Compact Set formats to suit different routines and levels of discretion. Every SpeediCath catheter has an integrated hydrophilic coating that stays bonded to the catheter surface rather than flaking off, and activates with water to create a smooth, low-friction surface that is designed to be gentle on the urethra on insertion and withdrawal. The closed, no-touch tip design is intended to reduce the risk of introducing bacteria during self-catheterisation, and each catheter is for single use only.",
    image: '/images/products/speedicath-intermittent-catheter.webp',
    imageAlt: 'SpeediCath hydrophilic intermittent catheter, ready to use',
    sizes: ['CH 6–CH 16, Standard and Compact lengths'],
  },
  */
]

export function productsByCategory(slug: Product['category']): Product[] {
  return products.filter((product) => product.category === slug)
}