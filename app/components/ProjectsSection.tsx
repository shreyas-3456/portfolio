'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const projects = [
  {
    title: 'File Sharing App',
    description:
      'An end-to-end file sharing platform where only you know the key.',
    image: '/fileShare.svg',
    tags: ['React', 'Python', 'Django', 'AWS', 'Nginx', 'Docker'],
    link: '/file-share',
    website: 'https://shreyas-fileshare.netlify.app/',
    github: 'https://github.com/shreyas-3456/fileshare',
  },
  {
    title: 'GitHub User Search App',
    description: 'Search GitHub users while analyzing their usage and data.',
    image: '/github.svg',
    tags: ['React', 'GitHub', 'Auth0', 'FusionCharts'],
    link: '/search-github-users',
    website: 'https://react-search-github-users-project.netlify.app/',
    github: 'https://github.com/shreyas-3456/react-search-github-users',
  },
  {
    title: 'Chat App',
    description: 'Create chat rooms and chat with others',
    image: '/chat.svg',
    tags: ['Javascript', 'Nodejs', 'ExpressJs', 'Socket.io'],
    link: '/chat-app',
    website: 'https://chat-app-latest-6aeg.onrender.com',
    github: 'https://github.com/shreyas-3456/chat-app',
  },
]

export default function ProjectsSection() {
  const router = useRouter()

  return (
    <section className='py-20 px-4'>
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='text-3xl font-bold mb-12 text-center'
        >
          Featured Projects
        </motion.h2>

        {/* Flex container with wrapping */}
        <div className='project-container flex flex-wrap -mx-2'>
          {projects.map((project, index) => (
            <div key={index} className='w-1/2 px-2 mb-4'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                role='button'
                onClick={() => {
                  if (project.link) {
                    router.push(project.link)
                  }
                }}
                className='group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800 cursor-pointer'
              >
                <div className='aspect-video relative overflow-hidden'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-transform duration-300 group-hover:scale-105' />
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                  <p className='text-gray-400 mb-4'>{project.description}</p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className='text-sm px-3 py-1 bg-gray-800 rounded-full'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className='flex gap-4'>
                    <a
                      href={project.website}
                      target='_blank'
                      rel='noopener noreferrer'
                      onClick={(e) => e.stopPropagation()}
                      className='px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-all'
                    >
                      Website
                    </a>
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      onClick={(e) => e.stopPropagation()}
                      className='px-4 py-2 bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-600 transition-all'
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Custom CSS to center the last item if it's alone in its row */}
        <style jsx>{`
          .project-container > *:nth-last-child(1):nth-child(odd) {
            margin-left: auto;
            margin-right: auto;
          }
        `}</style>
      </div>
    </section>
  )
}
