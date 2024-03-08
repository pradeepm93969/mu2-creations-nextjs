"use client";
import { MdEmail } from "react-icons/md";

const Email = () => {
  const emailAddress = "info@mu2creations.com";
  const handleLinkClick = (emailAddress) => {
    window.open("mailto:" + emailAddress, "_self");
  };
  return (
    <div
      className="flex items-center justify-center gap-2 cursor-pointer"
      onClick={() => handleLinkClick(emailAddress)}
    >
      <MdEmail />
      {emailAddress}
    </div>
  );
};

export default Email;
