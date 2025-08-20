import { Button } from '@/components/ui/button'
import { ArrowRight, Star } from 'lucide-react'
import { Fragment } from 'react'
export type HeroBlock = {
  badge?: string | null
  title: string
  highlight?: string | null
  subheading?: string | null
  primaryCta: { text: string; link: string }
  secondaryCta: { text: string; link: string }
  stats?: { id?: string | null | undefined; value: string; label: string }[] | null
}

export function HeroSection(hero: HeroBlock) {
  if (!hero) return <>Hero not found</>
  return (
    <section className="relative px-4 py-20 text-center">
      <div className="mx-auto max-w-4xl">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 dark:bg-gray-800/30 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 backdrop-blur-sm border border-white/20 dark:border-gray-700/30">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          {hero.badge}
          {/* Trusted by 10,000+ customers */}
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          {hero.title}{' '}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {hero.highlight}
            {/* Smart Solutions */}
          </span>
        </h1>

        {/* Subheading */}
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300 sm:text-xl max-w-2xl mx-auto">
          {hero.subheading}
          {/* Streamline your workflow, boost productivity, and achieve remarkable results with our */}
          {/* cutting-edge platform designed for modern businesses. */}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-8 py-3 text-lg"
          >
            {hero.primaryCta.text}
            {/* Get Started Free */}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 text-lg cursor-pointer border-gray-300 dark:border-gray-600 bg-transparent"
          >
            {hero.secondaryCta.text}
            {/* Watch Demo */}
          </Button>
        </div>

        {/* Stats */}

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {hero.stats?.map((stat) => {
            return (
              <Fragment key={stat.id}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              </Fragment>
            )
          })}
        </div>
      </div>
    </section>
  )
}
