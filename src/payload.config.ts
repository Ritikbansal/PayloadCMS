// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Posts from './collections/Posts'
import Pages from './collections/Pages'
import ContactSubmission from './collections/ContactSubmission'
import FeatureList from './collections/blocks/featureList'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Posts, Pages, ContactSubmission],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI!,
  }),
  localization: {
    locales: ['en', 'es', 'fr'],
    defaultLocale: 'en',
    fallback: true,
  },
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
