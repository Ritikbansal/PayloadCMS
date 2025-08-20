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
        { label: 'About Us', url: '#' },
        { label: 'Careers', url: '#' },
        { label: 'Press', url: '#' },
        { label: 'Blog', url: '#' },
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
        { label: 'Features', url: '#' },
        { label: 'Pricing', url: '#' },
        { label: 'API', url: '#' },
        { label: 'Documentation', url: '#' },
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
        { label: 'Help Center', url: '#' },
        { label: 'Contact Us', url: '#' },
        { label: 'Status', url: '#' },
        { label: 'Community', url: '#' },
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
        { label: 'Privacy Policy', url: '#' },
        { label: 'Terms of Service', url: '#' },
        { label: 'Cookie Policy', url: '#' },
      ],
      fields: [
        { name: 'label', type: 'text', required: true, localized: true },
        { name: 'url', type: 'text', required: true, localized: true },
      ],
    },
    {
      name: 'languages',
      type: 'array',
      label: 'Languages',
      defaultValue: [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        { code: 'it', name: 'Italiano', flag: '🇮🇹' },
        { code: 'pt', name: 'Português', flag: '🇵🇹' },
        { code: 'zh', name: '中文', flag: '🇨🇳' },
        { code: 'ja', name: '日本語', flag: '🇯🇵' },
        { code: 'ko', name: '한국어', flag: '🇰🇷' },
        { code: 'ar', name: 'العربية', flag: '🇸🇦' },
        { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺' },
      ],
      fields: [
        { name: 'code', type: 'text', required: true },
        { name: 'name', type: 'text', required: true },
        { name: 'flag', type: 'text', required: true },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links',
      defaultValue: [
        { platform: 'Twitter', url: '#' },
        { platform: 'LinkedIn', url: '#' },
      ],
      fields: [
        { name: 'platform', type: 'text', required: true, localized: true },
        { name: 'url', type: 'text', required: true, localized: true },
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
