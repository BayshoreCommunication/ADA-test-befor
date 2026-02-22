import React from "react";

const DaynamicTableDataShow: React.FC = ({ daynamicRowsData }: any) => {
  // State to store rows of data

  return (
    <div className="mx-auto mt-6">
      <div className="overflow-x-auto">
        <table className="min-w-full border-2 !border-gray-300">
          <thead className="bg-gray-300">
            <tr>
              <th className="border px-4 py-2"> Seed Keywords</th>
              <th className="border px-4 py-2"> Topics</th>
            </tr>
          </thead>
          <tbody>
            {daynamicRowsData.map((row: any, index: any) => (
              <tr key={index} className="bg-white">
                <td className="border px-4 py-2">
                  <p className="text-2xl font-medium text-gray-900">
                    {row?.seedKeywords}
                  </p>
                </td>
                <td className="border px-4 py-2">
                  <p className="text-2xl font-medium text-gray-900">
                    {row?.topics}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DaynamicTableDataShow;
