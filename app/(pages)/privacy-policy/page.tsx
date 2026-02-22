import SectionLayout from "@/components/universal/SectionLayout";
import parser from "html-react-parser";
import { FaArrowRightLong } from "react-icons/fa6";
import Head from "next/head";
import { Metadata } from "next";

import React from "react";
export const metadata = {
  title: "Privacy Policy-Bayshore Communications",
  name: "description",
  description: `Bayshore Communications ("Bayshore", "we", "us") value your privacy and are dedicated to safeguarding your information. This Privacy Policy details what data we collect (from website visits, service engagements, or any interaction), how we use it to personalize your experience and improve our services, what choices you have over your data (including access, correction, and deletion), and how we employ robust security measures to keep your information protected`,
};
let privacyContent = [
  {
    desc: `
  <p className="text-base">Bayshore Communications ("Bayshore", "we", "us") value your privacy and are dedicated to safeguarding your information. This Privacy Policy details what data we collect (from website visits, service engagements, or any interaction), how we use it to personalize your experience and improve our services, what choices you have over your data (including access, correction, and deletion), and how we employ robust security measures to keep your information protected.</p>
  
  <br/>

  <h2 className="text-secondary sm:text-left text-center">1. Information We Collect
  </h2>

  <p className="text-base">We collect information from you in various ways, including:</p>
  
  <div className="flex items-start ml-2 mt-5">
  <div className="w-8 h-8">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
  </div>


  <h6 className="text-base ml-2"><strong>Information you provide directly: </strong>This includes information you provide through our website, email, phone, or other forms of communication, such as your name, email address, phone number, postal address, and company information.</h6>
  </div>


  <div className="flex items-start ml-2 mt-5">
  <div className="w-8 h-8">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
  </div>

  <h6 className="text-base ml-2"><strong>Information we collect automatically: </strong>When you visit our website, we may automatically collect certain information, such as your IP address, browser type, operating system, device information, referring website, pages visited, and time spent on our website.</h6>
  </div>


  <div className="flex items-start ml-2 mt-5">
  <div className="w-8 h-8">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
  </div>

  <h6 className="text-base ml-2"><strong>Information from third-party sources: </strong>We may also obtain information about you from third-party sources, such as social media platforms or public databases</h6>
  </div>

  <br/>
  <h2 className="text-secondary sm:text-left text-center">2. How We Use Your Information
  </h2>

  <p className="text-base">We use your information for various purposes, including:</p>

  <div className="flex items-center ml-2 mt-5">
  <div className="w-6 h-6">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
  </div>


  <h4 className="font-bold ml-2">Building a Better Bayshore:</h4>
  </div>
  <p className="text-base ml-12">Bayshore Communications ("Bayshore", "we", "us") value your privacy and are dedicated to safeguarding your information. This Privacy Policy details what data we collect (from website visits, service engagements, or any interaction), how we use it to personalize your experience and improve our services, what choices you have over your data (including access, correction, and deletion), and how we employ robust security measures to keep your information protected.</p>

  <div className="flex items-center ml-2 mt-5">
  <div className="w-6 h-6">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
  </div>

  <h4 className="font-bold ml-2">Communicating about our services:</h4>
  </div>
  <p className="text-base ml-12">We use your contact details to keep you informed about relevant updates, new offerings, and valuable insights tailored to your interests. Think of it as a way to ensure you're always up-to-date on the latest from Bayshore, without the information overload.</p>

  <div className="flex items-center ml-2 mt-5">
  <div className="w-6 h-6">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
  </div>

  <h4 className="font-bold ml-2">Marketing and advertising our services:</h4>
  </div>
  <p className="text-base ml-12">Based on your preferences and website interactions, we might show you targeted ads or promotional materials about our services that are likely to resonate with you. This helps us connect with potential clients who could benefit from what we offer, while ensuring relevant information reaches the right audience.</p>


  <div className="flex items-center ml-2 mt-5">
  <div className="w-6 h-6">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
  </div>

  <h4 className="font-bold ml-2">Understanding Our Audience:</h4>
  </div>
  <p className="text-base ml-12">Your browsing behavior tells us which pages are popular, how users navigate the website, and what areas receive more attention. This valuable data helps us optimize our website for better user experience, prioritize content development, and ensure Bayshore stays relevant and engaging for everyone</p>

  <div className="flex items-center ml-2 mt-5">
  <div className="w-6 h-6">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
  </div>

  <h4 className="font-bold ml-2">Playing by the Rules:</h4>
  </div>
  <p className="text-base ml-12">In some cases, we may need to share your information to comply with legal requirements, such as responding to court orders or assisting with fraud investigations. However, we only do so when absolutely necessary and ensure it’s done within the legal framework.</p>


  <br/>
  <h2 className="text-secondary sm:text-left text-center">3. Cookies and Tracking Technologies
  </h2>

  <p className="text-base"><strong>Tiny Helpers, Big Impact:</strong> Cookies are small bits of data that our website stores on your device (computer, phone, etc.) when you visit. They act like tiny helpers, remembering your preferences and past browsing behavior to personalize your experience in several ways:</p>

  <div className="flex items-start ml-2 mt-5">
  <div className="w-8 h-8">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
  </div>

  <h6 className="text-base ml-2"><strong>Remember Logins:</strong> No more typing your username and password every time you visit! Cookies help you stay logged in to your accounts for a smoother experience.</h6>
  </div>

  <div className="flex items-start ml-2 mt-5">
  <div className="w-8 h-8">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
  </div>

  <h6 className="text-base ml-2"><strong>Tailored Recommendations: </strong>Based on your past browsing, we can suggest content you might be interested in, like related blog posts or relevant services.</h6>
  </div>

  <div className="flex items-start ml-2 mt-5">
  <div className="w-8 h-8">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
  </div>

  <h6 className="text-base ml-2"><strong>Faster Loading Times: </strong>Cookies can store some website data locally, so pages load quicker on subsequent visits.</h6>
  </div>

  <p className="text-base mt-2"><strong>Improving the Journey: </strong> Beyond personalization, cookies help us understand how people interact with our website:</p>
  
  <div className="flex items-start ml-2 mt-5">
  <div className="w-8 h-8">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
  </div>

  <h6 className="text-base ml-2"><strong>Faster Loading Times: </strong>Cookies can store some website data locally, so pages load quicker on subsequent visits.</h6>
  </div>

  <div className="flex items-start ml-2 mt-5">
  <div className="w-8 h-8">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
  </div>

  <h6 className="text-base ml-2"><strong>Targeted Advertising: </strong> We may use cookies to show you relevant ads from us or other companies based on your interests and browsing habits. This can be helpful for discovering products or services you might actually be interested in.</h6>
  </div>

  <br/>
  <h2 className="text-secondary sm:text-left text-center">4. Sharing Your Information
  </h2>

  <p className="text-base"><strong>Why we share: </strong> While we handle much of your data ourselves, some tasks are best performed by specialized experts. We partner with trusted third-party service providers who fulfill critical functions to deliver our services seamlessly. These partners fall into various categories:</p>

  <div className="flex items-start ml-2 mt-5">
  <div className="w-8 h-8">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
  </div>

  <h6 className="text-base ml-2"><strong>Strict Confidentiality Agreements: </strong> Every service provider is bound by a legally binding agreement that restricts their access and use of your data solely for fulfilling their designated task on our behalf.</h6>
  </div>

  <div className="flex items-start ml-2 mt-5">
  <div className="w-8 h-8">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
  </div>

  <h6 className="text-base ml-2"><strong>Data Security Measures: </strong>They implement and maintain robust security measures to protect your information from unauthorized access, loss, or misuse..</h6>
  </div>

  <div className="flex items-start ml-2 mt-5">
  <div className="w-8 h-8">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
  </div>

  <h6 className="text-base ml-2"><strong>Compliance with Data Privacy Laws: </strong>They adhere to all relevant data privacy laws and regulations, ensuring your information is treated with the utmost respect.</h6>
  </div>

  <br/>
  <h2 className="text-secondary sm:text-left text-center">5. Your Privacy Rights
  </h2>

  <p className="text-base">You have certain rights regarding your personal information, including:</p>

  <div className="flex items-start ml-2 mt-5">
  <div className="w-6 h-6">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="w-6 h-6 font-black">
  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
  </svg>
  </div>

  <h6 className="text-base ml-2">The right to access your information</h6>
  </div>
  
  <div className="flex items-start ml-2 mt-5">
  <div className="w-6 h-6">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="w-6 h-6 font-black">
  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
  </svg>
  </div>

  <h6 className="text-base ml-2">The right to correct inaccurate information</h6>
  </div>

  <div className="flex items-start ml-2 mt-5">
  <div className="w-6 h-6">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="w-6 h-6 font-black">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
  </div>

  <h6 className="text-base ml-2">The right to request deletion of your information</h6>
  </div>

  <br/>
  <h2 className="text-secondary sm:text-left text-center">6. Privacy Policy Changes
  </h2>

  <p className="text-base">We acknowledge that our business, technology, and the legal landscape surrounding data privacy may evolve over time. To ensure our practices remain transparent and compliant, we reserve the right to update this Privacy Policy periodically.</p>
  <p className="text-base"><strong>Active Notification: </strong> We take informing you about these changes seriously. We won't simply post the updated policy and expect you to find it. Instead, we will actively notify you in several ways</p>

  <div className="flex items-start ml-2 mt-5">
  <div className="w-8 h-8">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
  </div>

  <h6 className="text-base ml-2"><strong>Prominent Posting: </strong>The revised Privacy Policy will be posted prominently on our website, easily accessible through a dedicated page or link on our homepage.</h6>
  </div>

  <div className="flex items-start ml-2 mt-5">
  <div className="w-8 h-8">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
  </div>

  <h6 className="text-base ml-2"><strong>Direct Communication: </strong> Depending on the significance of the changes, we may also send you an email or in-app notification directly informing you about the update.</h6>
  </div>

  <div className="flex items-start ml-2 mt-5">
  <div className="w-8 h-8">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
  </div>

  <h6 className="text-base ml-2"><strong>Effective Date: </strong> We will clearly indicate the effective date of the updated policy, ensuring you understand when the new terms come into effect.</h6>
  </div>

  <p className="text-base"><strong>Review and Choice: </strong>We encourage you to periodically review the Privacy Policy to stay informed about any changes. Your continued use of our services after the updated policy takes effect signifies your acceptance of the revised terms.</p>

  <br/>
  <h2 className="text-secondary sm:text-left text-center">7. Contact Us
  </h2>

  <p className="text-base">If you have any questions about this Privacy Policy, please contact us at +1 (509) 592-1745

  .</p>

`,
  },
];

interface t {
  text: string;
}

const Paragraph = ({ text }: t) => {
  return <p className="text-small mb-8 !text-justify">{text}</p>;
};

const page = () => {
  return (
    <>
      <h1 className="heading-secondary !text-center bg-[#F4F4F4] py-4 !mb-0">
        Privacy Policy
      </h1>

      {privacyContent.map((elem, index) => (
        <div key={index}>
          <SectionLayout bg="">
            <div className="h-[100%] service-style ">
              <div>{parser(elem.desc)}</div>
            </div>
          </SectionLayout>
        </div>
      ))}
    </>
  );
};

export default page;
