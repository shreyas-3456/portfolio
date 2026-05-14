import { motion } from 'framer-motion'
import Image from 'next/image'
import RotatingImage from './RotateImage'
import reactSvg from '../../public/homePage/react.svg'
import nodejs from '../../public/homePage/nodejs.svg'
import python from '../../public/homePage/python.svg'
import django from '../../public/homePage/django.svg'
import java from '../../public/homePage/java.svg'
import kotlin from '../../public/homePage/kotlin.svg'
import javascript from '../../public/homePage/javascript.svg'
import awsCertificate from '../../aws-certified-developer-associate.png'

const awsCertificateUrl =
  'https://www.credly.com/badges/27828b4b-b235-4d93-9d4e-2d5470b1ee57/public_url'

const techStack = [
  { src: javascript.src, alt: 'Javascript' },
  { src: reactSvg.src, alt: 'React' },
  { src: java.src, alt: 'Java' },
  { src: kotlin.src, alt: 'Kotlin' },
  { src: nodejs.src, alt: 'Node.js' },
  { src: python.src, alt: 'Python' },
  { src: django.src, alt: 'Django' },
]

export default function HeroSection() {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10' />
      <div className='absolute inset-0'>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className='relative z-10 text-center px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 !leading-[1.3]'>
            Shreyas Nigam
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 mb-8'>
            Highly motivated full-stack developer with 3 years of frontend and backend
            experience.
          </p>
          <a
            href={awsCertificateUrl}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='View AWS Certified Developer Associate badge on Credly'
            className='mx-auto mb-8 flex w-full max-w-md items-center justify-center gap-4 rounded-2xl border border-amber-400/20 bg-gray-900/70 p-4 text-left backdrop-blur-sm transition-colors hover:border-amber-300/50 hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-gray-950'
          >
            <Image
              src={awsCertificate}
              alt='AWS Certified Developer Associate'
              width={64}
              height={64}
              className='h-16 w-16 shrink-0 object-contain'
              priority
            />
            <div>
              <p className='text-sm font-semibold uppercase tracking-wide text-amber-300'>
                AWS Certified
              </p>
              <p className='text-base font-medium text-white'>
                Developer - Associate
              </p>
            </div>
          </a>
          <div className='flex flex-wrap justify-center gap-4 text-sm'>
            {techStack.map(({ src, alt }) => (
              <span
                key={alt}
                className='px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20'
                title={alt}
              >
                <RotatingImage src={src} alt={alt} />
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2'>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='text-gray-400'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M19 14l-7 7m0 0l-7-7m7 7V3'
            />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
