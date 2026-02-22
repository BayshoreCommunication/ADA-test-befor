import React from "react";
import SectionLayout from "../SectionLayout";
import Image from "next/image";
import Link from "next/link";
import { FaRegCirclePlay } from "react-icons/fa6";
import EditedVideos from "./EditedVideos";
import EditedReels from "./EditedReels";

const VideoProduction = () => {
  return (
    <div className="py-10">
      <div className="relative h-[30vh]  lg:h-[50vh] w-full">
        {/* Background Image */}
        <Image
          src="/assets/company-profile/video-production-heading.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-around z-10 py-20">
          {/* Title Text */}
          <SectionLayout bg="">
            <div className="w-full lg:py-20 lg:px-10 text-center bg-[rgba(0,0,0,0.6)] p-4 rounded-lg">
              <h1 className="text-white text-[28px] md:text-40px lg:text-[50px] px-14 font-bold uppercase w-full">
                VIDEO production & Editing
              </h1>
            </div>
          </SectionLayout>
        </div>
      </div>
      {/* Videos */}
      <EditedVideos />
      {/* Reels */}
      <EditedReels />
    </div>
  );
};

export default VideoProduction;
