// blocks/FeatureList.ts
import { Block } from 'payload'

const FeatureList: Block = {
  slug: 'featureList',
  labels: {
    singular: 'Feature List',
    plural: 'Feature Lists',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      localized: true,
      defaultValue: 'Everything You Need to Succeed',
    },
    {
      name: 'subheading',
      type: 'textarea',
      localized: true,
      defaultValue:
        'Powerful features designed to help you work smarter, not harder. Built for teams of all sizes.',
    },
    {
      name: 'features',
      type: 'array',
      localized: true,
      defaultValue: [
        {
          icon: 'zap',
          title: 'Lightning Fast',
          description:
            'Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology.',
        },
        {
          icon: 'shield',
          title: 'Enterprise Security',
          description:
            'Bank-level security with end-to-end encryption, ensuring your data is always protected.',
        },
        {
          icon: 'users',
          title: 'Team Collaboration',
          description:
            'Seamlessly collaborate with your team members in real-time, no matter where they are.',
        },
        {
          icon: 'barChart3',
          title: 'Advanced Analytics',
          description:
            'Get deep insights into your business with comprehensive analytics and reporting tools.',
        },
        {
          icon: 'lock',
          title: 'Privacy First',
          description:
            'Your privacy is our priority. We never share your data and follow strict privacy policies.',
        },
        {
          icon: 'smartphone',
          title: 'Mobile Ready',
          description:
            'Access your workspace from anywhere with our fully responsive mobile-optimized platform.',
        },
      ],
      fields: [
        {
          name: 'icon',
          type: 'select',
          options: [
            { label: 'Zap', value: 'zap' },
            { label: 'Shield', value: 'shield' },
            { label: 'Users', value: 'users' },
            { label: 'Bar Chart', value: 'barChart3' },
            { label: 'Lock', value: 'lock' },
            { label: 'Smartphone', value: 'smartphone' },
          ],
          required: true,
          localized: true,
        },
        {
          name: 'title',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          localized: true,
        },
      ],
    },
  ],
}

export default FeatureList
