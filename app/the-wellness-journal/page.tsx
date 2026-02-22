import PainRelief from "@/components/home/PainRelief";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import Blogs from "@/components/the-wellness-journal/Blogs";
import GetAllPostData from "@/lib/GetPostData";
import React from "react";

const page = async () => {
  const blogPostData = await GetAllPostData();

  // console.log("blog post data", blogPostData);

  return (
    <>
      <BreadcrumbSection
        title="Latest From the Journal"
        items={[
          { label: "Home", href: "/" },
          { label: "The Wellness Journal" }, // current page (no href)
        ]}
      />
      <Blogs blogPost={blogPostData} />
      <PainRelief />
    </>
  );
};

export default page;
