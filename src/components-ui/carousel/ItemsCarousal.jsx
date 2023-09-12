import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import ItemCard from "../card/ItemCard";
import { useTranslation } from "next-i18next";

export default function ItemsCarousal({items}) {

  const { t } = useTranslation("service");
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTab = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const width = isMobile ? 300 : 800; // Adjust dimensions as needed
  const height = isMobile ? 500 : 300;

  const CustomPrevArrow = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: "-2%",
        transform: "translateY(-50%)",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        zIndex: 200,
      }}
    >
      <KeyboardArrowLeft />
    </IconButton>
  );

  const CustomNextArrow = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: "-2%",
        transform: "translateY(-50%)",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <KeyboardArrowRight />
    </IconButton>
  );

  const settings = {
    dots: isMobile,
    infinite: true,
    slidesToShow: isMobile ? 1 : (isTab ? 2 : 4),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: isRTL,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <Box sx={{ px: { xs: 1, md: 8 } }}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              mx: {xs: 3, sm: 5, md: 2},
            }}
          >
            {ItemCard({
              image: item.cardImage,
              header: item.header,
              text: item.cardContent,
              buttonText: t("details"),
              buttonLink: "/services/" + item.id,
            })}
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
