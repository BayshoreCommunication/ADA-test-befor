"use client";

import Hero from '@/components/strategySession/Hero'
import SmartSolution from '@/components/strategySession/SmartSolution'
import WhiteLabel from '@/components/strategySession/WhiteLabel'
import Testimonial from '@/components/strategySession/Testimonial'
import WhyChooseUs from '@/components/strategySession/WhyChooseUs'
import Blueprint from '@/components/strategySession/Blueprint'
import React from 'react'
import Calandy from '@/components/strategySession/Calandy'
import BayshoreTeam from '@/components/strategySession/BayshoreTeam'
import Footer from '@/components/strategySession/Footer'
import Marque from '@/components/strategySession/Marque';


const page = () => {
  return (
    <div>
        <Hero />
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