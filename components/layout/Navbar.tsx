"use client";

import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  // Sticky navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/team", label: "Meet the Team" },
    { href: "/medical-weight-loss", label: "Medical Weight Loss" },
    { href: "/vitamins-peptides", label: "Vitamins & Peptides" },
    { href: "/regenerative-medicine", label: "Regenerative Medicine" },
    { href: "/the-wellness-journal", label: "The Wellness Journal" },
  ];

  return (
    <div>
      {/* Top Banner */}
      <div className="bg-black text-white text-center text-sm py-3">
        <span className="font-medium">$47 New Patient Special</span>
      </div>

      {/* Header */}
      <header
        className={`transition-all duration-700 ${
          isSticky
            ? "fixed top-0 left-0 right-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 animate-slideDown"
            : "relative bg-transparent"
        }`}
      >
        <div
          className={`max-w-[1640px] mx-auto px-8 py-4 flex  justify-between relative z-50 transition-all duration-700 ${
            isSticky ? "items-center" : "items-start"
          }  ${mobileOpen ? "items-start" : "items-start"}`}
        >
          {/* Logo - Desktop */}
          <div className="hidden md:flex items-center justify-center transition-all duration-500 w-[200px]">
            <Image
              src="/images/hero/logo.png"
              alt="Logo"
              width={isSticky ? 100 : 200}
              height={isSticky ? 100 : 200}
              className={`transition-all duration-500 ${
                isSticky ? "w-[150px]" : "w-[200px]"
              }`}
            />
          </div>

          {/* Logo - Mobile (Centered) */}
          <div
            className={`md:hidden flex items-center justify-center  left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
              mobileOpen ? "opacity-0 absolute " : "relative opacity-100 top-0"
            }`}
          >
            <Image
              src="/images/hero/logo.png"
              alt="Logo"
              width={isSticky ? 80 : 140}
              height={isSticky ? 80 : 140}
              className={`transition-all duration-500 ${
                isSticky ? "w-[80px]" : "w-[160px]"
              }`}
            />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-6 items-center text-sm text-gray-800 font-medium bg-gray-200 px-8 py-2 rounded-full">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? "text-primary font-medium underline"
                    : "hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Phone button (desktop) */}
          <div className="hidden md:flex">
            <Link
              href="tel:8139602225"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white font-medium hover:bg-primary transition-colors"
            >
              <Phone size={18} />
              813.269.7546
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden bg-white px-8 py-4 flex flex-col space-y-4 text-gray-800 font-medium border-t shadow-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`transition-colors ${
                  pathname === item.href
                    ? "text-primary font-semibold"
                    : "hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="tel:813.269.7546"
              className="bg-black text-white px-5 py-2 rounded-full text-center hover:bg-primary transition-colors"
            >
              Call: 813.269.7546
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}
