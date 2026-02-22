"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrFormClose } from "react-icons/gr";
import { useEffect, useState } from "react";

let linksO: {
  title: string;
  link: string;
}[];

linksO = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about-us" },
  { title: "Service", link: "/our-services" },
  { title: "Growth Plan", link: "/growth-plan" },
  { title: "Case Studies", link: "/case-studies" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const splitPath = `/${pathname.split("/")[1]}`;

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
    if (!isOpen) document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "auto";
  };

  const [hasAnimated, setHasAnimated] = useState(false);

  // This useEffect hook will run once when the component mounts
  useEffect(() => {
    // Apply AOS animations here
    setHasAnimated(true);
    return () => {
      setHasAnimated(false); // This worked for me
    };
  }, []); // The empty dependency array ensures that this effect runs only once

  return (
    <>
      <header className=" w-full  z-50 top-0 left-0 hidden md:block">
        {/* Mobile */}

        {/* Desktop */}

        <nav className=" justify-center items-center py-[1.8rem] flex">
          <div>
            <Link href="#">
              <Image
                src="/assets/bayshore-logo.svg"
                alt="bayshore-logo"
                width={366}
                height={106}
                className="lg:w-[20rem] w-[20rem] h-auto"
                priority
              />
            </Link>
          </div>
        </nav>
      </header>
      <header className="absolute w-full bg-transparent z-50 top-0 left-0 md:hidden">
        {/* Mobile */}

        <nav className=" justify-center items-center  flex md:hidden">
          <Image
            src="/bayshore-logo-white.png"
            alt="bayshore-logo"
            width={400}
            height={200}
            quality={100}
            className="w-[150px] h-[140px] -translate-y-8"
            priority
          />
        </nav>

        {/* Desktop */}

        <nav className=" justify-center items-center py-[1.8rem] hidden md:flex">
          <div>
            <Link href="#">
              <Image
                src="/assets/bayshore-logo.svg"
                alt="bayshore-logo"
                width={366}
                height={106}
                className="lg:w-[20rem] w-[20rem] h-auto"
                priority
              />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
