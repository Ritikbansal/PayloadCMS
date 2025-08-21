import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL!

  const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/pages?limit=100`, {
    next: { revalidate: 60 },
  })

  const data = await res.json()

  return data.docs.map((page: any) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: page.updatedAt
      ? new Date(page.updatedAt)
      : page.createdAt
        ? new Date(page.createdAt)
        : new Date(),
  }))
}
