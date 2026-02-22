import Hero from '@/components/partnerUp/Hero'
import SmartSolution from '@/components/partnerUp/SmartSolution'
import WhiteLabel from '@/components/partnerUp/WhiteLabel'
import Testimonial from '@/components/partnerUp/Testimonial'
import WhyChooseUs from '@/components/partnerUp/WhyChooseUs'
import Blueprint from '@/components/partnerUp/Blueprint'
import React from 'react'
import Calandy from '@/components/partnerUp/Calandy'
import BayshoreTeam from '@/components/partnerUp/BayshoreTeam'
import Footer from '@/components/partnerUp/Footer'
import Marque from '@/components/partnerUp/Marque';

import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Partner Up | Bayshore Communication",
    description:
      "Join forces with Bayshore Communication and explore partnership opportunities to grow your business together.",
    openGraph: {
      title: "Partner Up | Bayshore Communication",
      description:
        "Join forces with Bayshore Communication and explore partnership opportunities to grow your business together.",
      images: [
        {
          url: "https://www.bayshorecommunication.com/opengraph-image.jpg", // ✅ must be absolute
          width: 1200,
          height: 630,
          alt: "Partner Up | Bayshore Communication",
        },
      ],
      url: "https://www.bayshorecommunication.com/partner-up",
      type: "website",
      siteName: "Bayshore Communication",
    },
  };
}


const page = () => {
  return (
    <div>
      <Hero />
      <Marque />
      <WhiteLabel />
      <SmartSolution />
      <Testimonial />
      {/* <WhyChooseUs /> */}
      <Blueprint />
      <Calandy />
      <BayshoreTeam />
      <Footer />
    </div>
  )
}

export default page