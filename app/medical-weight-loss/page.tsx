import PainRelief from "@/components/home/PainRelief";
import TransformationSection from "@/components/home/Transformation";
import MedicalWeightLossPage from "@/components/medical-weight-loss/MedicalWeightLossPage";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import React from "react";

const page = () => {
  return (
    <>
      <BreadcrumbSection
        title="Transform Your Body with Medical Weight Loss Tampa"
        items={[
          { label: "Home", href: "/" },
          { label: "Medical Weight Loss" }, // current page (no href)
        ]}
      />
      <MedicalWeightLossPage />
      <TransformationSection />
      <PainRelief />
    </>
  );
};

export default page;
