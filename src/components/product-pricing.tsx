import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Star } from 'lucide-react'
import { Page } from '@/payload-types'

type PageLayout = NonNullable<Page['layout']>
type ProductPricingBlock = Extract<PageLayout[number], { blockType: 'productPricing' }>

export function ProductPricing(props: ProductPricingBlock) {
  const { heading, subheading, plans, bottomNote } = props

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{heading}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans?.map((plan, i) => (
            <Card
              key={i}
              className={`relative ${plan.popular ? 'border-accent shadow-lg scale-105' : 'border-border'} bg-card`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-card-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features?.map((f, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-card-foreground">{f.item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    plan.popular
                      ? 'bg-accent hover:bg-accent/90 text-accent-foreground'
                      : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                  }`}
                  size="lg"
                >
                  <a href={plan.name === 'Enterprise' ? '/contact-sales' : '/signup'}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {bottomNote && (
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">{bottomNote}</p>
          </div>
        )}
      </div>
    </section>
  )
}
