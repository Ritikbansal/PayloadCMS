import { Shield, Zap, Users, BarChart3, Lock, Smartphone } from 'lucide-react'
import { Page } from '@/payload-types'

type PageLayout = NonNullable<Page['layout']>
type FeatureList = Extract<PageLayout[number], { blockType: 'featureList' }>
const features = {
  zap: Zap,
  shield: Shield,
  users: Users,
  barChart3: BarChart3,
  lock: Lock,
  smartphone: Smartphone,
}

export type FeatureItem = {
  id?: string | null | undefined
  icon: keyof typeof features
  title: string
  description: string
}

export type FeatureListBlock = {
  heading?: string | null | undefined
  subheading?: string | null
  features: FeatureItem[] | undefined | null
}

export function FeatureList(feature: FeatureList) {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            {feature.heading}
            {/* Everything You Need to Succeed */}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {feature.subheading}
            {/* Powerful features designed to help you work smarter, not harder. Built for teams of all
            sizes. */}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feature.features.map((feature) => {
            const Icon = features[feature.icon]
            return (
              <div
                key={feature.id}
                className="group p-6 rounded-2xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
