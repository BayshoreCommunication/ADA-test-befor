import Image from "next/image";
import Link from "next/link";
import React from "react";

interface con {
  content: string;
}

const Box: React.FC<con> = ({ content }) => {
  return (
    <div className="flex gap-1 md:gap-2 my-[1rem] md:my-[1.5rem]">
      <Image
        src="/assets/mark.svg"
        alt="marking"
        width={50}
        height={50}
        className="w-[2rem] h-[2rem]"
      />
      <Link
        href="/#"
        aria-disabled
        className="hover:underline underline-offset-[3px] !text-[#207DE9] text-[12px] md:text-[14px]"
      >
        {content}
      </Link>
    </div>
  );
};

interface box {
  title: string;
  imgLink: string;
  box: any;
}

const HomeServiceCard: React.FC<box> = ({ title, imgLink, box }) => {
  return (
    <div className="border-2 border-[#DBDBDB] rounded-[70px] px-[5rem] py-[5rem]">
      <div className="flex justify-between items-center">
        <h4 className="heading-tertiary !text-[#222] text-cut text-cut-1 !text-start">
          {title}
        </h4>
        <div>
          <Image
            src={imgLink}
            alt="marketing"
            width={100}
            height={100}
            className="lg:w-[5.4rem] lg:h-[5.4rem] w-[3.4rem] h-[3.4rem] sm:w-[4rem] sm:h-[4rem] grayscale hover:animate-pulse"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-1 md:gap-4 md:gap-y-2 lg:gap-1 mt-2">
        {box.map((el: string, i: number) => (
          <Box key={i} content={el} />
        ))}
      </div>
    </div>
  );
};

export default HomeServiceCard;
