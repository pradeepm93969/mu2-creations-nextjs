import React from "react";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";
import CentralImageCarousal from "../../components-ui/carousel/CentralImageCarousal";

const HeroBanner = () => {
  const { t } = useTranslation("home");
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const images = isMobile
    ? t(`heroBanner.mobile`, { returnObjects: true })
    : t(`heroBanner.desktop`, { returnObjects: true });

  return <CentralImageCarousal images={images} />;
};

export default HeroBanner;
