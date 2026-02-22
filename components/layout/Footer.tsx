"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1640px] mx-auto md:pt-16 py-6 px-8">
        {/* ⭐ Grid 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 justify-center">
          {/* Column 1 */}
          <div className="col-span-2 lg:max-w-[70%]">
            <div className="flex items-center gap-3">
              <Image
                src="/images/footer/logo.png"
                alt="Logo"
                width={1000}
                height={700}
                className="max-w-[150px] w-full h-auto"
              />
            </div>
            <p className="text-gray-600 mt-4 text-base leading-relaxed">
              Helping you achieve lasting health and wellness with personalized,
              medically guided weight loss solutions.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-4 text-primary text-lg">
              <Link
                href="https://www.facebook.com/MedicalWeightLossTampa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </Link>
              {/* <Link
                href="https://twitter.com/jachimekchiro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </Link> */}
              <Link
                href="https://www.instagram.com/medicalweightlosstampa?igsh=M2dmeGVicW9zbGFo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </Link>
              {/* <Link
                href="https://www.linkedin.com/company/jachimekchiropractic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </Link> */}
              {/* <Link
                href="https://www.youtube.com/@jachimekchiropractic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </Link> */}
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-base text-gray-600 list-none">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/our-purpose" className="hover:text-primary">
                  Our Purpose
                </Link>
              </li>
              <li>
                <Link href="/meet-the-team" className="hover:text-primary">
                  Meet The Team
                </Link>
              </li>

              <li>
                <Link href="/our-services" className="hover:text-primary">
                  Our Services
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/medical-weight-loss"
                  className="hover:text-primary"
                >
                  Medical Weight Loss
                </Link>
              </li> */}
              <li>
                <Link
                  href="/vitamins-and-peptides"
                  className="hover:text-primary"
                >
                  Vitamins & Peptides
                </Link>
              </li>
              <li>
                <Link
                  href="/regenerative-medicine"
                  className="hover:text-primary"
                >
                  Regenerative Medicine
                </Link>
              </li>
              <li>
                <Link
                  href="/the-wellness-journal"
                  className="hover:text-primary"
                >
                  The Wellness Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2 text-base text-gray-600 list-none">
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link href="/disclaimers" className="hover:text-primary">
                  Disclaimers
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3 text-base text-gray-600">
              <li className="flex items-center gap-2">
                <HiOutlineMail className="text-primary" />
                <a
                  href="mailto:support@jachimekchiro.com"
                  className="hover:text-primary"
                >
                  support@jachimekchiro.com
                </a>
              </li>

              <li className="flex items-center gap-2">
                <HiOutlinePhone className="text-primary" />
                <a href="tel:8132697546" className="hover:text-primary">
                  813.269.7546
                </a>
              </li>

              <li className="flex items-start gap-2">
                <HiOutlineLocationMarker className="text-primary mt-1" />
                <a
                  href="https://www.google.com/maps/dir//5111+Ehrlich+Rd+Ste+128,+Tampa,+FL+33624,+United+States/@28.0857723,-82.5372913,17.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88c2c1ddd73750a1:0xdb88558beba9d695!2m2!1d-82.5346904!2d28.0856448?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  5111 Ehrlich Rd. Ste 128 Tampa, FL 33624
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-center text-base text-gray-600">
          <p>Copyright © 2025 Jachimek Chiropractic & Wellness Center</p>
        </div>
      </div>
    </footer>
  );
}
