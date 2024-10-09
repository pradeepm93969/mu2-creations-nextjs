"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import { MdEmail } from "react-icons/md";

const Email = () => {
  const emailAddress = "info@mu2creations.com";

  const handleLinkClick = () => {
    const mailtoUrl = `mailto:${emailAddress}`;
    console.log("Event sent successfully, opening mailto link...");
    sendGTMEvent({
      event: "conversion",
      send_to: "AW-11461836153/6CgUCMvun9kZEPn6ttkq",
      event_callback: () => {
        console.log("Event sent successfully, opening mailto link...");
        window.open(mailtoUrl, "_self");
      },
    });
  };

  return (
    <div
      className="flex items-center justify-center gap-2 cursor-pointer"
      onClick={handleLinkClick}
    >
      <MdEmail />
      {emailAddress}
    </div>
  );
};

export default Email;
