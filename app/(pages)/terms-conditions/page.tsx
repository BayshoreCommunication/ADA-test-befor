import SectionLayout from "@/components/universal/SectionLayout";
import React from "react";
import parser from "html-react-parser";

export const metadata = {
  title: "Terms & Conditions-Bayshore Communications",
  name: "description",
  description: `These terms and conditions outline the rules and regulations for the use of Bayshore Communication's Website, located at https://bayshorecommunication.com/.`,
};

let termsContent = [
  {
    desc: `
    <p className="text-base">Welcome to Bayshore Communication!</p>

    <p className="text-base">These terms and conditions outline the rules and regulations for the use of Bayshore Communication's Website, located at <a href="https://bayshorecommunication.com/" target="_blank" className ="underline">https://bayshorecommunication.com/</a>.</p>

    <p className="text-base">By accessing this website we assume you accept these terms and conditions. Do not continue to use Bayshore Communication if you do not agree to take all of the terms and conditions stated on this page.</p>

    <p className="text-base">The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of us. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to the same.</p>

    <br/>
    <h2 className="text-secondary sm:text-left text-center">Cookies</h2>

    <p className="text-base">We employ the use of cookies. By accessing Bayshore Communication, you agreed to use cookies in agreement with the Bayshore Communication's Privacy Policy.</p>

    <p className="text-base">Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>

    <br/>
    <h2 className="text-secondary sm:text-left text-center">License
    </h2>
  

    <p className="text-base">Unless otherwise stated, Bayshore Communication and/or its licensors own the intellectual property rights for all material on Bayshore Communication. All intellectual property rights are reserved. You may access this from Bayshore Communication for your own personal use subjected to restrictions set in these terms and conditions.</p>
    </div>

    <p className="text-base">You must not:
    </p>

    </div>
    <div className="flex items-start ml-2 mt-5">
    <div className="w-8 h-8">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </div>
  
    <h6 className="text-base ml-2">Republish material from Bayshore Communication</h6>
    </div>
  
    <div className="flex items-start ml-2 mt-5">
    <div className="w-8 h-8">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </div>
    <h6 className="text-base ml-2">Sell, rent or sub-license material from Bayshore Communication</h6>
    </div>

    <div className="flex items-start ml-2 mt-5">
    <div className="w-8 h-8">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </div>
    <h6 className="text-base ml-2">Redistribute content from Bayshore Communication
    </h6>
    </div>

    <div className="flex items-start ml-2 mt-5">
    <div className="w-8 h-8">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </div>
    <h6 className="text-base ml-2">Redistribute content from Bayshore Communication
    </h6>
    </div>

    <p className="text-base">Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website.</p>

    <p className="text-base">Bayshore Communication does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Bayshore Communication,its agents and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions.</p>

    <p className="text-base">Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website.</p>

    <p className="text-base">Bayshore Communication reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>

    <p className="text-base">You warrant and represent that:</p>

    <div className="flex items-start ml-2 mt-5">
    <div className="w-8 h-8">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </div>
    <h6 className="text-base ml-2">You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</h6>
    </div>

    <div className="flex items-start ml-2 mt-5">
    <div className="w-8 h-8">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </div>
    <h6 className="text-base ml-2">The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;
    </h6>
    </div>

    <div className="flex items-start ml-2 mt-5">
    <div className="w-8 h-8">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </div>
    <h6 className="text-base ml-2">The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy
    </h6>
    </div>

    <div className="flex items-start ml-2 mt-5">
    <div className="w-8 h-8">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </div>
    <h6 className="text-base ml-2">The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy
    </h6>
    </div>

    <p className="text-base">You hereby grant Bayshore Communication a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>
  
    <br/>
    <h2 className="text-secondary sm:text-left text-center">Hyperlinking to our Content</h2>
  
    <p className="text-base">The following organizations may link to our Website without prior written approval:</p>

    <div className="flex items-start ml-2 mt-5">
    <div className="w-8 h-8">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </div>
    <h6 className="text-base ml-2">Government agencies;
    </h6>
    </div>

    <div className="flex items-start ml-2 mt-5">
    <div className="w-8 h-8">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </div>
    <h6 className="text-base ml-2">Search engines;
    </h6>
    </div>

    <div className="flex items-start ml-2 mt-5">
    <div className="w-8 h-8">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </div>
    <h6 className="text-base ml-2">News organizations;
    </h6>
    </div>

    <div className="flex items-start ml-2 mt-5">
    <div className="w-8 h-8">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </div>
    <h6 className="text-base ml-2">Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and
    </h6>
    </div>

    <div className="flex items-start ml-2 mt-5">
    <div className="w-8 h-8">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </div>
    <h6 className="text-base ml-2">System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Website.
    </h6>
    </div>

    <p className="text-base">These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.
    </p>

    <p className="text-base">We may consider and approve other link requests from the following types of organizations:</p>

    <div className="flex items-start ml-2 mt-5">
    <div className="w-8 h-8">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </div>
    <h6 className="text-base ml-2">commonly-known consumer and/or business information sources;
    </h6>
    </div>

    <div className="flex items-start ml-2 mt-5">
    <div className="w-8 h-8">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </div>
    <h6 className="text-base ml-2">dot.com community sites;
    </h6>
    </div>

    <div className="flex items-start ml-2 mt-5">
    <div className="w-8 h-8">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </div>
    <h6 className="text-base ml-2">associations or other groups representing charities;
    </h6>
    </div>

    <div className="flex items-start ml-2 mt-5">
    <div className="w-8 h-8">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </div>
    <h6 className="text-base ml-2">online directory distributors;
    </h6>
    </div>

    <div className="flex items-start ml-2 mt-5">
    <div className="w-8 h-8">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </div>
    <h6 className="text-base ml-2">internet portals;
    </h6>
    </div>

    <div className="flex items-start ml-2 mt-5">
    <div className="w-8 h-8">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </div>
    <h6 className="text-base ml-2">educational institutions and trade associations.
    </h6>
    </div>

    <p className="text-base">No use of Bayshore Communication's logo or other artwork will be allowed for linking absent a trademark license agreement.</p>

    <br/>
    <h2 className="text-secondary sm:text-left text-center">iFrames</h2>

    <p className="text-base">Without prior approval and written permission, you may not create frames around our Web Pages that alter in any way the visual presentation or appearance of our Website.</p>

    
    <br/>
    <h2 className="text-secondary sm:text-left text-center">Content Liability</h2>

    <p className="text-base">We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
    </p>

    <br/>
    <h2 className="text-secondary sm:text-left text-center">Reservation of Rights
    </h2>
    <p className="text-base">We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request.</p>

    <p className="text-base">We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>

    <br/>
    <h2 className="text-secondary sm:text-left text-center">Removal of links from our website
    </h2>
    <p className="text-base">If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>

    <p className="text-base">We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>

    <br/>
    <h2 className="text-secondary sm:text-left text-center">Disclaimer
    </h2>
    <p className="text-base">To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>

    <div className="flex items-start ml-2 mt-5">
    <div className="w-8 h-8">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </div>
    <h6 className="text-base ml-2">limit or exclude our or your liability for death or personal injury;
    </h6>
    </div>

    <div className="flex items-start ml-2 mt-5">
    <div className="w-8 h-8">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </div>
    <h6 className="text-base ml-2">limit or exclude our or your liability for fraud or fraudulent misrepresentation;
    </h6>
    </div>

    <div className="flex items-start ml-2 mt-5">
    <div className="w-8 h-8">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </div>
    <h6 className="text-base ml-2">limit any of our or your liabilities in any way that is not permitted under applicable law; or
    </h6>
    </div>


    <div className="flex items-start ml-2 mt-5">
    <div className="w-8 h-8">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 font-black">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </div>
    <h6 className="text-base ml-2">exclude any of our or your liabilities that may not be excluded under applicable law.</h6>
    </div>

    <p className="text-base">The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
    </p>

    <p className="text-base">As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
    </p>


  `,
  },
];
// interface t {
//   text: string;
// }

// const Paragraph = ({ text }: t) => {
//   return <p className="text-small mb-8 !text-justify">{text}</p>;
// };

const Page = () => {
  return (
    <>
      <h1 className="heading-secondary !text-center bg-[#F4F4F4] py-4 !mb-0">
        Terms & Conditions
      </h1>
      {termsContent.map((elem, index) => (
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

export default Page;
