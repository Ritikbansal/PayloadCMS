// collections/Pages.ts
import { CollectionConfig } from 'payload'
import Hero from '@/collections/blocks/hero'
import Testimonial from '@/collections/blocks/testimonials'
import CTA from '@/collections/blocks/cta'
import FeatureList from './blocks/featureList'
import Footer from './blocks/footer'
import { seoFields } from './SEO'
import ProductPricing from './blocks/productPricing'
import ProductShowcase from './blocks/productShowcase'
import ProductHero from './blocks/productHero'
import ProductFeatures from './blocks/productFeatures'

const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true, // public API access for frontend
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      defaultValue: 'Transform Your Business with',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      localized: true,
      unique: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      localized: true,
      blocks: [
        Hero,
        FeatureList,
        Testimonial,
        CTA,
        ProductFeatures,
        ProductHero,
        ProductPricing,
        ProductShowcase,
        Footer,
      ],
    },
    seoFields,
  ],
}

export default Pages
