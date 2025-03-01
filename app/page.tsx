'use client'

import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import DropsBackdrop from './components/Backdrop'

export default function FrontendPortfolio() {
  return (
    <main className='min-h-screen bg-[#0F172A] text-white overflow-x-hidden'>
      <DropsBackdrop />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
    </main>
  )
}
