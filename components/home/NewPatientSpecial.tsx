"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function NewPatientSpecial() {
  return (
    <section className="bg-primary/10 py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          $47 New Patient Special Offer
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
          Experience a comprehensive weight loss consultation, health
          assessment, and personalized treatment plan for just <span className="font bold text-primary">$47</span> . Discover how
          our medically guided programs can help you lose weight safely, boost
          your energy, and feel your best again.
        </p>

        <Link
          href="https://portal.sked.life/new-patient/time?key=1b956e69d5481378e8b8687477eab43daee76cd6dfbd65f6b9f53c4f13a25331&from="
          target="_blank"
          className="inline-flex items-center gap-2 bg-primary text-white font-medium text-base md:text-lg px-6 py-3 rounded-full shadow-md hover:bg-primary/90 transition-all duration-300"
        >
          Claim Your Offer <FaArrowRight className="text-white" />
        </Link>

        <p className="text-gray-500 text-sm mt-4">
          *Offer valid for new patients only. Restrictions may apply.
        </p>
      </div>
    </section>
  );
}
