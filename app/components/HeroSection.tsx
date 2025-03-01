import { motion } from 'framer-motion'
import RotatingImage from './RotateImage'
import reactSvg from '../../public/homePage/react.svg'
import nodejs from '../../public/homePage/nodejs.svg'
import python from '../../public/homePage/python.svg'
import django from '../../public/homePage/django.svg'

const techStack = [
  { src: reactSvg.src, alt: 'React' },
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
            Full Stack Developer & Problem Solver
          </p>
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
