import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { LanguageProvider } from '@/lib/useLanguage'
import { ThemeProvider } from '@/lib/useTheme'
import LanguageDetector from '@/components/LanguageDetector'
import ThemeApplier from '@/components/ThemeApplier'
import StructuredData from '@/components/StructuredData'
import { siteConfig } from '@/lib/config'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Enderson Marques - Full-stack Developer',
  description: 'Building fast, modern, conversion-focused web apps & landing pages. Full-stack developer specializing in React, Next.js, and scalable web solutions.',
  keywords: 'full-stack developer, react, next.js, web development, brazil, recife, javascript, typescript, node.js, mongodb, postgresql, aws, docker, portfolio, freelancer, web developer, enderson marques, endersonmarques, endersonmarques.vercel.app',
  authors: [{ name: 'Enderson Marques' }],
  creator: 'Enderson Marques',
  publisher: 'Enderson Marques',
  verification: {
    google: 'O_nm7lWODrWXvsqCjgWU150bQMLCmC3J713peuZS4DA',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon.svg', color: '#2563eb' }
    ]
  },
  manifest: '/site.webmanifest',
  themeColor: '#2563eb',
  openGraph: {
    title: 'Enderson Marques - Full-stack Developer',
    description: 'Building fast, modern, conversion-focused web apps & landing pages',
    url: siteConfig.url,
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
      <head>
        <StructuredData />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-71LPGNDSJL"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-71LPGNDSJL');
          `}
        </Script>
      </head>
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
