"use client";
import SectionLayout from "@/components/universal/SectionLayout";
import emailjs from "emailjs-com";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";
import DaynamicTableDataShow from "./DaynamicTableDataShow";

const MarketingPerspectivesFormPreview = ({
  marketingPerspectivesFormDataDetails,
  marketingPerspectivesFormShow,
  setMarketingPerspectivesFormShow,
}) => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const [openPreview, setOpenPreview] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  const captureAndSendPDF = async () => {
    setLoading(true);
    const pages = document.querySelectorAll(".page");
    const pdf = new jsPDF("p", "mm", "a4");

    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i]);
      const imgData = canvas.toDataURL("image/png");

      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

      if (i < pages.length - 1) {
        pdf.addPage();
      }
    }

    pdf.save("marketing-perspectives-from.pdf");
    const pdfBlob = pdf.output("blob");

    const imgbbApiKey = "1825be391df34e8fb74e71b399c94c17";
    const formData = new FormData();
    formData.append("image", pdfBlob, "marketing-perspectives-from.pdf");

    const reader = new FileReader();
    reader.readAsDataURL(pdfBlob);
    reader.onloadend = async () => {
      const base64data = reader.result?.split(",")[1];

      formData.append("image", base64data);

      try {
        const response = await fetch(
          `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
          {
            method: "POST",
            body: formData,
          }
        );

        const result = await response.json();
        const imgbbUrl = result.data.url;

        emailjs
          .send(
            "service_xak0y8q",
            "template_nh7stuq",
            {
              image_url: imgbbUrl,
            },
            "x_A7wpJ4uetSYsy72"
          )
          .then(
            (result) => {
              setMarketingPerspectivesFormShow(false);
              setLoading(false);
              setOpenPreview(!openPreview);
              scrollToTop();
              console.log("PDF and link sent successfully", result.text);
              Swal.fire({
                title: "Thank you!",
                text: "Your message has been sent successfully. We will get back to you soon.",
                icon: "success",
                confirmButtonColor: "#FE6F1F",
              });
            },
            (error) => {
              setShowSuccessPopup(true);
              setShowErrorPopup(true);
              setTimeout(() => {
                setShowSuccessPopup(false);
                setShowErrorPopup(false);
              }, 5000);
              Swal.fire({
                text: "We’re experiencing some technical issues. Please try again later or contact us directly.",
                icon: "error",
                confirmButtonColor: "#FE6F1F",
              });
              console.error("Failed to send PDF and link", error.text);
            }
          );
      } catch (error) {
        console.error("Failed to upload to ImgBB", error);
      }
    };
  };

  return (
    <div>
      <div className="page">
        <SectionLayout bg={""}>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/bayshore-logo.svg"
              alt="bayshore-logo"
              width={300}
              height={150}
              className="w-[200px] md:w-[300px] h-auto py-6"
              priority
            />
          </div>
          <div className="px-0 pt-4 md:px-28 mb-[-24px]">
            <div className="py-2">
              {/* Business Information */}

              <div className="bg-gray-100 px-10 py-16">
                <h2 className="font-semibold text-4xl mb-5">
                  1. Business Information
                </h2>

                <div className="flex  items-center gap-x-6 w-full justify-between mb-8">
                  <div className="w-full flex items-start  gap-x-2">
                    <label
                      htmlFor="businessName"
                      className="block text-2xl font-semibold text-gray-900 mb-2"
                    >
                      Business Name:
                    </label>
                    <p className="block text-2xl font-medium text-gray-900 mb-2">
                      {
                        marketingPerspectivesFormDataDetails?.businessInfo
                          ?.businessName
                      }
                    </p>
                  </div>
                  <div className="w-full  flex items-start  gap-x-2">
                    <label
                      htmlFor="businessWebsite"
                      className="block text-2xl  font-semibold text-gray-900 mb-2"
                    >
                      Business Website:
                    </label>
                    <p className="block text-2xl font-medium text-gray-900 mb-2">
                      {
                        marketingPerspectivesFormDataDetails?.businessInfo
                          ?.businessWebsite
                      }
                    </p>
                  </div>
                  <div className="w-full  flex items-start  gap-x-2">
                    <label
                      htmlFor="industry"
                      className="block text-2xl  font-semibold text-gray-900 mb-2"
                    >
                      Industry:
                    </label>
                    <p className="block text-2xl font-medium text-gray-900 mb-2">
                      {
                        marketingPerspectivesFormDataDetails?.businessInfo
                          ?.industry
                      }
                    </p>
                  </div>
                </div>

                <div className="mb-5  flex items-start  gap-x-2">
                  <label
                    htmlFor="businessDetails"
                    className="block text-2xl  font-semibold text-gray-900 mb-2"
                  >
                    Describe Your Business:
                  </label>

                  <p className="block text-2xl font-medium text-gray-900 mb-2">
                    {
                      marketingPerspectivesFormDataDetails?.businessInfo
                        ?.businessDetails
                    }
                  </p>
                </div>

                <h2 className="font-medium text-3xl mb-5 underline mt-3">
                  Target Audience:
                </h2>

                <div className="flex  items-center gap-x-6 w-full justify-between mb-8">
                  <div className="w-full  flex items-start  gap-x-2">
                    <label
                      htmlFor="ageRange"
                      className="block text-2xl  font-semibold text-gray-900"
                    >
                      Age Range:
                    </label>
                    <div className="max-w-2xl flex items-center gap-x-3">
                      <p className="block text-2xl font-medium text-gray-900">
                        Minimum:-{" "}
                        {
                          marketingPerspectivesFormDataDetails?.businessInfo
                            ?.ageRange[0]
                        }
                      </p>
                      <p className="block text-2xl font-medium text-gray-900">
                        and
                      </p>
                      <p className="block text-2xl font-medium text-gray-900">
                        Miximum:-{" "}
                        {marketingPerspectivesFormDataDetails?.businessInfo
                          ?.ageRange[1] <= 60
                          ? marketingPerspectivesFormDataDetails?.businessInfo
                              ?.ageRange[1]
                          : "60+"}
                      </p>
                    </div>
                  </div>
                  <div className="w-full  flex items-start  gap-x-2">
                    <label className="block text-2xl  font-semibold text-gray-900">
                      Gender:
                    </label>
                    <p className="block text-2xl font-medium text-gray-900">
                      {
                        marketingPerspectivesFormDataDetails?.businessInfo
                          ?.gender
                      }
                    </p>
                  </div>

                  <div className=" w-full  flex items-start  gap-x-2">
                    <label
                      htmlFor="location"
                      className="block text-2xl  font-semibold text-gray-900"
                    >
                      Location:
                    </label>
                    <p className="block text-2xl font-medium text-gray-900 mb-2">
                      {
                        marketingPerspectivesFormDataDetails?.businessInfo
                          ?.location
                      }
                    </p>
                  </div>
                </div>
                <div className="w-full  flex items-start gap-x-2">
                  <label
                    htmlFor="keyCompetitors"
                    className="block text-2xl  font-semibold text-gray-900"
                  >
                    Key Competitors (List):
                  </label>
                  <div className="flex flex-wrap gap-2 pointer-events-none">
                    {marketingPerspectivesFormDataDetails?.businessInfo?.keyCompetitors?.map(
                      (name) => (
                        <div
                          key={name}
                          className="flex items-center  text-black px-4 py-1 rounded-full text-2xl font-medium pointer-events-auto"
                        >
                          {name}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* 2. Current Digital Marketing Status */}
              <div className="px-10 py-16">
                <h2 className="font-semibold text-4xl mb-5">
                  2. Current Digital Marketing Status
                </h2>

                {/* Check item */}
                <div className="flex items-center gap-x-5 mt-8">
                  <label
                    htmlFor="marketingStrategy"
                    className="block text-2xl font-semibold text-gray-900"
                  >
                    Do you currently have a digital marketing strategy in place?
                  </label>
                  <div className="flex items-start gap-x-2">
                    <p className="block text-2xl font-medium text-gray-900">
                      {
                        marketingPerspectivesFormDataDetails?.marketingStatus
                          ?.marketingStrategy
                      }
                    </p>
                  </div>
                </div>
                {marketingPerspectivesFormDataDetails?.marketingStatus
                  ?.marketingStrategy === "yes" && (
                  <div className="flex  items-center gap-x-6 w-full justify-between  mt-8 mb-8">
                    <div className="w-full flex items-start gap-x-2">
                      <label
                        htmlFor="marketingTools"
                        className="block text-2xl font-semibold text-gray-900"
                      >
                        What marketing tools are you currently using?
                      </label>
                      <p className="block text-2xl font-medium text-gray-900">
                        {
                          marketingPerspectivesFormDataDetails?.marketingStatus
                            ?.marketingTools
                        }
                      </p>
                    </div>

                    <div className="w-full flex items-start gap-x-2">
                      <label
                        htmlFor="websitePerformance"
                        className="text-2xl  font-semibold text-gray-900"
                      >
                        Current Website Performance:
                      </label>
                      <p className="text-2xl font-medium text-gray-900">
                        {
                          marketingPerspectivesFormDataDetails?.marketingStatus
                            ?.marketingTools
                        }
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/*3 Current Digital Marketing Status */}
              <div className="px-10 py-16 bg-gray-100">
                <h2 className="font-semibold text-4xl mb-5">
                  3. Social Media Needs
                </h2>
                {/* Check item */}
                <div className="mt-8 flex items-start gap-x-2">
                  <label className="block text-2xl  font-semibold text-gray-900">
                    What are your primary goals for digital marketing?
                  </label>

                  <p className="text-2xl font-medium text-gray-900">
                    {marketingPerspectivesFormDataDetails?.mediaNeeds?.primaryGoals?.join(
                      ", "
                    )}{" "}
                    {marketingPerspectivesFormDataDetails?.mediaNeeds
                      ?.otherPrimaryGoals &&
                      ` , ${marketingPerspectivesFormDataDetails?.mediaNeeds?.otherPrimaryGoals}`}
                  </p>
                </div>
                {/* Check item */}
                <div className="mt-8  flex items-start gap-x-2">
                  <label className="block text-2xl  font-semibold text-gray-900">
                    Which social media platforms are you currently using? (Check
                    all that apply)
                  </label>
                  <p className="text-2xl font-medium text-gray-900">
                    {marketingPerspectivesFormDataDetails?.mediaNeeds?.mediaPlatforms?.join(
                      ", "
                    )}{" "}
                    {marketingPerspectivesFormDataDetails?.mediaNeeds
                      ?.otherPrimaryGoals &&
                      ` , ${marketingPerspectivesFormDataDetails?.mediaNeeds?.otherMediaPlatforms}`}
                  </p>
                </div>
                <div className="mt-6  flex items-start gap-x-2">
                  <label className="text-2xl  font-semibold text-gray-900 ">
                    What are your main challenges with social media right now?
                  </label>
                  <p className="text-2xl font-medium text-gray-900">
                    {
                      marketingPerspectivesFormDataDetails?.mediaNeeds
                        ?.mainChallenges
                    }
                  </p>
                </div>
              </div>

              {/* 4 Social Media Channels Your Want ot Operate In */}
              <div className="px-10 py-16">
                <h2 className="font-semibold text-4xl mb-5">
                  4. Social Media Channels You Want to Operate In
                </h2>

                {/* Check item */}
                <div className="mt-8 flex items-start gap-x-2">
                  <label
                    htmlFor="industry"
                    className="text-2xl  font-semibold text-gray-900"
                  >
                    Which social media platforms are you currently using? (Check
                    all that apply)
                  </label>
                  <p className="text-2xl font-medium text-gray-900">
                    {marketingPerspectivesFormDataDetails?.mediaChannels?.likeToFocus?.join(
                      ", "
                    )}{" "}
                    {marketingPerspectivesFormDataDetails?.mediaChannels
                      ?.otherLikeToFocus &&
                      ` , ${marketingPerspectivesFormDataDetails?.mediaChannels?.otherLikeToFocus}`}
                  </p>
                </div>

                {/* Check item */}
                <div className="mt-8 flex items-start gap-x-2">
                  <label
                    htmlFor="industry"
                    className="text-2xl  font-semibold text-gray-900"
                  >
                    What type of content do you want to create on these
                    platforms?
                  </label>
                  <p className="text-2xl font-medium text-gray-900">
                    {marketingPerspectivesFormDataDetails?.mediaChannels?.mediaPlatforms?.join(
                      ", "
                    )}{" "}
                    {marketingPerspectivesFormDataDetails?.mediaChannels
                      ?.otherMediaPlatforms &&
                      ` , ${marketingPerspectivesFormDataDetails?.mediaChannels?.otherMediaPlatforms}`}
                  </p>
                </div>
              </div>

              {/* 5. Digital Advertising Needs */}

              <div className="px-10 py-16 bg-gray-100">
                {" "}
                <h2 className="font-semibold text-4xl mb-5 ">
                  5. Digital Advertising Needs
                </h2>
                {/* Check item */}
                <div className="flex items-start gap-x-5 mt-6">
                  <label className="text-2xl  font-semibold text-gray-900">
                    Are you currently running digital ads?
                  </label>
                  <p className="text-2xl font-medium text-gray-900">
                    {
                      marketingPerspectivesFormDataDetails
                        ?.digitalAdvertisingNeeds?.runningAds
                    }
                  </p>
                </div>
                {marketingPerspectivesFormDataDetails?.digitalAdvertisingNeeds
                  ?.runningAds === "yes" ? (
                  <div className="mt-6 flex items-start gap-x-2">
                    <label
                      htmlFor="whichPlatforms"
                      className="text-2xl font-semibold text-gray-900"
                    >
                      On which platforms
                    </label>
                    <p className="text-2xl font-medium text-gray-900">
                      {
                        marketingPerspectivesFormDataDetails
                          ?.digitalAdvertisingNeeds?.whichPlatforms
                      }
                    </p>
                  </div>
                ) : (
                  ""
                )}
                {/* Check item */}
                <div className="mt-6 flex items-start gap-x-2">
                  <label className="text-2xl  font-semibold text-gray-900">
                    What are your main advertising goals?
                  </label>
                  <p className="text-2xl font-medium text-gray-900">
                    {marketingPerspectivesFormDataDetails?.digitalAdvertisingNeeds?.advertisingGoals.join(
                      ", "
                    )}{" "}
                    {marketingPerspectivesFormDataDetails
                      ?.digitalAdvertisingNeeds?.otherAdvertisingGoals &&
                      ` , ${marketingPerspectivesFormDataDetails?.digitalAdvertisingNeeds?.otherAdvertisingGoals}`}
                  </p>
                </div>
                <div className="mt-6  mb-4 flex items-start gap-x-2">
                  <label
                    htmlFor="budgetForDigitalAdvertising"
                    className="text-2xl font-semibold text-gray-900"
                  >
                    Budget for Digital Advertising:
                  </label>
                  <p className="text-2xl font-medium text-gray-900">
                    {
                      marketingPerspectivesFormDataDetails
                        ?.digitalAdvertisingNeeds?.budgetForDigitalAdvertising
                    }
                  </p>
                </div>
                {/* Check item */}
                <div className="mt-6 flex items-start gap-x-2">
                  <label className="text-2xl  font-semibold text-gray-900">
                    Preferred Platforms for Digital Advertising:
                  </label>
                  <p className="text-2xl font-medium text-gray-900">
                    {marketingPerspectivesFormDataDetails?.digitalAdvertisingNeeds?.preferredPlatforms.join(
                      ", "
                    )}{" "}
                    {marketingPerspectivesFormDataDetails
                      ?.digitalAdvertisingNeeds?.otherPreferredPlatforms &&
                      ` , ${marketingPerspectivesFormDataDetails?.digitalAdvertisingNeeds?.otherPreferredPlatforms}`}
                  </p>
                </div>
              </div>

              {/* 6. SEO Keywords and Topics*/}

              <div className="px-10 py-16">
                <h2 className="font-semibold text-4xl mb-5">
                  6. SEO Keywords and Topics
                </h2>
                {/* Check item */}
                <div className="flex items-center gap-x-5 mt-8">
                  <label className="text-2xl  font-semibold text-gray-900">
                    Are you currently doing SEO for your website?
                  </label>
                  <p className="text-2xl font-medium text-gray-900">
                    {
                      marketingPerspectivesFormDataDetails?.seoKeywordsTopics
                        ?.currentlySeo
                    }
                  </p>
                </div>
                {marketingPerspectivesFormDataDetails?.seoKeywordsTopics
                  ?.currentlySeo === "yes" ? (
                  <div className="flex items-start gap-x-2 mt-5">
                    <label
                      htmlFor="businessName"
                      className="text-2xl font-semibold text-gray-900 mb-3 block"
                    >
                      What tools or platforms are you using? (e.g., Google
                      Search Console, Ahrefs, SEMrush)
                    </label>
                    <p className="text-2xl font-medium text-gray-900">
                      {
                        marketingPerspectivesFormDataDetails?.seoKeywordsTopics
                          ?.whatTools
                      }
                    </p>
                  </div>
                ) : (
                  ""
                )}
                {/* Dynamic Table */}
                <div className="mt-6">
                  <label
                    htmlFor="businessName"
                    className="text-2xl font-semibold text-gray-900 mb-3 block"
                  >
                    What are the top keywords you want to rank for?
                  </label>
                  <DaynamicTableDataShow
                    daynamicRowsData={
                      marketingPerspectivesFormDataDetails?.seoKeywordsTopics
                        ?.topKeywords
                    }
                  />
                </div>
                <div className="mt-6 flex items-start gap-x-2">
                  <label className=" text-2xl  font-semibold text-gray-900 mb-2">
                    What specific topics or themes would you like to target with
                    your SEO strategy?
                  </label>
                  <p className="text-2xl font-medium text-gray-900">
                    {
                      marketingPerspectivesFormDataDetails?.seoKeywordsTopics
                        ?.specificTopics
                    }
                  </p>
                </div>
                {/* Check item */}
                <div className="mt-6 flex items-start gap-x-2">
                  <label className="text-2xl  font-semibold text-gray-900">
                    What are your primary goals for SEO?
                  </label>
                  <p className="text-2xl font-medium text-gray-900">
                    {marketingPerspectivesFormDataDetails?.seoKeywordsTopics?.primaryGoalsForSeo?.join(
                      ", "
                    )}{" "}
                    {marketingPerspectivesFormDataDetails?.seoKeywordsTopics
                      ?.otherPrimaryGoalsForSeo &&
                      ` , ${marketingPerspectivesFormDataDetails?.seoKeywordsTopics?.otherPrimaryGoalsForSeo}`}
                  </p>
                </div>
              </div>

              {/* 7. Other Marketing Needs*/}

              <div className="px-10 py-16 bg-gray-100">
                <h2 className="font-semibold text-4xl mb-5">
                  7. Other Marketing Needs
                </h2>
                {/* Check item */}
                <div className="mt-8 flex items-start gap-x-2">
                  <label
                    htmlFor="industry"
                    className="block text-2xl  font-semibold text-gray-900"
                  >
                    Are you interested in any of the following services? (Check
                    all that apply)
                  </label>
                  <p className="text-2xl font-medium text-gray-900">
                    {marketingPerspectivesFormDataDetails?.marketingNeeds?.followingServices?.join(
                      ", "
                    )}{" "}
                    {marketingPerspectivesFormDataDetails?.marketingNeeds
                      ?.otherFollowingServices &&
                      ` , ${marketingPerspectivesFormDataDetails?.marketingNeeds?.otherFollowingServices}`}
                  </p>
                </div>
              </div>

              {/*8. Additional Information*/}

              <div className="px-10 py-16">
                <h2 className="font-semibold text-4xl mb-5">
                  8. Additional Information
                </h2>
                <div className="mb-5 mt-6">
                  <label className="block text-2xl  font-semibold text-gray-900 mb-4">
                    What is your timeline for seeing results? WITHIN THE NEXT
                    30-60 DAYS
                  </label>
                  <p className="text-2xl font-medium text-gray-900">
                    {
                      marketingPerspectivesFormDataDetails
                        ?.additionalInformation?.timeline
                    }
                  </p>
                </div>
                <div className="mt-6">
                  <label className="block text-2xl  font-semibold text-gray-900 mb-2">
                    Any other information or specific requests?
                  </label>
                  <p className="text-2xl font-medium text-gray-900">
                    {
                      marketingPerspectivesFormDataDetails
                        ?.additionalInformation?.specificRequests
                    }
                  </p>
                </div>
              </div>

              {/*9. Contact Information
               */}

              <div className="px-10 py-16 bg-gray-100">
                <h2 className="font-semibold text-4xl mb-5">
                  9. Contact Information
                </h2>

                <div className="flex  items-center gap-x-6 w-full justify-between">
                  <div className="w-full flex items-start gap-x-2">
                    <label className="text-2xl font-semibold text-gray-900 mb-2">
                      Primary Contact Name
                    </label>
                    <p className="text-2xl font-medium text-gray-900">
                      {
                        marketingPerspectivesFormDataDetails?.contactInformation
                          ?.primaryContactName
                      }
                    </p>
                  </div>
                  <div className="w-full flex items-start gap-x-2">
                    <label className="text-2xl  font-semibold text-gray-900 mb-2">
                      Email
                    </label>
                    <p className="text-2xl font-medium text-gray-900">
                      {
                        marketingPerspectivesFormDataDetails?.contactInformation
                          ?.email
                      }
                    </p>
                  </div>
                  <div className="w-full flex items-start gap-x-2">
                    <label className="text-2xl  font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <p className="text-2xl font-medium text-gray-900">
                      {
                        marketingPerspectivesFormDataDetails?.contactInformation
                          ?.phoneNumber
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionLayout>
      </div>

      <div className="flex justify-center items-center flex-col mt-10 mb-20">
        <button
          onClick={captureAndSendPDF}
          className="!py-4 md:!py-4 flex items-center gap-2 sm:gap-4 md:gap-8 px-[3rem] justify-center md:justify-start border-2 bg-primary border-primary rounded-full hover:rounded-full text-white hover:bg-transparent hover:text-primary a-button"
        >
          {loading ? (
            <>
              <div role="status" className="flex items-center gap-x-2">
                <svg
                  aria-hidden="true"
                  class="w-7 h-7 text-gray-200 animate-spin  fill-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span>Loading...</span>
              </div>
            </>
          ) : (
            "Submit Form"
          )}
        </button>

        <div className="mt-8">
          {loading ? (
            <p className="text-2xl">
              Please wait your submission is processing...
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketingPerspectivesFormPreview;
