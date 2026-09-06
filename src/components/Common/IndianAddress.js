import { FaLocationDot } from "react-icons/fa6";

const IndianAddress = () => {
  return (
    <div className="flex items-center justify-center gap-2 max-w-sm">
      <FaLocationDot />
      <a
    href="https://maps.app.goo.gl/hgqSciNHSDagWmXf9"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer"
  >
    Mu2creations - Bangalore<br />
    25/5, MS layout, JP nagar<br />
    bangalore - 560078
  </a>
    </div>
  );
};

export default IndianAddress;
