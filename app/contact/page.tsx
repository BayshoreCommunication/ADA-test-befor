import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import PainRelief from "@/components/home/PainRelief";
import React from "react";

const page = () => {
  return (
    <>
      <BreadcrumbSection
        title="Drop us a line!"
        items={[
          { label: "Home", href: "/" },
          { label: "Contact Us" }, // current page (no href)
        ]}
      />
      <ContactForm />
      <ContactMap />
      <PainRelief />
    </>
  );
};

export default page;
