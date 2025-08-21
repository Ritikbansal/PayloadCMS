import type { Metadata } from 'next'

type NullableString = string | null | undefined

type SEO = {
  title?: NullableString
  description?: NullableString
  canonicalURL?: NullableString
  ogTitle?: NullableString
  ogDescription?: NullableString
  ogImage?: { url: string } | null
  twitterCard?: 'summary' | 'summary_large_image' | null
  twitterTitle?: NullableString
  twitterDescription?: NullableString
  twitterImage?: { url: string } | null
}

export function seoToMetadata(
  seo: SEO,
  fallbackTitle: string = 'Default Title',
  fallbackDescription: string = 'Default description',
): Metadata {
  const title = seo?.title || fallbackTitle
  const description = seo?.description || fallbackDescription
  const ogTitle = seo?.ogTitle || title
  const ogDescription = seo?.ogDescription || description
  const twitterTitle = seo?.twitterTitle || title
  const twitterDescription = seo?.twitterDescription || description
  const ogImageUrl = seo?.ogImage?.url || undefined
  const twitterImageUrl = seo?.twitterImage?.url || ogImageUrl

  return {
    title,
    description,
    alternates: {
      canonical: seo?.canonicalURL || 'https://mysite.com',
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      images: ogImageUrl ? [{ url: ogImageUrl }] : [],
    },
    twitter: {
      card: seo?.twitterCard || 'summary_large_image',
      title: twitterTitle,
      description: twitterDescription,
      images: twitterImageUrl ? [twitterImageUrl] : [],
    },
  }
}
