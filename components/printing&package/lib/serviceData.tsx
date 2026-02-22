// lib/services.ts

import { serviceCategories } from "@/config/data";

interface ServiceItem {
  slug: string;
  [key: string]: any;
}

interface ServiceCategory extends Array<ServiceItem> {}

type ServiceCategories = {
  [key: string]: ServiceCategory;
};

export function getServiceBySlug(slug: string): ServiceItem | null {
  for (const categoryKey in serviceCategories as ServiceCategories) {
    const category = (serviceCategories as ServiceCategories)[categoryKey];

    // Skip the title and subtitle objects
    const service = category.find((item: ServiceItem) => item.slug === slug);
    if (service) {
      return service;
    }
  }
  return null; // Return null if not found
}
