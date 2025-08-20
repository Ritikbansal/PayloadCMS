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
export async function generateMetadata() {
  const page: Page = await getPage('home')
  return seoToMetadata(page?.seo, page?.title)
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const page: Page = await getPage('home', (await params).lang)
  if (!page?.layout) {
    notFound()
  }
  const hero = page.layout.find((l) => l.blockType === 'hero')
  const featureList = page.layout.find((l) => l.blockType === 'featureList')
  const testimonials = page.layout.find((l) => l.blockType === 'testimonial')
  const cta = page.layout.find((l) => l.blockType === 'cta')
  const footer = page.layout.find((l) => l.blockType === 'footer')
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
        {footer && <Footer {...footer} />}
      </main>
    </>
  )
}
