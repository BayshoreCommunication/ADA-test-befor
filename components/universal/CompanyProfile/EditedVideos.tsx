"use client";
import React, { useState } from "react";
import SectionLayout from "../SectionLayout";
import Image from "next/image";
import Link from "next/link";
import { FaRegCirclePlay } from "react-icons/fa6";

const editedVideosData = [
  {
    logo: "/assets/company-profile/video-thumbnails/swop-logo.png",
    videoType: "2D Motion Graphics",
    software: "After Effect",
    thumbnails:
      "/assets/company-profile/video-thumbnails/swop-2d-thumbnail.png",
    videoUrl: "https://www.youtube.com/embed/F5dNmZ1fnLE?si=TNwP10yXC5ULw-da",
  },
  {
    logo: "/assets/company-profile/video-thumbnails/swop-logo.png",
    videoType: "3D Motion Graphics",
    software: "Blender",
    thumbnails:
      "/assets/company-profile/video-thumbnails/swop-3d-thumbnail.png",
    videoUrl: "https://www.youtube.com/embed/F5dNmZ1fnLE?si=TNwP10yXC5ULw-da",
  },
  {
    logo: "/assets/company-profile/video-thumbnails/trip-law-logo.png",
    videoType: "2D Motion Graphics & Video Edit",
    software: "After Effect",
    thumbnails:
      "/assets/company-profile/video-thumbnails/trip-law-immigration-thumbnail.png",
    videoUrl: "https://www.youtube.com/embed/F5dNmZ1fnLE?si=TNwP10yXC5ULw-da",
  },
  {
    logo: "/assets/company-profile/video-thumbnails/trip-law-logo.png",
    videoType: "2D Motion Graphics & Video Edit",
    software: "After Effect",
    thumbnails:
      "/assets/company-profile/video-thumbnails/trip-law-visa-thumbnail.png",
    videoUrl: "https://www.youtube.com/embed/F5dNmZ1fnLE?si=TNwP10yXC5ULw-da",
  },
  {
    logo: "/assets/company-profile/video-thumbnails/apex-advisor-logo.png",
    videoType: "2D Motion Graphics & Video Edit",
    software: "After Effect",
    thumbnails:
      "/assets/company-profile/video-thumbnails/apex-warning-thumbnail.png",
    videoUrl: "https://www.youtube.com/embed/F5dNmZ1fnLE?si=TNwP10yXC5ULw-da",
  },
  {
    logo: "/assets/company-profile/video-thumbnails/apex-advisor-logo.png",
    videoType: "2D Motion Graphics & Video Edit",
    software: "After Effect",
    thumbnails:
      "/assets/company-profile/video-thumbnails/apex-crypto-thumbnail.png",
    videoUrl: "https://www.youtube.com/embed/F5dNmZ1fnLE?si=TNwP10yXC5ULw-da",
  },
];

const EditedVideos = () => {
  const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(
    null
  );

  const handlePlay = (index: number) => {
    setPlayingVideoIndex(index);
  };

  return (
    <div className="py-10">
      <SectionLayout bg="">
        <h2 className="text-[28px] md:text-40px lg:text-[50px] font-medium text-white text-center mb-10">
          Produced & Edited Videos
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
          {editedVideosData.map((video, index) => (
            <div key={index} className="">
              <div className="mt-4 text-white ">
                <Image src={video?.logo} alt="Logo" width={200} height={80} />
                <h3 className="text-[20px] lg:text-[24px] font-medium mb-3 mt-6">
                  <span className="uppercase opacity-70">Type:</span>{" "}
                  {video?.videoType}
                </h3>
                <h3 className="text-[20px] lg:text-[24px] font-medium  mb-6">
                  <span className="uppercase opacity-70">Software:</span>{" "}
                  {video?.software}
                </h3>
              </div>
              <div className="relative group">
                {playingVideoIndex === index ? (
                  <div className="relative px-5 py-4 border-2 rounded-3xl border-white overflow-hidden">
                    <iframe
                      src={video.videoUrl}
                      allowFullScreen
                      className="w-full h-[408px] rounded-lg"
                    />
                  </div>
                ) : (
                  <button
                    onClick={() => handlePlay(index)}
                    className="block w-full"
                  >
                    <div className="relative px-5 py-4 border-2 rounded-3xl border-white overflow-hidden">
                      <Image
                        src={video?.thumbnails}
                        alt={video?.videoType}
                        width={1000}
                        height={550}
                        className="w-full rounded-lg transition-transform duration-500 transform group-hover:scale-105"
                      />
                      <FaRegCirclePlay
                        className="absolute inset-0 text-white text-[80px] transform group-hover:scale-110 bg-black bg-opacity-60 rounded-full"
                        style={{
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                    </div>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default EditedVideos;
