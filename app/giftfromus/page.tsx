import React from 'react'
import Header from '../../components/giftFromUs/Header'
import HeroSection from '@/components/giftFromUs/HeroSection' 
import TopMarquee from '@/components/giftFromUs/TopMarquee'
import WhatYouWillReceive from '@/components/giftFromUs/WhatYouWillReceive'
import WhyDoingThis from '@/components/giftFromUs/WhyDoingThis'
import WhoThisIsFor from '@/components/giftFromUs/WhoThisIsFor'
import Calandy from '@/components/giftFromUs/Calandy' 
import FooterCTA from '@/components/giftFromUs/FooterCTA'

const page = () => {
  return (
    <div>
        <Header />
        <HeroSection />
        <TopMarquee />
        <WhatYouWillReceive />
        <WhyDoingThis />
        <WhoThisIsFor />
        <Calandy />
        <FooterCTA />
    </div>
  )
}

export default page