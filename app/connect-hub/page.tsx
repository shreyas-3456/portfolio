'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import DotsBackdrop from '../components/Backdrop'

const techStack = [
  { src: '/homePage/kotlin.svg', alt: 'Kotlin' },
  { src: '/homePage/java.svg', alt: 'Java' },
  { src: '/homePage/spring-boot.svg', alt: 'Spring Boot' },
  { src: '/chatApp/socket.svg', alt: 'WebSocket' },
  { src: '/homePage/docker.svg', alt: 'Docker' },
]

const features = [
  {
    title: 'QR-Based Device Pairing',
    description:
      'Pairs Android and desktop clients with QR flows so devices can establish a trusted transfer session quickly.',
    icon: '/connect-hub.svg',
  },
  {
    title: 'Real-Time Signaling',
    description:
      'Uses WebSocket routing and signal envelopes to coordinate connection state, file transfer events, and device heartbeats.',
    icon: '/chatApp/socket.svg',
  },
  {
    title: 'Android Compose Client',
    description:
      'Provides a Kotlin and Jetpack Compose mobile client with scan, file, notification, and connection status screens.',
    icon: '/homePage/kotlin.svg',
  },
  {
    title: 'Firebase-Backed Coordination',
    description:
      'Integrates Firebase services for peer data, notifications, and transfer state while the Spring Boot server handles routing.',
    icon: '/fileShare/share.svg',
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

export default function ConnectHubPage() {
  return (
    <>
      <DotsBackdrop />
      <section className='relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6'>
        <div className='absolute inset-0 bg-gradient-to-r from-sky-600 to-emerald-600 opacity-10' />
        <div className='absolute inset-0 bg-[url("/grid.svg")] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]' />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='relative z-10 max-w-5xl text-center'
        >
          <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 !leading-[1.3]'>
            Connect Hub
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 mb-8'>
            A QR-paired Android and desktop file transfer system powered by
            real-time WebSocket signaling.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <MotionLink href='https://github.com/shreyas-3456/connect-hub-client'>
              Android Client
            </MotionLink>
            <MotionLink href='https://github.com/shreyas-3456/connet-hub'>
              Backend Repo
            </MotionLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='relative z-10 mt-10 flex flex-wrap justify-center gap-6 text-gray-300 text-lg'
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
      </section>

      <section id='features' className='relative z-10 pt-[110px] text-white'>
        <div className='container mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className='mx-auto mt-14 max-w-[760px] text-center'
          >
            <h2 className='mb-4 text-3xl font-bold text-white sm:text-4xl md:text-[44px] md:leading-tight'>
              Device-to-Device Transfer Coordination
            </h2>
            <p className='text-base text-gray-300'>
              Connect Hub combines a native Android client with a Spring Boot
              signaling service to pair devices, route transfer messages, and
              surface progress and notifications in real time.
            </p>
          </motion.div>
        </div>

        <div className='container mx-auto max-w-[1390px]'>
          <div className='rounded-2xl bg-gray-900 px-5 pt-14 pb-14 shadow-xl md:pb-1 lg:pt-20 lg:pb-5 xl:px-10'>
            <motion.div
              initial='hidden'
              animate='visible'
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.25 },
                },
              }}
              className='-mx-4 flex flex-wrap justify-center'
            >
              {features.map((feature, index) => (
                <div key={feature.title} className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, delay: index * 0.25 }}
                    className='group mx-auto mb-[60px] max-w-[310px] text-center rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 p-6 shadow-lg transition-transform transform hover:scale-105'
                  >
                    <div className='mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-gray-800 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-gray-800'>
                      <Image
                        src={feature.icon}
                        alt={feature.title}
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
    </>
  )
}
