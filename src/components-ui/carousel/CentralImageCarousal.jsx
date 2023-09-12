import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { Box, useMediaQuery } from "@mui/material";

export default function CentralImageCarousal({ images }) {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const width = isMobile ? 300 : 800; // Adjust dimensions as needed
  const height = isMobile ? 200 : 200;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: isRTL,
  };

  return (
    <Box
      sx={{ pb: 4, maxWidth: "100%", overflowX: "hidden", overflowY: "auto" }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index}>
            <Link href={image.href} passHref>
              <Image 
                src={image.url}
                alt={`Slide ${index + 1}`}
                width={width}
                height={height}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fit",
                }}
              />
            </Link>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
