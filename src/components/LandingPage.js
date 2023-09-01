import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Slides from './Slides'
import About from './About'
import Story from './Story'
import Standards from './Standards'
import Contact from './Contact'
import Testimonial from './Testimonial'

export default function LandingPage() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Slides/>
    <About/>
    <Story/>
    <Standards/>
    <Testimonial/>
    <Contact/>
    </>
  )
}
