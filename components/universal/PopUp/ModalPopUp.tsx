"use client";
import React, { useEffect, useState } from "react";
import HomePagePopup from "./PopUp";
// import HomePagePopup from "./HomePagePopup";

const ModalPopup = () => {
  // State to track the modal open/close state
  const [isModalOpen, setIsModalOpen] = useState(false);

  //auto render modal after 2 second on page restart
  useEffect(() => {
    setTimeout(() => {
      setIsModalOpen(true);
    }, 2000);
  }, []);
  return (
    <>{isModalOpen && <HomePagePopup setIsModalOpen={setIsModalOpen} />}</>
  );
};

export default ModalPopup;
