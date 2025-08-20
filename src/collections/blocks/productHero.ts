import { Block } from 'payload'

const ProductHero: Block = {
  slug: 'productHero',
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge Text',
      localized: true,
      defaultValue: '✨ New Features Available',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Main Title',
      localized: true,
      required: true,
      defaultValue: 'Build Better',
    },
    {
      name: 'highlight',
      type: 'text',
      label: 'Highlighted Title Part',
      localized: true,
      defaultValue: 'Products Faster',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Subheading',
      localized: true,
      defaultValue:
        'The complete platform for modern product development. Design, prototype, and ship with confidence.',
    },
    {
      name: 'primaryCta',
      type: 'group',
      fields: [
        { name: 'text', type: 'text', localized: true, defaultValue: 'Start Free Trial' },
        { name: 'link', type: 'text', defaultValue: '/signup' },
      ],
    },
    {
      name: 'secondaryCta',
      type: 'group',
      fields: [
        { name: 'text', type: 'text', localized: true, defaultValue: 'Watch Demo' },
        { name: 'link', type: 'text', defaultValue: '/demo' },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Stats',
      minRows: 1,
      fields: [
        { name: 'value', type: 'text', required: true },
        { name: 'label', type: 'text', localized: true, required: true },
      ],
      defaultValue: [
        { value: '50K+', label: 'Active Users' },
        { value: '99.9%', label: 'Uptime' },
        { value: '24/7', label: 'Support' },
      ],
    },
  ],
}

export default ProductHero
