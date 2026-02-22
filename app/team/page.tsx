import PainRelief from "@/components/home/PainRelief";
import Testimonials from "@/components/home/Testimonials";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import About from "@/components/team/About";

import TeamPage from "@/components/team/TeamPage";
import React from "react";

const page = () => {
  return (
    <>
      <BreadcrumbSection
        title="Nice To Meet You, Greater Carrollwood Tampa"
        items={[
          { label: "Home", href: "/" },
          { label: "Meet The Team" }, // current page (no href)
        ]}
      />
      <About/>
      <TeamPage />
      <Testimonials />
      <PainRelief />
    </>
  );
};

export default page;
