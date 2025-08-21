import { Page } from '@/payload-types'
import { Star, Quote } from 'lucide-react'
type PageLayout = NonNullable<Page['layout']>
type TestimonialBlockType = Extract<PageLayout[number], { blockType: 'testimonial' }>

export function TestimonialBlock(testimonial: TestimonialBlockType) {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            {testimonial.heading}
            {/* Loved by Industry Leaders */}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {testimonial.subheading}
            {/* Join thousands of satisfied customers who have transformed their businesses with our
            platform. */}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonial.testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="relative p-6 rounded-2xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-200 dark:text-blue-800" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || '/placeholder.svg'}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            {testimonial.trustedByHeading}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {testimonial.trustedBy?.map((trustedBy, index) => {
              return (
                <div key={trustedBy?.id} className="text-2xl font-bold text-gray-400">
                  {trustedBy.company}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
