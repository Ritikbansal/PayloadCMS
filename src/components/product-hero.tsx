import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'
import { Page } from '@/payload-types'

type PageLayout = NonNullable<Page['layout']>
type ProductHeroBlock = Extract<PageLayout[number], { blockType: 'productHero' }>

export function ProductHero(props: ProductHeroBlock) {
  const { badge, title, highlight, subheading, primaryCta, secondaryCta, stats } = props

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-accent/10 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {badge && (
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
            {badge}
          </div>
        )}

        <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
          {title}
          {highlight && <span className="block text-accent">{highlight}</span>}
        </h1>

        {subheading && (
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subheading}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          {primaryCta && (
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
            >
              <a href={primaryCta.link}>
                {primaryCta.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          )}
          {secondaryCta && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg bg-transparent"
            >
              <a href={secondaryCta.link}>
                <Play className="mr-2 h-5 w-5" />
                {secondaryCta.text}
              </a>
            </Button>
          )}
        </div>

        {stats?.length > 0 && (
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-foreground">{s.value}</div>
                <div className="text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
