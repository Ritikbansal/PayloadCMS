import { Field } from 'payload'

export const seoFields: Field = {
  name: 'seo',
  type: 'group',
  label: 'SEO',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
      localized: true, // for i18n
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
      localized: true,
    },
    {
      name: 'canonicalURL',
      label: 'Canonical URL',
      type: 'text',
    },
    {
      name: 'ogTitle',
      label: 'OpenGraph Title',
      type: 'text',
      localized: true,
    },
    {
      name: 'ogDescription',
      label: 'OpenGraph Description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'twitterCard',
      label: 'Twitter Card',
      type: 'select',
      options: [
        { label: 'Summary', value: 'summary' },
        { label: 'Summary Large Image', value: 'summary_large_image' },
      ],
      defaultValue: 'summary_large_image',
    },
    {
      name: 'twitterTitle',
      label: 'Twitter Title',
      type: 'text',
      localized: true,
    },
    {
      name: 'twitterDescription',
      label: 'Twitter Description',
      type: 'textarea',
      localized: true,
    },
  ],
}
