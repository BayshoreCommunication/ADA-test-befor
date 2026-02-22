"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { serviceCategories } from "@/config/data";

// ✅ Helper function for grid columns
const getGridCols = (count: number) => {
  if (count >= 4) return "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
  if (count === 3) return "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3";
  if (count === 2) return "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2";
  return "sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1";
};

export default function MainSection() {
  // Convert the object into entries so we keep category name + items
  const categoriesArray = Object.entries(serviceCategories);

  return (
    <main className=" bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 my-32">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[28px] md:text-[42px] font-bold text-gray-900 mb-4">
            Our Print Services
          </h2>
          <p className="text-[20px] text-gray-600 max-w-4xl mx-auto">
            Comprehensive printing solutions for businesses of all sizes
          </p>
        </div>

        {categoriesArray.map(([key, services], categoryIndex) => {
          const servicesArray = services as any[];

          // Extract section title/subtitle if available
          const sectionTitleObj = servicesArray.find(
            (item) => item.sectionTitle
          );
          const sectionSubTitleObj = servicesArray.find(
            (item) => item.sectionSubTitle
          );

          // Filter out title/subtitle from actual service items
          const serviceItems = servicesArray.filter(
            (item) => !item.sectionTitle && !item.sectionSubTitle
          );

          return (
            <section key={categoryIndex} className="mb-16">
              {/* Section Title */}
              {sectionTitleObj ? (
                <h3 className="text-[28px] font-bold text-gray-900 mb-2 text-center">
                  {sectionTitleObj.sectionTitle}
                </h3>
              ) : (
                <h3 className="text-[28px] font-bold text-gray-900 mb-2 text-center">
                  {serviceItems[0]?.slug
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (c: string) => c.toUpperCase())}
                </h3>
              )}

              {/* Section Subtitle */}
              {sectionSubTitleObj && (
                <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto text-[18px]">
                  {sectionSubTitleObj.sectionSubTitle}
                </p>
              )} 

              {/* Services Grid */}
              <div className="flex justify-center w-full">
                <div
                  className={`grid ${getGridCols(serviceItems.length)} gap-6 w-full `}
                >
                  {serviceItems.map((service, serviceIndex) => (
                    <Link
                      key={serviceIndex}
                      href={`printing&package/services/${service.slug}`}
                    >
                      <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-teal-300 h-full w-full max-w-lg  mx-auto overflow-hidden ">
                        <CardContent className="p-6">
                          <div className="aspect-square mb-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg overflow-hidden flex items-center justify-center group-hover:from-teal-100 group-hover:to-teal-200 transition-all duration-300">
                            <div className="text-5xl group-hover:scale-110 transition-transform duration-300 w-[800px] h-[800px] flex items-center justify-center">
                              <Image
                                src={service.image}
                                alt={service.title}
                                width={400} 
                                height={400}
                                className="w-full h-full object-contain"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <h4 className="font-semibold text-gray-900 text-center text-xl lg:text-2xl  leading-tight min-h-[2.5rem] flex items-center justify-center mb-3">
                            {service.title}
                          </h4>
                          <div className="text-center">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-teal-600 text-xl hover:text-teal-700 group-hover:bg-teal-50"
                            >
                              View Details
                              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
