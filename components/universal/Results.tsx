import React from "react";
import SectionLayout from "./SectionLayout";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Link from "next/link";
import Reveal from "../motion/Reveal";

interface resultInfo {
  heading: string;
}

const Results: React.FC<resultInfo> = ({ heading }) => {
  return (
    <SectionLayout bg="">
      <div className="flex flex-col items-center">
        <div className="max-w-[690px] mx-auto">
          <h2 className="heading-secondary !text-center">{heading}</h2>
          <p className="text-[1.5rem] !text-center max-w-[622px] mx-auto mb-10">
            We have some amazing results to show you. Our clients are delighted
            with our services and their outcomes. Click below to view our most
            amazing experience with our clients.
          </p>
        </div>
        <Link href="/case-studies">
          <button
            type="submit"
            className="btn text-small !py-4 flex items-center gap-8 r-button border-2 border-primary hover:text-primary"
          >
            <span>View Our Success Stories</span>
            <span className="inline-block translate-y-[2px] ml-2">
              <AiOutlineRight />
            </span>
          </button>
        </Link>
      </div>

      <div className="mt-16">
        <Reveal>
          <ClientLogos />
        </Reveal>
      </div>
    </SectionLayout>
  );
};

export default Results;

let logos: {
  link: "/assets/client-logo/swop.svg";
  alt: "swop";
}[];

const ClientLogos = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 justify-center gap-x-20 gap-y-[5rem] justify-items-center items-center lg:mb-20 lg:mt-10">
      <Image
        src="/assets/client-logo/apex.svg"
        alt="marketing"
        width={400}
        height={400}
        className="w-[12rem]"
      />
      <Image
        src="/assets/client-logo/elite-spa.svg"
        alt="elite-spa"
        width={400}
        height={400}
        className="w-[12rem]"
      />
      <Image
        src="/assets/client-logo/super-equestrian.svg"
        alt="super-equestrian"
        width={400}
        height={400}
        className="w-[12rem]"
      />
      <Image
        src="/assets/client-logo/klothen.svg"
        alt="klothen"
        width={400}
        height={400}
        className="w-[12rem]"
      />
      <Image
        src="/assets/client-logo/the-cat-flix.svg"
        alt="the-cat-flix"
        width={400}
        height={400}
        className="w-[12rem]"
      />
      <Image
        src="/assets/client-logo/trip-law.svg"
        alt="trip-law"
        width={400}
        height={400}
        className="w-[12rem]"
      />
      <Image
        src="/assets/client-logo/aireserv.svg"
        alt="aireserv"
        width={400}
        height={400}
        className="w-[12rem]"
      />
      <Image
        src="/assets/client-logo/butterfly-foundation.svg"
        alt="aireserv"
        width={400}
        height={400}
        className="w-[12rem]"
      />
      <Image
        src="/assets/client-logo/aci-logo.png"
        alt="aireserv"
        width={400}
        height={400}
        className="w-[7rem]"
      />
      <Image
        src="/assets/client-logo/huraia.svg"
        alt="huraia"
        width={400}
        height={400}
        className="w-[12rem]"
      />{" "}
      <Image
        src="/assets/client-logo/nazara.svg"
        alt="nazara"
        width={400}
        height={400}
        className="w-[12rem]"
      />{" "}
      <Image
        src="/assets/client-logo/robert-johnson.svg"
        alt="robert-johnson"
        width={400}
        height={400}
        className="w-[12rem]"
      />
      <Image
        src="/assets/client-logo/butterfly.svg"
        alt="butterfly"
        width={400}
        height={400}
        className="w-[12rem]"
      />
      <Image
        src="/assets/client-logo/embark-logo.png"
        alt="butterfly"
        width={400}
        height={400}
        className="w-[12rem]"
      />
      {/* <Image
        src="/assets/client-logo/fitly-logo.png"
        alt="butterfly"
        width={400}
        height={400}
        className="w-[8rem] h-[5.5rem]"
      /> */}
      <Image
        src="/assets/client-logo/letmates-logo.png"
        alt="butterfly"
        width={400}
        height={400}
        className="w-[12rem]"
      />
       {/* <Image
        src="/assets/client-logo/sheba-logo.png"
        alt="butterfly"
        width={400}
        height={400}
        className="w-[12rem]"
      />  */}
      <Image
        src="/assets/client-logo/carter-injury-law.png"
        alt=""
        width={400}
        height={400}
        className="w-[12rem]"
      />
      <Image
        src="/assets/client-logo/melamed-law.png"
        alt=""
        width={400}
        height={400}
        className="w-[12rem]"
      />
      <Image
        src="/assets/client-logo/essence-VFX.png"
        alt=""
        width={400}
        height={400}
        className="w-[12rem]"
      />
      <Image
        src="/assets/client-logo/zarin-associates.png"
        alt=""
        width={400}
        height={400}
        className="w-[12rem]"
      />
      <Image
        src="/assets/client-logo/tiki-travel.png"
        alt=""
        width={400}
        height={400}
        className="w-[12rem]"
      />
      <Image
        src="/assets/client-logo/Tampa-Motion1.png"
        alt=""
        width={400}
        height={400}
        className="w-[12rem]"
      />
      {/* <Image
        src="/assets/client-logo/uncle.jpg"
        alt=""
        width={400}
        height={400}
        className="w-[12rem]"
      /> */}
      <Image
        src="/assets/client-logo/bully-projects.png"
        alt=""
        width={400}
        height={400}
        className="w-[12rem]"
      />


      <Image
        src="/assets/client-logo/Golden-Wealth.png"
        alt=""
        width={400}
        height={400}
        className="w-[12rem]"
      />
      <Image
        src="/assets/client-logo/Hess@2x.png"
        alt=""
        width={400}
        height={400}
        className="w-[12rem]"
      />
      <Image
        src="/assets/client-logo/MC-Culloch-Law.png"
        alt=""
        width={400}
        height={400}
        className="w-[12rem]"
      />
      <Image
        src="/assets/client-logo/NOVASTRA-OFFICIAL.png"
        alt=""
        width={400}
        height={400}
        className="w-[12rem]"
      />
      <Image
        src="/assets/client-logo/Prestige.png"
        alt="Prestige Logo"
        width={400}
        height={400}
        className="w-[12rem]"
      />
      
      <Image
        src="/assets/client-logo/Tripathi-Vongsyprasom.png"
        alt=""
        width={400}
        height={400}
        className="w-[12rem]"
      />
      
    </div>
  );
};
