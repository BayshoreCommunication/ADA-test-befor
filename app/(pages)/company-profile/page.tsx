import React from "react";
import CPHeader from "../../../components/universal/CompanyProfile/CPHeader";
import Globe from "../../../components/universal/CompanyProfile/Globe";
import CompanyOverview from "../../../components/universal/CompanyProfile/CompanyOverview";
import AgencyPartners from "../../../components/universal/CompanyProfile/AgencyPartners";
import AboutBayshore from "@/components/universal/CompanyProfile/AboutBayshore";
import CompanyTimeline from "@/components/universal/CompanyProfile/CompanyTimeline";
import OurTeam from "@/components/universal/CompanyProfile/OurTeam";
import CoreValue from "@/components/universal/CompanyProfile/CoreValue";
import Services from "@/components/universal/CompanyProfile/Services";
import WorkingProcess from "@/components/universal/CompanyProfile/WorkingProcess";
import Timeline from "@/components/universal/CompanyProfile/Timeline";
import ToolsDomains from "@/components/universal/CompanyProfile/ToolsDomains";
import WebsitesDevelopment from "@/components/universal/CompanyProfile/WebsitesDevelopment";
import AppDevelopment from "@/components/universal/CompanyProfile/AppDevelopment";
import ContentWriting from "@/components/universal/CompanyProfile/ContentWriting";
import SearchEngineOptimization from "@/components/universal/CompanyProfile/SearchEngineOptimization";
import DigitalAd from "@/components/universal/CompanyProfile/DigitalAd";
import VideoProduction from "@/components/universal/CompanyProfile/VideoProduction";
import SocialMediaContent from "@/components/universal/CompanyProfile/SocialMediaContent";
import UIUXDesign from "@/components/universal/CompanyProfile/UIUXDesign";
import Testimonials from "@/components/universal/CompanyProfile/Testimonials";
import OurPartners from "@/components/universal/CompanyProfile/OurPartners";
import FAQ from "@/components/universal/CompanyProfile/FAQ";
import CPFooter from "@/components/universal/CompanyProfile/CPFooter";

const page = () => {
  return (
    <div className="bg-black">
      <CPHeader />
      <Globe />
      <CompanyOverview />
      <AgencyPartners />
      <AboutBayshore />
      <CompanyTimeline />
      <OurTeam />
      <CoreValue />
      <Services />
      <WorkingProcess />
      <Timeline />
      <ToolsDomains />
      <WebsitesDevelopment />
      <AppDevelopment />
      <ContentWriting />
      <SearchEngineOptimization />
      <DigitalAd />
      <VideoProduction />
      <SocialMediaContent />
      <UIUXDesign />
      <Testimonials />
      <OurPartners />
      <FAQ />
      <CPFooter />
    </div>
  );
};

export default page;
