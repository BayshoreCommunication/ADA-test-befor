import SectionLayout from "@/components/universal/SectionLayout";
import { Metadata } from "next";
import React from "react";
import { Example } from "@/components/unique/faq/FaqAcc";
import GetAllBlogData from "@/lib/GetAllBlogData";

export const metadata: Metadata = {
  title: "Career - Bayshore Communication",
  description:
    "Looking for an opportunity to show your skills, talent, and work with professionals who share your vision and values? Check out our career page. Apply now and become part of our family.",
};

// Define the structure of the job data
interface Job {
  heading: string;
  description: string;
}

// Job data
const jobs: Job[] = [
  {
    heading: "Admin & HR Executive",
    description: `
      <h1 class="text-2xl font-bold">Vacancy: 01</h1>
      <h1 class="text-2xl font-bold">Job Context:</h1>
      <p class="text-base">
        We are seeking a dynamic and highly skilled Admin & HR Executive to join our team at Bayshore Communication.
      </p>
      <p class="text-base">
        As an Admin & HR Executive, you will be responsible for undertaking a variety of HR and Administration duties and providing strategic guidance to support the organization's human resources initiatives.
      </p>
      <h1 class="text-2xl font-bold">Responsibilities:</h1>
      <ul class="list-disc pl-5 space-y-2 ml-14">
        <li>Collaborate with the management team to develop and implement HR strategies aligned with the company's overall objectives.</li>
        <li>Coordinate and manage the full recruitment life cycle.</li>
        <li>Develop effective sourcing strategies to attract qualified candidates.</li>
        <li>Provide guidance and support to employees on HR policies and programs.</li>
        <li>Handle employee inquiries and concerns, ensuring timely resolutions.</li>
      </ul>
      <h1 class="text-2xl font-bold">Qualifications:</h1>
      <ul class="list-disc pl-5 space-y-2 ml-14">
        <li>1-2 years of relevant experience in HR functions or related areas.</li>
        <li>Excellent communication and interpersonal skills.</li>
        <li>Strong organizational skills with the ability to manage multiple tasks.</li>
      </ul>
      <h1 class="text-2xl font-bold">Educational Requirements:</h1>
      <p class="text-base">
        Bachelor's degree in Business Administration, preferably with a specialization in Human Resources.
      </p>
    `,
  },
  {
    heading: "Junior Immigration Paralegal",
    description: "",
  },
];

// Page component
const Page = async () => {
  const jobData = await GetAllBlogData();

  return (
    <>
      <div className="bg-[#F4F4F4]">
        <h1 className="heading-secondary !text-center py-4 !mb-0 max-w-[800px] mx-auto">
          Empower Your Career: Discover Growth Opportunities at Bayshore
          Communication
        </h1>
      </div>
      <SectionLayout bg="">
        <div className="border-[0.5px] border-[#AAAAAA] rounded-[10px]">
          <Example arr={jobData?.data || jobs} />
        </div>
      </SectionLayout>
    </>
  );
};

export default Page;
