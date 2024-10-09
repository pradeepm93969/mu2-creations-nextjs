"use client";
import { MdWhatsapp } from "react-icons/md";

const Whatsapp = ({ isSticky = false }) => {
  const phoneNumber = "971551182021";

  // Define gtag_report_conversion function for whatsapp
  const gtag_report_conversion = (url) => {
    const callback = () => {
      if (typeof url !== "undefined") {
        window.open(url, "_self");
      }
    };
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11461836153/Yip-CM3lm9kZEPn6ttkq",
        event_callback: callback,
      });
    } else {
      console.warn("gtag is not defined. Conversion tracking may not work.");
      callback(); // Call the URL directly if gtag isn't available
    }
    return false;
  };

  const handleLinkClick = (phoneNumber) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=`;
    gtag_report_conversion(whatsappUrl);
  };

  if (isSticky) {
    return (
      <div
        onClick={() => handleLinkClick(phoneNumber)}
        className="fixed bottom-2 left-2 cursor-pointer bg-green-500 hover:bg-green-600 transition-colors duration-300 rounded-full p-3 shadow-md"
      >
        <MdWhatsapp className="text-white text-3xl" />
      </div>
    );
  }

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
