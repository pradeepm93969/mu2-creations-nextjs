"use client";
import { MdWhatsapp } from "react-icons/md";

export default function WhatsappSticky() {
  const phoneNumber = "971551182021";
  const handleLinkClick = (phoneNumber) => {
    window.open("https://wa.me/" + phoneNumber + "?text=");
  };

  return (
    <div
      onClick={() => handleLinkClick(phoneNumber)}
      className="fixed bottom-2 left-2 cursor-pointer bg-green-500 hover:bg-green-600 transition-colors duration-300 rounded-full p-3 shadow-md"
    >
      <MdWhatsapp className="text-white text-3xl" />
    </div>
  );
}
