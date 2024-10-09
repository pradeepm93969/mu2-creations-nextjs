"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import { MdPhone } from "react-icons/md";

const Phone = () => {
  const phoneNumber = "971551182021";

  const handleLinkClick = () => {
    const telUrl = `tel:${phoneNumber}`;
    sendGTMEvent({
      event: "conversion",
      send_to: "AW-11461836153/dJtbCMnRpNkZEPn6ttkq",
      value: 1.0,
      currency: "AED",
      event_callback: () => {
        window.open(telUrl, "_self");
      },
    });
  };

  return (
    <div
      className="flex items-center justify-center gap-2 cursor-pointer"
      onClick={handleLinkClick}
    >
      <MdPhone />
      {phoneNumber}
    </div>
  );
};

export default Phone;
