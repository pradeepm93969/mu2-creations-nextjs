"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
import { formatDate } from "@/lib/contentful/dateFormatter";

const Blog = ({ blogs, renderCarousal }) => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  const updateSlidesToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 767) {
      setSlidesToShow(1);
    } else if (screenWidth <= 1023) {
      setSlidesToShow(2);
    } else if (screenWidth <= 1280) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(4);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const CustomPrevArrow = ({ onClick }) => (
    <div
      className="absolute top-[50%] left-0 z-30 bg-gray-400 hover:bg-gray-600 focus:bg-gray-600 text-white rounded-full p-3 shadow-sm shadow-black cursor-pointer"
      onClick={onClick}
    >
      <MdKeyboardArrowLeft size={16} />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div
      className="absolute top-[50%] right-0 z-30 bg-gray-400 hover:bg-gray-600 focus:bg-gray-600 text-white rounded-full p-3 shadow-sm shadow-black cursor-pointer"
      onClick={onClick}
    >
      <MdKeyboardArrowRight size={16} />
    </div>
  );

  const settings = {
    dots: slidesToShow === 1,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const renderBlogCard = ({ blog, index }) => {
    return (
      <Link
        href={"/blogs/" + blog.fields.slug}
        passHref
        key={index}
        className="px-5"
      >
        <div className="rounded-lg overflow-hidden shadow-md shadow-slate-500 max-w-sm bg-white h-full mx-auto">
          <div className="block h-[250px] relative">
            <Image
              src={"https:" + blog.fields.coverImage.fields.file.url + "?w=360"}
              alt={blog.fields.title}
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>
          <div className="flex justify-center flex-col items-center p-5 text-slate-800">
            <div className="text-lg font-semibold pb-4">
              {blog.fields.title}
            </div>
            <div className="text-sm pb-5 ">{formatDate(blog.fields.date)}</div>
            <button className="btn-primary">Read More...</button>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <section className="container mx-auto my-5 text-center text-primary-dark">
      <div className="font-heading mb-4">Blogs</div>

      {renderCarousal && blogs.length > slidesToShow ? (
        <div className="block pb-2 md:pb-0 px-5">
          <Slider {...settings}>
            {blogs.map((blog, index) => renderBlogCard({ blog, index }))}
          </Slider>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 p-5">
          {blogs.map((blog, index) => renderBlogCard({ blog, index }))}
        </div>
      )}
    </section>
  );
};

export default Blog;
