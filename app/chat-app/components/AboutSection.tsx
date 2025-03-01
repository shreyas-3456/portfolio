import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  {
    title: 'Easy Group Creation & Joining',
    description:
      'Anyone can create a group with a unique name, and others can join by selecting the group from the list. No complicated sign-ups or logins required.',
    icon: '/chatApp/easy.svg',
    alt: 'Key Icon',
  },
  {
    title: 'User-Friendly Interface',
    description:
      'A clean and simple UI built with  ensures an effortless experience, making it easy to switch between groups and chat in real time.',
    icon: '/chatApp/user.svg',
    alt: 'File Management Icon',
  },
  {
    title: 'Scalable and Lightweight',
    description:
      'Built with Express and WebSockets, the backend is lightweight and efficient, capable of handling multiple group chats simultaneously.',
    icon: '/fileShare/share.svg',
    alt: 'Sharing Icon',
  },
  {
    title: 'Scalable Containerized Deployment',
    description:
      'Easily deploy the chat app anywhere with Docker. The backend and frontend are containerized for smooth scalability, ensuring a hassle-free setup on any server or cloud platform.',
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
            Instant messaging platform
          </h2>
          <p className='text-base text-gray-300'>
            Users can instantly create chat groups or join existing ones without
            the need for an account. Just pick a username and start chatting.
          </p>
          <p className='text-base text-gray-300 mt-4'>
            Powered by Node.js, Express, and WebSockets, messages are delivered
            instantly, ensuring a seamless chat experience.
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
