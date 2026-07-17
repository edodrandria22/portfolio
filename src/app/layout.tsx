import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { SiteNav } from '../components/site-nav'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Dodé RANDRIAMANANJATOVO — Développeur Web',
  description:
    'Portfolio de Hery Nandrasana Dodé RANDRIAMANANJATOVO, développeur web full-stack spécialisé en PHP, JavaScript, Node.js, Symfony, Spring Boot et Next.js.',
  generator: 'edodrandria',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f1620',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        <SiteNav />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
