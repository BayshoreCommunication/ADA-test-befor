import PainRelief from "@/components/home/PainRelief";
import TransformationSection from "@/components/home/Transformation";
import MedicalWeightLossPage from "@/components/medical-weight-loss/MedicalWeightLossPage";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import VitaminsPeptidesPage from "@/components/vitamins-peptides/VitaminsPeptidesPage";
import React from "react";

const page = () => {
  return (
    <>
      <BreadcrumbSection
        title="Harness The Power of Peptides"
        items={[
          { label: "Home", href: "/" },
          { label: "Vitamins & Peptides" }, // current page (no href)
        ]}
      />
      <VitaminsPeptidesPage />
      <TransformationSection />
      <PainRelief />
    </>
  );
};

export default page;
