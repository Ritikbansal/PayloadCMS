import { CollectionConfig } from 'payload'

const ContactSubmission: CollectionConfig = {
  slug: 'contact-submissions',
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'message', type: 'textarea', required: true },
  ],
  admin: {
    useAsTitle: 'name',
  },
}

export default ContactSubmission
