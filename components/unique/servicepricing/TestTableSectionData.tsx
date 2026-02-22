"use client"
import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Define the structure of the test data
interface ProductData {
  title: string;
  discription: string[];
  color: string[];
  price: string[];
}

// Test data array with the ProductData type
const testData: ProductData[] = [
  {
    title: 'Lenevo laptop 13 gen',
    discription: ['Core i5', '13 Gen', '16gb hdd5 ram', '15 inch display'],
    color: ['Silver'],
    price: ['$785'],
  },
  {
    title: 'Hp laptop 12 gen',
    discription: ['Core i5', '13 Gen', '16gb hdd5 ram', '15 inch display'],
    color: ['Silver', 'black'],
    price: ['$785'],
  },
  {
    title: 'Macbook Pro laptop 2024',
    discription: ['Core i5', '13 Gen', '16gb hdd5 ram', '15 inch display'],
    color: ['Silver', 'black', 'gray'],
    price: ['$785'],
  },
];

const TestTableSectionData: React.FC = () => {
  const generatePdf = () => {
    const doc = new jsPDF();

    // Define columns and rows for the table
    const columns: string[] = ['Title', 'Description', 'Color', 'Price'];
    const rows: string[][] = testData.map((item) => [
      item.title,
      item.discription.join(', '),
      item.color.join(', '),
      item.price.join(', '),
    ]);

    // Add title to the PDF
    doc.text('Product Details', 14, 16);

    // Add the table to the PDF
    doc.autoTable({
      head: [columns],
      body: rows,
      startY: 20,
    });

    // Save the PDF
    doc.save('product_details.pdf');
  };

  return (
    <div>
      <button
        className='px-4 py-2 bg-brown-600 hover:bg-brown-400'
        onClick={generatePdf}
      >
        Download Pdf Data
      </button>
    </div>
  );
};

export default TestTableSectionData;
