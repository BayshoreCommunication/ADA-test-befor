import React from "react";
import Reveal from "../motion/Reveal";
import Image from "next/image";
import Link from "next/link";

const HUCT = () => {
  return (
    <>
      <section className="max-w-[1640px] mx-auto md:py-16 py-8 px-8  gap-12 ">
        <div>
          <Reveal tag="div" y={16} opacityFrom={0}>
            <div className="text-center max-w-5xl mx-auto w-full ">
              <h2 className="text-3xl lg:text-4xl max-w-4xl mx-auto font-bold text-gray-900 mb-4 lg:mb-8">
                Regenerative Therapy Tampa, FL
              </h2>
              <Image
                src={"/images/HUCT/dna.png"}
                alt="Regenerative Therapy"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover rounded-xl mb-8"
              />
              <div className="max-w-4xl mx-auto text-start">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  What Is HUCT? (Human Umbilical Cord Tissue)
                </h3>
                <p className="text-gray-600 text-base mb-6">
                  HUCT are special cells in the body that can develop into many
                  different types of cells, such as muscle, nerve, or blood
                  cells. They play a key role in repairing and regenerating
                  damaged tissues. 
                </p>

                <div className="p-6 shadow-medium rounded-2xl bg-gray-50 mb-6 border-none">
                  <p>
                    At Medical Weight Loss Tampa, we specialize in cutting-edge
                    regenerative therapy designed to promote healing, reduce
                    pain, and improve your quality of life. Our expert team,
                    including Tampa&#39;s Top Doc in Cosmetic Surgery, utilizes
                    regenerative medicine to help patients recover from
                    injuries, chronic pain, and degenerative conditions- without
                    surgery or prolonged medication use. 
                  </p>
                </div>
                <div className="mb-6 lg:mb-8">
                  <p className="text-2xl font-semibold mb-2">
                    Our services include but are not limited to: 
                  </p>
                  <ul className="space-y-1">
                    <li>- Joint & Muscle Regeneration</li>
                    <li>
                      - Natural healing for arthritis, tendonitis, sports
                      injuries 
                    </li>
                    <li>- Chronic Pain Management </li>
                    <li> - A non-surgical alternative to pain relief </li>
                    <li>- Anti-Aging & Wellness </li>
                    <li>
                      - Stem cell therapies to rejuvenate and restore health
                    </li>
                    <li>
                      - Neurological & Autoimmune Support -  Innovative
                      treatments for nerve-related conditions 
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-2xl font-semibold mb-2">Why Choose Us? </p>
                  <p>
                    State-of-the-art regenerative medicine techniques,
                    Personalized treatment plans tailored to your needs,
                    Experienced professionals dedicated to your care, Safe,
                    non-invasive, and effective therapies Discover how stem cell
                    therapy can help you regain mobility, reduce pain, and
                    restore vitality.  Contact us today to schedule a
                    consultation! 
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default HUCT;
