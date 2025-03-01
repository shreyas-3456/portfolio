'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
const features = [
  {
    title: 'Data Finder',
    description:
      'Quickly search and discover the data you need using an intuitive interface that scans multiple data sources in real-time.',
    icon: 'searchGithubUsers/findData.svg',
    alt: 'findData.svg',
  },
  {
    title: 'Interactive Charts',
    description:
      'Engage with dynamic, interactive charts that bring your data to life. Zoom, filter, and drill down into insights effortlessly.',
    icon: 'searchGithubUsers/charts.svg',
    alt: 'charts.svg',
  },
  {
    title: 'Real-Time Analytics',
    description:
      'Monitor and analyze your data with real-time updates and advanced analytics. Make informed decisions with up-to-the-minute insights.',
    icon: 'searchGithubUsers/analytics.svg',
    alt: 'analytics.svg',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
}

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const AboutSection = () => {
  return (
    <section id='features' className='relative z-10 pt-[110px] text-white'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]'
        >
          <h2 className='mb-4 text-3xl font-bold text-white sm:text-4xl md:text-[44px] md:leading-tight'>
            Discover & Visualize Your GitHub Data
          </h2>
          <p className='text-base text-gray-300'>
            App empowers you to quickly find the data you need and explore it
            interactively through dynamic charts and real-time analytics.
          </p>
        </motion.div>
      </div>

      <div className='container mx-auto max-w-[1390px]'>
        <div className='rounded-2xl bg-gray-900 px-5 pt-14 pb-14 shadow-xl md:pb-1 lg:pt-20 lg:pb-5 xl:px-10'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='-mx-4 flex flex-wrap justify-center'
          >
            {features.map((feature, index) => (
              <div key={index} className='w-full px-4 md:w-1/2 lg:w-1/3'>
                <motion.div
                  variants={featureVariants}
                  transition={{ duration: 0.5, delay: index * 0.25 }}
                  className='group mx-auto mb-[60px] max-w-[310px] text-center rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 p-6 shadow-lg transition-transform transform hover:scale-105'
                >
                  <div className='mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-gray-800 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-gray-800'>
                    <Image
                      src={feature.icon}
                      alt={feature.icon}
                      width={30}
                      height={30}
                    />
                  </div>
                  <h3 className='mb-3 text-xl font-semibold text-white sm:text-[22px] xl:text-[26px]'>
                    {feature.title}
                  </h3>
                  <p className='text-base text-gray-200'>
                    {feature.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
