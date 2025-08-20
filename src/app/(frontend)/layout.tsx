import React from 'react'
import './styles.css'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const { children } = props

  return (
    <html lang={props.params.lang}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
