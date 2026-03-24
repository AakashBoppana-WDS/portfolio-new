import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aakash Boppana | Full Stack & Mobile App Developer',
  description: 'I design and build high-performance digital products. Full Stack Developer specializing in scalable web apps, cross-platform mobile apps, and user-focused interfaces.',
  keywords: ['Full Stack Developer', 'Mobile App Developer', 'React', 'Next.js', 'Web Development', 'Aakash Boppana'],
  authors: [{ name: 'Aakash Boppana' }],
  creator: 'Aakash Boppana',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Aakash Boppana | Full Stack & Mobile App Developer',
    description: 'I design and build high-performance digital products.',
    siteName: 'Aakash Boppana Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aakash Boppana | Full Stack & Mobile App Developer',
    description: 'I design and build high-performance digital products.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0D0D0D',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
