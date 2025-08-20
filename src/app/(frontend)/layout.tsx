import React from 'react'
import './styles.css'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { children } = props

  return (
    <html lang={(await props.params).lang}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
