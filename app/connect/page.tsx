import ConnectCountUpSection from "@/components/connect/ConnectCountUpSection";
import ConnectHeroSection from "@/components/connect/ConnectHeroSection";
import LegalGrowthEngineSection from "@/components/connect/LegalGrowthEngineSection";
import ResultsSection from "@/components/connect/ResultsSection";
import TopMarquee from "@/components/connect/TopMarquee";
import Header from "@/components/giftFromUs/Header";
import React from "react";
import SystemBlendsSection from "@/components/connect/SystemBlendsSection";
import StrategySessionSection from "@/components/connect/StrategySessionSection";
import FooterCTA from "@/components/giftFromUs/FooterCTA";

const page = () => {
  return (
    <>
      <Header />
      <ConnectHeroSection />
      <TopMarquee />
      <ConnectCountUpSection />
      <LegalGrowthEngineSection />
      <ResultsSection />
      <SystemBlendsSection />
      <StrategySessionSection />
      <FooterCTA/>
    </>
  );
};

export default page;
