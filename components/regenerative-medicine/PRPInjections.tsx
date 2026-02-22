import React from "react";
import Reveal from "../motion/Reveal";
import Image from "next/image";
import Link from "next/link";

const PRPInjections = () => {
  return (
    <>
      <section className=" bg-[#F9F9F9]">
        <div className="max-w-[1640px] mx-auto md:py-16 py-8 px-8  gap-12 ">
          <div>
            <Reveal tag="div" y={16} opacityFrom={0}>
              <div className="text-center max-w-5xl mx-auto w-full ">
                <h2 className="text-3xl lg:text-4xl max-w-4xl mx-auto font-bold text-gray-900 mb-4 lg:mb-8">
                  PRP Injections at Medical Weight Loss Tampa, FL
                </h2>
                <Image
                  src={"/images/HUCT/PRP.png"}
                  alt="Regenerative Therapy"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover rounded-xl mb-8"
                />
                <div className="max-w-4xl mx-auto text-start">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Welcome to Medical Weight Loss Tampa – Your Trusted Weight Loss Center
                  </h3>
                  <p className="text-gray-600 text-base mb-6">
                    PRP Injections for Natural Healing and Pain Relief
                  </p>

                  <div className="p-6 shadow-medium rounded-2xl bg-gray-50 mb-6 border-none">
                    <p>
                      Medical Weight Loss Tampa is now offering Platelet-Rich
                      Plasma (PRP) injections to promote healing and reduce pain
                      naturally. PRP therapy harnesses the power of the
                      body&#39;s platelets, which are rich in growth factors
                      that stimulate tissue repair and regeneration. This
                      treatment is especially effective for joint pain, tendon
                      injuries, arthritis, and chronic musculoskeletal
                      conditions.
                    </p>
                  </div>
                  <div className="mb-6 lg:mb-8">
                    <p className="text-2xl font-semibold mb-2">
                      By enhancing the body&#39;s natural healing process, PRP
                      injections can help reduce inflammation, improve mobility,
                      and support long-term recovery.
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Osteoarthritis</li>
                      <li>Muscle Tears</li>
                      <li>Plantar Fasciitis</li>
                      <li>Degenerative Disc Disease  </li>
                      <li>
                        Androgenic Alopecia (male and female pattern baldness) 
                      </li>
                      <li>Skin Rejuvenation </li>
                      <li>Post Surgical and Wound Healing </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default PRPInjections;
