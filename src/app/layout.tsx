import './styles.css'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="min-h-screen bg-background">{children}</body>
    </html>
  )
}
