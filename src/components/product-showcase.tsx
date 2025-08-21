import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Page } from '@/payload-types'

type PageLayout = NonNullable<Page['layout']>
type ProductShowcaseBlock = Extract<PageLayout[number], { blockType: 'productShowcase' }>

export function ProductShowcase(props: ProductShowcaseBlock) {
  const { sections } = props

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {sections?.map((section, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx === 0 ? 'mb-24' : ''}`}
          >
            <div className={`space-y-6 ${idx % 2 === 1 ? 'order-1 lg:order-2' : ''}`}>
              {section.badge && <Badge variant="outline">{section.badge}</Badge>}
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">{section.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{section.description}</p>

              <ul className="space-y-3">
                {section.list?.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item.item}</span>
                  </li>
                ))}
              </ul>

              {section.cta && (
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href={section.cta.link || '#'}>
                    {section.cta.text}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>

            <div className={`relative ${idx % 2 === 1 ? 'order-2 lg:order-1' : ''}`}>
              {section.cta && typeof section.cta !== 'string' && (
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-secondary/20 rounded-xl border border-border p-8 flex items-center justify-center">
                  <img
                    src={section?.cta?.link + '.png' || '#'}
                    alt={section.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
