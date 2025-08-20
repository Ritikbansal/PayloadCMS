// src/blocks/ProductFeatures.ts
import { Block } from 'payload'

export const ProductFeatures: Block = {
  slug: 'productFeatures',
  labels: {
    singular: 'Product Features',
    plural: 'Product Features',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'Everything You Need to Succeed',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Subheading',
      defaultValue:
        'Powerful features designed to streamline your workflow and accelerate your product development process.',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      minRows: 1,
      fields: [
        {
          name: 'icon',
          type: 'text', // you can later use a select with options if you want to limit
          label: 'Icon (Lucide name)',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
        },
        {
          name: 'badge',
          type: 'text',
          label: 'Badge',
        },
      ],
      defaultValue: [
        {
          icon: 'Zap',
          title: 'Lightning Fast',
          description: 'Built for speed with optimized performance and instant loading times.',
          badge: 'Performance',
        },
        {
          icon: 'Shield',
          title: 'Enterprise Security',
          description:
            'Bank-grade security with end-to-end encryption and compliance certifications.',
          badge: 'Security',
        },
        {
          icon: 'Users',
          title: 'Team Collaboration',
          description: 'Real-time collaboration tools that keep your team in sync and productive.',
          badge: 'Collaboration',
        },
        {
          icon: 'BarChart3',
          title: 'Advanced Analytics',
          description: 'Deep insights and analytics to help you make data-driven decisions.',
          badge: 'Analytics',
        },
        {
          icon: 'Palette',
          title: 'Custom Branding',
          description: 'Fully customizable interface that matches your brand identity perfectly.',
          badge: 'Design',
        },
        {
          icon: 'Code',
          title: 'Developer API',
          description: 'Comprehensive REST API with extensive documentation and SDKs.',
          badge: 'Integration',
        },
        {
          icon: 'Globe',
          title: 'Global CDN',
          description: 'Worldwide content delivery network for optimal performance everywhere.',
          badge: 'Infrastructure',
        },
        {
          icon: 'Smartphone',
          title: 'Mobile Ready',
          description: 'Responsive design that works perfectly on all devices and screen sizes.',
          badge: 'Mobile',
        },
        {
          icon: 'Lock',
          title: 'Data Privacy',
          description: 'GDPR compliant with complete control over your data and privacy settings.',
          badge: 'Privacy',
        },
      ],
    },
  ],
}

export default ProductFeatures
