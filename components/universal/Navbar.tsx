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
    <header className="fixed w-full bg-[#fff] z-50 top-0 left-0">
      {/* Mobile */}

      <nav className="container justify-between gap-12 py-[1.8rem] flex md:hidden">
        <Link href="/">
          <Image
            src="/assets/bayshore-logo.svg"
            alt="bayshore-logo"
            width={400}
            height={150}
            className="w-[16rem] h-[36px]"
            priority
          />
        </Link>
        <button onClick={toggleDrawer}>
          <RxHamburgerMenu />
        </button>
      </nav>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        size={`75vw`}
      >
        <nav className=" px-[2rem] flex flex-col gap-12 py-[1.8rem] relative">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src="/assets/bayshore-logo.svg"
                alt="bayshore-logo"
                width={400}
                height={150}
                className="w-[14rem] md:w-[16rem] h-auto "
                priority
              />
            </Link>
            <button onClick={toggleDrawer}>
              <GrFormClose size={30} className=" h-[20px]" />
            </button>
          </div>

          <div>
            <ul className="md:px-[2rem] flex flex-col md:gap-[2.6rem]">
              {linksO.map((el: { title: string; link: string }, i: number) => (

                <Link href={`${el.link}`} key={i}>
                  <li
                    className={`text-link border-t-[0.5px] border-[rgba(0,0,0,0.16)] py-4 text-center ${splitPath === el.link
                      ? "active !text-primary font-bold"
                      : ""
                      }`}
                    onClick={toggleDrawer}
                  >{el.title} </li>
                </Link>

              ))}
            </ul>
          </div>
          {/* <div className="center gap-[1.5rem]">
            <button className="btn text-link">Portfolio</button>
          </div> */}
        </nav>
      </Drawer>

      {/* Desktop */}

      <nav className="container justify-between items-center py-[1.8rem] hidden md:flex">
        <div>
          <Link href="/">
            <Image
              src="/assets/bayshore-logo.svg"
              alt="bayshore-logo"
              width={366}
              height={106}
              className="lg:w-[16.6rem] w-[14rem] h-auto"
              priority
            />
          </Link>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-[1.5rem] lg:gap-[2.6rem] w-full">
            {linksO.map((el: { title: string; link: string }, i: number) => (
              <li
                className={`text-link ${splitPath === el.link ? "active !text-primary" : ""
                  }`}
                key={i}
                data-aos={hasAnimated ? "" : "fade-down"} // Apply AOS animation only if it hasn't been applied yet
                data-aos-delay={hasAnimated ? 0 : i * 200}
              >
                {/* <div className="group relative cursor-pointer py-2 w-full">
                  <div className="flex items-center justify-between space-x-5 bg-white px-4">
                    <a className="menu-hover my-2 py-2 text-[14px] font-semibold lg:mx-4">
                      Service
                    </a>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="invisible absolute z-50 flex w-[1000px] flex-col bg-gray-100 py-1 px-4 text-gray-800 group-hover:visible">
                    <div
                      id="mega-menu-full-dropdown"
                      className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
                    >
                      <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <div className="font-semibold">Online Stores</div>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                Connect with third-party tools that you're
                                already using.
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <div className="font-semibold">Segmentation</div>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                Connect with third-party tools that you're
                                already using.
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <div className="font-semibold">Marketing CRM</div>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                Connect with third-party tools that you're
                                already using.
                              </span>
                            </a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <div className="font-semibold">Online Stores</div>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                Connect with third-party tools that you're
                                already using.
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <div className="font-semibold">Segmentation</div>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                Connect with third-party tools that you're
                                already using.
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <div className="font-semibold">Marketing CRM</div>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                Connect with third-party tools that you're
                                already using.
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}
                <Link
                  href={el.link}
                  className={`font-semibold hover:border-b-2  ${splitPath === el.link
                    ? "border-orange-700 border-b-2"
                    : "hover:border-blue-gray-500"
                    }`}
                >
                  {el.title}
                </Link>
              </li>
            ))}
            {/* <div className="mx-auto flex h-screen w-full items-center justify-center bg-gray-200 py-20"> */}

            {/* </div> */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
