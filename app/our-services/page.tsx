import PainRelief from "@/components/home/PainRelief";
import TransformationSection from "@/components/home/Transformation";
import MedicalWeightLossPage from "@/components/medical-weight-loss/MedicalWeightLossPage";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import VitaminsPeptidesPage from "@/components/vitamins-peptides/VitaminsPeptidesPage";

const page = () => {
  return (
    <>
      <BreadcrumbSection
        title="Transform Your Body with Medical Weight Loss Tampa"
        items={[
          { label: "Home", href: "/" },
          { label: "Our Services" }, // current page (no href)
        ]}
      />
      <MedicalWeightLossPage />
      <VitaminsPeptidesPage />
      <TransformationSection />
      <PainRelief />
    </>
  );
};
export default page;
