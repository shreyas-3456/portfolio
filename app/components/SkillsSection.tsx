'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const skills = [
  {
    skill: 'HTML',
    icon: '/homePage/html.svg',
    description:
      'Structured semantic layouts, optimized for SEO and accessibility.',
  },
  {
    skill: 'CSS',
    icon: '/homePage/css.svg',
    description:
      'Responsive UI with Tailwind, animations, and cross-browser compatibility.',
  },
  {
    skill: 'React',
    icon: '/homePage/react.svg',
    description:
      'Built scalable SPAs with Redux, Next.js, and performance optimizations.',
  },
  {
    skill: 'TypeScript',
    icon: '/homePage/typescript.svg',
    description:
      'Ensured type safety and scalability in large React & Node.js projects.',
  },
  {
    skill: 'NodeJs',
    icon: '/homePage/nodejs.svg',
    description:
      'Developed REST & WebSocket APIs with Express, optimized for efficiency.',
  },
  {
    skill: 'Python',
    icon: '/homePage/python.svg',
    description: 'Automated workflows and backend services.',
  },
  {
    skill: 'Django',
    icon: '/homePage/django.svg',
    description:
      'Designed secure, high-performance web apps with Django ORM & DRF.',
  },
  {
    skill: 'AWS',
    icon: '/homePage/aws.svg',
    description:
      'Deployed scalable apps with ECR, EC2 and other services and managed CI/CD pipelines.',
  },
  {
    skill: 'MySQL',
    icon: '/homePage/mysql.svg',
    description:
      'Optimized relational databases, complex queries, and indexing strategies.',
  },
  {
    skill: 'MongoDB',
    icon: '/homePage/mongodb.svg',
    description:
      'Designed NoSQL schemas, aggregation pipelines, and efficient indexing.',
  },
  {
    skill: 'Docker',
    icon: '/homePage/docker.svg',
    description:
      'Experienced in writing Dockerfiles, managing multi-container setups with Docker Compose, and optimizing images for performance and security.',
  },
  {
    skill: 'Nginx',
    icon: '/homePage/nginx.svg',
    description:
      'Skilled in configuring Nginx as a reverse proxy, load balancer, and static file server.',
  },
]

export default function SkillsSection() {
  return (
    <section className='py-20 px-4 bg-gray-900/50'>
      <div className='max-w-4xl mx-auto'>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='text-3xl font-bold mb-12 text-center text-white'
        >
          Technical Skills
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.skill}
              className='relative p-6 bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center text-white overflow-hidden'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Image
                src={skill.icon}
                alt={skill.skill}
                width={40}
                height={40}
              />
              <p className='mt-2 text-lg font-semibold'>{skill.skill}</p>

              {/* Skill Description - Appears on Hover */}
              <motion.div className='absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-90 text-sm p-4 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300'>
                {skill.description}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
