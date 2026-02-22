"use client";
import React, { useState } from "react";
import MarketingPerspectivesFormPreview from "./MarketingPerspectivesFormPreview";
import MarketingPerspectivesFormCustomized from "./MarketingPerspectivesFormCustomized";

const MarketingPerspectivesFrom = () => {
  const [
    marketingPerspectivesFormDataDetails,
    setMarketingPerspectivesFormDataDetails,
  ] = useState({});

  const [marketingPerspectivesFormShow, setMarketingPerspectivesFormShow] =
    useState(false);

  const [openPreview, setOpenPreview] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleOpenPreview = () => {
    setMarketingPerspectivesFormShow(!marketingPerspectivesFormShow);
    setOpenPreview(!openPreview);
    scrollToTop();
  };

  return (
    <div>
      <h1 className="bg-clip-text text-transparent bg-white inline-block">
        Marketing Perspectives
      </h1>
      {marketingPerspectivesFormShow ? (
        <div>
          <MarketingPerspectivesFormPreview
            marketingPerspectivesFormDataDetails={
              marketingPerspectivesFormDataDetails
            }
            marketingPerspectivesFormShow={marketingPerspectivesFormShow}
            setMarketingPerspectivesFormShow={setMarketingPerspectivesFormShow}
          />
        </div>
      ) : (
        <div>
          <MarketingPerspectivesFormCustomized
            setMarketingPerspectivesFormDataDetails={
              setMarketingPerspectivesFormDataDetails
            }
          />
          <div className="flex justify-center mt-10 mb-20">
            <button
              className="!py-4 md:!py-4 flex items-center gap-2 sm:gap-4 md:gap-8 px-[3rem] justify-center md:justify-start border-2 bg-primary border-primary rounded-full hover:rounded-full text-white hover:bg-transparent hover:text-primary a-button"
              onClick={handleOpenPreview}
            >
              Preview
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketingPerspectivesFrom;
