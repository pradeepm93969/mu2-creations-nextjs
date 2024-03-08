"use client";
import { MdPhone } from "react-icons/md";

const Phone = () => {
  const phoneNumber = "971551182021";
  const handleLinkClick = (phoneNumber) => {
    window.open("tel:" + phoneNumber, "_self");
  };
  return (
    <div
      className="flex items-center justify-center gap-2 cursor-pointer"
      onClick={() => handleLinkClick(phoneNumber)}
    >
      <MdPhone />
      {phoneNumber}
    </div>
  );
};

export default Phone;
