import React from "react";
import { InitialPricingList } from "./initialPricingListMain";
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
interface Props {
  handleQuantityChange: (serviceIndex: number, newQuantity: string) => void;
  pricingList: Service[];
  totalPrice: number | null; // Assuming totalPrice is a number or null
}

const ServicesPriceCardCustomized: React.FC<Props> = ({
  handleQuantityChange,
  pricingList,
  totalPrice,
}) => {
  return (
    <div>
      {pricingList.map((service, serviceIndex) => (
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
                      <input
                        type="number"
                        value={service?.quantity || 0} // Default to 0 if undefined
                        onChange={(e) =>
                          handleQuantityChange(serviceIndex, e.target.value)
                        } // Pass as string
                        className="w-20 p-1 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
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
        <p className="px-6 py-4 text-[10px] font-semibold">${totalPrice}</p>
      </div>
    </div>
  );
};

export default ServicesPriceCardCustomized;
