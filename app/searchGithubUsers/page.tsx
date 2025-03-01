'use client'

import React from 'react'
import AboutSection from './components/AboutSection'
import HeroSection from './components/HeroSection'
import DotsBackdrop from '../components/Backdrop'

const page = () => {
  return (
    <>
      <DotsBackdrop />
      <HeroSection />
      <AboutSection />
    </>
  )
}

export default page
