import PainRelief from "@/components/home/PainRelief";
import TransformationSection from "@/components/home/Transformation";
import MedicalWeightLossPage from "@/components/medical-weight-loss/MedicalWeightLossPage";
import HUCT from "@/components/regenerative-medicine/HUCT";
import PRPInjections from "@/components/regenerative-medicine/PRPInjections";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import React from "react";

const page = () => {
  return (
    <>
      <BreadcrumbSection
        title="Regenerative Medicine"
        items={[
          { label: "Home", href: "/" },
          { label: "Regenerative Medicine" }, // current page (no href)
        ]}
      />
      <HUCT />
      <PRPInjections />
      <PainRelief />
    </>
  );
};

export default page;
