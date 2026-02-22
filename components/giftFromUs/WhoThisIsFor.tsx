"use client"
import { Scale, Briefcase, Stethoscope, Building2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ================= ORANGE DOT ================= */
type DotProps = {
  className?: string;
};

const Dot = ({ className = "" }: DotProps) => (
  <span
    className={`absolute h-6 w-6 rounded-full bg-[#f97316] ${className}`}
  />
);

/* ================= CARD ================= */
type CardProps = {
  icon: LucideIcon;
  title: string;
  text: string;
  dotPosition?: string;
  className?: string;
};

const Card = ({ icon: Icon, title, text, dotPosition, className = "" }: CardProps) => (
  <div  className={`relative md:max-w-[420px]  rounded-2xl bg-gradient-to-br from-white to-[#fff5ef] p-8 shadow-xl mx-auto flex flex-col items-center ${className}`}>
    {dotPosition && <Dot className={dotPosition} />}

    <div className="mb-4 text-[#f97316] flex justify-center items-center">
      <Icon size={48} />
    </div>

    <h3 className="mb-2 text-[18px] md:text-[22px] font-semibold tracking-wide text-gray-900 text-center">
      {title}
    </h3>

    <p className="text-[16px] text-gray-600 text-center">
      {text}
    </p>
  </div>
);


const handleScrollToCalendly = () => {
    const section = document.getElementById("calendly");
    section?.scrollIntoView({ behavior: "smooth" });
  };

/* ================= MAIN SECTION ================= */
export default function WhoThisIsFor() {
  return (
    <section className="relative w-full px-6 py-10 md:py-16">
      {/* ================= DESKTOP ================= */}
      <div className="relative max-w-[1640px] mx-auto hidden lg:grid grid-cols-[1fr_420px_1fr] items-center gap-x-24">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-80">
          <Card
            icon={Scale}
            title="LAW FIRMS"
            text="Build client trust with professional presence and strategic positioning."
            dotPosition="right-[-10px] top-1/2 -translate-y-1/2"
          />

          <Card
            icon={Stethoscope}
            title="MEDICAL PRACTICES & MED SPAS"
            text="Establish expertise and attract quality patients seeking trusted care."
            dotPosition="right-[-10px] top-1/2 -translate-y-1/2"
          />
        </div>

        {/* CENTER */}
        <div className="relative text-center">
          <h2 className="text-[38px] font-semibold text-gray-900">
            <span className="text-[#f97316]">Who</span> This Is For
          </h2>

          <p className="mt-3 text-gray-500">
            This package is tailored for established businesses ready to level up.
          </p>

          <button onClick={handleScrollToCalendly} className="mt-6 rounded-md bg-[#f97316] px-6 py-3 text-white font-medium shadow hover:bg-orange-600 transition">
            Schedule Call
          </button>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-80">
          <Card
            icon={Briefcase}
            title="LOCAL SERVICE BUSINESSES"
            text="Stand out from competitors with professional branding and local visibility."
            dotPosition="left-[-10px] top-1/2 -translate-y-1/2"
          />

          <Card
            icon={Building2}
            title="ESTABLISHED SMBS (NOT STARTUPS)"
            text="Optimize growth channels and capture untapped market opportunities."
            dotPosition="left-[-10px] top-1/2 -translate-y-1/2"
          />
        </div>

        {/* CONNECTING LINES */}
        <div className="pointer-events-none absolute inset-0 -z-50">
          <div className="absolute left-[20%] md:top-[90px] top-[90px] h-[2px] md:w-[860px] w-[200px] bg-[#EAEAEA]" />
          {/* <div className="absolute right-[33%] top-[130px] h-[2px] w-80 bg-[#f97316]" /> */}
          <div className="absolute left-[20%] md:top-[490px] h-[2px] md:w-[860px] w-[350px] bg-[#EAEAEA]" />
          {/* <div className="absolute right-[33%] bottom-[130px] h-[2px] w-80 bg-[#f97316]" /> */}
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden  mx-auto text-center space-y-8">
        <h2 className="text-[24px] font-semibold">
          <span className="text-[#f97316]">Who</span> This Is For
        </h2>

        <p className="text-gray-500">
          This package is tailored for established businesses ready to level up.
        </p>

        <Card
          icon={Scale}
          title="LAW FIRMS"
          text="Build client trust with professional presence and strategic positioning."
          className="w-full "
        />

        <Card
          icon={Stethoscope}
          title="MEDICAL PRACTICES & MED SPAS"
          text="Establish expertise and attract quality patients seeking trusted care."
          className="w-full"
        />

        <Card
          icon={Briefcase}
          title="LOCAL SERVICE BUSINESSES"
          text="Stand out from competitors with professional branding and local visibility."
          className="w-full"
        />

        <Card
          icon={Building2}
          title="ESTABLISHED SMBS (NOT STARTUPS)"
          text="Optimize growth channels and capture untapped market opportunities."
          className="w-full"
        />

        <button onClick={handleScrollToCalendly}  className="w-full rounded-md bg-[#f97316] px-6 py-3 text-white font-medium">
          Schedule Call
        </button>
      </div>
    </section>
  );
}
