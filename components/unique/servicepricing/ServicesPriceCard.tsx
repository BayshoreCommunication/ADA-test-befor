import React from "react";
import { InitialPricingList } from "./initialPricingListMain";

const ServicesPriceCard = () => {
  return (
    <div>
      {InitialPricingList.map((service, serviceIndex) => (
        <div className="p-4 mb-3 rounded-lg bg-orange-50" key={serviceIndex}>
          <h2 className="text-[12px] font-semibold text-primary">
            Service Name
          </h2>
          <p className="mt-1 mb-4  text-[9px] ml-2 text-black">
            {service.servicesName}
          </p>
          <div>
            <div className="relative w-full overflow-x-auto">
              <table className="w-full text-sm text-left text-primary">
                <thead className="text-[9px] uppercase gray-700 ">
                  <tr>
                    <th scope="col" className="px-1 py-3">
                      Service Details
                    </th>
                    <th scope="col" className="px-2 py-3 text-center">
                      U.Price
                    </th>
                    <th scope="col" className="px-4 py-3 text-center">
                      QT
                    </th>
                    <th scope="col" className="px-2 py-3 text-center">
                      E.T.P
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-[12px]">
                    <td className="px-2 py-2">
                      <p className="text-[8px] text-black">
                        {service?.serviceDetails}
                      </p>
                    </td>

                    <td className="px-2 py-2">
                      <p className="text-center text-[8px] ">
                        {service.unitPrice}
                      </p>
                    </td>
                    <td className="px-2 py-2">
                      <p className="text-center text-[8px]">
                        {service.quantity}
                      </p>
                    </td>
                    <td className="px-2 py-2">
                      <p className="text-center text-[8px]">
                        {service.estimatedTotalPrice}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-end pr-16 bg-orange-50 gap-x-10">
        <p className="px-6 py-4 text-[10px] font-semibold ">Total</p>
        <p className="px-6 py-4 text-[10px] font-semibold">$1420</p>
      </div>
    </div>
  );
};

export default ServicesPriceCard;
