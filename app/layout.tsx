import './globals.css'
import { Inter } from 'next/font/google'
import { LanguageProvider } from '@/lib/useLanguage'
import { ThemeProvider } from '@/lib/useTheme'
import LanguageDetector from '@/components/LanguageDetector'
import ThemeApplier from '@/components/ThemeApplier'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Enderson Marques - Full-stack Developer',
  description: 'Building fast, modern, conversion-focused web apps & landing pages. Full-stack developer specializing in React, Next.js, and scalable web solutions.',
  keywords: 'full-stack developer, react, next.js, web development, brazil, recife',
  authors: [{ name: 'Enderson Marques' }],
  openGraph: {
    title: 'Enderson Marques - Full-stack Developer',
    description: 'Building fast, modern, conversion-focused web apps & landing pages',
    url: 'https://endersonmarques.dev',
    siteName: 'Enderson Marques Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Enderson Marques - Full-stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enderson Marques - Full-stack Developer',
    description: 'Building fast, modern, conversion-focused web apps & landing pages',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <ThemeApplier />
          <LanguageProvider>
            <LanguageDetector />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
