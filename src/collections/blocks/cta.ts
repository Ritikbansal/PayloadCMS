import { Block } from 'payload'

const CTA: Block = {
  slug: 'cta',
  labels: {
    singular: 'CTA Section',
    plural: 'CTA Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: 'Ready to Transform Your Business?',
    },
    {
      name: 'subheading',
      localized: true,
      type: 'textarea',
      defaultValue:
        'Join thousands of successful businesses already using our platform. Start your free trial today.',
    },
    {
      name: 'benefits',
      localized: true,
      type: 'array',
      defaultValue: [
        { text: '14-day free trial' },
        { text: 'No credit card required' },
        { text: 'Cancel anytime' },
      ],
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'primaryButton',
      localized: true,
      type: 'group',
      fields: [
        {
          name: 'text',
          localized: true,
          type: 'text',
          defaultValue: 'Start Free Trial',
        },
        {
          name: 'link',
          type: 'text',
          defaultValue: '/signup',
        },
      ],
    },
    {
      name: 'secondaryButton',
      type: 'group',
      fields: [
        {
          name: 'text',
          localized: true,
          type: 'text',
          defaultValue: 'Schedule Demo',
        },
        {
          name: 'link',
          type: 'text',
          defaultValue: '/demo',
        },
      ],
    },
    {
      name: 'trustBadge',
      localized: true,
      type: 'text',
      defaultValue: 'Join 10,000+ businesses already growing with us',
    },
  ],
}

export default CTA
