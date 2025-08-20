import { Block } from 'payload'

const ProductPricing: Block = {
  slug: 'productPricing',
  fields: [
    {
      name: 'heading',
      type: 'text',
      localized: true,
      defaultValue: 'Choose Your Plan',
    },
    {
      name: 'subheading',
      type: 'textarea',
      localized: true,
      defaultValue:
        'Start free and scale as you grow. All plans include our core features with no hidden fees.',
    },
    {
      name: 'plans',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'price', type: 'text' },
        { name: 'period', type: 'text' },
        { name: 'description', type: 'textarea', localized: true },
        {
          name: 'features',
          type: 'array',
          fields: [{ name: 'item', type: 'text', localized: true }],
        },
        { name: 'popular', type: 'checkbox', defaultValue: false },
      ],
      defaultValue: [
        {
          name: 'Starter',
          price: '$9',
          period: '/month',
          description: 'Perfect for individuals and small projects',
          features: [
            { item: 'Up to 3 projects' },
            { item: '5GB storage' },
            { item: 'Basic analytics' },
            { item: 'Email support' },
            { item: 'Standard templates' },
          ],
          popular: false,
        },
        {
          name: 'Professional',
          price: '$29',
          period: '/month',
          description: 'Ideal for growing teams and businesses',
          features: [
            { item: 'Unlimited projects' },
            { item: '100GB storage' },
            { item: 'Advanced analytics' },
            { item: 'Priority support' },
            { item: 'Custom branding' },
            { item: 'Team collaboration' },
            { item: 'API access' },
          ],
          popular: true,
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          period: '',
          description: 'For large organizations with specific needs',
          features: [
            { item: 'Everything in Professional' },
            { item: 'Unlimited storage' },
            { item: 'Custom integrations' },
            { item: 'Dedicated support' },
            { item: 'SLA guarantee' },
            { item: 'Advanced security' },
            { item: 'Custom training' },
          ],
          popular: false,
        },
      ],
    },
    {
      name: 'bottomNote',
      type: 'text',
      localized: true,
      defaultValue: 'All plans include a 14-day free trial. No credit card required.',
    },
  ],
}

export default ProductPricing
