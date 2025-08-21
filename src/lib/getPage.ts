export async function getPage(slug: string, locale = 'en') {
  const baseUrl =
    process.env.NEXT_PUBLIC_PAYLOAD_URL ||
    (typeof window !== 'undefined'
      ? window.location.origin
      : process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000')

  const res = await fetch(`${baseUrl}/api/pages?where[slug][equals]=${slug}&locale=${locale}`, {
    cache: 'no-store',
  })

  if (!res.ok) throw new Error('Failed to fetch page')

  const data = await res.json()
  return data.docs[0]
}
