import Image from "next/image";
import React from "react";
import SectionLayout from "../SectionLayout";

const teamData = [
  {
    img: "/assets/company-profile/team/arjo_neel.png",
    name: "Arjo Neel",
    designation: "Chief Executive Officer (CEO)",
  },
  {
    img: "/assets/company-profile/team/salman_h_saikote.png",
    name: "Salman H Saikote",
    designation: "Chief Technology Officer (CTO)",
  },
  {
    img: "/assets/company-profile/team/ashraf_ujjaman.png",
    name: "Ashraf Ujjaman",
    designation: "Chief Operating Officer (COO)",
  },
  {
    img: "/assets/company-profile/team/christopher_patrick_thayer.png",
    name: "Christopher Patrick Thayer",
    designation: "Client Growth Manager",
  },
  {
    img: "/assets/company-profile/team/sadit_ahsan.png",
    name: "Sadit Ahsan",
    designation: "Graphics & UI/UX Engineer",
  },
  {
    img: "/assets/company-profile/team/raju_ahmed.png",
    name: "Raju Ahmed",
    designation: "Manager (Branding & Client Relationship)",
  },
  {
    img: "/assets/company-profile/team/nazmul_hasan.png",
    name: "Nazmul Hasan",
    designation: "Associate Digital Marketing Executive",
  },
  {
    img: "/assets/company-profile/team/sohel_rana.png",
    name: "Sohel Rana",
    designation: "Digital Marketing Manager",
  },
  {
    img: "/assets/company-profile/team/yamin_hossain_pirtul.png",
    name: "Yamin Hossain Pirtul",
    designation: "Graphics Designer",
  },
  {
    img: "/assets/company-profile/team/abu_kawsar.png",
    name: "Abu Kawsar",
    designation: "UI/UX Designer",
  },
  {
    img: "/assets/company-profile/team/md_raihan_ali.png",
    name: "Md. Raihan Ali",
    designation: "Business Analyst",
  },
  {
    img: "/assets/company-profile/team/sakawat_hossain.png",
    name: "Sakawat Hossain",
    designation: "Associate Manager",
  },
  {
    img: "/assets/company-profile/team/abrar_faisal.png",
    name: "Abrar Faisal",
    designation: "Associate Paralegal",
  },
  {
    img: "/assets/company-profile/team/rakibul_islam.png",
    name: "Rakibul Islam",
    designation: "Senior Software Engineer",
  },
  {
    img: "/assets/company-profile/team/gazi_monir_uz_zaman.png",
    name: "Gazi Monir-Uz-Zaman",
    designation: "Senior Software Engineer",
  },
  {
    img: "/assets/company-profile/team/shouvik_chowdhury.png",
    name: "Shouvik Chowdhury",
    designation: "Software Engineer",
  },
  {
    img: "/assets/company-profile/team/nuruzzaman_milon.png",
    name: "Nuruzzaman Milon",
    designation: "Associate Software Engineer",
  },
  {
    img: "/assets/company-profile/team/ar_sahak.png",
    name: "Ar Sahak",
    designation: "Software Engineer",
  },
  {
    img: "/assets/company-profile/team/nurul_islam_raihan.png",
    name: "Nurul Islam (Raihan)",
    designation: "Associate Software Engineer",
  },
  {
    img: "/assets/company-profile/team/miftahul_jannat.png",
    name: "Miftahul Jannat",
    designation: "Management Trainee",
  },
  {
    img: "/assets/company-profile/team/tanzid_mahmud_shuvo.png",
    name: "Tanzid Mahmud Shuvo",
    designation: "Lead Content Writer",
  },
  {
    img: "/assets/company-profile/team/amena_islam_rimi.png",
    name: "Amena Islam Rimi",
    designation: "Content Writer",
  },
  {
    img: "/assets/company-profile/team/israt_jahan_mridula.png",
    name: "Israt Jahan Mridula",
    designation: "Content Writer",
  },
  {
    img: "/assets/company-profile/team/nazmim_islam_zeniya.png",
    name: "Nazmim Islam Zeniya",
    designation: "Content Writer",
  },
];

