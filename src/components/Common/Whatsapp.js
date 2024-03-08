"use client";
import { MdWhatsapp } from "react-icons/md";

const Whatsapp = () => {
  const phoneNumber = "971551182021";
  const handleLinkClick = (phoneNumber) => {
    window.open("https://wa.me/" + phoneNumber + "?text=", "_self");
  };
  return (
    <div
      className="flex items-center justify-center gap-2 cursor-pointer"
      onClick={() => handleLinkClick(phoneNumber)}
    >
      <MdWhatsapp />
      {phoneNumber}
    </div>
  );
};

export default Whatsapp;
