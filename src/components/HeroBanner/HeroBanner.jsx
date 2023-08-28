import React from "react";
import { Box,  IconButton,  useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const HeroBanner = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation("home");
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const isRTL = i18n.language === 'ar';

  const renderImages = (media) => {
    const imageCount = t(`heroBanner.count`);
    const images = [];

    for (let i = 0; i < imageCount; i++) {
      images.push(t(`heroBanner.${media}.${i}`));
    }
    return images;
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: isRTL
  };

  return (
    <Box sx={{pb:4, maxWidth: "100%", overflowX: "hidden", overflowY: "auto"}}>
      <Slider {...settings}>
      
        {renderImages(isMobile ? "mobile" : "desktop").map((image, index) => (
          <Box key={index}>
              <img
              src={image}
              alt={`${isMobile ? "mobile" : "desktop"} Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fit",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroBanner;
