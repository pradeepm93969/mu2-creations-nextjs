import React from "react";
import { Box,  useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroBanner = () => {
  const { t } = useTranslation("home");
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const renderImages = (media) => {
    const imageCount = t(`heroBanner.count`);
    const images = [];

    for (let i = 0; i < imageCount; i++) {
      images.push(t(`heroBanner.${media}.${i}`));
    }
    return images;
  };

  return (
    <Box>
      <Carousel showStatus={false} showThumbs={false} showArrows={true} showIndicators={true} infiniteLoop autoPlay interval={3000}>
      
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
      </Carousel>
    </Box>
  );
};

export default HeroBanner;
