import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ⚠️ Warning: this allows production builds even if ESLint errors exist
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en/home',
        permanent: true, // 308 permanent redirect
      },
      {
        source: '/home',
        destination: '/en/home',
        permanent: true, // 308 permanent redirect
      },
      {
        source: '/en',
        destination: '/en/home',
        permanent: true, // 308 permanent redirect
      },
    ]
  },
  // Your Next.js config here
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
