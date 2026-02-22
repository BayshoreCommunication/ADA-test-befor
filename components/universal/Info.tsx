import Count from "../Count";
import Reveal from "../motion/Reveal";
import SectionLayout from "./SectionLayout";
import Image from "next/image";
import Link from "next/link";

const Info = () => {
  return (
    <Reveal>
      <div className="bg-img rounded-r-[75px] rounded-l-[75px] container">
        <SectionLayout bg="">
          <div className="custom-info grid  grid-cols-2 justify-between items-center">
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-8 ">
              <Image
                src="/assets/ArjoNeel.png"
                alt="salman"
                width={150}
                height={150}
                className="w-[11rem]  h-[11rem] rounded-full border-[5px] border-[#fff]"
              />
              <div>
                <p className="text-base mb-2 opacity-80 !text-[#fff]">
                  Ready to Speak with Us? Give Us a Ring
                </p>
                {/* <Link href="tel:+13217659177"> */}
                <p className="info-text text-center sm:text-start">
                  +1 (509) 592-1745
                </p>
                {/* </Link> */}
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap justify-center  items-center gap-8">
              <div className="flex flex-col">
                <p className="info-text text-center">1.5 million</p>
                <p className="text-center mb-2 opacity-80 !text-[#fff] ">
                  Hours of Expertise
                </p>
              </div>

              <div className="flex flex-col">
                <p className="info-text text-center">
                  <Count num={600} duration={3} />+
                </p>
                <p className="text-center mb-2 opacity-80 !text-[#fff]">
                  Digital Marketing Masters On Staff
                </p>
              </div>

              <div className="flex flex-col">
                <p className="info-text text-center">
                  <Count num={1228} duration={3} />
                </p>
                <p className="text-center mb-2 opacity-80 !text-[#fff]">
                  Websites Launched
                </p>
              </div>
            </div>
          </div>
        </SectionLayout>
      </div>
    </Reveal>
  );
};

export default Info;
