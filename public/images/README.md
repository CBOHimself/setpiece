# Image files

The site ships with SVG stand-ins so layouts have real files to load. Replace them when photography is ready, then point each product's `image` field in `src/data/products.ts` at the new file.

| File                        | Size                  | Use                                                  |
| --------------------------- | --------------------- | ---------------------------------------------------- |
| `setpiece-logo.png`         | 1197×291              | Official wordmark. Used in the header, footer, and maintenance page |
| `placeholder-product.svg`   | 800×600               | Temporary product image used by every listing        |
| `placeholder-warehouse.svg` | 1600×700              | Temporary stock / warehouse band on the home page    |
| `products/<slug>.webp`      | 800×600, under 200KB  | Final product photo. Name it with the product `slug` |
| `warehouse.webp`            | 1600×700, under 250KB | Final warehouse or stock photograph                  |

Product cards require an `imageAlt` string. Keep width and height in the markup when you swap the source.
