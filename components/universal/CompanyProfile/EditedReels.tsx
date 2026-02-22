"use client";
import React, { useState } from "react";
import SectionLayout from "../SectionLayout";
import Image from "next/image";
import Link from "next/link";
import { FaRegCirclePlay } from "react-icons/fa6";

const editedReelsData = [
  {
    reels: "/assets/company-profile/video-thumbnails/reel1-thumbnail.png",
    title: "This job for a couple of",
    videoUrl: "https://www.youtube.com/embed/F5dNmZ1fnLE?si=TNwP10yXC5ULw-da", // Add video URL here
  },
  {
    reels: "/assets/company-profile/video-thumbnails/reel2-thumbnail.png",
    title: "Save 20%",
    videoUrl: "https://www.youtube.com/embed/F5dNmZ1fnLE?si=TNwP10yXC5ULw-da",
  },
  {
    reels: "/assets/company-profile/video-thumbnails/reel3-thumbnail.png",
    title: "Lead",
    videoUrl: "https://www.youtube.com/embed/F5dNmZ1fnLE?si=TNwP10yXC5ULw-da",
  },
  {
    reels: "/assets/company-profile/video-thumbnails/reel4-thumbnail.png",
    title: "Durable",
    videoUrl: "https://www.youtube.com/embed/F5dNmZ1fnLE?si=TNwP10yXC5ULw-da",
  },
  {
    reels: "/assets/company-profile/video-thumbnails/reel5-thumbnail.png",
    title: "Shine Brightly",
    videoUrl: "https://www.youtube.com/embed/F5dNmZ1fnLE?si=TNwP10yXC5ULw-da",
  },
  {
    reels: "/assets/company-profile/video-thumbnails/reel6-thumbnail.png",
    title: "Digital Service",
    videoUrl: "https://www.youtube.com/embed/F5dNmZ1fnLE?si=TNwP10yXC5ULw-da",
  },
];

const EditedReels = () => {
  const [playingReelIndex, setPlayingReelIndex] = useState<number | null>(null);

  const handlePlay = (index: number) => {
    setPlayingReelIndex(index);
  };

  return (
    <div className="py-10">
      <SectionLayout bg="">
        <h2 className="text-[28px] md:text-40px lg:text-[50px] font-medium text-white text-center mb-10">
          Produced & Edited REELS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-14">
          {editedReelsData.map((reel, index) => (
            <div key={index} className="">
              <div className="relative group">
                {playingReelIndex === index ? (
                  <div className="relative px-2 py-2 border-2 rounded-[30px] border-white overflow-hidden">
                    <iframe
                      src={reel.videoUrl}
                      allowFullScreen
                      className="w-full h-[640px] rounded-[25px]"
                    />
                  </div>
                ) : (
                  <button
                    onClick={() => handlePlay(index)}
                    className="block w-full"
                  >
                    <div className="relative px-2 py-2 border-2 rounded-[30px] border-white overflow-hidden">
                      <Image
                        src={reel?.reels}
                        alt={reel?.title}
                        width={400}
                        height={600}
                        className="w-full rounded-[25px] transition-transform duration-500 transform group-hover:scale-105"
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

export default EditedReels;
