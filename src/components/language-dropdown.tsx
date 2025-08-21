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

type Language = {
  code: string
  name: string
  flag: string
}

export function LanguageDropdown() {
  const [languages, setLanguages] = useState<Language[]>([])
  const pathname = usePathname()
  const router = useRouter()
  const currentLang = pathname.split('/')[1] || 'en'

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/languages`) // your Payload endpoint
        const data = await res.json()
        // assuming your payload collection has `code`, `name`, `flag`
        setLanguages(data.docs)
      } catch (error) {
        console.error('Failed to fetch languages', error)
      }
    }

    fetchLanguages()
  }, [])

  const handleChangeLanguage = (lang: string) => {
    // Match language prefix at the start of the pathname
    // Assuming language codes contain letters, numbers, and hyphens
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
