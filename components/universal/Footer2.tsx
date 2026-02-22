import React from "react";
import SectionLayout from "./SectionLayout";
import Image from "next/image";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

import { TfiLinkedin } from "react-icons/tfi";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";

const Footer2 = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container flex justify-center">
          <div className="">
            <div className="col-12 col-mid-6 col-md-4">
              <Image src="" alt="bayshorelogo" id="bayfooterlogo" />
              <p className="text-justify">
                Our performance, client satisfaction. Our main objective is
                client&apos;s pleasure. Our company stands by every
                personnel&apos;s dedication. Our working policy is transparent.
                We try to maintain customer relationships.test
              </p>
            </div>
            <div className="col-12 col-mid-6 col-md-3">
              <h6>Contact Info</h6>
              <ul className="footer-links">
                <li>1301 34th ST South,</li>
                <li>St.Petersburg FL 33711</li>
                <li>
                  <a href="tel:+1 (509) 592-1745">+1 (509) 592-1745</a>
                </li>
                <li>
                  <a href="mailto:info@bayshorecommunication.com">
                    info@bayshorecommunication.com
                  </a>
                </li>
                <li>Mon-Fri: 7:00 am – 7:00pm</li>
              </ul>
            </div>
            <div className="col-12 col-mid-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li>
                  <Link href="/our-services/web-design">Website Design</Link>
                </li>
                <li>
                  <Link href="/our-services/mobile-app">Mobile App</Link>
                </li>
                <li>
                  <Link href="/our-services/digital-marketing">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/our-services/graphic-design">
                    Graphic Design
                  </Link>
                </li>
                <li>
                  <Link href="/our-services/digital-production">
                    Digital Production
                  </Link>
                </li>
                <li>
                  <Link href="/our-services/printing-packaging">
                    Printing & Packaging
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-mid-6 col-md-2">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about-us">About</Link>
                </li>
                <li>
                  <Link href="/our-services">Service</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <a href="/https://calendly.com/info-bayshorecommunication/30min?back=1&month=2023-08">
                    Appoinment
                  </a>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/career">Career</Link>
                </li>
                <li>
                  <Link href="https://billing.stripe.com/p/login/6oE8xFda4ac42Ws4gg">
                    Client Portal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row reverse-component">
            <div className="">
              <p className="copyright-text">
                Copyright &copy; {new Date().getFullYear()} All Rights Reserved
                by{" "}
                <a href="https://bayshorecommunication.com/">
                  Bayshore Communication
                </a>
                .
              </p>
            </div>
            <div className="">
              <ul className="social-icons">
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/bayshorecommunication"
                    target="blank"
                  >
                    <FaFacebookF size={20} />
                  </a>
                </li>

                <li>
                  <a
                    className="instagram"
                    href="https://www.instagram.com/bayshorecommunication"
                    target="blank"
                  >
                    <BsInstagram size={20} />
                  </a>
                </li>
                <li>
                  <a
                    className="linkedin"
                    href="https://www.linkedin.com/company/bayshore-communication"
                    target="blank"
                  >
                    <TfiLinkedin size={20} />
                  </a>
                </li>
                <li>
                  <a
                    className="twitter"
                    href="https://twitter.com/BayshoreCom"
                    target="blank"
                  >
                    <FaTwitter size={20} />
                  </a>
                </li>
                <li>
                  <a
                    className="youtube"
                    href="https://www.youtube.com/channel/UCAaI96cOP7GGpYhEOPFhu8w"
                    target="blank"
                  >
                    <SiYoutube size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
