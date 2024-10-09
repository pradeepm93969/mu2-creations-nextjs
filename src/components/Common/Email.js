"use client";
import { MdEmail } from "react-icons/md";

const Email = () => {
  const emailAddress = "info@mu2creations.com";

  // Define gtag_report_conversion function
  const gtag_report_conversion = (url) => {
    const callback = () => {
      if (typeof url !== "undefined") {
        window.open(url, "_self");
      }
    };
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11461836153/6CgUCMvun9kZEPn6ttkq",
        event_callback: callback,
      });
    } else {
      console.warn("gtag is not defined. Conversion tracking may not work.");
      callback(); // Call the URL directly if gtag isn't available
    }
    return false;
  };

  const handleLinkClick = () => {
    const mailtoUrl = `mailto:${emailAddress}`;
    gtag_report_conversion(mailtoUrl);
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
