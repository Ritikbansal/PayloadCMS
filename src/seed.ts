// src/seed.ts
import payload from 'payload'
import config from '@/payload.config'
import { Config } from '@/payload-types'
export const runSeed = async () => {
  await payload.init({
    config,
  })

  await seed()
  process.exit(0)
}
function stringToRichText(text: string) {
  return {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      direction: 'ltr',
      children: [
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          direction: 'ltr',
          children: [
            {
              type: 'text',
              text,
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              version: 1,
            },
          ],
        },
      ],
    },
  }
}

export const seed = async () => {
  payload.logger.info('🌱 Starting full seed...')

  // --- 1. Upload sample media ---
  const logo = await payload.create({
    collection: 'media',
    data: { alt: 'MyApp Logo' },
    filePath: 'public/logo.png', // make sure file exists
  })

  const heroImg = await payload.create({
    collection: 'media',
    data: { alt: 'Hero Background' },
    filePath: 'public/hero.jpg',
  })

  // --- 2. Global: Footer ---
  await payload.updateGlobal({
    slug: 'footer',
    data: {
      companyName: 'MyApp Inc.',
      copyrightText: {
        en: '© 2025 MyApp Inc. All rights reserved.',
        es: '© 2025 MyApp Inc. Todos los derechos reservados.',
      },
      links: [
        { label: { en: 'Privacy Policy', es: 'Política de privacidad' }, url: '/privacy' },
        { label: { en: 'Terms of Service', es: 'Términos de servicio' }, url: '/terms' },
        { label: { en: 'Contact', es: 'Contacto' }, url: '/contact' },
      ],
      socialLinks: [
        { platform: 'twitter', url: 'https://twitter.com/myapp' },
        { platform: 'linkedin', url: 'https://linkedin.com/company/myapp' },
      ],
    },
  })

  // --- 3. Pages ---
  await payload.create({
    collection: 'pages',
    data: {
      title: 'Home',
      slug: 'home',
      seo: {
        title: 'Welcome to MyApp',
        description: 'The best platform to grow your business.',
        keywords: 'business, SaaS, growth, platform',
        canonicalURL: 'https://example.com/',
        ogImage: heroImg.id,
      },
      layout: [
        {
          blockType: 'hero',
          heading: {
            en: 'Build Smarter, Grow Faster',
            es: 'Construye más inteligente, crece más rápido',
          },
          subheading: {
            en: 'All-in-one SaaS platform for modern teams.',
            es: 'Plataforma SaaS todo en uno para equipos modernos.',
          },
          image: heroImg.id,
          ctaLabel: { en: 'Get Started', es: 'Comenzar' },
          ctaLink: '/signup',
        },
        {
          blockType: 'feature-list',
          features: [
            {
              title: { en: 'Fast Setup', es: 'Configuración rápida' },
              description: { en: 'Deploy in minutes', es: 'Implementa en minutos' },
            },
            {
              title: { en: 'Secure', es: 'Seguro' },
              description: {
                en: 'Enterprise-grade security',
                es: 'Seguridad de nivel empresarial',
              },
            },
            {
              title: { en: 'Scalable', es: 'Escalable' },
              description: { en: 'Grows with your business', es: 'Crece con tu negocio' },
            },
          ],
        },
        {
          blockType: 'testimonial-block',
          testimonials: [
            {
              name: 'Jane Doe',
              quote: {
                en: 'This platform changed our business!',
                es: '¡Esta plataforma cambió nuestro negocio!',
              },
            },
            { name: 'John Smith', quote: { en: 'Super easy to use.', es: 'Súper fácil de usar.' } },
          ],
        },
        {
          blockType: 'cta',
          heading: {
            en: 'Ready to Transform Your Business?',
            es: '¿Listo para transformar tu negocio?',
          },
          subheading: {
            en: 'Join thousands of successful businesses already using our platform.',
            es: 'Únete a miles de negocios exitosos que ya usan nuestra plataforma.',
          },
          benefits: [
            { text: { en: '14-day free trial', es: 'Prueba gratuita de 14 días' } },
            { text: { en: 'No credit card required', es: 'No se requiere tarjeta de crédito' } },
          ],
          primaryButton: {
            label: { en: 'Start Free Trial', es: 'Comenzar prueba gratis' },
            link: '/signup',
          },
          secondaryButton: {
            label: { en: 'Schedule Demo', es: 'Agendar demo' },
            link: '/demo',
          },
        },
      ],
    },
  })

  // --- 4. Blog Posts ---
  await payload.create({
    collection: 'posts',
    data: {
      title: {
        en: 'Welcome to our Blog',
        es: 'Bienvenido a nuestro blog',
      },
      slug: 'welcome-blog',
      content: {
        en: stringToRichText('This is the first post seeded into Payload.'),
        es: stringToRichText('Este es el primer post sembrado en Payload.'),
      },
      publishedAt: new Date().toISOString(),
    },
  })

  // --- 5. Test User ---
  await payload.create({
    collection: 'users',
    data: {
      email: 'admin@example.com',
      password: 'test1234',
      roles: ['admin'],
    },
  })

  payload.logger.info('✅ Finished seeding all data')
}
