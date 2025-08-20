// blocks/Hero.ts
import { Block } from 'payload'

const Hero: Block = {
  slug: 'hero',
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge Text',
      localized: true,
      required: false,
      defaultValue: 'Trusted by 10,000+ customers',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Main Title',
      localized: true,
      required: true,
      defaultValue: 'Transform Your Business with',
    },
    {
      name: 'highlight',
      type: 'text',
      label: 'Highlighted Title Part',
      localized: true,
      required: false,
      defaultValue: 'Smart Solutions',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Subheading',
      localized: true,
      required: false,
      defaultValue:
        'Streamline your workflow, boost productivity, and achieve remarkable results with our cutting-edge platform designed for modern businesses.',
    },
    {
      name: 'primaryCta',
      type: 'group',
      label: 'Primary CTA',
      fields: [
        {
          name: 'text',
          type: 'text',
          localized: true,
          required: true,
          defaultValue: 'Get Started Free',
        },
        { name: 'link', type: 'text', required: true, defaultValue: '/signup' },
      ],
    },
    {
      name: 'secondaryCta',
      type: 'group',
      label: 'Secondary CTA',
      fields: [
        { name: 'text', type: 'text', localized: true, required: true, defaultValue: 'Watch Demo' },
        { name: 'link', type: 'text', required: true, defaultValue: '/demo' },
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
        { value: '99.9%', label: 'Uptime' },
        { value: '50M+', label: 'Requests Processed' },
        { value: '24/7', label: 'Support' },
      ],
    },
  ],
}

export default Hero
