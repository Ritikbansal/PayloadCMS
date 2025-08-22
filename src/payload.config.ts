// storage-adapter-import-placeholder
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { s3Storage } from '@payloadcms/storage-s3'
import Pages from './collections/Pages'
import ContactSubmission from './collections/ContactSubmission'
import Languages from './collections/Languages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Languages, Pages, ContactSubmission],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  cors: ['http://localhost:3000', 'http://restroworks.ritik.fyi', 'https://ritik.fyi'],
  csrf: ['http://localhost:3000', 'http://restroworks.ritik.fyi', 'https://ritik.fyi'],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI!,
  }),
  localization: {
    locales: ['en', 'es', 'fr', 'zh-CN', 'ru-RU'],
    defaultLocale: 'en',
    fallback: true,
  },
  sharp,
  plugins: [
    payloadCloudPlugin(),
    s3Storage({
      collections: {
        media: true, // matches your collection's slug
      },
      bucket: process.env.S3_BUCKET!,
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY!,
          secretAccessKey: process.env.S3_SECRET_KEY!,
        },
        region: 'auto', // REQUIRED for R2
        endpoint: process.env.S3_ENDPOINT, // REQUIRED for R2 custom endpoint
        forcePathStyle: true, // REQUIRED for R2!
      },
    }),
    // storage-adapter-placeholder
  ],
})
