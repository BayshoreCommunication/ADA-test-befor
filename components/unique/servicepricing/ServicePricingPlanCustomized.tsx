"use client";

import React, { useState } from "react";
import CalculateServicePricingCalculate from "./CalculateServicePricingCalculate";
// import { InitialPricingList } from './initialPricingList';
import ServicePriicngSaveData from "./ServicePriicngSaveData";
import ServicesPriceCard from "./ServicesPriceCard";
import { InitialPricingList } from "./initialPricingListMain";

interface Service {
  servicesName: string | null;
  serviceDetails: string | null;
  unitPrice: number | null;
  quantity: number | null;
  estimatedTotalPrice: number | null;
}

const ServicePricingPlanCustomized: React.FC = () => {
  const [pricingList, setPricingList] = useState(InitialPricingList);
  const [totalPrice, setTotalPrice] = useState<string>("0");
  const [openPreview, setOpenPreview] = useState<boolean>(false);

  const [formValues, setFormValues] = useState({
    businessName: "",
    partnerName: "",
    email: "",
    phone: "",
    website: "",
    address: "",
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  const handleOpenPreview = () => {
    setOpenPreview(!openPreview);
    scrollToTop();
  };

  return (
    <>
      <div className="px-0 pt-16 pb-16 md:px-36">
        {openPreview ? (
          <ServicePriicngSaveData
            customizedPricingList={pricingList}
            estimatedTotalPrice={totalPrice}
            clientInfo={formValues}
            handleOpenPreview={handleOpenPreview}
          />
        ) : (
          <>
            <CalculateServicePricingCalculate
              pricingList={pricingList}
              setPricingList={setPricingList}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              formValues={formValues}
              setFormValues={setFormValues}
            />
            <div className="flex justify-center pt-20">
              <button
                onClick={handleOpenPreview}
                className="!py-4 md:!py-4 flex items-center gap-2 sm:gap-4 md:gap-8 px-[3rem] justify-center md:justify-start border-2 bg-primary border-primary rounded-full hover:rounded-full text-white hover:bg-transparent hover:text-primary a-button"
              >
                Save Plan
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ServicePricingPlanCustomized;
