import { CollectionConfig } from 'payload'
import { seoFields } from './SEO'

const ContactSubmission: CollectionConfig = {
  slug: 'contact-submissions',
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'message', type: 'textarea', required: true },
    seoFields,
  ],
  admin: {
    useAsTitle: 'name',
  },
}

export default ContactSubmission
