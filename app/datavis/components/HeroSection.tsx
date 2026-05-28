'use client'

import { motion } from 'framer-motion'
import React from 'react'

const techStack = [
  {
    name: 'FastAPI',
    color: '#009688',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    color: '#ffffff',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.39-10.74l-6.23 8.31H9v-9.14h1.16v7.35l5.22-7.02c.32-.43.76-.74 1.25-.9.37-.12.77-.18 1.16-.18h.17l-1.57 1.58z" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    color: '#336791',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    name: 'DuckDB',
    color: '#FFF066',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#E5A93C" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M12 3l4 4M12 21l-4-4M3 12l4-4M21 12l-4 4" />
      </svg>
    ),
  },
  {
    name: 'Celery',
    color: '#37814A',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    name: 'Redis',
    color: '#D82C20',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    name: 'AWS S3',
    color: '#E97627',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
]

const MotionLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    whileHover={{ scale: 1.05, boxShadow: '0 10px 20px -10px rgba(168, 85, 247, 0.4)' }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-white font-semibold rounded-xl shadow-lg hover:bg-gray-700/90 transition-all flex items-center gap-2"
  >
    {children}
  </motion.a>
)

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-6 pt-16">
      {/* Background radial gradient and grid overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-slate-900/40 to-cyan-900/10 opacity-60" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-4 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider"
        >
          High Performance Data Analytics
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 !leading-[1.25] tracking-tight">
          DataVis Platform 📊✨
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl leading-relaxed">
          A premium, fast-vectorized web application for analytical exploration, parsing, and real-time visualization of heavy datasets.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <MotionLink href="https://data-vis-shreyas.netlify.app/">
            <span>Visit Live Platform</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </MotionLink>
          <MotionLink href="https://github.com/shreyas-3456/datavis">
            <span>View Source Repository</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.48 2 12.01c0 4.42 2.865 8.16 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.167 22 16.427 22 12.01 22 6.48 17.522 2 12 2z" />
            </svg>
          </MotionLink>
        </div>
      </motion.div>

      {/* Tech Stack Horizontal Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative z-10 w-full max-w-4xl"
      >
        <div className="text-center text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">
          Architectural Core Stack
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ y: -4, scale: 1.05 }}
              className="flex items-center gap-2.5 px-4 py-2 bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-gray-700/80 transition-all cursor-default"
              style={{ boxShadow: `0 4px 20px -10px ${tech.color}40` }}
            >
              <span className="flex items-center justify-center" style={{ color: tech.color }}>
                {tech.icon}
              </span>
              <span className="text-sm font-semibold text-gray-200">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-purple-400 opacity-60 hidden md:block"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </motion.div>
    </section>
  )
}
