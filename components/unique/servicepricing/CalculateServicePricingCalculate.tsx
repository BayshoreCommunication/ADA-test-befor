"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ServicesPriceCardCustomized from "./ServicesPriceCardCustomized";

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

interface Form {
  businessName: string;
  partnerName: string;
  email: string;
  phone: string;
  website: string;
  address: string;
}

interface Props {
  pricingList: any;
  setPricingList: React.Dispatch<React.SetStateAction<any>>;
  totalPrice: any | null;
  setTotalPrice: React.Dispatch<React.SetStateAction<string>>;
  formValues: Form;
  setFormValues: React.Dispatch<React.SetStateAction<Form>>;
}

const CalculateServicePricingCalculate: React.FC<Props> = ({
  pricingList,
  setPricingList,
  totalPrice,
  setTotalPrice,
  formValues,
  setFormValues,
}) => {
  const handleQuantityChange = (serviceIndex: number, newQuantity: string) => {
    const updatedQuantity = Math.max(0, parseFloat(newQuantity) || 0); // Ensure non-negative number

    const updatedPricingList = pricingList.map(
      (service: any, sIndex: number) => {
        if (sIndex === serviceIndex) {
          const totalPrice =
            service.unitPrice && !isNaN(service.unitPrice)
              ? (service.unitPrice * updatedQuantity).toFixed(2)
              : "0.00";

          return {
            ...service,
            quantity: updatedQuantity,
            estimatedTotalPrice: totalPrice,
          };
        }
        return service;
      }
    );

    setPricingList(updatedPricingList);
  };

  const calculateTotalPrice = () => {
    const total = pricingList.reduce((acc: any, service: any) => {
      const price = parseFloat(service.estimatedTotalPrice) || 0;
      return acc + price;
    }, 0);

    setTotalPrice(total.toFixed(2));
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [pricingList]);

  // Handler for input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Handler for form submission
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(formValues); // Process form values
  // };

  return (
    <div className="relative p-0 overflow-x-auto overflow-y-auto shadow-md md:p-10 bg-gray-50 md:rounded-lg">
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
      <div className="p-12 ">
        <form className="mx-auto">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="businessName"
                id="businessName"
                className="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required
                value={formValues?.businessName}
                onChange={handleInputChange}
              />
              <label
                htmlFor="businessName"
                className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Business Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="partnerName"
                id="partnerName"
                className="block py-2.5 px-0 w-full text-[15px]  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required
                value={formValues?.partnerName}
                onChange={handleInputChange}
              />
              <label
                htmlFor="partnerName"
                className="peer-focus:font-medium absolute text-[15px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Partner Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-[15px]  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required
                value={formValues?.email}
                onChange={handleInputChange}
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-[15px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="phone"
                name="phone"
                id="phone"
                className="block py-2.5 px-0 w-full text-[15px]  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required
                value={formValues?.phone}
                onChange={handleInputChange}
              />
              <label
                htmlFor="phone"
                className="peer-focus:font-medium absolute text-[15px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="website"
                id="website"
                className="block py-2.5 px-0 w-full text-[15px]  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required
                value={formValues?.website}
                onChange={handleInputChange}
              />
              <label
                htmlFor="floating_company"
                className="peer-focus:font-medium absolute text-[15px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Website
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="address"
                id="address"
                className="block py-2.5 px-0 w-full text-[15px]  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required
                value={formValues?.address}
                onChange={handleInputChange}
              />
              <label
                htmlFor="address"
                className="peer-focus:font-medium absolute text-[15px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Address
              </label>
            </div>
          </div>
        </form>
      </div>
      <div className="md:hidden">
        <ServicesPriceCardCustomized
          handleQuantityChange={handleQuantityChange}
          pricingList={pricingList}
          totalPrice={totalPrice}
        />
      </div>
      <div className="hidden md:block">
        <table className="w-full text-left text-black border rounded-md rtl:text-right">
          <thead className="text-2xl uppercase !bg-primary">
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
            {pricingList.map((service: any, serviceIndex: any) => (
              <tr
                key={serviceIndex}
                className="text-2xl text-black border-b odd:bg-white even:bg-gray-200"
              >
                <td className="px-6 py-8">
                  <div>
                    <ul
                      className={`max-w-xl space-y-6 list-outside list-none `}
                    >
                      <li>{service?.servicesName}</li>
                    </ul>
                  </div>
                </td>
                <td className="px-6 py-8">
                  <div>
                    <ul
                      className={`max-w-xl space-y-6 list-outside list-none `}
                    >
                      <li>{service?.serviceDetails}</li>
                    </ul>
                  </div>
                </td>
                <td className="px-6 py-8">
                  <div>
                    <ul className="max-w-xl space-y-6 list-none list-inside ">
                      <li className={` text-center `}>{service?.unitPrice}</li>
                    </ul>
                  </div>
                </td>

                <td className="px-6 py-8 text-center ">
                  <div>
                    <ul className="max-w-md space-y-4 list-none list-inside ">
                      <li className="">
                        <input
                          type="number"
                          value={service?.quantity || 0} // Default to 0 if undefined
                          onChange={(e) =>
                            handleQuantityChange(serviceIndex, e.target.value)
                          } // Pass as string
                          className="w-20 p-1 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </li>
                    </ul>
                  </div>
                </td>

                <td className="px-6 py-8">
                  <div>
                    <ul className="max-w-xl space-y-6 list-none list-inside">
                      <li className={`text-center }`}>
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
                ${totalPrice}
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default CalculateServicePricingCalculate;
