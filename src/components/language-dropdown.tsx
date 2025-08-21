'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronDown, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ru-RU', name: 'Русский', flag: '🇷🇺' }, // Russian
  { code: 'zh-CN', name: '中文 (简体)', flag: '🇨🇳' }, // Chinese (Simplified)
]
type Language = {
  code: string
  name: string
  flag: string
}

export function LanguageDropdown() {
  const pathname = usePathname()
  const router = useRouter()
  const currentLang = pathname.split('/')[1] || 'en'

  const handleChangeLanguage = (lang: string) => {
    const newPath = pathname.replace(/^\/[a-zA-Z0-9-]+/, `/${lang}`)
    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Globe className="w-4 h-4 mr-2" />
          {currentLang.toUpperCase()}
          <ChevronDown className="w-3 h-3 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem key={language.code} onClick={() => handleChangeLanguage(language.code)}>
            <span>{language.flag}</span> {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
