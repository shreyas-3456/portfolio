'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const techStack = [
  { src: 'homePage/react.svg', alt: 'React' },
  { src: 'searchGithubUsers/github.svg', alt: 'GitHub', isSvg: true },
  { src: 'searchGithubUsers/auth0.svg', alt: 'auth0' },
  {
    src: 'searchGithubUsers/fusioncharts_logo.jpg',
    alt: 'Fusion Charts',
    unoptimized: true,
  },
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

const HeroSection = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center flex-col overflow-hidden'>
      <div className='absolute inset-0 bg-radial-gradient from-purple-600 to-blue-600 opacity-20' />
      <div className='absolute inset-0'>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className='relative z-10 text-center px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 !leading-[1.3]'>
            GitHub User Search App
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 mb-8'>
            Explore GitHub Profiles with Interactive Charts
          </p>
          <div className='flex justify-center gap-4'>
            <MotionLink href='https://react-search-github-users-project.netlify.app/'>
              Visit Website
            </MotionLink>
            <MotionLink href='https://github.com/shreyas-3456/react-search-github-users'>
              View Repo
            </MotionLink>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className='relative z-10 mt-10 flex items-center gap-6 text-gray-300 text-lg'
      >
        {techStack.map(({ src, alt, isSvg, unoptimized }, index) => (
          <span
            key={index}
            className='w-10 h-10 rounded-full flex items-center justify-center'
            title={alt}
          >
            {isSvg ? (
              <svg
                className='w-6 h-6 text-black-400 group-hover:text-blue-300 transition-colors'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
            ) : (
              <Image
                src={src}
                alt={alt}
                width={28}
                height={28}
                unoptimized={unoptimized}
              />
            )}
          </span>
        ))}
      </motion.div>

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

export default HeroSection
