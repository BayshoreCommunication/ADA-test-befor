import PainRelief from "@/components/home/PainRelief";
import Approach from "@/components/purpose/Approach";
import Purpose from "@/components/purpose/Purpose";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import React from "react";

const page = () => {
  return (
    <>
      <BreadcrumbSection
        title="Empowering You to Live Healthier, Happier, and Stronger"
        items={[
          { label: "Home", href: "/" },
          { label: "Our Purpose" }, // current page (no href)
        ]}
      />
      <Purpose/>
      <Approach/>
      <PainRelief/>
    </>
  );
};
export default page;
