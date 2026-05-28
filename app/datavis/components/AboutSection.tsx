'use client'

import React from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Modern Decoupled Tiering',
    description:
      'Engineered for maximum scale and isolation. Decouples the React client, FastAPI web controllers, Redis messaging queues, and Celery workers to guarantee zero-blocking HTTP operations.',
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-9-4.5h12.75c.621 0 1.125.504 1.125 1.125V18a1.125 1.125 0 01-1.125 1.125H5.25A1.125 1.125 0 014.125 18V5.25c0-.621.504-1.125 1.125-1.125z" />
      </svg>
    ),
  },
  {
    title: 'Double Storage Engine',
    description:
      'Combines ACID-compliant PostgreSQL for secure multi-tenant metadata operations with a localized DuckDB columnar engine for blisteringly fast vectorized aggregates directly on database tables.',
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75" />
      </svg>
    ),
  },
  {
    title: 'Async Celery + Pandas Parser',
    description:
      'Avoids request timeouts. Standardized files are pulled straight from AWS S3, parsed cleanly in the background using Pandas, and typed dynamically before writing permanent tables.',
    icon: (
      <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125H5.625a1.125 1.125 0 01-1.125-1.125V5.625c0-.621.504-1.125 1.125-1.125z" />
      </svg>
    ),
  },
  {
    title: 'Interactive Vectorized Queries',
    description:
      'Bypasses disk-bound bottlenecks completely. When users query, filter, or re-cluster charts, FastAPI executes analytical SQL queries against the local OLAP database in less than 20ms.',
    icon: (
      <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function AboutSection() {
  return (
    <section id="features" className="relative z-10 pt-20 px-4 text-white">
      {/* Intro Description */}
      <div className="container mx-auto max-w-4xl text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            High-Performance Double-Engine Analytics
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            DataVis Platform bridges the gap between massive analytical dataset parsing and real-time visualization interfaces.
            Traditional relational databases fail to aggregate thousands of records instantaneously. 
            By isolating schema metadata from the heavy query operations, we ensure that dashboards update instantly while
            resource-heavy uploads are handled reliably in background threads.
          </p>
        </motion.div>
      </div>

      {/* Feature Grid cards */}
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group flex flex-col p-6 md:p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/80 hover:border-purple-500/30 transition-all shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800/60 border border-gray-700/50 group-hover:bg-purple-600/10 group-hover:border-purple-500/30 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
