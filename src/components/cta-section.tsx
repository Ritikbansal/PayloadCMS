import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Page } from '@/payload-types'

type PageLayout = NonNullable<Page['layout']>
type CTA = Extract<PageLayout[number], { blockType: 'cta' }>
export function CTASection(cta: CTA) {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 sm:p-12 text-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          </div>

          <div className="relative">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              {cta.heading}
              {/* Ready to Transform Your Business? */}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {cta.subheading}
              {/* Join thousands of successful businesses already using our platform. Start your free
              trial today. */}
            </p>

            {/* Benefits */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 text-blue-100">
              {cta.benefits?.map((benefit) => {
                return (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>{benefit.text}</span>
                  </div>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white cursor-pointer text-blue-600 hover:bg-gray-50 px-8 py-3 text-lg font-semibold"
              >
                {cta.primaryButton?.label}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white cursor-pointer text-white hover:bg-white/10 px-8 py-3 text-lg bg-transparent"
              >
                {cta.secondaryButton?.label}
              </Button>
            </div>

            {/* Trust Badge */}
            <p className="mt-6 text-sm text-blue-200">{cta.trustBadge}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
