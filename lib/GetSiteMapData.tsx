
import React from "react";

const siteMapDataFetch = async () => {
  const bloData = await fetch("https://backend-bayshore.vercel.app/site/blog", {
    next: { revalidate: 200 },
  });
  return bloData.json();
};


