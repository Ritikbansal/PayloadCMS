'use client'

import { usePathname } from 'next/navigation'

export default function NotFound() {
  const pathname = usePathname()
  const locale = pathname.split('/').filter(Boolean)[0] ?? 'en'

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4"
    >
      <div className="text-center max-w-md mx-auto">
        {/* 404 Number */}
        <h1
          className="text-9xl font-extrabold text-transparent bg-clip-text 
          bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-6"
        >
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          This page doesn’t exist… yet. But if you{' '}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">hire me</span>, I’ll
          make sure <strong>whatever route you go to</strong> has a page. 🚀
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center cursor-pointer justify-center px-6 py-3 border border-gray-300 
              dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg 
              hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            Go Back
          </button>
          <a
            href="mailto:ritikb13@gmail.com"
            className="inline-flex items-center cursor-pointer justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 
              text-white font-medium rounded-lg transition-colors duration-200"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  )
}
