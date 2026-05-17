'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import DotsBackdrop from '../components/Backdrop'

const techStack = [
  { src: '/homePage/react.svg', alt: 'React' },
  { src: '/homePage/typescript.svg', alt: 'TypeScript' },
  { src: '/homePage/java.svg', alt: 'Java' },
  { src: '/homePage/spring-boot.svg', alt: 'Spring Boot' },
  { src: '/fileShare/terraform.svg', alt: 'Terraform' },
  { src: '/homePage/aws.svg', alt: 'AWS' },
]

const features = [
  {
    title: 'Visual Infrastructure Builder',
    description:
      'Drag cloud resources into a React Flow canvas and model relationships before generating infrastructure code.',
    icon: '/cloud-builder.svg',
  },
  {
    title: 'Terraform & CloudFormation Output',
    description:
      'Converts the diagram into deployment-ready Terraform and CloudFormation templates for AWS workflows.',
    icon: '/fileShare/terraform.svg',
  },
  {
    title: 'Spring Boot Generation API',
    description:
      'Uses a Java backend to validate resource data and produce consistent infrastructure definitions from the canvas state.',
    icon: '/homePage/spring-boot.svg',
  },
  {
    title: 'Deployable Full Stack Setup',
    description:
      'Ships with a Vite frontend, backend service, Docker Compose setup, and a sample CloudFormation stack.',
    icon: '/homePage/docker.svg',
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

export default function AwsBuilderPage() {
  return (
    <>
      <DotsBackdrop />
      <section className='relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6'>
        <div className='absolute inset-0 bg-gradient-to-r from-orange-600 to-sky-600 opacity-10' />
        <div className='absolute inset-0 bg-[url("/grid.svg")] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]' />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='relative z-10 max-w-5xl text-center'
        >
          <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-400 to-sky-400 !leading-[1.3]'>
            CloudFormation Terraform Builder
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 mb-8'>
            A visual AWS infrastructure builder that turns diagrams into
            Terraform and CloudFormation workflows.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <MotionLink href='https://awsbuilder.netlify.app/'>
              Visit Website
            </MotionLink>
            <MotionLink href='https://github.com/shreyas-3456/awsBuilder'>
              View Repo
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
              Infrastructure as a Visual Workflow
            </h2>
            <p className='text-base text-gray-300'>
              AWS Builder helps users design cloud resources visually, inspect
              the generated output, and move from architecture planning to
              repeatable infrastructure code faster.
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
