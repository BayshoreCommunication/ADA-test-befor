"use client";
import React, { useState, ChangeEvent } from "react";

// Define the structure of each row's data
interface RowData {
  col1: string;
  col2: string;
}

// Seed Keywords

const DaynamicTableAddValue: React.FC = ({
  daynamicRowsData,
  setDaynamicRowsData,
}: any) => {
  // State to store rows of data

  // Handler for input change with type definitions
  const handleInputChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const newRows = [...daynamicRowsData];
    newRows[index] = { ...newRows[index], [name]: value };
    setDaynamicRowsData(newRows);
  };

  // Handler to add a new row
  const handleAddRow = () => {
    setDaynamicRowsData([
      ...daynamicRowsData,
      { seedKeywords: "", topics: "" },
    ]);
  };

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
                  <input
                    className="w-full p-2 border rounded"
                    type="text"
                    name="seedKeywords"
                    value={daynamicRowsData.seedKeywords}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    className="w-full p-2 border rounded !border-gray-300"
                    type="text"
                    name="topics"
                    value={daynamicRowsData.topics}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-primary text-white hover:bg-orange-900 rounded-md"
          onClick={handleAddRow}
        >
          Add Row
        </button>
      </div>
    </div>
  );
};

export default DaynamicTableAddValue;
