"use client";

import SmartSolution from '@/components/businessIdea/SmartSolution'
import WhiteLabel from '@/components/businessIdea/WhiteLabel'
import Testimonial from '@/components/businessIdea/Testimonial'
import WhyChooseUs from '@/components/businessIdea/WhyChooseUs'
import Blueprint from '@/components/businessIdea/Blueprint'
import React from 'react'
import Calandy from '@/components/businessIdea/Calandy'
import BayshoreTeam from '@/components/businessIdea/BayshoreTeam'
import Footer from '@/components/businessIdea/Footer'
import Marque from '@/components/businessIdea/Marque';
import HeroSection from '@/components/businessIdea/HeroSection';


const page = () => {
  return (
    <div>
      <HeroSection />
      <Marque />
      <WhiteLabel />
      <SmartSolution />
      <Testimonial />
      <WhyChooseUs />
      <Blueprint />
      <Calandy />
      <BayshoreTeam />
      <Footer />

    </div>
  )
}

export default page