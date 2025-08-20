import { Field } from 'payload'

export const seoFields: Field = {
  name: 'seo',
  type: 'group',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'My Awesome Site',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: 'Welcome to my awesome site. We provide amazing stuff.',
    },
    {
      name: 'keywords',
      type: 'text',
      defaultValue: 'default, keywords, here',
    },
    {
      name: 'canonicalURL',
      type: 'text',
      defaultValue: 'https://restroworks.ritik.app',
    },
    {
      name: 'ogImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
