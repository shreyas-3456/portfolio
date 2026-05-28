'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Timeline Steps
const pipelineSteps = [
  {
    num: '1',
    title: 'Request Presigned S3 URL',
    description: 'User drops a dataset in the Next.js dropzone. The client sends a request through Nginx (reverse proxy) to FastAPI, which generates a secure presigned upload URL from the AWS S3 SDK.',
    component: 'Next.js → Nginx → FastAPI → S3',
  },
  {
    num: '2',
    title: 'Direct S3 Upload',
    description: 'The browser uploads the file directly to the S3 bucket using the presigned URL, completely bypassing Nginx and FastAPI to save server bandwidth and memory.',
    component: 'Browser → AWS S3 (Direct)',
  },
  {
    num: '3',
    title: 'Job Queued on Redis',
    description: 'Once the upload completes, FastAPI enqueues a background parsing job on Redis via Celery. The API immediately returns a success status to keep the client UI non-blocking.',
    component: 'FastAPI → Redis Broker',
  },
  {
    num: '4',
    title: 'Worker Wakes Up',
    description: 'A Celery worker wakes from its idle sleep state to consume the task from Redis. It downloads the raw file from S3, parses and cleans it with Pandas, then finishes the job.',
    component: 'Celery Worker & Pandas',
  },
  {
    num: '5',
    title: 'Data Pushed to DuckDB',
    description: 'The processed dataset is pushed directly into DuckDB as an index-free columnar table, storing the real high-volume analytical data for sub-millisecond vectorized queries.',
    component: 'Celery → DuckDB Storage',
  },
  {
    num: '6',
    title: 'Worker Goes Back to Sleep',
    description: 'After updating PostgreSQL metadata status from "pending" to "ready" and completing ingestion, the Celery worker releases resources and goes back to sleep until the next task arrives.',
    component: 'Celery → PostgreSQL → Sleep',
  },
  {
    num: '7',
    title: 'Hybrid Data Query',
    description: 'When users query data, metadata is fetched via PostgreSQL while real analytical data is queried directly from DuckDB. Both responses merge on FastAPI behind the Nginx reverse proxy.',
    component: 'PostgreSQL (metadata) & DuckDB (data)',
  },
]

