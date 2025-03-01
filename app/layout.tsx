import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import ContactSection from './components/ContactSection'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Shreyas Nigam - Full Stack Developer',
  description:
    'Welcome to my portfolio! I am a passionate frontend developer specializing in creating beautiful, responsive, and user-centric web applications. With expertise in modern JavaScript frameworks and UI/UX principles, I transform designs into seamless interactive experiences.',
  keywords: [
    'Frontend Developer',
    'Web Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Python',
    'Responsive Design',
    'Web Animation',
    'Modern Web Development',
    'CSS Expert',
    'Performance Optimization',
    'Web Accessibility',
    'Component Design',
    'Shreyas Nigam',
  ],
  authors: [{ name: 'Shreyas Nigam' }],
  creator: 'Shreyas Nigam',
  openGraph: {
    title: 'Shreyas Nigam - Frontend Developer Portfolio',
    description:
      'Passionate frontend developer crafting beautiful and interactive web experiences. Explore my projects and frontend development expertise.',
    url: 'https://your-domain.com',
    siteName: 'Shreyas Nigam - Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shreyas Nigam - Frontend Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <>
          {children}
          <ContactSection />
        </>
      </body>
    </html>
  )
}
