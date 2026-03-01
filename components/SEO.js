import Head from 'next/head'

const SITE_NAME = 'Actualidad Social Chile'
const SITE_URL  = 'https://actualidadsocialchile.vercel.app' // TODO: update when domain is set
const DEFAULT_DESCRIPTION = 'Condensando el Cuarto Poder: Medio informativo independiente comprometido con el periodismo crítico. Sin financiamiento corporativo, sin falsas neutralidades.'

/**
 * SEO component — renders Open Graph and standard meta tags in <head>.
 * Import and place at the top of every page component.
 *
 * @param {string} title       - Page title (appended with site name)
 * @param {string} description - Page description for og:description and meta description
 * @param {string} url         - Canonical URL for this page (defaults to site root)
 */
export default function SEO({ title, description = DEFAULT_DESCRIPTION, url = SITE_URL }) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME

  return (
    <Head>
      {/* Standard */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph (WhatsApp, Facebook, LinkedIn) */}
      <meta property="og:type"        content="website" />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={url} />

      {/* Twitter / X */}
      <meta name="twitter:card"        content="summary" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Head>
  )
}