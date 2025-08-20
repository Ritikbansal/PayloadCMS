// blocks/Feature.ts
import { Block } from 'payload'

const Feature: Block = {
  slug: 'feature',
  labels: {
    singular: 'Feature',
    plural: 'Features',
  },
  fields: [
    {
      name: 'icon',
      type: 'select',
      required: true,
      defaultValue: 'zap',
      options: [
        { label: 'Zap (Lightning Fast)', value: 'zap' },
        { label: 'Shield (Enterprise Security)', value: 'shield' },
        { label: 'Users (Team Collaboration)', value: 'users' },
        { label: 'BarChart3 (Analytics)', value: 'bar-chart-3' },
        { label: 'Lock (Privacy First)', value: 'lock' },
        { label: 'Smartphone (Mobile Ready)', value: 'smartphone' },
      ],
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Lightning Fast',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue:
        'Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology.',
    },
  ],
}
export default Feature
