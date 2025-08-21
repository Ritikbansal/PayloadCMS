import { LanguageDropdown } from '@/components/language-dropdown'
import { ProductPricing } from '@/components/product-pricing'
import { ProductHero } from '@/components/product-hero'
import { ProductFeatures } from '@/components/product-features'
import { Footer } from '@/components/footer'
import { ProductShowcase } from '@/components/product-showcase'
import { getPage } from '@/lib/getPage'
import { notFound } from 'next/navigation'
import { Page } from '@/payload-types'
import { seoToMetadata } from '@/lib/seo'
export async function generateMetadata() {
  const page: Page = await getPage('home')
  return seoToMetadata(page?.seo, page?.title)
}
export default async function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
  const page: Page = await getPage('products', (await params).lang)
  if (!page?.layout) {
    notFound()
  }

  const hero = page.layout.find((l) => l.blockType === 'productHero')
  const features = page.layout.find((l) => l.blockType === 'productFeatures')
  const showcase = page.layout.find((l) => l.blockType === 'productShowcase')
  const pricing = page.layout.find((l) => l.blockType === 'productPricing')
  const footer = page.layout.find((l) => l.blockType === 'footer')

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Language Dropdown */}
      <header className="fixed top-0 right-0 z-50 p-4">
        <LanguageDropdown />
      </header>

      {/* Main Content */}
      <main>
        {hero && <ProductHero {...hero} />}
        {features && <ProductFeatures {...features} />}
        {showcase && <ProductShowcase {...showcase} />}
        {pricing && <ProductPricing {...pricing} />}
      </main>

      {/* Footer */}
      {footer && <Footer {...footer} />}
    </div>
  )
}
