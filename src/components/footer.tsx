'use client'

import { Page } from '@/payload-types'

type PageLayout = NonNullable<Page['layout']>
type Footer = Extract<PageLayout[number], { blockType: 'footer' }>
export function Footer(footer: Footer) {
  return (
    <>
      <footer className="relative bg-white/10 dark:bg-gray-900/50 backdrop-blur-md border-t border-white/20 dark:border-gray-700/50 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                {footer.companyLinks?.map((link) => {
                  return (
                    <li key={link.id}>
                      <a
                        href={link.url}
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Products</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                {footer.productLinks?.map((link) => {
                  return (
                    <li key={link.id}>
                      <a
                        href={link.url}
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                {footer.supportLinks?.map((link) => {
                  return (
                    <li key={link.id}>
                      <a
                        href={link.url}
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Language & Legal */}
            <div className="space-y-4">
              {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Language</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLanguageModalOpen(true)}
                className="bg-white/10 cursor-pointer dark:bg-gray-800/50 backdrop-blur-md border-white/20 dark:border-gray-700/50 text-gray-700 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-200"
              >
                <Globe className="w-4 h-4 mr-2" />
                <span className="mr-1">{selectedLanguage.flag}</span>
                <span>{selectedLanguage.name}</span>
              </Button> */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Legal</h3>

              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mt-4">
                {footer.legalLinks?.map((link) => {
                  return (
                    <li key={link.id}>
                      <a
                        href={link.url}
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 dark:border-gray-700/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              © 2024 Your Company. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footer.socialLinks?.map((link) => {
                return (
                  <a
                    key={link.id}
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span className="sr-only">{link.platform}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </footer>

      {/* Language Selection Modal */}
      {/* {isLanguageModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-gray-700/50">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Select Language
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLanguageModalOpen(false)}
                className="text-gray-500 cursor-pointer hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-4 max-h-96 overflow-y-auto">
              <div className="grid grid-cols-1 gap-2">
                {footer.languages?.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageSelect(language)}
                    className={`flex items-center gap-3 cursor-pointer p-3 rounded-lg transition-all duration-200 text-left w-full ${
                      selectedLanguage.code === language.code
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100 border border-blue-200 dark:border-blue-700'
                        : 'hover:bg-gray-100/50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-200'
                    }`}
                  >
                    <span className="text-2xl">{language.flag}</span>
                    <span className="font-medium">{language.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-auto">
                      {language.code.toUpperCase()}
                    </span>
                    {selectedLanguage.code === language.code && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )} */}
    </>
  )
}
