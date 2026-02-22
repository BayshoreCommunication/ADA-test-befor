"use client";
import React from "react";
import Image from "next/image";
import DownloadPdf from "./DownloadPdf";
import ServicesPriceCardSaveData from "./ServicesPriceCardSaveData";

interface ServiceDetail {
  services: string;
}

// Define the Service interface
interface Service {
  servicesName: string | null;
  serviceDetails: string | null;
  unitPrice: number | null;
  quantity: number | null;
  estimatedTotalPrice: number | null;
}
interface FormValue {
  businessName: string;
  partnerName: string;
  email: string;
  phone: string;
  website: string;
  address: string;
}

interface Props {
  customizedPricingList: Service[];
  estimatedTotalPrice: any | null;
  clientInfo: FormValue;
  handleOpenPreview?: () => void; // Define this if used, or remove if not needed
}

const ServicePricingSaveData: React.FC<Props> = ({
  customizedPricingList,
  estimatedTotalPrice,
  clientInfo,
}) => {
  return (
    <>
      <div className="relative p-0 overflow-x-auto overflow-y-auto shadow-md md:p-10 bg-gray-0 md:rounded-lg bg-gray-50">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/assets/bayshore-logo.svg"
            alt="bayshore-logo"
            width={300}
            height={150}
            className="w-[200px] md:w-[300px] h-auto py-6"
            priority
          />
        </div>
        <div className="p-2 md:p-12 ">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-y-8">
            <p className="md:!text-2xl !text-xl">
              <strong className="font-bold">Business Name: </strong>{" "}
              {clientInfo.businessName}
            </p>
            <p className="md:!text-2xl !text-xl">
              <strong className="font-bold">Partner Name:</strong>{" "}
              {clientInfo.partnerName}
            </p>
            <p className="md:!text-2xl !text-xl">
              <strong className="font-bold">Email:</strong> {clientInfo.email}
            </p>
            <p className="md:!text-2xl !text-xl">
              <strong className="font-bold">Phone:</strong> {clientInfo.phone}
            </p>
            <p className="md:!text-2xl !text-xl">
              <strong className="font-bold">Website:</strong>{" "}
              {clientInfo.website}
            </p>
            <p className="md:!text-2xl !text-xl">
              <strong className="font-bold">Address: </strong>{" "}
              {clientInfo.address}
            </p>
          </div>
        </div>
        <div className="mt-8 md:hidden">
          <ServicesPriceCardSaveData
            estimatedTotalPrice={estimatedTotalPrice}
            customizedPricingList={customizedPricingList}
          />
        </div>
        <div className="hidden md:block">
          <table className="w-full text-left text-black rtl:text-right">
            <thead className="text-2xl uppercase gray-700 !bg-primary">
              <tr>
                <th scope="col" className="px-6 py-10">
                  Service Name
                </th>
                <th scope="col" className="px-8 py-10">
                  Service Details
                </th>
                <th scope="col" className="px-6 py-10 text-center">
                  Unit Price
                </th>
                <th scope="col" className="px-6 py-10 text-center">
                  Quantity
                </th>
                <th scope="col" className="px-0 py-10 text-center">
                  Estimated Total Price
                </th>
              </tr>
            </thead>
            <tbody>
              {customizedPricingList.map((service, serviceIndex) => (
                <tr
                  key={serviceIndex}
                  className="text-2xl text-black border-b odd:bg-white even:bg-gray-200"
                >
                  <th
                    scope="row"
                    className="px-6 py-8 font-bold text-gray-900 whitespace-nowrap"
                  >
                    <div>
                      <ul className="max-w-xl space-y-4 list-none list-inside">
                        <li className={` `}>{service.servicesName}</li>
                      </ul>
                    </div>
                  </th>
                  <td className="px-6 py-8">
                    <div>
                      <ul className="max-w-xl space-y-4 list-none list-outside ">
                        <li className="">{service?.serviceDetails}</li>
                      </ul>
                    </div>
                  </td>
                  <td className="px-6 py-8">
                    <div>
                      <ul className="max-w-xl space-y-4 list-none list-inside">
                        <li className={`text-center`}>{service?.unitPrice}</li>
                      </ul>
                    </div>
                  </td>
                  <td className="px-6 py-8">
                    <div>
                      <ul className="max-w-md space-y-4 list-none list-inside">
                        <li className={`text-center `}>{service?.quantity}</li>
                      </ul>
                    </div>
                  </td>
                  <td className="px-6 py-8">
                    <div>
                      <ul className="max-w-md space-y-4 font-bold list-none list-inside">
                        <li className={`text-center`}>
                          {service?.estimatedTotalPrice != null &&
                          !isNaN(Number(service.estimatedTotalPrice))
                            ? Number(service.estimatedTotalPrice).toFixed(2)
                            : "0.00"}
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <thead className="text-2xl uppercase gray-700 !bg-orange-50">
              <tr>
                <th scope="col" className="px-6 py-6"></th>
                <th scope="col" className="px-8 py-6"></th>
                <th scope="col" className="px-6 py-6 pl-24">
                  Total
                </th>
                <th scope="col" className="px-6 py-6"></th>
                <th scope="col" className="px-0 py-6 pl-32">
                  ${estimatedTotalPrice}
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div className="flex justify-center pt-20">
        <DownloadPdf
          clientInfo={clientInfo}
          estimatedTotalPrice={estimatedTotalPrice}
          customizedPricingList={customizedPricingList}
        />
      </div>
    </>
  );
};

export default ServicePricingSaveData;
