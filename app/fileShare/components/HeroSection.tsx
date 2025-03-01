import { motion } from 'framer-motion'
import Image from 'next/image'

const techStack = [
  { src: 'homePage/react.svg', alt: 'React' },
  { src: 'homePage/django.svg', alt: 'Django' },
  { src: 'homePage/vite.svg', alt: 'Vite' },
  { src: 'homePage/docker.svg', alt: 'Docker' },
  { src: 'homePage/aws.svg', alt: 'AWS' },
]

const MotionLink = ({ href, children }) => (
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='px-6 py-3 bg-gray-800 text-white font-medium rounded-lg shadow-md hover:bg-gray-700 transition-all'
  >
    {children}
  </motion.a>
)

export default function AboutFileShare() {
  return (
    <section className='relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6'>
      <div className='absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-10' />
      <div className='absolute inset-0 bg-[url("/grid.svg")] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]' />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='relative z-10 text-center'
      >
        <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 !leading-[1.3]'>
          Secure File Sharing
        </h1>
        <p className='text-xl md:text-2xl text-gray-300 mb-8'>
          End-to-end encrypted file sharing where you control the security.
          Choose your encryption password and keep your data private.
        </p>
        <div className='flex justify-center gap-4'>
          <MotionLink href='https://shreyas-fileshare.netlify.app/'>
            Visit Website
          </MotionLink>
          <MotionLink href='https://github.com/shreyas-3456/fileshare'>
            View Repo
          </MotionLink>
        </div>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className='relative z-10 mt-10 flex items-center gap-6 text-gray-300 text-lg'
      >
        {techStack.map(({ src, alt }) => (
          <span
            key={alt}
            className='w-10 h-10 flex items-center justify-center'
            title={alt}
          >
            <Image src={src} alt={alt} width={28} height={28} />
          </span>
        ))}
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400'
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
    </section>
  )
}
