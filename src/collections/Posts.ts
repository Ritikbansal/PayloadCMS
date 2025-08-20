import { CollectionConfig } from 'payload'

const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: 'Post',
    plural: 'Posts',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true, // ✅ multilingual titles
    },
    {
      name: 'content',
      type: 'richText',
      localized: true, // ✅ multilingual content
    },
    {
      name: 'publishedAt',
      type: 'date',
    },
  ],
}

export default Posts
