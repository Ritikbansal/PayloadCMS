import { Block } from 'payload'

const Testimonial: Block = {
  slug: 'testimonial',
  labels: {
    singular: 'Testimonial Block',
    plural: 'Testimonial Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: 'Loved by Industry Leaders',
    },
    {
      name: 'subheading',
      type: 'textarea',
      localized: true,
      defaultValue:
        'Join thousands of satisfied customers who have transformed their businesses with our platform.',
    },
    {
      name: 'trustedByHeading',
      type: 'text',
      localized: true,
      defaultValue: 'Trusted by companies worldwide',
    },
    {
      name: 'testimonials',
      type: 'array',
      localized: true,
      required: true,
      defaultValue: [
        {
          name: 'Sarah John',
          role: 'CEO, TechStart',
          avatar: '/professional-woman-ceo.png',
          content:
            'This platform has completely transformed how we operate. The efficiency gains are remarkable, and our team productivity has increased by 300%.',
          rating: 5,
        },
        {
          name: 'Michael Chen',
          role: 'CTO, InnovateCorp',
          avatar: '/professional-man-cto.png',
          content:
            "The security features and reliability are outstanding. We've had zero downtime since switching, and the support team is incredibly responsive.",
          rating: 5,
        },
        {
          name: 'Emily Guez',
          role: 'Product Manager, GrowthLab',
          avatar: '/professional-woman-product-manager.png',
          content:
            'The analytics and insights have been game-changing for our decision-making process. We can now make data-driven decisions with confidence.',
          rating: 5,
        },
      ],
      fields: [
        {
          name: 'name',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'role',
          localized: true,
          type: 'text',
        },
        {
          name: 'avatar',
          localized: true,
          type: 'text', // could be an "upload" field if you want media library integration
        },
        {
          localized: true,
          name: 'content',
          type: 'textarea',
          required: true,
        },
        {
          name: 'rating',
          localized: true,
          type: 'number',
          min: 1,
          max: 5,
          defaultValue: 5,
        },
      ],
    },
    {
      name: 'trustedBy',
      localized: true,
      type: 'array',
      defaultValue: [
        { company: 'TechStart' },
        { company: 'InnovateCorp' },
        { company: 'GrowthLab' },
        { company: 'NextGen' },
        { company: 'FutureTech' },
      ],
      fields: [
        {
          name: 'company',
          type: 'text',
        },
      ],
    },
  ],
}

export default Testimonial
