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
    'Portfolio of Shreyas Nigam, an AWS Certified full-stack developer with 3 years of frontend and backend experience across React, Java, Spring Boot, AWS, and cloud infrastructure.',
  keywords: [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'Web Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Java',
    'Kotlin',
    'Spring Boot',
    'Kafka',
    'Prometheus',
    'AWS Certified Developer Associate',
    'Terraform',
    'CloudFormation',
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
    title: 'Shreyas Nigam - Full Stack Developer Portfolio',
    description:
      'AWS Certified full-stack developer with 3 years of frontend and backend experience. Explore React, Java, Spring Boot, AWS, and cloud infrastructure projects.',
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
