import { siteConfig } from '@/config/site'

type SeoProps = {
  title: string
  description: string
  path: string
}

export function Seo({ title, description, path }: SeoProps) {
  const url = new URL(path, siteConfig.url).href

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
    </>
  )
}
