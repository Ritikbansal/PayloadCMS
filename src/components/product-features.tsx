import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Page } from '@/payload-types'
import * as Icons from 'lucide-react'

type PageLayout = NonNullable<Page['layout']>
type ProductFeaturesBlock = Extract<PageLayout[number], { blockType: 'productFeatures' }>

export function ProductFeatures(props: ProductFeaturesBlock) {
  const { heading, subheading, features } = props

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {heading && (
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{heading}</h2>
          )}
          {subheading && (
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{subheading}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features?.map((feature, index) => {
            const Icon =
              feature.icon && Icons[feature.icon as keyof typeof Icons]
                ? Icons[feature.icon as keyof typeof Icons]
                : Icons.Zap

            return (
              <Card
                key={feature.id ?? index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    {feature.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                  {feature.title && (
                    <CardTitle className="text-xl text-card-foreground group-hover:text-accent transition-colors">
                      {feature.title}
                    </CardTitle>
                  )}
                </CardHeader>
                <CardContent>
                  {feature.description && (
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
