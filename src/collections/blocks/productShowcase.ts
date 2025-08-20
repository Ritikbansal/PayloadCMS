import { Block } from 'payload'

const ProductShowcase: Block = {
  slug: 'productShowcase',
  fields: [
    {
      name: 'sections',
      type: 'array',
      fields: [
        { name: 'badge', type: 'text', localized: true },
        { name: 'title', type: 'text', localized: true, required: true },
        { name: 'description', type: 'textarea', localized: true },
        {
          name: 'list',
          type: 'array',
          fields: [{ name: 'item', type: 'text', localized: true }],
        },
        {
          name: 'cta',
          type: 'group',
          fields: [
            { name: 'text', type: 'text', localized: true },
            { name: 'link', type: 'text' },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media', // assumes you have media collection
        },
      ],
      defaultValue: [
        {
          badge: 'Workflow',
          title: 'Streamlined Development Process',
          description:
            'From ideation to deployment, our platform provides all the tools you need to build exceptional products efficiently.',
          list: [
            { item: 'Visual project planning and roadmaps' },
            { item: 'Integrated design and prototyping tools' },
            { item: 'Automated testing and deployment' },
            { item: 'Real-time team collaboration' },
          ],
          cta: { text: 'Learn More', link: '/learn-more' },
        },
        {
          badge: 'Collaboration',
          title: 'Built for Team Success',
          description:
            'Empower your team with collaborative tools that make working together seamless and productive.',
          list: [
            { item: 'Real-time editing and commenting' },
            { item: 'Version control and change tracking' },
            { item: 'Role-based permissions and access' },
            { item: 'Integrated communication tools' },
          ],
          cta: { text: 'Start Collaborating', link: '/collaborate' },
        },
      ],
    },
  ],
}

export default ProductShowcase
