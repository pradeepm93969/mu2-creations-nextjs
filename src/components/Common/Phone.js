"use client";
import { MdPhone } from "react-icons/md";

const Phone = () => {
  const phoneNumber = "971551182021";

  // Define gtag_report_conversion function for phone
  const gtag_report_conversion = (url) => {
    const callback = () => {
      if (typeof url !== "undefined") {
        window.open(url, "_self");
      }
    };
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11461836153/dJtbCMnRpNkZEPn6ttkq",
        value: 1.0,
        currency: "AED",
        event_callback: callback,
      });
    } else {
      console.warn("gtag is not defined. Conversion tracking may not work.");
      callback(); // Call the URL directly if gtag isn't available
    }
    return false;
  };

  const handleLinkClick = (phoneNumber) => {
    const telUrl = `tel:${phoneNumber}`;
    gtag_report_conversion(telUrl);
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
