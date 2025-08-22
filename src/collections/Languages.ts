import { CollectionConfig } from 'payload'

const Languages: CollectionConfig = {
  slug: 'languages',
  labels: {
    singular: 'Language',
    plural: 'Languages',
  },
  fields: [
    { name: 'code', type: 'text', required: true },
    { name: 'name', type: 'text', required: true },
    { name: 'flag', type: 'text', required: true },
  ],
  defaultSort: 'name',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
}

export default Languages
