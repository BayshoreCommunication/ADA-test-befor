"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Faq() {
  return (
    <section className="max-w-[1640px] mx-auto px-8 py-8 md:py-16 text-center font-[Albert_Sans]">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>

      {/* FAQ Content */}
      <div className="space-y-8 text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
        <div>
          <p className="font-semibold text-gray-900 mb-2 ">
            Do you accept insurance?
          </p>
          <p>
            Yes! We work with most insurance companies and accept many payment
            options, such as CareCredit and HSA/FSA.
          </p>
        </div>

        <div>
          <p className="font-semibold text-gray-900 mb-2 ">
            Are you accepting new patients?
          </p>
          <p>
            Yes! Click the{" "}
            <Link href="https://portal.sked.life/new-patient/time?key=489579519b65115ba47eec5ca31a717befcba2464a5491dc864e7173c4e6cfe6&from="><span className="text-primary font-medium pointer">Book Now</span></Link> button 
            and take advantage of our new patient special! We also treat Auto
            Accidents, Workman&apos;s Comp, and Slip &amp; Fall cases.
          </p>
          <div className="mt-4 text-primary">
            <a
              href="https://www.carecredit.com/go/682RKH/?dtc=DS9X&sitecode=CCLBADS9X"
              target="_blank"
              className="flex justify-center items-center"
              rel="noopener noreferrer"
            >
              <Image
                width={275}
                height={98}
                src="https://www.carecredit.com/sites/pc/image/flexible-financing-prequal-apply-pay-420x150.png"
                alt="Care Credit"
                style={{ maxWidth: "100%", height: "auto" }}
                priority
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}