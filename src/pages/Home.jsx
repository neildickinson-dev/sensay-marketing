import React from 'react'
import Hero from '../components/Hero.jsx'
import Stats from '../components/Stats.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import AISection from '../components/AISection.jsx'
import Pricing from '../components/Pricing.jsx'
import Testimonials from '../components/Testimonials.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorks />
      <AISection />
      <Pricing />
      <Testimonials />
    </>
  )
}
