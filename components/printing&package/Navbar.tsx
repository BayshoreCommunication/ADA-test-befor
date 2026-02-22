"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Contact", href: "/contact" },
// ];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-lg"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-200/30"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 my-10">
        <div className="flex items-center justify-between">
          {/* Logo + Nav */}
          <div className="flex items-center justify-center gap-10  my-18  h-8">
            <Link
              href="/"
              className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent"
            >
              BayPrint
            </Link>
            {/* <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-teal-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav> */}
          </div>

          {/* Search + Actions */}
          <div className="flex items-center gap-4">
            {/* Search Bar (desktop) */}
            <div className="hidden md:flex relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-8 h-8" />
              <Input
                placeholder="Search products..."
                className="pl-10 pr-4  w-[250px] py-2 h-[38px] placeholder:text-2xl bg-white/80 backdrop-blur-sm border-gray-200/50"
              />
            </div>

            {/* CTA Button */}
            <Button
              variant="default"
              size="sm"
              className="hidden md:flex w-44 h-14 bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white text-[14px]"
            >
              Get Quote
              <ArrowRight className="w-7 h-7 ml-2" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? (
                <X className="w-10 h-10" />
              ) : (
                <Menu className="w-10 h-10" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200/50 shadow-xl"
          >
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-10 h-10" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 w-full h-auto"
                />
              </div>

              {/* Mobile Links */}
              {/* <div className="space-y-2">
                {mobileLinks.map((item) => (
                  <button
                    key={item}
                    onClick={closeMenu}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div> */}

              {/* CTA */}
              <div className="border-t pt-4">
                <Button
                  onClick={closeMenu}
                  className="w-full h-[30px] bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white text-[14px]"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
