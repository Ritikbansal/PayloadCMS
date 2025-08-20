'use client'
import { useState } from 'react'

const locales = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
]

export default function LanguageSwitcher() {
  const [current, setCurrent] = useState('en')

  const switchLanguage = (code: string) => {
    setCurrent(code)
    // Option 1: Redirect to a locale-based route
    window.location.href = `/${code}${window.location.pathname}`
    // Option 2: Store locale in cookie or context if using API calls
  }

  return (
    <div className="relative">
      <select
        value={current}
        onChange={(e) => switchLanguage(e.target.value)}
        className="rounded-lg border px-3 py-2 text-sm shadow-sm cursor-pointer"
      >
        {locales.map((locale) => (
          <option key={locale.code} value={locale.code}>
            {locale.label}
          </option>
        ))}
      </select>
    </div>
  )
}
