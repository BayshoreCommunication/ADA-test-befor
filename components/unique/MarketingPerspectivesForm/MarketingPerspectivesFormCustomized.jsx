"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Checkbox } from "@material-tailwind/react";
import SectionLayout from "@/components/universal/SectionLayout";
import DaynamicTableAddValue from "./DaynamicTableAddValue";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return value > 60 ? "60+" : `${value}`;
}
const MarketingPerspectivesFormCustomized = ({
  setMarketingPerspectivesFormDataDetails,
}) => {
  // 1. Business Information

  const [ageRange, setAgeRange] = useState([15, 35]);

  const ageRangeHandleChange = (event, newValue) => {
    // Ensure the value doesn't exceed 60
    // const limitedValue = newValue.map((val) => (val > 60 ? 60 : val));

    setAgeRange(newValue);
  };

  const [businessInfo, setBusinessInfo] = useState({
    businessName: "",
    businessWebsite: "",
    industry: "",
    businessDetails: "",
    ageRange: "",
    gender: "",
    location: "",
    keyCompetitors: [],
  });

  const [competitor, setCompetitor] = useState("");

  // Add new competitor to the array
  const addCompetitor = () => {
    if (competitor.trim() !== "") {
      setBusinessInfo((prevState) => ({
        ...prevState, // Keep other businessInfo fields unchanged
        keyCompetitors: [...prevState.keyCompetitors, competitor], // Add the new competitor
      }));
      setCompetitor(""); // Clear the input after adding
    }
  };

  const handleRemoveKeywordsChip = (key) => {
    setBusinessInfo((prevState) => ({
      ...prevState,
      keyCompetitors: prevState.keyCompetitors.filter((el) => el !== key),
    }));
  };

  useEffect(() => {
    setBusinessInfo((prevInfo) => ({
      ...prevInfo,
      ageRange: ageRange,
    }));
  }, [ageRange]);

  const businessInfoHandleChange = (e) => {
    const { name, value } = e.target;
    setBusinessInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  //  2. Current Digital Marketing Status

  const [marketingStatus, setMarketingStatus] = useState({
    marketingStrategy: "",
    marketingTools: "",
    websitePerformance: "",
  });

  const marketingStatusHandleChange = (e) => {
    const { name, value } = e.target;
    setMarketingStatus((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // 3. Social Media Needs

  const [mediaNeeds, setMediaNeeds] = useState({
    primaryGoals: [],
    otherPrimaryGoals: "",
    mediaPlatforms: [],
    otherMediaPlatforms: "",
    mainChallenges: "",
  });

  const mediaNeedsHandleChange = (e) => {
    const { name, value, checked } = e.target;

    setMediaNeeds((prevInfo) => {
      if (name === "primaryGoals" || name === "mediaPlatforms") {
        // Handling predefined checkbox options (for primaryGoals and mediaPlatforms)
        if (value === "Others") {
          // Handle the "Others" checkbox for both groups
          return {
            ...prevInfo,
            [name]: checked
              ? [...prevInfo[name], value]
              : prevInfo[name].filter((item) => item !== value),
            [name === "primaryGoals"
              ? "otherPrimaryGoals"
              : "otherMediaPlatforms"]: checked
              ? prevInfo[
                  name === "primaryGoals"
                    ? "otherPrimaryGoals"
                    : "otherMediaPlatforms"
                ]
              : "", // Clear the 'Other' input when unchecked
          };
        } else {
          // Handle regular checkboxes for both groups (Red, Blue, etc.)
          return {
            ...prevInfo,
            [name]: checked
              ? [...prevInfo[name], value]
              : prevInfo[name].filter((item) => item !== value),
          };
        }
      } else if (
        name === "otherPrimaryGoals" ||
        name === "otherMediaPlatforms"
      ) {
        // Update the text input for 'Other' fields
        return {
          ...prevInfo,
          [name]: value,
        };
      } else {
        // Handling other fields like mainChallenges
        return {
          ...prevInfo,
          [name]: value,
        };
      }
    });
  };

  // 4. Social Media Channels You Want to Operate In

  const [mediaChannels, setMediaChannels] = useState({
    likeToFocus: [],
    otherLikeToFocus: "",
    mediaPlatforms: [],
    otherMediaPlatforms: "",
  });

  const mediaChannelsHandleChange = (e) => {
    const { name, value, checked } = e.target;

    setMediaChannels((prevInfo) => {
      if (name === "likeToFocus" || name === "mediaPlatforms") {
        // Handling predefined checkbox options (for primaryGoals and mediaPlatforms)
        if (value === "Others") {
          // Handle the "Others" checkbox for both groups
          return {
            ...prevInfo,
            [name]: checked
              ? [...prevInfo[name], value]
              : prevInfo[name].filter((item) => item !== value),
            [name === "likeToFocus"
              ? "otherLikeToFocus"
              : "otherMediaPlatforms"]: checked
              ? prevInfo[
                  name === "likeToFocus"
                    ? "otherLikeToFocus"
                    : "otherMediaPlatforms"
                ]
              : "", // Clear the 'Other' input when unchecked
          };
        } else {
          // Handle regular checkboxes for both groups (Red, Blue, etc.)
          return {
            ...prevInfo,
            [name]: checked
              ? [...prevInfo[name], value]
              : prevInfo[name].filter((item) => item !== value),
          };
        }
      } else if (
        name === "otherLikeToFocus" ||
        name === "otherMediaPlatforms"
      ) {
        // Update the text input for 'Other' fields
        return {
          ...prevInfo,
          [name]: value,
        };
      } else {
        // Handling other fields like mainChallenges
        return {
          ...prevInfo,
          [name]: value,
        };
      }
    });
  };

  // 5. Digital Advertising Needs

  const [digitalAdvertisingNeeds, setDigitalAdvertisingNeeds] = useState({
    runningAds: "",
    whichPlatforms: "",
    advertisingGoals: [],
    otherAdvertisingGoals: "",
    budgetForDigitalAdvertising: "",
    preferredPlatforms: [],
    otherPreferredPlatforms: "",
  });

  const digitalAdvertisingNeedsHandleChange = (e) => {
    const { name, value, checked } = e.target;

    setDigitalAdvertisingNeeds((prevInfo) => {
      if (name === "advertisingGoals" || name === "preferredPlatforms") {
        // Handling predefined checkbox options (for primaryGoals and mediaPlatforms)
        if (value === "Others") {
          // Handle the "Others" checkbox for both groups
          return {
            ...prevInfo,
            [name]: checked
              ? [...prevInfo[name], value]
              : prevInfo[name].filter((item) => item !== value),
            [name === "advertisingGoals"
              ? "otherAdvertisingGoals"
              : "otherPreferredPlatforms"]: checked
              ? prevInfo[
                  name === "advertisingGoals"
                    ? "otherAdvertisingGoals"
                    : "otherPreferredPlatforms"
                ]
              : "", // Clear the 'Other' input when unchecked
          };
        } else {
          // Handle regular checkboxes for both groups (Red, Blue, etc.)
          return {
            ...prevInfo,
            [name]: checked
              ? [...prevInfo[name], value]
              : prevInfo[name].filter((item) => item !== value),
          };
        }
      } else if (
        name === "otherAdvertisingGoals" ||
        name === "otherPreferredPlatforms"
      ) {
        // Update the text input for 'Other' fields
        return {
          ...prevInfo,
          [name]: value,
        };
      } else {
        // Handling other fields like mainChallenges
        return {
          ...prevInfo,
          [name]: value,
        };
      }
    });
  };

  // 6. SEO Keywords and Topics

  const [daynamicRowsData, setDaynamicRowsData] = useState([
    { seedKeywords: "", Topics: "" },
  ]);

  const [seoKeywordsTopics, setSeoKeywordsTopics] = useState({
    currentlySeo: "",
    whatTools: "",
    topKeywords: [],
    specificTopics: "",
    primaryGoalsForSeo: [],
    otherPrimaryGoalsForSeo: "",
  });

  const seoKeywordsTopicsHandleChange = (e) => {
    const { name, value, checked } = e.target;

    setSeoKeywordsTopics((prevInfo) => {
      if (name === "primaryGoalsForSeo") {
        // Handling predefined checkbox options (for primaryGoals and mediaPlatforms)
        if (value === "Others") {
          // Handle the "Others" checkbox for both groups
          return {
            ...prevInfo,
            [name]: checked
              ? [...prevInfo[name], value]
              : prevInfo[name].filter((item) => item !== value),
            [name === "primaryGoalsForSeo"
              ? "otherPrimaryGoalsForSeo"
              : "otherPreferredPlatforms"]: checked
              ? prevInfo[
                  name === "primaryGoalsForSeo"
                    ? "otherPrimaryGoalsForSeo"
                    : "otherPreferredPlatforms"
                ]
              : "", // Clear the 'Other' input when unchecked
          };
        } else {
          // Handle regular checkboxes for both groups (Red, Blue, etc.)
          return {
            ...prevInfo,
            [name]: checked
              ? [...prevInfo[name], value]
              : prevInfo[name].filter((item) => item !== value),
          };
        }
      } else if (name === "otherPrimaryGoalsForSeo") {
        // Update the text input for 'Other' fields
        return {
          ...prevInfo,
          [name]: value,
        };
      } else {
        // Handling other fields like mainChallenges
        return {
          ...prevInfo,
          [name]: value,
        };
      }
    });
  };

  useEffect(() => {
    setSeoKeywordsTopics((prevInfo) => ({
      ...prevInfo,
      topKeywords: daynamicRowsData,
    }));
  }, [daynamicRowsData]);

  // 7. Other Marketing Needs

  const [marketingNeeds, setMarketingNeeds] = useState({
    followingServices: [],
    otherFollowingServices: "",
  });

  const marketingNeedsHandleChange = (e) => {
    const { name, value, checked } = e.target;

    setMarketingNeeds((prevInfo) => {
      if (name === "followingServices") {
        // Handling predefined checkbox options (for primaryGoals and mediaPlatforms)
        if (value === "Others") {
          // Handle the "Others" checkbox for both groups
          return {
            ...prevInfo,
            [name]: checked
              ? [...prevInfo[name], value]
              : prevInfo[name].filter((item) => item !== value),
            [name === "followingServices"
              ? "otherFollowingServices"
              : "otherPreferredPlatforms"]: checked
              ? prevInfo[
                  name === "followingServices"
                    ? "otherFollowingServices"
                    : "otherPreferredPlatforms"
                ]
              : "", // Clear the 'Other' input when unchecked
          };
        } else {
          // Handle regular checkboxes for both groups (Red, Blue, etc.)
          return {
            ...prevInfo,
            [name]: checked
              ? [...prevInfo[name], value]
              : prevInfo[name].filter((item) => item !== value),
          };
        }
      } else if (
        name === "otherFollowingServices" ||
        name === "otherPreferredPlatforms"
      ) {
        // Update the text input for 'Other' fields
        return {
          ...prevInfo,
          [name]: value,
        };
      } else {
        // Handling other fields like mainChallenges
        return {
          ...prevInfo,
          [name]: value,
        };
      }
    });
  };

  // 8. Additional Information

  const [additionalInformation, setAdditionalInformation] = useState({
    timeline: "",
    specificRequests: "",
  });

  const additionalInformationHandleChange = (e) => {
    const { name, value } = e.target;
    setAdditionalInformation((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // 9. Contact Information

  const [contactInformation, setContactInformation] = useState({
    primaryContactName: "",
    email: "",
    phoneNumber: "",
  });

  const contactInformationHandleChange = (e) => {
    const { name, value } = e.target;
    setContactInformation((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  useEffect(() => {
    setMarketingPerspectivesFormDataDetails((prevInfo) => ({
      ...prevInfo,
      businessInfo: businessInfo,
      marketingStatus: marketingStatus,
      mediaNeeds: mediaNeeds,
      mediaChannels: mediaChannels,
      digitalAdvertisingNeeds: digitalAdvertisingNeeds,
      seoKeywordsTopics: seoKeywordsTopics,
      marketingNeeds: marketingNeeds,
      additionalInformation: additionalInformation,
      contactInformation: contactInformation,
    }));
  }, [
    businessInfo,
    marketingStatus,
    mediaNeeds,
    mediaChannels,
    digitalAdvertisingNeeds,
    marketingNeeds,
    seoKeywordsTopics,
    additionalInformation,
    contactInformation,
  ]);

  return (
    <SectionLayout bg={""}>
      <div className="px-0 pt-4 md:px-36 mb-[-24px]">
        <div className="py-2">
          {/* Business Information */}

          <div className=" ">
            <h2 className="font-semibold text-4xl mb-5">
              1. Business Information
            </h2>

            <div className="flex  items-center gap-x-6 w-full justify-between mb-8">
              <div className=" w-full">
                <label
                  htmlFor="businessName"
                  className="block text-2xl font-semibold text-gray-900 mb-2"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={businessInfo.businessName}
                  onChange={businessInfoHandleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
                  placeholder="Type..."
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="businessWebsite"
                  className="block text-2xl  font-semibold text-gray-900 mb-2"
                >
                  Business Website
                </label>
                <input
                  type="text"
                  id="businessWebsite"
                  name="businessWebsite"
                  value={businessInfo.businessWebsite}
                  onChange={businessInfoHandleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
                  placeholder="Type..."
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="industry"
                  className="block text-2xl  font-semibold text-gray-900 mb-2"
                >
                  Industry
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  value={businessInfo.industry}
                  onChange={businessInfoHandleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
                  placeholder="Type..."
                  required
                />
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="businessDetails"
                className="block text-2xl  font-semibold text-gray-900 mb-2"
              >
                Describe Your Business
              </label>
              <p className="font-light text-blue-gray-600 italic text-2xl mb-4">
                {`(What products or services do you offer? Legal representation for
              homeowners and business owners who have suffered physical damage
              to their property and who have been denied or underpaid by their
              insurance carriers.)`}
              </p>
              <textarea
                rows={3}
                id="businessDetails"
                name="businessDetails"
                value={businessInfo.businessDetails}
                onChange={businessInfoHandleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-3 "
                placeholder="Type..."
                required
              />
            </div>

            <h2 className="font-medium text-3xl mb-5 underline mt-3">
              Target Audience:
            </h2>

            <div className="flex  items-center gap-x-6 w-full justify-between mb-8">
              <div className="w-full">
                <label
                  htmlFor="ageRange"
                  className="block text-2xl  font-semibold text-gray-900 mb-2"
                >
                  Age Range
                </label>
                <div className="max-w-2xl">
                  <Slider
                    getAriaLabel={() => "Age range"}
                    valueLabelDisplay="auto"
                    value={ageRange}
                    onChange={ageRangeHandleChange}
                    getAriaValueText={valuetext}
                    sx={{ color: "#424242" }}
                    valueLabelFormat={(value) => (value > 60 ? "60+" : value)}
                    max={70}
                    min={15}
                  />
                </div>
                {/* <input
                  type="text"
                  id="ageRange"
                  name="ageRange"
                  value={businessInfo.ageRange}
                  onChange={businessInfoHandleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
                  placeholder="Type..."
                  required
                /> */}
              </div>
              <div className="w-full">
                {/* <label
                  htmlFor="businessWebsite"
                  className="block text-2xl font-semibold text-gray-900 mb-2"
                >
                  Gender
                </label>
                <input
                  type="text"
                  id="businessWebsite"
                  name="businessWebsite"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
                  placeholder="Type..."
                  required
                /> */}

                <form class="w-full">
                  <label
                    htmlFor="gender"
                    className="block text-2xl font-semibold text-gray-900 mb-2"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={businessInfo.gender}
                    onChange={businessInfoHandleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-gray-600 focus:border-gray-600 w-full p-3"
                  >
                    <option selected>Choose a gender</option>
                    <option value="male" className="py-2">
                      Male
                    </option>
                    <option value="female" className="py-2">
                      Female
                    </option>
                    <option value="both" className="py-2">
                      Both
                    </option>
                    <option value="others" className="py-2">
                      Others
                    </option>
                  </select>
                </form>
              </div>

              <div className=" w-full">
                <label
                  htmlFor="location"
                  className="block text-2xl  font-semibold text-gray-900 mb-2"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={businessInfo.location}
                  onChange={businessInfoHandleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
                  placeholder="Type..."
                  required
                />
              </div>
            </div>
            <div className="mb-5 w-full">
              <label
                htmlFor="keyCompetitors"
                className="block text-2xl  font-semibold text-gray-900 mb-2"
              >
                Key Competitors (List)
              </label>
              {/* <input
                type="text"
                id="keyCompetitors"
                name="keyCompetitors"
                value={businessInfo.keyCompetitors}
                onChange={businessInfoHandleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
                placeholder="Type..."
                required
              /> */}
              <div className="w-full flex flex-wrap items-center gap-x-2">
                {/* Container for chips */}
                <div className="flex flex-wrap gap-2 pointer-events-none">
                  {businessInfo?.keyCompetitors?.map((name) => (
                    <div
                      key={name}
                      className="flex items-center bg-gray-200 text-black px-3 py-1 rounded-full text-2xl font-medium pointer-events-auto"
                    >
                      {name}
                      <button
                        type="button"
                        className="ml-2 text-gray-800 hover:text-gray-900"
                        onClick={() => handleRemoveKeywordsChip(name)}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>

                {/* Input field */}
                <input
                  autoComplete="none"
                  id="name-input"
                  type="text"
                  value={competitor}
                  onChange={(e) => setCompetitor(e.target.value)}
                  placeholder="Add key..."
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 max-w-md p-3"
                />
                <button
                  className="px-4 py-2 bg-primary text-white hover:bg-orange-900 rounded-md"
                  onClick={addCompetitor}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          {/* 2. Current Digital Marketing Status */}
          <h2 className="font-semibold text-4xl mb-5 mt-10">
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
            <div className="flex items-start gap-x-4">
              <div className="flex items-center me-4">
                <input
                  id="yes-marketingStrategy"
                  type="radio"
                  name="marketingStrategy"
                  value="yes"
                  checked={marketingStatus.marketingStrategy === "yes"}
                  onChange={marketingStatusHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="yes-marketingStrategy"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  id="no-marketingStrategy"
                  type="radio"
                  name="marketingStrategy"
                  value="no"
                  checked={marketingStatus.marketingStrategy === "no"}
                  onChange={marketingStatusHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="no-marketingStrategy"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  No
                </label>
              </div>
            </div>
          </div>
          {marketingStatus.marketingStrategy === "yes" && (
            <div className="flex  items-center gap-x-6 w-full justify-between  mt-8 mb-8">
              <div className="w-[50%]">
                <label
                  htmlFor="marketingTools"
                  className="block text-2xl font-semibold text-gray-900 mb-2"
                >
                  What marketing tools are you currently using?
                </label>
                <p className="font-light text-blue-gray-600 italic text-2xl mb-4">
                  {`(e.g., Google Analytics, social media schedulers, CRM software)`}
                </p>
                <input
                  type="text"
                  id="marketingTools"
                  name="marketingTools"
                  value={marketingStatus.marketingTools}
                  onChange={marketingStatusHandleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
                  placeholder="Type..."
                  required
                />
              </div>

              <div className="w-[60%]">
                <label
                  htmlFor="websitePerformance"
                  className="block text-2xl  font-semibold text-gray-900 mb-2"
                >
                  Current Website Performance:
                </label>
                <p className="font-light text-blue-gray-600 italic text-2xl mb-4">
                  {`(*How often do you update your website? NOT OFTEN, ${" "}*Are you satisfied with its design and functionality? NO)`}
                </p>
                <input
                  type="text"
                  id="websitePerformance"
                  name="websitePerformance"
                  value={marketingStatus.websitePerformance}
                  onChange={marketingStatusHandleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
                  placeholder="Type..."
                  required
                />
              </div>
            </div>
          )}

          {/*3 Current Digital Marketing Status */}
          <h2 className="font-semibold text-4xl mb-5 mt-10">
            3. Social Media Needs
          </h2>
          {/* Check item */}
          <div className="mt-8">
            <label
              htmlFor="primaryGoals"
              className="block text-2xl  font-semibold text-gray-900"
            >
              What are your primary goals for digital marketing?
            </label>
            <div className="">
              <div className="flex items-center me-4 mb-4 mt-6 ">
                <input
                  id="primaryGoals"
                  type="checkbox"
                  name="primaryGoals"
                  value="Brand Awareness"
                  checked={mediaNeeds.primaryGoals.includes("Brand Awareness")}
                  onChange={mediaNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Brand Awareness
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="primaryGoal"
                  type="checkbox"
                  name="primaryGoals"
                  value="Lead Generation"
                  checked={mediaNeeds.primaryGoals.includes("Lead Generation")}
                  onChange={mediaNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="primaryGoals"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Lead Generation
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="primaryGoal"
                  type="checkbox"
                  name="primaryGoals"
                  value="Engagement"
                  checked={mediaNeeds.primaryGoals.includes("Engagement")}
                  onChange={mediaNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Engagement
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="primaryGoal"
                  type="checkbox"
                  name="primaryGoals"
                  value="Sales"
                  checked={mediaNeeds.primaryGoals.includes("Sales")}
                  onChange={mediaNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="primaryGoal"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Sales
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="primaryGoal"
                  type="checkbox"
                  name="primaryGoals"
                  value="Community Building"
                  checked={mediaNeeds.primaryGoals.includes(
                    "Community Building"
                  )}
                  onChange={mediaNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Community Building
                </label>
              </div>

              <div className="flex items-center  me-4 mb-4">
                <input
                  id="primaryGoal"
                  type="checkbox"
                  name="primaryGoals"
                  value="Others"
                  checked={mediaNeeds.primaryGoals.includes("Others")}
                  onChange={mediaNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Other:
                </label>

                <input
                  type="text"
                  name="otherPrimaryGoals"
                  value={mediaNeeds.otherPrimaryGoals}
                  onChange={mediaNeedsHandleChange}
                  className="block py-1 px-0 w-[25%] text-gray-900 text-2xl bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer ml-2"
                  placeholder=" "
                  required
                />
              </div>
            </div>
          </div>

          {/* Check item */}
          <div className="mt-8">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900"
            >
              Which social media platforms are you currently using? (Check all
              that apply)
            </label>
            <div className="">
              <div className="flex items-center me-4 mb-4 mt-6 ">
                <input
                  id="mediaPlatforms"
                  type="checkbox"
                  name="mediaPlatforms"
                  value="Facebook"
                  checked={mediaNeeds.mediaPlatforms.includes("Facebook")}
                  onChange={mediaNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Facebook
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="mediaPlatforms"
                  type="checkbox"
                  name="mediaPlatforms"
                  value="Instagram"
                  checked={mediaNeeds.mediaPlatforms.includes("Instagram")}
                  onChange={mediaNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Instagram
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="mediaPlatforms"
                  type="checkbox"
                  name="mediaPlatforms"
                  value="Twitter/X"
                  checked={mediaNeeds.mediaPlatforms.includes("Twitter/X")}
                  onChange={mediaNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Twitter/X
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="mediaPlatforms"
                  type="checkbox"
                  name="mediaPlatforms"
                  value="LinkedIn"
                  checked={mediaNeeds.mediaPlatforms.includes("LinkedIn")}
                  onChange={mediaNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  LinkedIn
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="mediaPlatforms"
                  type="checkbox"
                  name="mediaPlatforms"
                  value="Pinterest"
                  checked={mediaNeeds.mediaPlatforms.includes("Pinterest")}
                  onChange={mediaNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Pinterest
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="mediaPlatforms"
                  type="checkbox"
                  name="mediaPlatforms"
                  value="TikTok"
                  checked={mediaNeeds.mediaPlatforms.includes("TikTok")}
                  onChange={mediaNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  TikTok
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="mediaPlatforms"
                  type="checkbox"
                  name="mediaPlatforms"
                  value="YouTube"
                  checked={mediaNeeds.mediaPlatforms.includes("YouTube")}
                  onChange={mediaNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  YouTube
                </label>
              </div>

              <div className="flex items-center  me-4 mb-4">
                <input
                  id="mediaPlatforms"
                  type="checkbox"
                  name="mediaPlatforms"
                  value="Others"
                  checked={mediaNeeds.mediaPlatforms.includes("Others")}
                  onChange={mediaNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="mediaPlatforms"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Other:
                </label>

                <input
                  type="text"
                  name="otherMediaPlatforms"
                  value={mediaNeeds.otherMediaPlatforms}
                  onChange={mediaNeedsHandleChange}
                  className="block py-1 px-0 w-[25%] text-gray-900 text-2xl bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer ml-2"
                  placeholder=" "
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-5 mt-6">
            <label
              htmlFor="email"
              className="block text-2xl  font-semibold text-gray-900 mb-2"
            >
              What are your main challenges with social media right now?
            </label>
            <p className="font-light text-blue-gray-600 italic text-2xl mb-4">
              {`(e.g., low engagement, lack of content, platform knowledge)
`}
            </p>
            <textarea
              rows={3}
              type="text"
              name="mainChallenges"
              value={mediaNeeds.mainChallenges}
              onChange={mediaNeedsHandleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-3 "
              placeholder="Type..."
              required
            />
          </div>

          {/* 4 Social Media Channels Your Want ot Operate In */}
          <h2 className="font-semibold text-4xl mb-5 mt-10">
            4. Social Media Channels You Want to Operate In
          </h2>

          {/* Check item */}
          <div className="mt-8">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900"
            >
              Which social media platforms are you currently using? (Check all
              that apply)
            </label>
            <div className="">
              <div className="flex items-center me-4 mb-4 mt-6 ">
                <input
                  id="likeToFocus"
                  type="checkbox"
                  name="likeToFocus"
                  value="Facebook"
                  checked={mediaChannels.likeToFocus.includes("Facebook")}
                  onChange={mediaChannelsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Facebook
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="likeToFocus"
                  type="checkbox"
                  name="likeToFocus"
                  value="Instagram"
                  checked={mediaChannels.likeToFocus.includes("Instagram")}
                  onChange={mediaChannelsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Instagram
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="likeToFocus"
                  type="checkbox"
                  name="likeToFocus"
                  value="Twitter/X"
                  checked={mediaChannels.likeToFocus.includes("Twitter/X")}
                  onChange={mediaChannelsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Twitter/X
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="likeToFocus"
                  type="checkbox"
                  name="likeToFocus"
                  value="LinkedIn"
                  checked={mediaChannels.likeToFocus.includes("LinkedIn")}
                  onChange={mediaChannelsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  LinkedIn
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="likeToFocus"
                  type="checkbox"
                  name="likeToFocus"
                  value="Pinterest"
                  checked={mediaChannels.likeToFocus.includes("Pinterest")}
                  onChange={mediaChannelsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Pinterest
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="likeToFocus"
                  type="checkbox"
                  name="likeToFocus"
                  value="TikTok"
                  checked={mediaChannels.likeToFocus.includes("TikTok")}
                  onChange={mediaChannelsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  TikTok
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="likeToFocus"
                  type="checkbox"
                  name="likeToFocus"
                  value="YouTube"
                  checked={mediaChannels.likeToFocus.includes("YouTube")}
                  onChange={mediaChannelsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  YouTube
                </label>
              </div>

              <div className="flex items-center  me-4 mb-4">
                <input
                  id="likeToFocus"
                  type="checkbox"
                  name="likeToFocus"
                  value="Others"
                  checked={mediaChannels.likeToFocus.includes("Others")}
                  onChange={mediaChannelsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="likeToFocus"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Other:
                </label>

                <input
                  type="text"
                  name="otherLikeToFocus"
                  value={mediaChannels.otherLikeToFocus}
                  onChange={mediaChannelsHandleChange}
                  className="block py-1 px-0 w-[25%] text-gray-900 text-2xl bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer ml-2"
                  placeholder=" "
                  required
                />
              </div>
            </div>
          </div>

          {/* Check item */}
          <div className="mt-8">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900"
            >
              What type of content do you want to create on these platforms?
            </label>
            <div className="">
              <div className="flex items-center me-4 mb-4 mt-6 ">
                <input
                  id="mediaPlatforms"
                  type="checkbox"
                  name="mediaPlatforms"
                  value="Images (Infographics, product photos)"
                  checked={mediaChannels.mediaPlatforms.includes(
                    "Images (Infographics, product photos)"
                  )}
                  onChange={mediaChannelsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Images (Infographics, product photos)
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="mediaPlatforms"
                  type="checkbox"
                  name="mediaPlatforms"
                  value="Videos (Live videos, product demos, tutorials)"
                  checked={mediaChannels.mediaPlatforms.includes(
                    "Videos (Live videos, product demos, tutorials)"
                  )}
                  onChange={mediaChannelsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Videos (Live videos, product demos, tutorials)
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="mediaPlatforms"
                  type="checkbox"
                  name="mediaPlatforms"
                  value="Articles/Blog Posts"
                  checked={mediaChannels.mediaPlatforms.includes(
                    "Articles/Blog Posts"
                  )}
                  onChange={mediaChannelsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Articles/Blog Posts
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="mediaPlatforms"
                  type="checkbox"
                  name="mediaPlatforms"
                  value="Stories/Reels (Short-form content)"
                  checked={mediaChannels.mediaPlatforms.includes(
                    "Stories/Reels (Short-form content)"
                  )}
                  onChange={mediaChannelsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Stories/Reels (Short-form content)
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="mediaPlatforms"
                  type="checkbox"
                  name="mediaPlatforms"
                  value="Polls/Surveys"
                  checked={mediaChannels.mediaPlatforms.includes(
                    "Polls/Surveys"
                  )}
                  onChange={mediaChannelsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Polls/Surveys
                </label>
              </div>

              <div className="flex items-center  me-4 mb-4">
                <input
                  id="mediaPlatforms"
                  type="checkbox"
                  name="mediaPlatforms"
                  value="Others"
                  checked={mediaChannels.mediaPlatforms.includes("Others")}
                  onChange={mediaChannelsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="mediaPlatforms"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Other:
                </label>

                <input
                  type="text"
                  name="otherMediaPlatforms"
                  value={mediaChannels.otherMediaPlatforms}
                  onChange={mediaChannelsHandleChange}
                  className="block py-1 px-0 w-[25%] text-gray-900 text-2xl bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer ml-2"
                  placeholder=" "
                  required
                />
              </div>
            </div>
          </div>

          {/* 5. Digital Advertising Needs */}

          <h2 className="font-semibold text-4xl mb-5 mt-10">
            5. Digital Advertising Needs
          </h2>

          {/* Check item */}
          <div className="flex items-center gap-x-5 mt-8">
            <label
              htmlFor="runningAds"
              className="block text-2xl  font-semibold text-gray-900"
            >
              Are you currently running digital ads?
            </label>
            <div className="flex items-start gap-x-4">
              <div className="flex items-center me-4">
                <input
                  id="yes-runningAds"
                  type="radio"
                  name="runningAds"
                  value="yes"
                  checked={digitalAdvertisingNeeds.runningAds === "yes"}
                  onChange={digitalAdvertisingNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="yes-runningAds"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  id="no-runningAds"
                  type="radio"
                  name="runningAds"
                  value="no"
                  checked={digitalAdvertisingNeeds.runningAds === "no"}
                  onChange={digitalAdvertisingNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="no-runningAds"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  No
                </label>
              </div>
            </div>
          </div>

          {digitalAdvertisingNeeds?.runningAds === "yes" ? (
            <div className="mt-4">
              <label
                htmlFor="whichPlatforms"
                className="text-2xl font-semibold text-gray-900 mb-2 block"
              >
                On which platforms
              </label>
              <input
                type="text"
                id="whichPlatforms"
                name="whichPlatforms"
                value={digitalAdvertisingNeeds.whichPlatforms}
                onChange={digitalAdvertisingNeedsHandleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-[50%] p-3 "
                placeholder="Type..."
                required
              />
            </div>
          ) : (
            ""
          )}

          {/* Check item */}
          <div className="mt-8">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900"
            >
              What are your main advertising goals?
            </label>
            <div className="">
              <div className="flex items-center me-4 mb-4 mt-6 ">
                <input
                  id="advertisingGoals"
                  type="checkbox"
                  name="advertisingGoals"
                  value="Increase Website Traffic"
                  checked={digitalAdvertisingNeeds.advertisingGoals.includes(
                    "Increase Website Traffic"
                  )}
                  onChange={digitalAdvertisingNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Increase Website Traffic
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="advertisingGoals"
                  type="checkbox"
                  name="advertisingGoals"
                  value="Generate Leads"
                  checked={digitalAdvertisingNeeds.advertisingGoals.includes(
                    "Generate Leads"
                  )}
                  onChange={digitalAdvertisingNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Generate Leads
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="advertisingGoals"
                  type="checkbox"
                  name="advertisingGoals"
                  value="Increase Sales"
                  checked={digitalAdvertisingNeeds.advertisingGoals.includes(
                    "Increase Sales"
                  )}
                  onChange={digitalAdvertisingNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Increase Sales
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="advertisingGoals"
                  type="checkbox"
                  name="advertisingGoals"
                  value="Build Brand Awareness"
                  checked={digitalAdvertisingNeeds.advertisingGoals.includes(
                    "Build Brand Awareness"
                  )}
                  onChange={digitalAdvertisingNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Build Brand Awareness
                </label>
              </div>

              <div className="flex items-center  me-4 mb-4">
                <input
                  id="advertisingGoals"
                  type="checkbox"
                  name="advertisingGoals"
                  value="Others"
                  checked={digitalAdvertisingNeeds.advertisingGoals.includes(
                    "Others"
                  )}
                  onChange={digitalAdvertisingNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="advertisingGoals"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Other:
                </label>

                <input
                  type="text"
                  name="otherAdvertisingGoals"
                  value={digitalAdvertisingNeeds.otherAdvertisingGoals}
                  onChange={digitalAdvertisingNeedsHandleChange}
                  className="block py-1 px-0 w-[25%] text-gray-900 text-2xl bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer ml-2"
                  placeholder=" "
                  required
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-x-1  mb-4 ">
              <label
                htmlFor="budgetForDigitalAdvertising"
                className="text-2xl font-semibold text-gray-900"
              >
                Budget for Digital Advertising:
              </label>
              <p className="font-light text-blue-gray-600 italic text-2xl">
                {`(Monthly Budget:)`}
              </p>
            </div>
            <input
              type="text"
              id="budgetForDigitalAdvertising"
              name="budgetForDigitalAdvertising"
              value={digitalAdvertisingNeeds.budgetForDigitalAdvertising}
              onChange={digitalAdvertisingNeedsHandleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-[50%] p-3 "
              placeholder="Type..."
              required
            />
          </div>

          {/* Check item */}
          <div className="mt-8">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900"
            >
              Preferred Platforms for Digital Advertising:
            </label>
            <div className="">
              <div className="flex items-center me-4 mb-4 mt-6 ">
                <input
                  id="preferredPlatforms"
                  type="checkbox"
                  name="preferredPlatforms"
                  value="Google Ads (Search, Display, YouTube)"
                  checked={digitalAdvertisingNeeds.preferredPlatforms.includes(
                    "Google Ads (Search, Display, YouTube)"
                  )}
                  onChange={digitalAdvertisingNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Google Ads (Search, Display, YouTube)
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="preferredPlatforms"
                  type="checkbox"
                  name="preferredPlatforms"
                  value="Videos (Live videos, product demos, tutorials)"
                  checked={digitalAdvertisingNeeds.preferredPlatforms.includes(
                    "Videos (Live videos, product demos, tutorials)"
                  )}
                  onChange={digitalAdvertisingNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Videos (Live videos, product demos, tutorials)
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="preferredPlatforms"
                  type="checkbox"
                  name="preferredPlatforms"
                  value="Facebook/Instagram Ads"
                  checked={digitalAdvertisingNeeds.preferredPlatforms.includes(
                    "Facebook/Instagram Ads"
                  )}
                  onChange={digitalAdvertisingNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Facebook/Instagram Ads
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="preferredPlatforms"
                  type="checkbox"
                  name="preferredPlatforms"
                  value="LinkedIn Ads"
                  checked={digitalAdvertisingNeeds.preferredPlatforms.includes(
                    "LinkedIn Ads"
                  )}
                  onChange={digitalAdvertisingNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  LinkedIn Ads
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="preferredPlatforms"
                  type="checkbox"
                  name="preferredPlatforms"
                  value="Pinterest Ads"
                  checked={digitalAdvertisingNeeds.preferredPlatforms.includes(
                    "Pinterest Ads"
                  )}
                  onChange={digitalAdvertisingNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Pinterest Ads
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="preferredPlatforms"
                  type="checkbox"
                  name="preferredPlatforms"
                  value="Twitter/X Ads"
                  checked={digitalAdvertisingNeeds.preferredPlatforms.includes(
                    "Twitter/X Ads"
                  )}
                  onChange={digitalAdvertisingNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Twitter/X Ads
                </label>
              </div>

              <div className="flex items-center  me-4 mb-4">
                <input
                  id="preferredPlatforms"
                  type="checkbox"
                  name="preferredPlatforms"
                  value="Others"
                  checked={digitalAdvertisingNeeds.preferredPlatforms.includes(
                    "Others"
                  )}
                  onChange={digitalAdvertisingNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="preferredPlatforms"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Other:
                </label>

                <input
                  type="text"
                  name="otherPreferredPlatforms"
                  value={digitalAdvertisingNeeds.otherPreferredPlatforms}
                  onChange={digitalAdvertisingNeedsHandleChange}
                  className="block py-1 px-0 w-[25%] text-gray-900 text-2xl bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer ml-2"
                  placeholder=" "
                  required
                />
              </div>
            </div>
          </div>

          {/* 6. SEO Keywords and Topics: HOMEOWNERS INSURANCE; PROPERTY DAMAGE
            ATTORNEY*/}

          <h2 className="font-semibold text-4xl mb-5 mt-10">
            6. SEO Keywords and Topics
          </h2>

          {/* Check item */}
          <div className="flex items-center gap-x-5 mt-8">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900"
            >
              Are you currently doing SEO for your website?
            </label>
            <div className="flex items-start gap-x-4">
              <div className="flex items-start gap-x-4">
                <div className="flex items-center me-4">
                  <input
                    id="yes-currentlySeo"
                    type="radio"
                    name="currentlySeo"
                    value="yes"
                    checked={seoKeywordsTopics.currentlySeo === "yes"}
                    onChange={seoKeywordsTopicsHandleChange}
                    className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                  />
                  <label
                    htmlFor="yes-currentlySeo"
                    className="ms-2 text-2xl font-medium text-gray-900"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="no-currentlySeo"
                    type="radio"
                    name="currentlySeo"
                    value="no"
                    checked={seoKeywordsTopics.currentlySeo === "no"}
                    onChange={seoKeywordsTopicsHandleChange}
                    className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                  />
                  <label
                    htmlFor="no-currentlySeo"
                    className="ms-2 text-2xl font-medium text-gray-900"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>

          {seoKeywordsTopics.currentlySeo === "yes" ? (
            <div className="mt-5">
              <label
                htmlFor="businessName"
                className="text-2xl font-semibold text-gray-900 mb-3 block"
              >
                What tools or platforms are you using? (e.g., Google Search
                Console, Ahrefs, SEMrush)
              </label>
              <input
                type="text"
                id="whatTools"
                name="whatTools"
                checked={seoKeywordsTopics.whatTools}
                onChange={seoKeywordsTopicsHandleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-[50%] p-3 "
                placeholder="Type..."
                required
              />
            </div>
          ) : (
            ""
          )}

          {/* Dynamic Table */}

          <div className="mt-5">
            <label
              htmlFor="businessName"
              className="text-2xl font-semibold text-gray-900 mb-3 block"
            >
              What are the top keywords you want to rank for?
            </label>
          </div>

          <DaynamicTableAddValue
            setDaynamicRowsData={setDaynamicRowsData}
            daynamicRowsData={daynamicRowsData}
          />

          <div className="mb-5 mt-6">
            <label
              htmlFor="specificTopics"
              className="block text-2xl  font-semibold text-gray-900 mb-2"
            >
              What specific topics or themes would you like to target with your
              SEO strategy?
            </label>
            <p className="font-light text-blue-gray-600 italic text-2xl mb-4">
              {`(e.g., blog topics, service-related content, local SEO)`}
            </p>
            <textarea
              rows={3}
              id="specificTopics"
              name="specificTopics"
              checked={seoKeywordsTopics.specificTopics}
              onChange={seoKeywordsTopicsHandleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-3 "
              placeholder="Type..."
              required
            />
          </div>

          {/* Check item */}
          <div className="mt-8">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900"
            >
              What are your primary goals for SEO?
            </label>
            <div className="">
              <div className="flex items-center me-4 mb-4 mt-6 ">
                <input
                  id="primaryGoalsForSeo"
                  type="checkbox"
                  name="primaryGoalsForSeo"
                  value="Google Ads (Search, Display, YouTube)"
                  checked={seoKeywordsTopics.primaryGoalsForSeo.includes(
                    "Google Ads (Search, Display, YouTube)"
                  )}
                  onChange={seoKeywordsTopicsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Google Ads (Search, Display, YouTube)
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="primaryGoalsForSeo"
                  type="checkbox"
                  name="primaryGoalsForSeo"
                  value="Increase Organic Traffic"
                  checked={seoKeywordsTopics.primaryGoalsForSeo.includes(
                    "Increase Organic Traffic"
                  )}
                  onChange={seoKeywordsTopicsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Increase Organic Traffic
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="primaryGoalsForSeo"
                  type="checkbox"
                  name="primaryGoalsForSeo"
                  value="Improve Search Engine Rankings"
                  checked={seoKeywordsTopics.primaryGoalsForSeo.includes(
                    "Improve Search Engine Rankings"
                  )}
                  onChange={seoKeywordsTopicsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Improve Search Engine Rankings
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="primaryGoalsForSeo"
                  type="checkbox"
                  name="primaryGoalsForSeo"
                  value="Boost Local Search Presence"
                  checked={seoKeywordsTopics.primaryGoalsForSeo.includes(
                    "Boost Local Search Presence"
                  )}
                  onChange={seoKeywordsTopicsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Boost Local Search Presence
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="primaryGoalsForSeo"
                  type="checkbox"
                  name="primaryGoalsForSeo"
                  value="Optimize for Mobile Search"
                  checked={seoKeywordsTopics.primaryGoalsForSeo.includes(
                    "Optimize for Mobile Search"
                  )}
                  onChange={seoKeywordsTopicsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Optimize for Mobile Search
                </label>
              </div>

              <div className="flex items-center  me-4 mb-4">
                <input
                  id="primaryGoalsForSeo"
                  type="checkbox"
                  name="primaryGoalsForSeo"
                  value="Others"
                  checked={seoKeywordsTopics.primaryGoalsForSeo.includes(
                    "Others"
                  )}
                  onChange={seoKeywordsTopicsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="preferredPlatforms"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Other:
                </label>

                <input
                  type="text"
                  name="otherPrimaryGoalsForSeo"
                  value={seoKeywordsTopics.otherPrimaryGoalsForSeo}
                  onChange={seoKeywordsTopicsHandleChange}
                  className="block py-1 px-0 w-[25%] text-gray-900 text-2xl bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer ml-2"
                  placeholder=" "
                  required
                />
              </div>
            </div>
          </div>

          {/* 7. Other Marketing Needs*/}

          <h2 className="font-semibold text-4xl mb-5 mt-10">
            7. Other Marketing Needs
          </h2>

          {/* Check item */}
          <div className="mt-8">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900"
            >
              Are you interested in any of the following services? (Check all
              that apply)
            </label>
            <div className="">
              <div className="flex items-center me-4 mb-4 mt-6 ">
                <input
                  id="followingServices"
                  type="checkbox"
                  name="followingServices"
                  value="Search Engine Optimization (SEO)"
                  checked={marketingNeeds.followingServices.includes(
                    "Search Engine Optimization (SEO)"
                  )}
                  onChange={marketingNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Search Engine Optimization (SEO)
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="followingServices"
                  type="checkbox"
                  name="followingServices"
                  value="Email Marketing"
                  checked={marketingNeeds.followingServices.includes(
                    "Email Marketing"
                  )}
                  onChange={marketingNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Email Marketing
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="followingServices"
                  type="checkbox"
                  name="followingServices"
                  value="Content Marketing (Blogs, eBooks)"
                  checked={marketingNeeds.followingServices.includes(
                    "Content Marketing (Blogs, eBooks)"
                  )}
                  onChange={marketingNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Content Marketing (Blogs, eBooks)
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="followingServices"
                  type="checkbox"
                  name="followingServices"
                  value="Reputation Management (Reviews, testimonials)"
                  checked={marketingNeeds.followingServices.includes(
                    "Reputation Management (Reviews, testimonials)"
                  )}
                  onChange={marketingNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Reputation Management (Reviews, testimonials)
                </label>
              </div>

              <div className="flex items-center  me-4 mb-4">
                <input
                  id="followingServices"
                  type="checkbox"
                  name="followingServices"
                  value="Others"
                  checked={marketingNeeds.followingServices.includes("Others")}
                  onChange={marketingNeedsHandleChange}
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="preferredPlatforms"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Other:
                </label>

                <input
                  type="text"
                  name="otherFollowingServices"
                  value={marketingNeeds.otherFollowingServices}
                  onChange={marketingNeedsHandleChange}
                  className="block py-1 px-0 w-[25%] text-gray-900 text-2xl bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer ml-2"
                  placeholder=" "
                  required
                />
              </div>
            </div>
          </div>

          {/*8. Additional Information*/}

          <h2 className="font-semibold text-4xl mb-5 mt-10">
            8. Additional Information
          </h2>

          <div className="mb-5 mt-6">
            <label
              htmlFor="timeline"
              className="block text-2xl  font-semibold text-gray-900 mb-4"
            >
              What is your timeline for seeing results? WITHIN THE NEXT 30-60
              DAYS
            </label>
            <textarea
              rows={3}
              id="timeline"
              name="timeline"
              value={additionalInformation.timeline}
              onChange={additionalInformationHandleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-3 "
              placeholder="Type..."
              required
            />
          </div>
          <div className="mb-5 mt-6">
            <label
              htmlFor="specificRequests"
              className="block text-2xl  font-semibold text-gray-900 mb-2"
            >
              Any other information or specific requests?
            </label>
            <p className="font-light text-blue-gray-600 italic text-2xl mb-4">
              {`(e.g., branding guidelines, campaign preferences)`}
            </p>
            <textarea
              rows={3}
              id="specificRequests"
              name="specificRequests"
              value={additionalInformation.specificRequests}
              onChange={additionalInformationHandleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-3 "
              placeholder="Type..."
              required
            />
          </div>
        </div>
        {/*9. Contact Information
         */}

        <h2 className="font-semibold text-4xl mb-5 mt-10">
          9. Contact Information
        </h2>

        <div className="flex  items-center gap-x-6 w-full justify-between mb-8">
          <div className=" w-full">
            <label
              htmlFor="primaryContactName"
              className="block text-2xl font-semibold text-gray-900 mb-2"
            >
              Primary Contact Name
            </label>
            <input
              type="text"
              id="primaryContactName"
              name="primaryContactName"
              value={contactInformation.primaryContactName}
              onChange={contactInformationHandleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
              placeholder="Type..."
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-2xl  font-semibold text-gray-900 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactInformation.email}
              onChange={contactInformationHandleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
              placeholder="Type..."
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900 mb-2"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={contactInformation.phoneNumber}
              onChange={contactInformationHandleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
              placeholder="Type..."
              required
            />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default MarketingPerspectivesFormCustomized;
