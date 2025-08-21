import { HeroSection } from '@/components/hero-section'
import { FeatureList } from '@/components/feature-list'
import { TestimonialBlock } from '@/components/testimonial-block'
import { CTASection } from '@/components/cta-section'
import { LanguageDropdown } from '@/components/language-dropdown'
import { Footer } from '@/components/footer'
import { getPage } from '@/lib/getPage'
import { seoToMetadata } from '@/lib/seo'
import type { Page } from '@/payload-types'
import { notFound } from 'next/navigation'
import { ProductPricing } from '@/components/product-pricing'
import { ProductHero } from '@/components/product-hero'
import { ProductFeatures } from '@/components/product-features'
import { ProductShowcase } from '@/components/product-showcase'
export async function generateMetadata() {
  const page: Page = await getPage('home')
  return seoToMetadata(page?.seo, page?.title)
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const param = await params
  const page: Page = await getPage(param.slug, param.lang)
  if (!page?.layout) {
    notFound()
  }
  const hero = page.layout.find((l) => l.blockType === 'hero')
  const featureList = page.layout.find((l) => l.blockType === 'featureList')
  const testimonials = page.layout.find((l) => l.blockType === 'testimonial')
  const cta = page.layout.find((l) => l.blockType === 'cta')
  const footer = page.layout.find((l) => l.blockType === 'footer')
  const productHero = page.layout.find((l) => l.blockType === 'productHero')
  const features = page.layout.find((l) => l.blockType === 'productFeatures')
  const showcase = page.layout.find((l) => l.blockType === 'productShowcase')
  const pricing = page.layout.find((l) => l.blockType === 'productPricing')

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="absolute top-4 right-4 z-50">
          <LanguageDropdown />
        </div>
        {hero && <HeroSection {...hero} />}
        {featureList && <FeatureList {...featureList} />}
        {testimonials && <TestimonialBlock {...testimonials} />}
        {cta && <CTASection {...cta} />}
        {productHero && <ProductHero {...productHero} />}
        {features && <ProductFeatures {...features} />}
        {showcase && <ProductShowcase {...showcase} />}
        {pricing && <ProductPricing {...pricing} />}
        {footer && <Footer {...footer} />}
      </main>
    </>
  )
}
