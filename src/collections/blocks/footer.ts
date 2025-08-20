import { Block } from 'payload'

const Footer: Block = {
  slug: 'footer',
  labels: {
    singular: 'Footer',
    plural: 'Footers',
  },
  fields: [
    {
      name: 'companyLinks',
      localized: true,
      type: 'array',
      label: 'Company',
      defaultValue: [
        { label: 'About Us', url: '/about-us' },
        { label: 'Careers', url: '/careers' },
        { label: 'Press', url: '/press' },
        { label: 'Blog', url: '/blog' },
      ],
      fields: [
        { name: 'label', type: 'text', required: true, localized: true },
        { name: 'url', type: 'text', required: true, localized: true },
      ],
    },
    {
      name: 'productLinks',
      type: 'array',
      label: 'Products',
      defaultValue: [
        { label: 'Features', url: '/features' },
        { label: 'Pricing', url: '/pricing' },
        { label: 'API', url: '/api' },
        { label: 'Documentation', url: '/docs' },
      ],
      fields: [
        { name: 'label', type: 'text', required: true, localized: true },
        { name: 'url', type: 'text', required: true, localized: true },
      ],
    },
    {
      name: 'supportLinks',
      type: 'array',
      label: 'Support',
      defaultValue: [
        { label: 'Help Center', url: '/help-center' },
        { label: 'Contact Us', url: '/contact' },
        { label: 'Status', url: '/status' },
        { label: 'Community', url: '/community' },
      ],
      fields: [
        { name: 'label', type: 'text', required: true, localized: true },
        { name: 'url', type: 'text', required: true, localized: true },
      ],
    },
    {
      name: 'legalLinks',
      type: 'array',
      label: 'Legal',
      defaultValue: [
        { label: 'Privacy Policy', url: '/privacy-policy' },
        { label: 'Terms of Service', url: '/terms' },
        { label: 'Cookie Policy', url: '/cookies' },
      ],
      fields: [
        { name: 'label', type: 'text', required: true, localized: true },
        { name: 'url', type: 'text', required: true, localized: true },
      ],
    },
    {
      name: 'languages',
      type: 'relationship',
      relationTo: 'languages',
      hasMany: true,
      label: 'Languages',
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links',
      defaultValue: [{ platform: 'LinkedIn', url: '/linkedin' }],
      fields: [
        {
          name: 'platform',
          type: 'select',
          required: true,
          localized: true,
          options: [{ label: 'LinkedIn', value: 'linkedin' }],
          defaultValue: 'linkedin',
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          localized: true,
          defaultValue: '/linkedin',
        },
      ],
    },
    {
      name: 'copyright',
      type: 'text',
      localized: true,
      defaultValue: '© 2024 Your Company. All rights reserved.',
    },
  ],
}

export default Footer
