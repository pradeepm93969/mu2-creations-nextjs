"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsVisible(offset > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-24 right-8 cursor-pointer"
          onClick={scrollToTop}
          role="presentation"
        >
          <div className="bg-gray-400 hover:bg-gray-800 focus:bg-gray-800 text-white rounded-full p-3 shadow-sm shadow-black">
            <FaArrowUp size={24} />
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
