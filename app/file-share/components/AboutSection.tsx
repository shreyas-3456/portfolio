import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  {
    title: 'Secure Authentication & Encryption',
    description:
      'Utilizes Argon2 for password hashing, multi-factor authentication (MFA), JWT with HttpOnly cookies, role-based access control, AES-256-GCM encryption for files, password-based decryption, and one-time links that expire after 24 hours.',
    icon: '/fileShare/key.svg',
    alt: 'Key Icon',
  },
  {
    title: 'Robust File Management',
    description:
      'Offers secure file upload and download with dual-layer encryption, role-based file access, shareable public links with expiration settings, and an intuitive admin panel for managing all files.',
    icon: '/fileShare/encrypted.svg',
    alt: 'File Management Icon',
  },
  {
    title: 'Seamless File Sharing Experience',
    description:
      'Combines a Django REST Framework backend with a Vite/React frontend to deliver a user-friendly interface for file sharing over HTTPS, complete with secure authentication, encryption, and real-time analytics.',
    icon: '/fileShare/share.svg',
    alt: 'Sharing Icon',
  },
  {
    title: 'Scalable Containerized Deployment',
    description:
      'Leverages Docker containers and AWS EC2 for scalable, secure, and reliable hosting. This deployment strategy ensures high availability, easy scaling, and consistent performance.',
    icon: '/fileShare/scalable.svg',
    alt: 'Hosting Icon',
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
          className='mx-auto mt-14 max-w-[690px] text-center'
        >
          <h2 className='mb-4 text-3xl font-bold text-white sm:text-4xl md:text-[44px] md:leading-tight'>
            File Sharing Application Features
          </h2>
          <p className='text-base text-gray-300'>
            Our secure file-sharing application is designed for privacy and ease
            of use. Users can upload files, set custom encryption passwords, and
            securely share them with intended recipients. The application
            leverages end-to-end encryption to ensure that only those with the
            correct decryption key can access the shared data.
          </p>
          <p className='text-base text-gray-300 mt-4'>
            Key features include role-based access control (RBAC), secure
            authentication, and an intuitive interface for managing shared
            files. Whether for personal or business use, our platform provides a
            seamless experience with top-tier security measures.
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
                      alt={feature.alt}
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
