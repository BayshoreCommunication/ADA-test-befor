"use client";
import React from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import emailjs from "emailjs-com";

const DownloadForms = () => {
  // Function to capture each page and generate a PDF
  const captureAndSendPDF = async () => {
    const pages = document.querySelectorAll(".page"); // Select the pages you want to capture

    const pdf = new jsPDF("p", "mm", "a4");

    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i] as HTMLElement);
      const imgData = canvas.toDataURL("image/png");

      // Add each page to the PDF
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calculate height while maintaining aspect ratio
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

      if (i < pages.length - 1) {
        pdf.addPage(); // Add a new page if there are more pages to capture
      }
    }

    const pdfBlob = pdf.output("blob");

    // Convert the PDF blob to base64 (required for EmailJS)
    const reader = new FileReader();
    reader.readAsDataURL(pdfBlob);
    reader.onloadend = () => {
      const base64data = reader.result?.toString();

      // Send email using EmailJS
      emailjs
        .send(
          "your_service_id",
          "your_template_id",
          {
            to_email: "recipient@example.com",
            pdf_attachment: base64data, // Attach PDF as base64
          },
          "your_user_id"
        )
        .then(
          (result) => {
            console.log("PDF sent successfully", result.text);
          },
          (error) => {
            console.error("Failed to send PDF", error.text);
          }
        );
    };
  };
  return (
    <div className="flex justify-center mt-10 mb-20">
      <button
        onClick={() => DownloadForms()}
        className="!py-4 md:!py-4 flex items-center gap-2 sm:gap-4 md:gap-8 px-[3rem] justify-center md:justify-start border-2 bg-primary border-primary rounded-full hover:rounded-full text-white hover:bg-transparent hover:text-primary a-button"
      >
        Submit Form
      </button>
    </div>
  );
};

export default DownloadForms;
