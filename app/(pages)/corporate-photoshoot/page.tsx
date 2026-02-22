import BookYourSession from "@/components/CorporatePhotoshoot/BookYourSession";
import FAQ from "@/components/CorporatePhotoshoot/FAQ";
import FeaturedSection from "@/components/CorporatePhotoshoot/FeaturedSection";
import HeroSection from "@/components/CorporatePhotoshoot/HeroSection";
import Pricing from "@/components/CorporatePhotoshoot/Pricing";
import ProfessionalPhotos from "@/components/CorporatePhotoshoot/ProfessionalPhotos";
import ReadyToSchedule from "@/components/CorporatePhotoshoot/ReadyToSchedule";
import SomeCorporateWork from "@/components/CorporatePhotoshoot/SomeCorporateWork";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Professional Corporate Headshots & Photoshoots in Tampa"
          key="desc"
        />
      </Head>
      <HeroSection />
      <FeaturedSection />
      <ProfessionalPhotos />
      <Pricing />
      <BookYourSession />
      <SomeCorporateWork />
      <ReadyToSchedule />
      <FAQ />
    </div>
  );
};

export default page;
