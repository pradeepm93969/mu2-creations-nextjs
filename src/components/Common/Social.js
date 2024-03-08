import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex justify-center md:justify-start items-center gap-5 text-3xl">
      <Link href="https://facebook.com/mu2creations">
        <FaSquareFacebook />
      </Link>
      <Link href="https://twitter.com/mu2creations">
        <FaTwitter />
      </Link>
      <Link href="https://instagram.com/mu2creations">
        <FaInstagram />
      </Link>
      <Link href="https://linkdin.com/mu2creations">
        <FaLinkedin />
      </Link>
    </div>
  );
};

export default Social;