export default function SystemDesign() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'pipeline'>('architecture')
  const [activePath, setActivePath] = useState<'all' | 'ingestion' | 'query'>('all')
  const [activeStep, setActiveStep] = useState(0)

  // Coords definitions for paths and nodes mapping in 1200x560 canvas
  const isIngestionActive = activePath === 'all' || activePath === 'ingestion'
  const isQueryActive = activePath === 'all' || activePath === 'query'

  return (
    <section className="relative z-10 py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-3 px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider w-fit mx-auto"
        >
          Dynamic System Blueprint
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold mb-4 text-white"
        >
          🏗️ Architecture &amp; System Design
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          Explore how DataVis combines double-storage caching engines with asynchronous background queues for ultra-fast SQL performance.
        </p>

        {/* View Switcher Tabs */}
        <div className="flex justify-center gap-2 mt-8">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-6 py-2.5 rounded-xl font-medium text-sm transition-all border ${activeTab === 'architecture'
              ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-500/20'
              : 'bg-gray-900 border-gray-800 text-gray-400 hover:text-white'
              }`}
          >
            System Architecture
          </button>
          <button
            onClick={() => setActiveTab('pipeline')}
            className={`px-6 py-2.5 rounded-xl font-medium text-sm transition-all border ${activeTab === 'pipeline'
              ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-500/20'
              : 'bg-gray-900 border-gray-800 text-gray-400 hover:text-white'
              }`}
          >
            Data Pipeline Stages
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'architecture' ? (
          <motion.div
            key="architecture"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-gray-800 bg-gray-950/80 backdrop-blur-md p-6 md:p-8 shadow-xl"
          >
            {/* Flow selector buttons inside Architecture */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-6 mb-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Interactive Data Flow Simulation</h3>
                <p className="text-xs text-gray-500">Select an execution path below to animate its network route.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActivePath('all')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all border ${activePath === 'all'
                    ? 'bg-gray-800 text-white border-gray-700'
                    : 'bg-gray-900/30 text-gray-500 border-transparent hover:text-gray-300'
                    }`}
                >
                  Show All Blocks
                </button>
                <button
                  onClick={() => setActivePath('ingestion')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 border ${activePath === 'ingestion'
                    ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/50 shadow-sm'
                    : 'bg-gray-900/30 text-gray-500 border-transparent hover:text-gray-300'
                    }`}
                >
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                  1. Ingestion Pipeline
                </button>
                <button
                  onClick={() => setActivePath('query')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 border ${activePath === 'query'
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-sm'
                    : 'bg-gray-900/30 text-gray-500 border-transparent hover:text-gray-300'
                    }`}
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  2. Hybrid Data Query
                </button>
              </div>
            </div>

            {/* ============================================================ */}
            {/* High-End Architecture Diagram Canvas — 8 Nodes with Nginx    */}
            {/* ============================================================ */}
            <div className="relative w-full bg-[#070b13] rounded-2xl overflow-hidden border border-gray-900 p-2">
              <svg
                viewBox="0 0 1200 560"
                width="100%"
                height="auto"
                preserveAspectRatio="xMidYMid meet"
                className="w-full h-auto z-0"
              >
                <defs>
                  {/* Glowing patterns */}
                  <pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="#334155" opacity="0.3" />
                  </pattern>

                  {/* Linear gradients */}
                  <linearGradient id="grad-ingest" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>

                  <linearGradient id="grad-query" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>

                  <linearGradient id="grad-s3direct" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>

                  <linearGradient id="grad-static" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#334155" />
                  </linearGradient>
                </defs>

                {/* Grid Background */}
                <rect width="100%" height="100%" rx="16" fill="url(#dotGrid)" />

                {/* ================================================== */}
                {/* --- Static / Background Connector Lines (Dim)  --- */}
                {/* ================================================== */}

                {/* 1. Browser ➔ Nginx */}
                <path d="M 190 280 H 210" stroke="#1e293b" strokeWidth="2.5" fill="none" />
                {/* 2. Nginx ➔ FastAPI */}
                <path d="M 355 280 H 380" stroke="#1e293b" strokeWidth="2.5" fill="none" />
                {/* 3. FastAPI ➔ PostgreSQL */}
                <path d="M 560 255 C 590 255, 590 110, 620 110" stroke="#1e293b" strokeWidth="2" fill="none" />
                {/* 4. FastAPI ➔ Redis */}
                <path d="M 560 280 H 620" stroke="#1e293b" strokeWidth="2.5" fill="none" />
                {/* 5. FastAPI ➔ DuckDB */}
                <path d="M 560 300 C 590 300, 590 450, 620 450" stroke="#1e293b" strokeWidth="2" fill="none" />
                {/* 6. Redis ➔ Celery Worker */}
                <path d="M 825 280 C 865 280, 880 190, 910 190" stroke="#1e293b" strokeWidth="2" fill="none" />
                {/* 7. Celery Worker ➔ AWS S3 */}
                <path d="M 1015 245 V 315" stroke="#1e293b" strokeWidth="2.5" fill="none" />
                {/* 8. Celery Worker ➔ DuckDB */}
                <path d="M 910 210 C 870 210, 855 450, 825 450" stroke="#1e293b" strokeWidth="2.5" fill="none" />
                {/* 9. Celery Worker ➔ PostgreSQL */}
                <path d="M 910 170 C 870 170, 855 110, 825 110" stroke="#1e293b" strokeWidth="2" fill="none" />
                {/* 10. Browser ➔ S3 (Direct presigned upload arc) */}
                <path d="M 105 225 C 105 30, 1015 30, 1015 315" stroke="#1e293b" strokeWidth="2" fill="none" strokeDasharray="8 4" />

                {/* ================================================== */}
                {/* --- Hidden Path Definitions for Particle Motion --- */}
                {/* ================================================== */}
                <path id="flow-browser-nginx" d="M 190 280 H 210" fill="none" stroke="transparent" />
                <path id="flow-nginx-api" d="M 355 280 H 380" fill="none" stroke="transparent" />
                <path id="flow-api-postgres" d="M 560 255 C 590 255, 590 110, 620 110" fill="none" stroke="transparent" />
                <path id="flow-api-redis" d="M 560 280 H 620" fill="none" stroke="transparent" />
                <path id="flow-api-duckdb" d="M 560 300 C 590 300, 590 450, 620 450" fill="none" stroke="transparent" />
                <path id="flow-redis-celery" d="M 825 280 C 865 280, 880 190, 910 190" fill="none" stroke="transparent" />
                <path id="flow-celery-s3" d="M 1015 245 V 315" fill="none" stroke="transparent" />
                <path id="flow-celery-duckdb" d="M 910 210 C 870 210, 855 450, 825 450" fill="none" stroke="transparent" />
                <path id="flow-celery-postgres" d="M 910 170 C 870 170, 855 110, 825 110" fill="none" stroke="transparent" />
                <path id="flow-browser-s3" d="M 105 225 C 105 30, 1015 30, 1015 315" fill="none" stroke="transparent" />

                {/* ================================================== */}
                {/* --- Glowing Active Connecting Lines ---             */}
                {/* ================================================== */}

                {/* Browser ➔ Nginx (both paths) */}
                <path
                  d="M 190 280 H 210"
                  stroke={isIngestionActive ? "url(#grad-ingest)" : isQueryActive ? "url(#grad-query)" : "#1e293b"}
                  strokeWidth={activePath !== 'all' ? "3.5" : "2.5"}
                  fill="none"
                  opacity={activePath !== 'all' ? "1" : "0.5"}
                />

                {/* Nginx ➔ FastAPI (both paths) */}
                <path
                  d="M 355 280 H 380"
                  stroke={isIngestionActive ? "url(#grad-ingest)" : isQueryActive ? "url(#grad-query)" : "#1e293b"}
                  strokeWidth={activePath !== 'all' ? "3.5" : "2.5"}
                  fill="none"
                  opacity={activePath !== 'all' ? "1" : "0.5"}
                />

                {/* ---- Ingestion Path Links ---- */}
                {isIngestionActive && (
                  <>
                    {/* Browser ➔ S3 Direct Upload Arc (presigned URL) */}
                    <path
                      d="M 105 225 C 105 30, 1015 30, 1015 315"
                      stroke="url(#grad-s3direct)"
                      strokeWidth={activePath === 'ingestion' ? "3" : "2"}
                      fill="none"
                      strokeDasharray="10 5"
                      opacity={activePath === 'ingestion' ? "1" : "0.4"}
                    />
                    {/* FastAPI ➔ Redis */}
                    <path
                      d="M 560 280 H 620"
                      stroke="url(#grad-ingest)"
                      strokeWidth={activePath === 'ingestion' ? "3" : "2"}
                      fill="none"
                      opacity={activePath === 'ingestion' ? "1" : "0.4"}
                    />
                    {/* Redis ➔ Celery */}
                    <path
                      d="M 825 280 C 865 280, 880 190, 910 190"
                      stroke="url(#grad-ingest)"
                      strokeWidth={activePath === 'ingestion' ? "3" : "2"}
                      fill="none"
                      opacity={activePath === 'ingestion' ? "1" : "0.4"}
                    />
                    {/* Celery ➔ S3 (download file) */}
                    <path
                      d="M 1015 245 V 315"
                      stroke="url(#grad-ingest)"
                      strokeWidth={activePath === 'ingestion' ? "3" : "2.5"}
                      fill="none"
                      opacity={activePath === 'ingestion' ? "1" : "0.4"}
                    />
                    {/* Celery ➔ DuckDB (push processed data) */}
                    <path
                      d="M 910 210 C 870 210, 855 450, 825 450"
                      stroke="url(#grad-ingest)"
                      strokeWidth={activePath === 'ingestion' ? "3" : "2.5"}
                      fill="none"
                      opacity={activePath === 'ingestion' ? "1" : "0.4"}
                    />
                    {/* Celery ➔ PostgreSQL (update metadata status) */}
                    <path
                      d="M 910 170 C 870 170, 855 110, 825 110"
                      stroke="url(#grad-ingest)"
                      strokeWidth={activePath === 'ingestion' ? "2.5" : "2"}
                      fill="none"
                      opacity={activePath === 'ingestion' ? "1" : "0.4"}
                    />
                  </>
                )}

                {/* ---- Query Path Links ---- */}
                {isQueryActive && (
                  <>
                    {/* FastAPI ➔ PostgreSQL (metadata) */}
                    <path
                      d="M 560 255 C 590 255, 590 110, 620 110"
                      stroke="url(#grad-query)"
                      strokeWidth={activePath === 'query' ? "3" : "2"}
                      fill="none"
                      opacity={activePath === 'query' ? "1" : "0.4"}
                    />
                    {/* FastAPI ➔ DuckDB (real data) */}
                    <path
                      d="M 560 300 C 590 300, 590 450, 620 450"
                      stroke="url(#grad-query)"
                      strokeWidth={activePath === 'query' ? "3.5" : "2.5"}
                      fill="none"
                      opacity={activePath === 'query' ? "1" : "0.5"}
                    />
                  </>
                )}

                {/* ================================================== */}
                {/* --- Hardware Accelerated Floating Pulse Particles --*/}
                {/* ================================================== */}

                {/* Browser ➔ Nginx particle */}
                {isIngestionActive && (
                  <circle r="4" fill="#d8b4fe">
                    <animateMotion dur="1.2s" repeatCount="indefinite" path="M 190 280 H 210" />
                  </circle>
                )}
                {isQueryActive && (
                  <circle r="4" fill="#22d3ee">
                    <animateMotion dur="1s" repeatCount="indefinite" path="M 190 280 H 210" />
                  </circle>
                )}

                {/* Nginx ➔ FastAPI particle */}
                {isIngestionActive && (
                  <circle r="3.5" fill="#d8b4fe">
                    <animateMotion dur="1.2s" repeatCount="indefinite" path="M 355 280 H 380" />
                  </circle>
                )}
                {isQueryActive && (
                  <circle r="3.5" fill="#22d3ee">
                    <animateMotion dur="1s" repeatCount="indefinite" path="M 355 280 H 380" />
                  </circle>
                )}

                {/* Ingestion Stream Particles */}
                {activePath === 'ingestion' && (
                  <>
                    {/* Browser ➔ S3 Direct Upload (arc particle) */}
                    <circle r="4" fill="#f59e0b">
                      <animateMotion dur="4s" repeatCount="indefinite" href="#flow-browser-s3" />
                    </circle>
                    {/* FastAPI ➔ Redis */}
                    <circle r="3.5" fill="#a855f7">
                      <animateMotion dur="2.2s" repeatCount="indefinite" href="#flow-api-redis" />
                    </circle>
                    {/* Redis ➔ Celery */}
                    <circle r="3.5" fill="#818cf8">
                      <animateMotion dur="2.5s" repeatCount="indefinite" href="#flow-redis-celery" />
                    </circle>
                    {/* Celery ➔ S3 (download) */}
                    <circle r="3.5" fill="#818cf8">
                      <animateMotion dur="1.5s" repeatCount="indefinite" href="#flow-celery-s3" />
                    </circle>
                    {/* Celery ➔ DuckDB */}
                    <circle r="4" fill="#6366f1">
                      <animateMotion dur="3s" repeatCount="indefinite" href="#flow-celery-duckdb" />
                    </circle>
                    {/* Celery ➔ PostgreSQL */}
                    <circle r="3" fill="#c084fc">
                      <animateMotion dur="3.2s" repeatCount="indefinite" href="#flow-celery-postgres" />
                    </circle>
                  </>
                )}

                {/* Query Stream Particles */}
                {activePath === 'query' && (
                  <>
                    {/* FastAPI ➔ PostgreSQL */}
                    <circle r="3.5" fill="#3b82f6">
                      <animateMotion dur="2.5s" repeatCount="indefinite" href="#flow-api-postgres" />
                    </circle>
                    {/* FastAPI ➔ DuckDB */}
                    <circle r="4.5" fill="#22d3ee">
                      <animateMotion dur="1.8s" repeatCount="indefinite" href="#flow-api-duckdb" />
                    </circle>
                  </>
                )}

                {/* ======================================================== */}
                {/* --- Embedded HTML Cards Inside SVG using foreignObject --- */}
                {/* ======================================================== */}

                {/* 1. WEB BROWSER CLIENT */}
                <foreignObject x="20" y="225" width="170" height="110">
                  <div className={`w-full h-full p-3 rounded-xl border bg-slate-950/80 backdrop-blur-md flex flex-col justify-between transition-all duration-300 ${activePath === 'all' || activePath === 'ingestion' || activePath === 'query'
                    ? 'border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.08)]'
                    : 'border-slate-900 opacity-30'
                    }`}>
                    <div className="flex items-center gap-1.5">
                      <span className="text-base text-indigo-400">💻</span>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Browser</h4>
                    </div>
                    <div className="text-[10px] font-bold text-purple-400/90 font-mono">
                      Next.js / D3.js
                    </div>
                    <p className="text-[10px] text-gray-400 leading-normal line-clamp-2">
                      Interactive D3 charts, drag-and-drop uploads, and dynamic dashboards.
                    </p>
                  </div>
                </foreignObject>

                {/* 2. NGINX REVERSE PROXY */}
                <foreignObject x="210" y="225" width="145" height="110">
                  <div className={`w-full h-full p-3 rounded-xl border bg-slate-950/80 backdrop-blur-md flex flex-col justify-between transition-all duration-300 ${activePath === 'all' || activePath === 'ingestion' || activePath === 'query'
                    ? 'border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.08)]'
                    : 'border-slate-900 opacity-30'
                    }`}>
                    <div className="flex items-center gap-1.5">
                      <span className="text-base text-emerald-400">🔒</span>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Nginx</h4>
                    </div>
                    <div className="text-[10px] font-bold text-emerald-400/90 font-mono">
                      Reverse Proxy
                    </div>
                    <p className="text-[10px] text-gray-400 leading-normal line-clamp-2">
                      TLS termination, load balancing, and request proxying to FastAPI.
                    </p>
                  </div>
                </foreignObject>

                {/* 3. FASTAPI GATEWAY */}
                <foreignObject x="380" y="225" width="180" height="110">
                  <div className={`w-full h-full p-3 rounded-xl border bg-slate-950/80 backdrop-blur-md flex flex-col justify-between transition-all duration-300 ${activePath === 'all' || activePath === 'ingestion' || activePath === 'query'
                    ? 'border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.08)]'
                    : 'border-slate-900 opacity-30'
                    }`}>
                    <div className="flex items-center gap-1.5">
                      <span className="text-base text-indigo-400">⚡</span>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">FastAPI</h4>
                    </div>
                    <div className="text-[10px] font-bold text-purple-400/90 font-mono">
                      Python API Gateway
                    </div>
                    <p className="text-[10px] text-gray-400 leading-normal line-clamp-2">
                      JWT auth, presigned S3 URLs, Celery dispatch, and DuckDB query lanes.
                    </p>
                  </div>
                </foreignObject>

                {/* 4. POSTGRESQL DB (METADATA) */}
                <foreignObject x="620" y="55" width="205" height="110">
                  <div className={`w-full h-full p-3 rounded-xl border bg-slate-950/80 backdrop-blur-md flex flex-col justify-between transition-all duration-300 ${isIngestionActive || isQueryActive
                    ? 'border-indigo-500/40 shadow-[0_0_15px_rgba(99,102,241,0.05)]'
                    : 'border-slate-900 opacity-30'
                    }`}>
                    <div className="flex items-center gap-1.5">
                      <span className="text-base text-violet-400">🐘</span>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">PostgreSQL</h4>
                    </div>
                    <div className="text-[10px] font-bold text-purple-400/90 font-mono">
                      Relational Metadata
                    </div>
                    <p className="text-[10px] text-gray-400 leading-normal line-clamp-2">
                      Transactional schemas, user records, file status logs, and metadata queries.
                    </p>
                  </div>
                </foreignObject>

                {/* 5. REDIS MESSAGE BROKER */}
                <foreignObject x="620" y="225" width="205" height="110">
                  <div className={`w-full h-full p-3 rounded-xl border bg-slate-950/80 backdrop-blur-md flex flex-col justify-between transition-all duration-300 ${isIngestionActive
                    ? 'border-indigo-500/40 shadow-[0_0_15px_rgba(99,102,241,0.05)]'
                    : 'border-slate-900 opacity-30'
                    }`}>
                    <div className="flex items-center gap-1.5">
                      <span className="text-base text-red-500">📦</span>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Redis Broker</h4>
                    </div>
                    <div className="text-[10px] font-bold text-purple-400/90 font-mono">
                      Task Message Queue
                    </div>
                    <p className="text-[10px] text-gray-400 leading-normal line-clamp-2">
                      Buffers ingestion jobs from FastAPI to Celery workers.
                    </p>
                  </div>
                </foreignObject>

                {/* 6. DUCKDB ANALYTICS STORAGE */}
                <foreignObject x="620" y="395" width="205" height="110">
                  <div className={`w-full h-full p-3 rounded-xl border bg-slate-950/80 backdrop-blur-md flex flex-col justify-between transition-all duration-300 ${isQueryActive || activePath === 'ingestion'
                    ? 'border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.08)]'
                    : 'border-slate-900 opacity-30'
                    }`}>
                    <div className="flex items-center gap-1.5">
                      <span className="text-base text-cyan-400">🦆</span>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">DuckDB Engine</h4>
                    </div>
                    <div className="text-[10px] font-bold text-cyan-400/90 font-mono">
                      Vectorized OLAP File
                    </div>
                    <p className="text-[10px] text-gray-400 leading-normal line-clamp-2">
                      Holds real data in columnar files. Sub-12ms aggregation queries!
                    </p>
                  </div>
                </foreignObject>

                {/* 7. CELERY WORKER THREAD */}
                <foreignObject x="910" y="135" width="210" height="110">
                  <div className={`w-full h-full p-3 rounded-xl border bg-slate-950/80 backdrop-blur-md flex flex-col justify-between transition-all duration-300 ${isIngestionActive
                    ? 'border-indigo-500/40 shadow-[0_0_15px_rgba(99,102,241,0.05)]'
                    : 'border-slate-900 opacity-30'
                    }`}>
                    <div className="flex items-center gap-1.5">
                      <span className="text-base text-indigo-400">⚙️</span>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Celery Worker</h4>
                    </div>
                    <div className="text-[10px] font-bold text-purple-400/90 font-mono">
                      Background Parser
                    </div>
                    <p className="text-[10px] text-gray-400 leading-normal line-clamp-2">
                      Wakes up, downloads from S3, parses with Pandas, writes to DuckDB, then sleeps.
                    </p>
                  </div>
                </foreignObject>

                {/* 8. AWS S3 BULK STORAGE */}
                <foreignObject x="910" y="315" width="210" height="110">
                  <div className={`w-full h-full p-3 rounded-xl border bg-slate-950/80 backdrop-blur-md flex flex-col justify-between transition-all duration-300 ${isIngestionActive
                    ? 'border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.05)]'
                    : 'border-slate-900 opacity-30'
                    }`}>
                    <div className="flex items-center gap-1.5">
                      <span className="text-base text-amber-500">🪣</span>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">AWS S3 Storage</h4>
                    </div>
                    <div className="text-[10px] font-bold text-amber-400/90 font-mono">
                      Object File Store
                    </div>
                    <p className="text-[10px] text-gray-400 leading-normal line-clamp-2">
                      Durable vault for raw CSV, Excel, and JSON uploads via presigned URLs.
                    </p>
                  </div>
                </foreignObject>
              </svg>
            </div>

            {/* Legend / Info Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-sm text-gray-400">
              <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/20">
                <h5 className="font-bold text-indigo-300 mb-1">1. Decoupled Ingestion</h5>
                <p className="text-xs">
                  Browser gets a presigned URL through Nginx → FastAPI, then uploads directly to S3. A Redis job queues and Celery worker wakes, processes, pushes to DuckDB, and sleeps.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <h5 className="font-bold text-amber-300 mb-1">⤴ Direct S3 Upload</h5>
                <p className="text-xs">
                  The dashed arc shows the browser uploading files directly to S3 via a presigned URL, completely bypassing Nginx and FastAPI.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                <h5 className="font-bold text-cyan-300 mb-1">2. Hybrid Data Query</h5>
                <p className="text-xs">
                  Metadata queries route through PostgreSQL while real analytical data queries execute directly against DuckDB for sub-12ms vectorized speeds.
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="pipeline"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-gray-800 bg-gray-950/80 backdrop-blur-md p-6 md:p-8 shadow-xl"
          >
            {/* Timeline component */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Timeline Numbers */}
              <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 lg:border-r border-gray-900 lg:pr-4">
                {pipelineSteps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left whitespace-nowrap min-w-[200px] lg:w-full border ${activeStep === index
                      ? 'bg-purple-600/10 border-purple-500/40 text-purple-300'
                      : 'bg-transparent border-transparent text-gray-500 hover:text-gray-300'
                      }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${activeStep === index ? 'bg-purple-500 text-white' : 'bg-gray-800 text-gray-500'
                        }`}
                    >
                      {step.num}
                    </span>
                    <span className="font-semibold text-sm truncate">{step.title}</span>
                  </button>
                ))}
              </div>

              {/* Right Content Panel */}
              <div className="lg:col-span-8 flex flex-col justify-center min-h-[250px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider w-fit">
                      {pipelineSteps[activeStep].component}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                      Step {pipelineSteps[activeStep].num}: {pipelineSteps[activeStep].title}
                    </h3>
                    <p className="text-base text-gray-300 leading-relaxed md:w-11/12">
                      {pipelineSteps[activeStep].description}
                    </p>

                    {/* Progress Indicator Dots */}
                    <div className="flex gap-1.5 pt-6">
                      {pipelineSteps.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${i === activeStep ? 'w-8 bg-purple-500' : 'w-2 bg-gray-800'
                            }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </section>
  )
}
