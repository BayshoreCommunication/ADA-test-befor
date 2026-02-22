"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";
import { InlineWidget } from "react-calendly";
import ReactPlayer from "react-player";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import SectionLayout from "@/components/universal/SectionLayout";
import { setCookie, hasCookie } from "cookies-next";

import axios from "axios";
import emailjs from "emailjs-com";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

interface FormValues {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
}

const Page = () => {
  const carouselVideo = [
    {
      src: `https://www.youtube.com/embed/RVit6poGLRs?si=2WY4n0dji9pshlxZ`,
      title: `Trip Law`,
      text: `Since 2016, working with Trip Law, we've grown the practice from $60,000 to $2.3 million without spending a dime on ads. We consistently generate 20+ new client appointments per month, each with a $5,000 case value. Client acquisition is no longer Trip Law’s challenge—managing the caseload is.`,
    },
    {
      src: `https://www.youtube.com/embed/ohyUTzLiLbI?si=eFmJ9z2F9xSXO9g_`,
      title: `Apex Advisor`,
      text: `Apex had a strong brand presence, but poor SEO analysis from another agency left them invisible on Google. Our video production team built a powerful social media presence, driving trust through informative video marketing. Meanwhile, Salman identified SEO errors, optimized the site, and ranked it in 25 days, leading to 9x growth in consumer appointments and 45,000+ site visits.`,
    },
    {
      src: `https://www.youtube.com/embed/iqHA7By9OAI?si=Nowq__MmNp3AUIM6`,
      title: `Catflix`,
      text: `Despite having a brilliant idea, The Cat Flix struggled to get noticed online. We stepped in—making their website faster, improving their content, and creating a smart marketing plan. In just three months, their traffic jumped 320%, their blog ranked for 50+ key topics, and customer inquiries increased 47%. Now, Cat Flix is reaching the right people and growing every day.`,
    },
  ];

  

  const [isVideoEnded, setIsVideoEnded] = React.useState("false");
  const [isVideoFinishedCookie, setIsVideoFinishedCookie] = React.useState("");

  if (isVideoFinishedCookie === "") {
    setIsVideoFinishedCookie(
      JSON.stringify(hasCookie("isVideoFinishedCookie"))
    );
  }

  useEffect(() => {
    if (isVideoEnded == "true") {
      setCookie("isVideoFinishedCookie", "true", {
        maxAge: 43000,
      });

      setIsVideoFinishedCookie(
        JSON.stringify(hasCookie("isVideoFinishedCookie"))
      );

      setIsVideoEnded("false");
    }
  }, [isVideoEnded]);

  //carousel==========
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);

    setCurrent(api.selectedScrollSnap() + 1);
    api?.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  //=============

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
  };
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [contactInfo, setContactInfo] = useState(initialValues);
  const [formErrors, setFormErrors] = useState<any>({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const onTextAreaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors(validate(contactInfo));
    setIsSubmit(true);
  };

  const handlePostRequest = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://backend-bayshore.vercel.app/user/messages",
        contactInfo
      );
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Response:", response.data);

      // Fire EmailJS after successful POST request
      await handleSubmitEmail();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitEmail = async () => {
    try {
      if (form.current) {
        const result = await emailjs.sendForm(
          "service_o4z5ryj",
          "template_220uure",
          form.current,
          "EVNtRahViRmUCuu7C"
        );
        console.log("Email sent successfully:", result.text);
        setContactInfo(initialValues);
        form.current.reset();
      }
    } catch (error) {
      console.error("Email send failed:");
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      handlePostRequest();
    }
  }, [formErrors]);
  // function handelScroll() {
  //   const vid = document.querySelector("#video");
  //   vid.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // }
  useEffect(() => {
    const watchVideoButton = document.querySelector(".watchButton");
    // const links = document.querySelector(".scrollto");

    // if (links !== null) links.addEventListener("click", clickHandler);

    // function clickHandler(e) {
    //   e.preventDefault();
    //   document.querySelector(e.target.getAttribute("href")).scrollIntoView({
    //     behavior: "smooth",
    //   });
    // }
    window.onscroll = function () {
      if (window.scrollY >= window.screen.height) {
        watchVideoButton?.classList.remove("hidden");
        watchVideoButton?.classList.add("block");
      } else if (window.scrollY <= window.screen.height) {
        watchVideoButton?.classList.add("hidden");
        watchVideoButton?.classList.remove("block");
      }
    };
  });

  const validate = (values: FormValues) => {
    const errors: any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.first_name) {
      errors.first_name = "Name is required!";
    }
    if (!values.last_name) {
      errors.last_name = "Name is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }
    if (!values.zip) {
      errors.zip = "Zip Code is required!";
    }
    return errors;
  };

  return (
    <div className="scroll-smooth">
      {" "}
      <div className="w-full z-30 h-fit pb-16 flex-col  justify-start items-center md:hidden ">
        <Image
          src={"/bg.png"}
          alt="bg image"
          width={1200}
          height={1200}
          className=" absolute -z-10"
        />

        <div
          className={
            "container text-[26px] lg:text-[48px] font-bold text-center place-self-start pb-5 pt-[95px]  text-white z-50"
          }
        >
          <p className="inline    ">LAW FIRM </p>
          <button
            className={
              "inline border border-[#FE5218] text-[#FE5218] bg-transparent  px-4 py-0 leading-tight rounded-full"
            }
          >
            OWNERS
          </button>
          <p className="   text-[26px]  ">{` & Legal Professionals`} </p>
        </div>

        {/* <Image
            src="/assets/new/step1.png"
            alt="hero"
            quality={100}
            
          /> */}

        <div className=" relative flex w-[80%] h-[220px] md:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] 2xl:w-[61.5%] justify-center rounded-2xl overflow-hidden items-center m-auto mb-5">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=pQD5jqtRjFI&t=3s"
            width={"100%"}
            height={"100%"}
            onEnded={() => {
              setIsVideoEnded("true");
            }}
            onPlay={() => {
              setIsVideoPlaying(true);
            }}
          />
        </div>
        <p className=" container text-[17px] text-center md:text-left lg:text-[20px] md:w-[70%] place-self-start text-gray-700  lg:pb-16">
          Your&apos;re One Step Away From Discovering How You Can Consistently
          Attract High-Value Clients Through Organic Marketing & SEO—Without
          Relying on Ads.{" "}
        </p>
        <p
          className=" container text-[18px] text-center md:text-left lg:text-[20px] md:w-[70%] place-self-start  pb-10 lg:pb-16 text-[#FE5218] "
          // style={{ textUnderlineOffset: "8px" }}
        >
          GUARANTEED.
        </p>
        <p
          className=" container text-[16px] lg:text-[20px] font-semibold text-center underline place-self-start
              "
          style={{ textUnderlineOffset: "5px" }}
        >
          You don&apos;t pay for effort—you pay for real, measurable growth.
        </p>
      </div>
      <SectionLayout bg="flex bg-[#ececec] md:bg-[#2B2B2B] flex-col justify-start items-center bg-[#2B2B2B] md:py-10 lg:px-20 lg:pb-20 text-white  scroll-smooth hidden md:block">
        {/* step1 */}
        <div className="hidden  flex-col justify-start items-center md:flex">
          <div
            className={
              "text-[26px] lg:text-[48px] font-bold text-center place-self-start pb-5"
            }
          >
            <p className="inline    ">LAW FIRM </p>
            <button
              className={
                "inline border border-[#FE5218] text-[#FE5218] bg-transparent  px-4 py-0 leading-tight rounded-full"
              }
            >
              OWNERS
            </button>
            <p className="inline   ">{` & `} </p>
            <p className="text-left inline lg:block">Legal Professionals:</p>
          </div>
          <p className="text-[16px] text-center md:text-left lg:text-[20px] md:w-[70%] place-self-start text-[#AFAFB2] pb-10 lg:pb-16">
            Your&apos;re One Step Away From Discovering How You Can Consistently
            Attract High-Value Clients Through Organic Marketing & SEO—Without
            Relying on Ads.{" "}
            <span
              className="text-[#FE5218] "
              // style={{ textUnderlineOffset: "8px" }}
            >
              GUARANTEED.
            </span>
          </p>
          <p
            className=" text-[14px] lg:text-[20px] text-center underline place-self-start
              "
            style={{ textUnderlineOffset: "5px" }}
          >
            You don&apos;t pay for effort—you pay for real, measurable growth.
          </p>
          <p
            id="video"
            className="py-10 md:py-16 text-[20px] lg:text-[48px]  place-self-start font-bold"
          >
            <span className="text-[#FE5218] ">Step 1 of 2:</span>
             Watch Video
          </p>
          {/* <Image
            src="/assets/new/step1.png"
            alt="hero"
            quality={100}
            
          /> */}

          <div className="relative flex w-[95%] h-[275px] md:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] 2xl:w-[61.5%] justify-center rounded-2xl overflow-hidden items-center m-auto">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=pQD5jqtRjFI&t=3s"
              width={"100%"}
              height={"100%"}
              // ref={videoRef}
              // controls
              // onProgress={() => {
              //   videoRef.current.getCurrentTime() >= played &&
              //     setPlayed(videoRef?.current.getCurrentTime());
              // }}
              // onSeek={() => {
              //   videoRef.current.getCurrentTime() > played &&
              //     videoRef.current.seekTo(played);
              // }}
              // onContextMenu={(e) => e.preventDefault()}
              onPlay={() => {
                setIsVideoPlaying(true);
              }}
              onEnded={() => {
                // console.log("hi");
                setIsVideoEnded("true");
              }}
              playsinline
            />
          </div>

          {/* <video width={1900} height={1200} controls preload="none">
            <source src="/path/to/video.mp4" type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video> */}
        </div>
        {/* step1 mobile */}

        {/* part2 */}
      </SectionLayout>
      {/* <SectionLayout bg={"absolute bottom-10"}> */}
      {/*   <div className="text-[#FE5218] text-center py-10 bg-white sticky px-5 z-50  "> */}
      {/*     Watch the video first! */}
      {/*   </div> */}
      {/* </SectionLayout> */}
      <SectionLayout
        bg={`bg-[#ececec]  scroll-smooth  lg:px-20 relative cursor-pointer`}
      >
        <SectionLayout
          bg={`absolute inset-0 w-full m-auto  z-20  transition-all duration-300 ease-in-out scrollto ${
            isVideoFinishedCookie != "true" ? " " : " hidden"
          }`}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="watchButton w-[80%] lg:w-[30%] px-5 h-80 m-auto inset-0 scrollto text-[#FE5218] text-center py-6 bg-white fixed rounded-3xl border-[#fe5218] border-2  hidden text-4xl lg:text-6xl font-semibold  align-baseline">
            <p
              className={`h-full flex justify-center items-center scrollto ${
                isVideoPlaying ? "hidden" : "block"
              }`}
            >
              Watch the video first!
            </p>
            <p
              className={`h-full flex justify-center text-3xl lg:text-5xl items-center scrollto ${
                isVideoPlaying ? "block" : "hidden"
              }`}
            >
              Watch the video till the end!
            </p>
          </div>
        </SectionLayout>

        <div
          id="call"
          className={`flex flex-col justify-start items-center md:mt-5  ${
            isVideoFinishedCookie == "true" ? " " : " blur"
          }`}
        >
          <p className="py-5  text-[28px] lg:text-[48px]  place-self-start font-bold text-center md:text-left">
            <span className="text-[#FE5218]  underline underline-offset-2">
              Step 2 of 2:
            </span>
             Schedule Your Discovery Call
          </p>
          <p className=" text-[18px]  text-center  place-self-start  text-[#1e1e1e]  lg:text-[24px] pb-16 md:pb-0 ">{`Your responses are strictly confidential and will be used to tailor a customized strategy for you before our call.`}</p>
          <div className="w-full h-[1200px] md:h-[1250px] lg:h-auto rounded-3xl  overflow-hidden">
            <div className="block xl:hidden">
              <InlineWidget
                url="https://calendly.com/info-bayshorecommunication/meeting?month=2025-04"
                styles={{
                  height: "1270px",
                  width: "100%",
                  borderRadius: "20px",
                }}
                pageSettings={{
                  backgroundColor: "ffffff",
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: "#0b7788",
                  textColor: "4d5055",
                }}
              />
            </div>
            <div className="hidden xl:block">
              <InlineWidget
                url="https://calendly.com/info-bayshorecommunication/meeting?month=2025-04month=2025-03"
                styles={{
                  height: "685px",
                  width: "100%",
                  borderRadius: "20px",
                }}
                pageSettings={{
                  backgroundColor: "ffffff",
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: "#0b7788",
                  textColor: "4d5055",
                }}
              />
            </div>
          </div>
        </div>
        <div
          className={`flex pb-10 xl:py-20 flex-col justify-start items-center text-center w-full ${
            isVideoFinishedCookie == "true" ? " " : " blur"
          }`}
        >
          <p
            className="text-[28px] lg:text-[28px] underline place-self-start"
            style={{ textUnderlineOffset: "8px" }}
          >
            What You’ll Learn on Your Discovery Call
          </p>
          <p className="text-[20px] lg:text-[24px] py-10 place-self-start text-left">
            🚫 Not a sales pitch. No fluff, no gimmicks—
          </p>
          <p className="text-[17px] lg:text-[20px] pb-20 place-self-start lg:w-[60%] text-left">
            Just real, proven strategies that have helped{" "}
            <span className=" font-semibold">100+ law firms</span> across the
            U.S. attract high-value clients through organic{" "}
            <span className=" font-semibold">marketing and SEO.</span>
          </p>
          <div className="flex lg:pt-10 flex-wrap gap-20 items-start justify-center">
            <div className="flex flex-col justify-start items-center gap-6 w-[320px] ">
              <div className="w-28 h-28  ">
                <Image
                  src={"/assets/new/blueprint.png"}
                  alt="hero"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              {/* <div className="text-[20px] font-medium text-[#FE5218]"> */}
              {/*   <p>Step-by-Step Client Acquisition Blueprint</p> */}
              {/* </div> */}
              <div className="text-[14px]">
                <p>
                  ✅ We’ll walk you through the exact system we use to generate
                  consistent legal leads, so you can apply it yourself—whether
                  you work with us or not.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center gap-8 w-[320px] ">
              <div className="w-28 h-28  ">
                <Image
                  src={"/assets/new/flowchart.png"}
                  alt="hero"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              {/* <div className="text-[20px] font-medium text-[#FE5218]"> */}
              {/*   <p>Real Data, Real Flowcharts, Real Results</p> */}
              {/* </div> */}
              <div className="text-[14px]">
                <p>
                  ✅ You’ll see real numbers, real case studies, and real
                  data-driven results—including flowcharts and success metrics
                  that break down exactly how our strategy works.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-8 w-[320px] ">
              <div className="w-28 h-28  ">
                <Image
                  src={"/assets/new/growth.png"}
                  alt="hero"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              {/* <div className="text-[20px] font-medium text-[#FE5218]"> */}
              {/*   <p>Sustainable Growth That Works for Life</p> */}
              {/* </div> */}
              <div className="text-[14px]">
                <p>
                  ✅ Learn the step-by-step process that’s been tested and
                  refined to ensure sustainable growth for law firms like yours.
                </p>
              </div>
            </div>
            {/* <div className="flex flex-col justify-center items-center gap-8 w-[320px] "> */}
            {/*   <div> */}
            {/*     <MdPendingActions className="w-28 h-28" /> */}
            {/*   </div> */}
            {/*   <div className="text-[20px] font-medium text-[#FE5218]"> */}
            {/*     <p>An Action Plan—With or Without Us</p> */}
            {/*   </div> */}
            {/*   <div className="text-[14px]"> */}
            {/*     <p> */}
            {/*       Learn how to build a repeatable system that generates */}
            {/*       consistent leads and grows with your firm, not just short-term */}
            {/*       quick wins. */}
            {/*     </p> */}
            {/*   </div> */}
            {/* </div> */}
          </div>
        </div>
      </SectionLayout>
      <SectionLayout
        bg={`bg-white  scroll-smooth lg:px-20  relative${
          isVideoFinishedCookie == "true" ? " " : " blur"
        }`}
      >
        {" "}
        <div className="py-5 lg:py-20 lg:px-20 xl:px-36 2xl:px-64  ">
          <p className="text-[20px] lg:text-[28px] pb-10  font-semibold  md:text-start">
            No Marketing Expertise? No Problem – We’ve Got You.
          </p>
          <ol className="text-[14px] md:text-[20px] list-none ">
            <li className="pb-4">
              <span className="font-bold">No need </span>to be a marketing
              expert.
            </li>
            <li className="pb-4">
              🚫 <span className="font-bold">No tech skills</span> or SEO
              knowledge required.
            </li>
            <li className="pb-4">
              🚫 <span className="font-bold">No wasting money</span> on
              ineffective paid ads.{" "}
            </li>
            <li className="pb-4">
              🚫 <span className="font-bold">No guessing</span> what works.
            </li>
            <li className="pb-4">
              🚫 <span className="font-bold">No overpriced agencies</span> that
              underdelivered.
            </li>
            <li className="pb-4">
              ✅ <span className="font-bold">Focus on practicing law</span>—we
              handle client acquisition.
            </li>
            <li className="pb-4">
              🔷{" "}
              <span className="font-bold">
                Attract high-value cases without paid ads.
              </span>
            </li>
            <li className="pb-4">
              🔷{" "}
              <span className="font-bold">
                Learn proven SEO & marketing strategies top firms use.
              </span>
            </li>
            <li className="pb-4">
              🔷{" "}
              <span className="font-bold">
                See real case studies, real numbers, & a step-by-step system.{" "}
              </span>
            </li>
            <li className="pb-4">
              🔷{" "}
              <span className="font-bold">
                Build a sustainable, hands-off client pipeline.
              </span>
            </li>
            <li className="pb-12">
              🔷{" "}
              <span className="font-bold">
                No gimmicks—just a clear, data-backed blueprint.{" "}
              </span>
            </li>
            <p className="pb-4">
              📈{" "}
              <span className="font-bold">
                A battle-tested system for law firms to scale & dominate.
              </span>
            </p>
            <p>
              🚀{" "}
              <span className="font-bold">
                Nothing else like this—guaranteed.
              </span>{" "}
            </p>
          </ol>
        </div>
      </SectionLayout>
      <SectionLayout
        bg={`bg-gray-200  scroll-smooth  lg:px-20 ${
          isVideoFinishedCookie === "true" ? " " : " blur"
        }`}
      >
        {" "}
        <div className="  py-5 lg:py-20">
          <div className=" text-[32px] lg:text-[48px] font-bold leading-tight">
            <p>
              <span className={"text-[#FE5218] underline underline-offset-2"}>
                Recent Results
              </span>{" "}
              We&apos;ve Gotten For Agency Owners, Coaches & Consultants Just
              Like You: 
            </p>
          </div>
          <div className="text-gray-800 text-[18px] lg:text-[24px] py-5 lg:py-16 underline underline-offset-4 hidden md:block">
            <p>{`How we took our clients business to the next level!`}</p>
          </div>
          <div className="text-gray-800 text-[18px] lg:text-[24px] py-5 lg:py-16  md:hidden">
            <p>{`How we took our clients business to the next level!`}</p>
            <p className="w-full h-0.5  mt-1 bg-gray-500"></p>
          </div>
          {/* mobile */}
          <Carousel
            setApi={setApi}
            className={"w-full  "}
            opts={{ loop: true, align: "center" }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className={"py-5 px-o md:px-5 -ml-5"}>
              {carouselVideo?.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 text-gray-800  "
                >
                  <div className="pl-1">
                    <div className="p-10 ">
                      <iframe
                        src={item.src}
                        allowFullScreen
                        className="w-full md:h-[200px] lg:h-[300px] xl:h-[350px] rounded-3xl"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                        onClick={plugin.current.stop}
                      />
                      <h3 className="text-[26px] pt-4">{item.title}</h3>
                      <p className="text-[14px]">{item.text}</p>
                    </div>{" "}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className={"text-gray-700 hover:text-[#FE5218] "}
            />
            <CarouselNext className={"text-gray-700 hover:text-[#FE5218] "} />
          </Carousel>
          <div className="py-2 text-center text-sm text-muted-foreground  justify-center items-center gap-20 flex">
            {carouselVideo.map((item, index) => (
              <div
                key={index}
                className={`h-5  w-5 rounded-full  ${
                  current == index + 1 ? "bg-[#FE5218]" : "   bg-gray-300"
                }`}
              ></div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-44"></div>
        </div>
      </SectionLayout>
      <SectionLayout
        bg={`bg-[#00031A] py-5 lg:py-20  lg:px-20  scroll-smooth ${
          isVideoFinishedCookie == "true" ? " " : " blur"
        }`}
      >
        <div
          className={
            "grid grid-cols-1 xl:grid-cols-2 h-fit  items-center lg:h-fit gap-20 p-5"
          }
        >
          <div>
            <h2 className="text-[#FE5218] pb-5 text-[60px] lg:text-[48px] font-bold ">
              Why Us?
            </h2>
            <p className="text-gray-400 pb-10 m-auto text-[18px] lg:text-[24px] ">
              We’re not here to sell—we’re here to show you exactly how to get
              real results using the same system that has worked for 100+ law
              firms across the U.S.
            </p>
            <div className=" text-gray-300  text-[18px] lg:text-[24px]  font-semibold">
              🚀 If you’re looking for a marketing partner that understands the
              legal industry and delivers real, measurable results— you’re in
              the right place. Let’s grow your firm together.
            </div>
          </div>
          <div className="hidden md:block">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              orientation="vertical"
              className={"px-5"}
              // plugins={[plugin.current]}
              // onMouseEnter={plugin.current.stop}
              // onMouseLeave={plugin.current.reset}
            >
              <CarouselContent
                className={"p-5 -mt-1 h-[350px] lg:h-[500px] text-white"}
              >
                <CarouselItem className="pt-0 basis-1/3 flex  justify-center items-center">
                  <div className="flex flex-col gap-5 p-8 lg:p-12  bg-[#30323E]  h-fit   rounded-3xl">
                    <div className="h-[70px] w-[70px]">
                      <Image
                        src="/assets/new/why.png"
                        alt="hero"
                        width={400}
                        height={200}
                        quality={100}
                        className=" rounded-3xl"
                      />
                    </div>
                    <div className="font-medium  text-[14px] lg:text-[16px]">
                      <p>We Specialize in Law Firm Growth</p>
                    </div>
                    <div className="text-[12px] lg:text-[14px]">
                      <p>
                        We Specialize in Law Firm Growth – Unlike generic
                        marketing agencies, we focus exclusively on helping law
                        firms attract high-value clients through organic
                        marketing and SEO.
                      </p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="pl-1 basis-1/3  flex  justify-center items-center">
                  <div className="flex flex-col gap-5 p-8  lg:p-12 bg-[#30323E]   h-fit    rounded-3xl">
                    <div className="h-[70px] w-[70px]">
                      <Image
                        src="/assets/new/why.png"
                        alt="hero"
                        width={400}
                        height={200}
                        quality={100}
                        className=" rounded-3xl"
                      />
                    </div>

                    <div className="font-medium  text-[14px] lg:text-[16px]">
                      <p>Proven Track Record</p>
                    </div>
                    <div className="text-[12px] lg:text-[14px]">
                      <p>
                        Since 2016, we’ve helped 100+ law firms across the U.S.
                        consistently generate more cases and increase
                        revenue—without relying on expensive ads.
                      </p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="pl-1 basis-1/3  flex  justify-center items-center">
                  <div className="flex flex-col gap-5 p-8  lg:p-12  bg-[#30323E]   h-fit     rounded-3xl">
                    <div className="h-[70px] w-[70px]">
                      <Image
                        src="/assets/new/why.png"
                        alt="hero"
                        width={400}
                        height={200}
                        quality={100}
                        className=" rounded-3xl"
                      />
                    </div>
                    <div className="font-medium  text-[14px] lg:text-[16px]">
                      <p>Organic, Sustainable Growth</p>
                    </div>
                    <div className="text-[12px] lg:text-[14px]">
                      <p>
                        Our strategies ensure long-term success, not just
                        short-term spikes. We create a system that works for a
                        lifetime and grows as your firm grows.
                      </p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="pl-1 basis-1/3  flex  justify-center items-center">
                  <div className="flex flex-col gap-5 p-8 lg:p-12   bg-[#30323E]   h-fit     rounded-3xl">
                    <div className="h-[70px] w-[70px]">
                      <Image
                        src="/assets/new/why.png"
                        alt="hero"
                        width={400}
                        height={200}
                        quality={100}
                        className=" rounded-3xl"
                      />
                    </div>
                    <div className="font-medium   text-[14px] lg:text-[16px]">
                      <p>No Guesswork</p>
                    </div>
                    <div className="text-[12px] lg:text-[14px]">
                      <p>
                        Just Results – We use data-driven insights, real case
                        studies, and a step-by-step blueprint to ensure that
                        your firm ranks higher, attracts more clients, and
                        converts leads effectively.
                      </p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="pl-1 basis-1/3  flex  justify-center items-center">
                  <div className="flex flex-col gap-5 p-8 lg:p-12  bg-[#30323E]   h-fit     rounded-3xl">
                    <div className="h-[70px] w-[70px]">
                      <Image
                        src="/assets/new/why.png"
                        alt="hero"
                        width={400}
                        height={200}
                        quality={100}
                        className=" rounded-3xl"
                      />
                    </div>

                    <div className="font-medium   text-[14px] lg:text-[16px]">
                      <p>Tailored for Your Practice</p>
                    </div>
                    <div className="text-[12px] lg:text-[14px]">
                      <p>
                        Whether you’re a solo attorney or a multi-location law
                        firm, we design a custom growth strategy that fits your
                        specific goals and legal niche.
                      </p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="pl-1 basis-1/3  flex  justify-center items-center">
                  <div className="flex flex-col gap-5 p-8 lg:p-12 bg-[#30323E]  h-fit    rounded-3xl">
                    <div className="h-[70px] w-[70px]">
                      <Image
                        src="/assets/new/why.png"
                        alt="hero"
                        width={400}
                        height={200}
                        quality={100}
                        className=" rounded-3xl"
                      />
                    </div>
                    <div className="font-medium   text-[14px] lg:text-[16px]">
                      <p>We Empower You</p>
                    </div>
                    <div className="text-[12px] lg:text-[14px]">
                      <p>
                        We don’t just provide a service—we train you and your
                        team to build a repeatable process that ensures
                        continuous growth—with or without us.
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious
                className={"text-gray-100 hover:text-[#FE5218]"}
              />
              <CarouselNext className={"text-gray-100 hover:text-[#FE5218]"} />
            </Carousel>
          </div>
          <div className="md:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className={"w-full"}
              // plugins={[plugin.current]}
              // onMouseEnter={plugin.current.stop}
              // onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className={"-ml-1 text-white"}>
                <CarouselItem className=" flex  p-10 justify-center items-center">
                  <div className="flex flex-col px-10 py-16 w-full  lg:p-12  bg-[#30323E]  h-full   rounded-3xl">
                    <div className="h-[70px] w-[70px]">
                      <Image
                        src="/assets/new/why.png"
                        alt="hero"
                        width={400}
                        height={200}
                        quality={100}
                        className=" rounded-3xl"
                      />
                    </div>
                    <div className="font-medium  text-[14px] lg:text-[16px]">
                      <p>We Specialize in Law Firm Growth</p>
                    </div>
                    <div className="text-[12px] lg:text-[14px]">
                      <p>
                        We Specialize in Law Firm Growth – Unlike generic
                        marketing agencies, we focus exclusively on helping law
                        firms attract high-value clients through organic
                        marketing and SEO.
                      </p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className=" flex  p-10 justify-center items-center">
                  <div className="flex flex-col px-10 py-16 w-full  lg:p-12  bg-[#30323E]  h-full   rounded-3xl">
                    <div className="h-[70px] w-[70px]">
                      <Image
                        src="/assets/new/why.png"
                        alt="hero"
                        width={400}
                        height={200}
                        quality={100}
                        className=" rounded-3xl"
                      />
                    </div>

                    <div className="font-medium  text-[14px] lg:text-[16px]">
                      <p>Proven Track Record</p>
                    </div>
                    <div className="text-[12px] lg:text-[14px]">
                      <p>
                        Since 2016, we’ve helped 100+ law firms across the U.S.
                        consistently generate more cases and increase
                        revenue—without relying on expensive ads.
                      </p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className=" flex  p-10 justify-center items-center">
                  <div className="flex flex-col px-10 py-16 w-full  lg:p-12  bg-[#30323E]  h-full   rounded-3xl">
                    <div className="h-[70px] w-[70px]">
                      <Image
                        src="/assets/new/why.png"
                        alt="hero"
                        width={400}
                        height={200}
                        quality={100}
                        className=" rounded-3xl"
                      />
                    </div>
                    <div className="font-medium  text-[14px] lg:text-[16px]">
                      <p>Organic, Sustainable Growth</p>
                    </div>
                    <div className="text-[12px] lg:text-[14px]">
                      <p>
                        Our strategies ensure long-term success, not just
                        short-term spikes. We create a system that works for a
                        lifetime and grows as your firm grows.
                      </p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className=" flex  p-10 justify-center items-center">
                  <div className="flex flex-col px-10 py-16 w-full  lg:p-12  bg-[#30323E]  h-full   rounded-3xl">
                    <div className="h-[70px] w-[70px]">
                      <Image
                        src="/assets/new/why.png"
                        alt="hero"
                        width={400}
                        height={200}
                        quality={100}
                        className=" rounded-3xl"
                      />
                    </div>
                    <div className="font-medium   text-[14px] lg:text-[16px]">
                      <p>No Guesswork</p>
                    </div>
                    <div className="text-[12px] lg:text-[14px]">
                      <p>
                        Just Results – We use data-driven insights, real case
                        studies, and a step-by-step blueprint to ensure that
                        your firm ranks higher, attracts more clients, and
                        converts leads effectively.
                      </p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className=" flex  p-10 justify-center items-center">
                  <div className="flex flex-col px-10 py-16 w-full  lg:p-12  bg-[#30323E]  h-full  rounded-3xl">
                    <div className="h-[70px] w-[70px]">
                      <Image
                        src="/assets/new/why.png"
                        alt="hero"
                        width={400}
                        height={200}
                        quality={100}
                        className=" rounded-3xl"
                      />
                    </div>

                    <div className="font-medium   text-[14px] lg:text-[16px]">
                      <p>Tailored for Your Practice</p>
                    </div>
                    <div className="text-[12px] lg:text-[14px]">
                      <p>
                        Whether you’re a solo attorney or a multi-location law
                        firm, we design a custom growth strategy that fits your
                        specific goals and legal niche.
                      </p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className=" flex  p-10 justify-center items-center">
                  <div className="flex flex-col px-10 py-16 w-full h-full  lg:p-12  bg-[#30323E]     rounded-3xl">
                    <div className="h-[70px] w-[70px]">
                      <Image
                        src="/assets/new/why.png"
                        alt="hero"
                        width={400}
                        height={200}
                        quality={100}
                        className=" rounded-3xl"
                      />
                    </div>
                    <div className="font-medium   text-[14px] lg:text-[16px]">
                      <p>We Empower You</p>
                    </div>
                    <div className="text-[12px] lg:text-[14px]">
                      <p>
                        We don’t just provide a service—we train you and your
                        team to build a repeatable process that ensures
                        continuous growth—with or without us.
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious
                className={"text-gray-100 hover:text-[#FE5218] !-translate-x-5"}
              />
              <CarouselNext
                className={"text-gray-100 hover:text-[#FE5218] !translate-x-5"}
              />
            </Carousel>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout
        bg={`bg-[#F4F4F4]  scroll-smooth  lg:px-20 pt-10  ${
          isVideoFinishedCookie == "true" ? " " : " blur"
        }`}
      >
        <div className=" bg-gray-200 rounded-3xl border border-gray-300 px-8 py-12  shadow-xl lg:mx-52 m-auto">
          <div>
            <h2 className="font-bold text-[24px] lg:text-[36px] text-center">
              Ready to Schedule Your Meeting?
            </h2>
          </div>
          <div>
            <p className="font-medium lg:text-[20px] text-center">
              {" "}
              Don’t wait—book your meeting today and start growth your business
              and your.
            </p>
          </div>
          <div>
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="pt-10 lg:pt-20 lg:w-[90%] m-auto"
            >
              <div className="flex flex-col md:flex-row justify-between md:gap-10">
                <div className="flex-1 mt-2 text-left">
                  <label className={" pl-4 pb-6"}>First Name</label>
                  <input
                    className="appearance-none rounded-3xl w-full mt-3   mb-5 py-5 px-4 leading-tight focus:outline-none focus:shadow-outline text-small  sm:text-[1.4rem] lg:text-[1.4rem]  !text-left"
                    type="text"
                    placeholder="Enter your first name"
                    name="first_name"
                    id="first_name"
                    value={contactInfo.first_name}
                    onChange={handleChange}
                  />
                  <span className="text-orange-600">
                    {formErrors.first_name}
                  </span>

                  <label className=" md:hidden pl-4 pb-6">Last Name</label>
                  <input
                    className="appearance-none md:hidden  rounded-3xl w-full   mt-3   mb-5  py-5 px-4 leading-tight focus:outline-none focus:shadow-outline text-small  sm:text-[1.4rem] lg:text-[1.4rem] md:text-justify  !text-left"
                    type="text"
                    placeholder="Enter your last name"
                    name="last_name"
                    id="last_name"
                    value={contactInfo.last_name}
                    onChange={handleChange}
                  />
                  <span className="text-orange-600 md:hidden">
                    {formErrors.last_name}
                  </span>

                  <label className={" pl-4 pb-6 "}>Email</label>
                  <input
                    className="appearance-none  rounded-3xl w-full   mt-3 mb-5  py-5 px-4 leading-tight focus:outline-none focus:shadow-outline text-small  sm:text-[1.4rem] lg:text-[1.4rem] md:text-justify  !text-left"
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                    value={contactInfo.email}
                    onChange={handleChange}
                  />
                  <span className="text-orange-600">{formErrors.email}</span>
                  <label className=" md:hidden pl-4 pb-6">Phone</label>
                  <input
                    className="appearance-none  md:hidden rounded-3xl w-full   mt-3   mb-5  py-5 px-4 leading-tight focus:outline-none focus:shadow-outline text-small  sm:text-[1.4rem] lg:text-[1.4rem] md:text-justify  !text-left"
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    id="phone"
                    value={contactInfo.phone}
                    onChange={handleChange}
                  />
                  <span className="text-orange-600 md:hidden">
                    {formErrors.phone}
                  </span>
                  <label className={" pl-4 pb-6"}>Street Address</label>
                  <input
                    name="address"
                    id="address"
                    value={contactInfo.address}
                    onChange={handleChange}
                    className="appearance-none  rounded-3xl w-full    mt-3   mb-5 py-5 px-4 leading-tight focus:outline-none focus:shadow-outline text-small  sm:text-[1.4rem] lg:text-[1.4rem] md:text-justify !text-left"
                    placeholder="Street address"
                  />
                  <span className="text-orange-600">{formErrors.address}</span>
                  <label className={" pl-4 pb-6 md:hidden"}>Zip Code</label>
                  <div className="flex-1 md:hidden">
                    <input
                      name="zip"
                      id="zip"
                      value={contactInfo.zip}
                      onChange={handleChange}
                      className="appearance-none  rounded-3xl w-full   mt-3  mb-5  py-5 px-4 leading-tight focus:outline-none focus:shadow-outline text-small  sm:text-[1.4rem] lg:text-[1.4rem] md:text-justify   !text-left"
                      placeholder="Zip Code"
                    />
                    <span className="text-orange-600 md:hidden">
                      {formErrors.zip}
                    </span>
                  </div>
                </div>
                <div className="flex-1 mt-2">
                  <label className="hidden md:block pl-4 ">Last Name</label>
                  <input
                    className="appearance-none hidden md:block rounded-3xl w-full   mt-3  mb-5   py-5 px-4 leading-tight focus:outline-none focus:shadow-outline text-small  sm:text-[1.4rem] lg:text-[1.4rem] md:text-justify  !text-left"
                    type="text"
                    placeholder="Enter your last name"
                    name="last_name"
                    id="last_name"
                    value={contactInfo.last_name}
                    onChange={handleChange}
                  />

                  <span className="text-orange-600 hidden md:block">
                    {formErrors.last_name}
                  </span>
                  <label className="hidden md:block pl-4 ">Phone</label>
                  <input
                    className="appearance-none  rounded-3xl w-full    hidden md:block  mt-3  mb-5   py-5 px-4 leading-tight focus:outline-none focus:shadow-outline text-small  sm:text-[1.4rem] lg:text-[1.4rem] md:text-justify  !text-left"
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    id="phone"
                    value={contactInfo.phone}
                    onChange={handleChange}
                  />
                  <span className="text-orange-600 hidden md:block">
                    {formErrors.phone}
                  </span>

                  <label className={" pl-4 hidden md:block"}>Zip Code</label>
                  <div className="flex-1 hidden md:block">
                    <input
                      name="zip"
                      id="zip"
                      value={contactInfo.zip}
                      onChange={handleChange}
                      className="appearance-none  rounded-3xl w-full   mt-3  mb-5   py-5 px-4 leading-tight focus:outline-none focus:shadow-outline text-small  sm:text-[1.4rem] lg:text-[1.4rem] md:text-justify  !text-left "
                      placeholder="Zip Code"
                    />
                    <span className="text-orange-600 hidden md:block">
                      {formErrors.zip}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-3 w-full lg:w-1/3 m-auto flex justify-center items-center text-white">
                {loading ? (
                  <button
                    disabled
                    type="button"
                    className="btn text-[11px] md:text-small !py-4 flex text-white items-center gap-2 md:gap-8 r-button border-2 border-primary hover:text-[#FE6F1F] "
                  >
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-4 h-4 me-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Submitting...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn text-[14px] md:text-small !py-4 flex text-white items-center gap-2 md:gap-8 r-button border-2 border-primary hover:text-[#FE6F1F]"
                  >
                    Book Your Session Now{" "}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-5 justify-start items-start pt-20 ">
          {/* <div className="text-[26px] lg:text-[36px] font-bold text-center md:px-12">
            <p>We&apos;re Also Rated &apos;&apos;Excellent&apos;&apos;</p>
          </div> */}
          {/* <div className={"place-self-center md:px-12 md:place-self-start "}>
            <Image
              src="/assets/new/star.png"
              alt="star"
              width={200}
              height={100}
              quality={100}
            />
          </div> */}

          <div className=" text-[26px] md:px-12">
            <ol className="text-[16px] md:text-[20px]  list-none ">
              <li className="pb-4">
                ✔️ <span className="font-bold">Attract High-Value Clients</span>{" "}
                – A proven system for steady case flow.
              </li>
              <li className="pb-4">
                ✔️ <span className="font-bold">Dominate Your Niche</span> – Be
                the top choice in your practice area.
              </li>
              <li className="pb-4">
                ✔️ <span className="font-bold">Master Organic Growth</span> –
                Get leads on autopilot, no ad spend.
              </li>
              <li className="pb-4">
                ✔️ <span className="font-bold">Fill Your Calendar</span> –
                30-100+ client calls per month.
              </li>
              <li className="pb-4">
                ✔️ <span className="font-bold">Convert More Leads</span> – Turn
                prospects into paying clients.
              </li>
              <li className="pb-4">
                ✔️ <span className="font-bold">Scale Efficiently</span> – Grow
                beyond referrals & guesswork.
              </li>
              <li className="pb-4">
                ✔️ <span className="font-bold">Maximize Profits</span> – More
                clients, lower costs.
              </li>
              <li className="pb-4">
                ✔️ <span className="font-bold">Think Like a Leader</span> –
                Strategies top firms use to win.
              </li>
              <li className="pb-12">
                ✔️ <span className="font-bold">{`Streamline & Scale`}</span> – A
                repeatable system for lasting success.
              </li>
              <li className="pb-4 font-bold">The Endgame?</li>
              <li className="pb-4">
                A thriving, effortlessly growing law firm with more{" "}
                <span className="font-bold">cases</span>,{" "}
                <span className="font-bold">revenue</span>, and{" "}
                <span className="font-bold">freedom</span>.
              </li>
              <p className="pb-4">
                🚀 <span className="font-bold">Risk-Free Guarantee</span> –
                Proven strategies, step-by-step training, and a winning
                community.{" "}
              </p>
              <p className="pb-4">
                📞 Ready to go from unpredictable to unstoppable?{" "}
                <span className="font-bold">Schedule a call now!</span>
              </p>
            </ol>
          </div>
        </div>
        <div className="bg-[#1D1F32] my-10 md:my-20  rounded-3xl !text-white  scroll-smooth">
          <SectionLayout bg=" scroll-smooth">
            <div className="flex flex-col items-center">
              <h2 className="heading-secondary !text-white">
                Consultations for Our Service
              </h2>
              <p className="text-base !text-center !text-white max-w-[622px] mx-auto mb-10">
                {` Consultations for our service are free and easy. Simply click below to
            fix a suitable date and time that works for you. We'll contact you
            shortly. Don’t miss this opportunity.
            `}
              </p>

              <Link
                target="_blank"
                href={
                  "https://calendly.com/info-bayshorecommunication/meeting?month=2025-04"
                }
              >
                <button className="btn text-[12px] md:text-small !py-4 flex text-white items-center gap-2 md:gap-8 r-button border-2 border-primary hover:text-[#FE6F1F]">
                  <span>Book now 45 min Free Consultation</span>
                  <span className="inline-block translate-y-[2px] ml-2">
                    <AiOutlineRight />
                  </span>
                </button>
              </Link>
            </div>
          </SectionLayout>
        </div>
      </SectionLayout>
    </div>
  );
};
export default Page;
