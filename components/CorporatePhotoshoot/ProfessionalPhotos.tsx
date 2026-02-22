import React from "react";
import SectionLayout from "../universal/SectionLayout";
import Reveal from "../motion/Reveal";
import Image from "next/image";

const ProfessionalPhotos = () => {
  return (
    <>
      <SectionLayout bg="bg-white lg:pb-14">
        <div>
          <Reveal>
            <h2 className="text-[30px] md:text-[36px] lg:text-[40px] font-semibold uppercase text-center mb-8">
              Professional Photos
            </h2>
          </Reveal>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-start  lg:items-center">
          <div>
            <Reveal>
              <div>
                {" "}
                <div className="items-center gap- justify-center w-full gap-5 hidden 2xl:flex">
                  <Image
                    src="/assets/corporate-photoshoot/professional-photo-1.jpg"
                    alt="corporate photoshoot image"
                    width={332}
                    height={498}
                    className="w-[56%] drop-shadow-[0px_19px_30px_rgba(0,0,0,0.15)]"
                  ></Image>
                  <div className="flex flex-col  gap-[18px] justify-between  ">
                    <Image
                      src="/assets/corporate-photoshoot/professional-photo-2.jpg"
                      alt="corporate photoshoot image"
                      width={196}
                      height={244}
                      className="w-full drop-shadow-[0px_19px_30px_rgba(0,0,0,0.15)]"
                    ></Image>

                    <Image
                      src="/assets/corporate-photoshoot/professional-photo-3.jpg"
                      alt="corporate photoshoot image"
                      width={196}
                      height={244}
                      className="w-full drop-shadow-[0px_19px_30px_rgba(0,0,0,0.15)]"
                    ></Image>
                  </div>
                </div>
                <div className="2xl:hidden">
                  <Image
                    src="/assets/corporate-photoshoot/professional-photos.png"
                    alt="corporate photoshoot image"
                    width={540}
                    height={498}
                    className="w-full drop-shadow-[0px_19px_30px_rgba(0,0,0,0.15)]"
                  ></Image>
                </div>
              </div>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <div>
                {" "}
                <h3 className="text-[18px] lg:text-[30px] font-semibold mb-4 lg:mb-8 ">
                  Why Professional Photos Matter
                </h3>
                <p className="text-[16px] lg:text-[18px] mb-4 lg:mb-8 ">
                  {`Professional photos play a crucial role in shaping your brand's
              identity. Whether on your website or social media, high-quality
              images create a lasting impression, reflect your professionalism,
              and build trust. Invest in exceptional visuals to highlight your
              team, attract clients, and communicate the expertise your business
              offers.`}
                </p>
                <ul className="list-disc list-outside ms-6 text-[16px] lg:text-[18px] space-y-4  lg:space-y-8">
                  <li>
                    Stand Out in Your Industry: A polished, professional image
                    is crucial in today’s competitive business environment.
                  </li>
                  <li>
                    On-Location Photography: We bring the studio to your office
                    or location in Tampa, Florida.
                  </li>
                  <li>
                    High-Quality, Affordable: Starting at $99, our packages
                    offer amazing value for the quality and service.
                  </li>
                  <li>
                    Indoor and Outdoor Options: Flexible options to suit your
                    company’s brand and needs, including team photos and
                    individual headshots.
                  </li>
                  <li>
                    Fast Turnaround: Receive your final images quickly, with
                    retouching included.
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default ProfessionalPhotos;