const OurTeam = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <Image
        src="/assets/company-profile/our-team-bg.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      <SectionLayout bg="py-0 lg:py-16">
        <div className="relative z-10 ">
          <div className="w-full lg:w-[60%] mx-auto text-center mb-14">
            <h3 className="text-[28px] md:text-40px lg:text-[50px] px-14 text-white font-semibold mb-4 lg:mb-8 text-center w-full">
              Our Team
            </h3>
            <p className="text-[16px] lg:text-[20px] text-white">
              Bayshore Communication is proud to have a diverse and talented
              team of 40 professionals, each contributing their expertise across
              various domains. Our team includes:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  gap-x-6 gap-y-14 mb-16">
            {teamData.map((member, index) => (
              <div key={index} className="text-center">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="mx-auto rounded-full"
                />
                <h3 className="mt-4 text-[18px] lg:text-[20px] font-bold text-white">
                  {member.name}
                </h3>
                <p className="text-white">{member.designation}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Software Engineer Team */}
            <div className="p-10 md:p-14 lg:p-20 bg-[#222222] rounded-[30px] lg:rounded-[60px] overflow-hidden flex flex-1 items-center">
              <div className="flex flex-col gap-8">
                <div className="flex gap-6">
                  <div className="w-5 h-5 bg-[#F77224] rounded-full mt-[8px] flex-shrink-0"></div>
                  <div className="text-white">
                    <h4 className="text-[16px] lg:text-[20px] font-medium mb-3">
                      Software Engineer Team:
                    </h4>
                    <p className="text-[16px]">
                      Experts in developing innovative software solutions
                      tailored to meet client needs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-5 h-5 bg-[#F77224] rounded-full mt-[8px] flex-shrink-0"></div>
                  <div className="text-white">
                    <h4 className="text-[16px] lg:text-[20px] font-medium mb-3">
                      Web Developer Team:
                    </h4>
                    <p className="text-[16px]">
                      Skilled in creating dynamic and responsive websites that
                      enhance user experiences.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-5 h-5 bg-[#F77224] rounded-full mt-[8px] flex-shrink-0"></div>
                  <div className="text-white">
                    <h4 className="text-[16px] lg:text-[20px] font-medium mb-3">
                      UI/UX Engineers:
                    </h4>
                    <p className="text-[16px]">
                      Focused on designing intuitive and visually appealing
                      interfaces that improve user interaction.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-5 h-5 bg-[#F77224] rounded-full mt-[8px] flex-shrink-0"></div>
                  <div className="text-white">
                    <h4 className="text-[16px] lg:text-[20px] font-medium mb-3">
                      Business Analysts:
                    </h4>
                    <p className="text-[16px]">
                      Specialize in understanding client requirements and
                      translating them into actionable strategies.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-5 h-5 bg-[#F77224] rounded-full mt-[8px] flex-shrink-0"></div>
                  <div className="text-white">
                    <h4 className="text-[16px] lg:text-[20px] font-medium mb-3">
                      Project Managers:
                    </h4>
                    <p className="text-[16px]">
                      Ensure that all projects are delivered on time, within
                      scope, and within budget.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-5 h-5 bg-[#F77224] rounded-full mt-[8px] flex-shrink-0"></div>
                  <div className="text-white">
                    <h4 className="text-[16px] lg:text-[20px] font-medium mb-3">
                      Digital Marketing Team:
                    </h4>
                    <p className="text-[16px]">
                      Crafting compelling digital campaigns that drive
                      engagement and growth.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-5 h-5 bg-[#F77224] rounded-full mt-[8px] flex-shrink-0"></div>
                  <div className="text-white">
                    <h4 className="text-[16px] lg:text-[20px] font-medium mb-3">
                      Community Management Team:
                    </h4>
                    <p className="text-[16px]">
                      Building and nurturing strong relationships with client
                      communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Graphic Design Team: */}
            <div className="p-10 md:p-14 lg:p-20 bg-[#222222] rounded-[30px] lg:rounded-[60px] overflow-hidden flex  flex-1 items-center">
              <div className="flex flex-col gap-8">
                <div className="flex gap-6">
                  <div className="w-5 h-5 bg-[#F77224] rounded-full mt-[8px] flex-shrink-0"></div>
                  <div className="text-white">
                    <h4 className="text-[16px] lg:text-[20px] font-medium mb-3">
                      Graphic Design Team:
                    </h4>
                    <p className="text-[16px]">
                      Creating stunning visuals that capture and communicate
                      brand messages effectively.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-5 h-5 bg-[#F77224] rounded-full mt-[8px] flex-shrink-0"></div>
                  <div className="text-white">
                    <h4 className="text-[16px] lg:text-[20px] font-medium mb-3">
                      Video Production Team:
                    </h4>
                    <p className="text-[16px]">
                      Producing high-quality videos that tell engaging stories
                      and promote client brands.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-5 h-5 bg-[#F77224] rounded-full mt-[8px] flex-shrink-0"></div>
                  <div className="text-white">
                    <h4 className="text-[16px] lg:text-[20px] font-medium mb-3">
                      Video Editing Team:
                    </h4>
                    <p className="text-[16px]">
                      Expert editors who enhance video content to ensure it
                      resonates with the audience.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-5 h-5 bg-[#F77224] rounded-full mt-[8px] flex-shrink-0"></div>
                  <div className="text-white">
                    <h4 className="text-[16px] lg:text-[20px] font-medium mb-3">
                      Content Writing Team:
                    </h4>
                    <p className="text-[16px]">
                      Crafting compelling and informative content that reflects
                      the client{"'"}s voice and objectives.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-5 h-5 bg-[#F77224] rounded-full mt-[8px] flex-shrink-0"></div>
                  <div className="text-white">
                    <h4 className="text-[16px] lg:text-[20px] font-medium mb-3">
                      Offshore Team:
                    </h4>
                    <p className="text-[16px]">
                      Providing valuable support services from various locations
                      to ensure seamless operations and cost-efficiency.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-5 h-5 bg-[#F77224] rounded-full mt-[8px] flex-shrink-0"></div>
                  <div className="text-white">
                    <h4 className="text-[16px] lg:text-[20px] font-medium mb-3">
                      Sales and Marketing Team:
                    </h4>
                    <p className="text-[16px]">
                      Driving business growth through strategic marketing
                      initiatives and sales efforts.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-5 h-5 bg-[#F77224] rounded-full mt-[8px] flex-shrink-0"></div>
                  <div className="text-white">
                    <h4 className="text-[16px] lg:text-[20px] font-medium mb-3">
                      Client Communication & Reporting Team:{" "}
                    </h4>
                    <p className="text-[16px]">
                      Dedicated to maintaining transparent and effective
                      communication with clients, providing regular updates and
                      detailed reports to keep them informed and engaged.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[60%] mx-auto text-center mt-20">
            <p className="text-[16px] lg:text-[20px] text-white">
              Our dedicated team works collaboratively to deliver exceptional
              results, combining creativity, technical prowess, and strategic
              insight to help our clients achieve their goals.
            </p>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default OurTeam;
