// lib/seo.ts
import type { Metadata } from 'next'

export function seoToMetadata(seo: any, fallbackTitle?: string): Metadata {
  console.log('seo', seo)
  const ogImageUrl = seo?.ogImage?.url

  return {
    title: seo?.metaTitle || fallbackTitle || 'Default Title',
    description: seo?.metaDescription || 'Default description',
    alternates: {
      canonical: seo?.canonicalURL || 'https://mysite.com',
    },
    openGraph: {
      title: seo?.metaTitle || fallbackTitle,
      description: seo?.metaDescription,
      images: ogImageUrl ? [ogImageUrl] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.metaTitle,
      description: seo?.metaDescription,
      images: ogImageUrl ? [ogImageUrl] : [],
    },
  }
}
