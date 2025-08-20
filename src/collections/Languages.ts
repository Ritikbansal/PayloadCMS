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
}

export default Languages
