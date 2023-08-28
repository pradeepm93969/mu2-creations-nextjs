import React from "react";
import { Box, Typography, Button, useMediaQuery, Grid, Slide, Card, CardMedia, CardContent, IconButton } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';
import Link from "next/link";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const Service = ({ isServicePage }) => {
  const { t } = useTranslation("service");
  const { i18n } = useTranslation();

  const router = useRouter();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const isRTL = i18n.language === 'ar';

  const renderServices = () => {
    const serviceCount = t(`count`);
    const services = [];
  
    for (let i = 0; i < serviceCount; i++) {
      const service = {
        id: t(`service-children.${i}.id`),
        header: t(`service-children.${i}.header`),
        cardContent: t(`service-children.${i}.cardContent`),
        cardImage: t(`service-children.${i}.cardImage`),
      };
      services.push(service);
    }
  
    return services;
  };

  const CustomCard = ({ header, text, link, image }) => {
    return (
      <Card sx={{ maxWidth: {xs: 300, md: 300}, p: 0, pb: 4, mt: {xs: 1, md: 2}, mb: {xs:4, md: 8} }} raised>
        <CardMedia component="img" height="200" image={image} alt="Header Image" />
        <CardContent>
          <Typography variant="h4" sx={{ fontWeight: "bold", py: 2 }} noWrap >{header}</Typography>
          <Typography variant="body1" sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "4",
            WebkitBoxOrient: "vertical",
          }}>{text}</Typography>
        </CardContent>
        <Link href={link} target="_blank" rel="noopener" color="inherit" underline="hover">
            {t("details")}
        </Link>
      </Card>
    );
  };

  const CustomPrevArrow = ({ onClick }) => (
    <IconButton onClick={onClick} sx={{ position: "absolute", top: "50%", left: "-2%", transform: "translateY(-50%)", 
     backgroundColor: "rgba(0, 0, 0, 0.2)", zIndex: 200 }}>
      <KeyboardArrowLeft />
    </IconButton>
  );
  
  const CustomNextArrow = ({ onClick }) => (
      <IconButton onClick={onClick} sx={{ position: "absolute", top: "50%", right: "-2%", transform: "translateY(-50%)", backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        <KeyboardArrowRight />
      </IconButton>
  );

  const settings = {
    dots: isMobile,
    infinite: true,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: isRTL,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
  };

  const services = renderServices();

  return (
    <Box sx={{ px: { xs: 3, md: 30 }, py: 3, maxWidth: "100%" }}>
      <Typography variant="h2" color="primary.dark" sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}>
        {t("header")}
      </Typography>
      <Typography variant="h4" color="primary.dark" sx={{ fontStyle: "italic", fontWeight: "bold", textAlign: "center", mb: 4 }}>
        {t("subHeader")}
      </Typography>

      
      {!isServicePage ? (
        <Box sx={{ px: { xs: 1, md: 8 }}}>
          <Slider {...settings}>
            {services.map((service, serviceIndex) => (
              <Box key={serviceIndex} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', mx: 2 }}>
                {CustomCard({ 
                  header: service.header,
                  text: service.cardContent,
                  image: service.cardImage,
                  link: "/services/" + service.id
                })}
              </Box>
            ))}
          </Slider>
        </Box>
      ) : (
        <Grid container spacing={4}>
            {services.map((service) => (
              <Grid item xs={12} md={3} key={service.id} sx={{textAlign: "center", display: "flex", justifyContent: "center"}}>
                {CustomCard({ 
                    header: service.header,
                    text: service.cardContent,
                    image: service.cardImage,
                    link: "/services/" + service.id
                })}
              </Grid>
            ))}
        </Grid>
      )}
     
    </Box>
  );
};

export default Service;
