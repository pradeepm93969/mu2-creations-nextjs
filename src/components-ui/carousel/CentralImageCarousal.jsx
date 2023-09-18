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
          <Link href={image.href} passHref key={index}>
            <Box key={index} sx={{
              overflow: "hidden",
              position: "relative",
              height: "400px"
            }}>
              <Image
                src={image.url}
                alt={`Slide ${index + 1}`}
                fill
                sizes="100%"
              />
            </Box>
          </Link>
        ))}
      </Slider>
    </Box>
  );
}
