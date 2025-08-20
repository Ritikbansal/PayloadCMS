// // scripts/seedLanguages.ts
// import payload from 'payload'
// import config from 'payload.config'

// const defaultLanguages = [
//   { code: 'en', name: 'English', flag: '🇺🇸' },
//   { code: 'es', name: 'Español', flag: '🇪🇸' },
//   { code: 'fr', name: 'Français', flag: '🇫🇷' },
//   { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
//   { code: 'it', name: 'Italiano', flag: '🇮🇹' },
//   { code: 'pt', name: 'Português', flag: '🇵🇹' },
//   { code: 'zh', name: '中文', flag: '🇨🇳' },
//   { code: 'ja', name: '日本語', flag: '🇯🇵' },
//   { code: 'ko', name: '한국어', flag: '🇰🇷' },
//   { code: 'ar', name: 'العربية', flag: '🇸🇦' },
//   { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
//   { code: 'ru', name: 'Русский', flag: '🇷🇺' },
// ]

// async function seed() {
//   await payload.init({ config })

//   for (const lang of defaultLanguages) {
//     const existing = await payload.find({
//       collection: 'languages',
//       where: { code: { equals: lang.code } },
//     })

//     if (existing.docs.length === 0) {
//       await payload.create({
//         collection: 'languages',
//         data: lang,
//       })
//       console.log(`✅ Seeded ${lang.name}`)
//     } else {
//       console.log(`⚡ Skipped ${lang.name} (already exists)`)
//     }
//   }

//   process.exit(0)
// }

// seed()
