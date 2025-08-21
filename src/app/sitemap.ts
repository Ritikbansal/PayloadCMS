import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL!

  const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/pages?limit=100`, {
    next: { revalidate: 60 }, // regenerate sitemap every 60s
  })

  const data = await res.json()

  return data.docs.map((page: any) => ({
    url: `${baseUrl}/${page.slug === 'home' ? '' : page.slug}`,
    lastModified: page.updatedAt,
  }))
}
