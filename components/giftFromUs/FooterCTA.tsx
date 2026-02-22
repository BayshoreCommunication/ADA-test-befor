import Image from "next/image";

export default function FooterCTA() {
  return (
    <footer className="w-full bg-white">
      {/* Top line */}
      <div className="h-px w-full bg-gray-200" />

      <div className="container mx-auto px-4 py-16 text-center">
        {/* Heading */}
        <h2 className="text-[#f97316] text-2xl md:text-[24px] font-semibold">
          No strings attached. No hidden fees. Just real growth — delivered at your office.
        </h2>

        {/* Sub text */}
        <p className="mt-4 text-base md:text-[14px] text-gray-600 max-w-6xl mx-auto">
          Do you have questions? Are you wondering if this will work for you? Email us at{" "}
          <a
            href="mailto:info@bayshorecommunication.org"
            className=""
          >
            info@bayshorecommunication.org
          </a>{" "}
          <br className="hidden md:block" />
          We will be happy to discuss your goals and how our program may help you. Thank you.
        </p>

        {/* Logo */}
        <div className="mt-10 flex justify-center">
          <Image
            src="image/hero/logo.png" // replace with your actual logo path
            alt="BayShore Communication"
            width={180}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Footer bottom */}
        <div className="mt-8 text-base text-gray-500 space-y-2">
          <p className="flex justify-center gap-2">Bayshore Communication All Rights Reserved</p>
          <p className="flex justify-center gap-2">
            <a href="#" className="hover:text-orange-500">
              Terms
            </a>
            <span>|</span>
            <a href="#" className="hover:text-orange-500">
              Disclaimer
            </a>
            <span>|</span>
            <a href="#" className="hover:text-orange-500">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
