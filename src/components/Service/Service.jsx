import React from "react";
import { Box, Typography, Button, useMediaQuery, Grid, Slide, Card, CardMedia, CardContent, IconButton } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const Service = ({ isServicePage }) => {
  const { t } = useTranslation("service");
  const router = useRouter();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

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
      <Card sx={{ maxWidth: {xs: 300, md: 300}, p: 2, pb: 4, mt: {xs: 1, md: 2}, mb: {md: 8} }} raised>
        <CardMedia component="img" height="200" image={image} alt="Header Image" />
        <CardContent>
          <Typography variant="h4" sx={{ fontWeight: "bold", py: 2 }}>{header}</Typography>
          <Typography variant="body1">{text}</Typography>
        </CardContent>
        <Link href={link} target="_blank" rel="noopener" color="inherit" underline="hover">
            {t("details")}
        </Link>
      </Card>
    );
  };

  const CustomPrevArrow = ({ onClick }) => (
    <IconButton onClick={onClick} sx={{ position: "absolute", top: "50%", left: "0", transform: "translateY(-50%)", zIndex: 500 }}>
      <KeyboardArrowLeft />
    </IconButton>
  );
  
  const CustomNextArrow = ({ onClick }) => (
    <IconButton onClick={onClick} sx={{ position: "absolute", top: "50%", right: "0", transform: "translateY(-50%)" }}>
      <KeyboardArrowRight />
    </IconButton>
  );

  const services = renderServices();
  const itemsPerSlide = isMobile ? 1 : 6;
  const numSlides = Math.ceil(services.length / itemsPerSlide);

  return (
    <Box sx={{ px: { xs: 3, md: 30 }, py: 3, maxWidth: "100%" }}>
      <Typography variant="h2" color="primary.dark" sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}>
        {t("header")}
      </Typography>
      <Typography variant="h4" color="primary.dark" sx={{ fontStyle: "italic", fontWeight: "bold", textAlign: "center", mb: 4 }}>
        {t("subHeader")}
      </Typography>

      {!isServicePage ? (
        <Carousel
          showStatus={false}
          showThumbs={false}
          showArrows={true}
          showIndicators={true}
          infiniteLoop
          autoPlay
          interval={3000}
          centerMode
          centerSlidePercentage={90}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <CustomPrevArrow onClick={onClickHandler} />
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <CustomNextArrow onClick={onClickHandler} />
            )
          }
        >
          {Array.from({ length: numSlides }).map((_, slideIndex) => (
            <Box key={slideIndex} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', pb: { xs: 5, md: 0 } }}>
              <Grid container>
                {services.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((service, serviceIndex) => (
                  <Grid item xs={12} md={4} key={serviceIndex} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                    {CustomCard({ 
                      header: service.header,
                      text: service.cardContent,
                      image: service.cardImage,
                      link: "/services/" + service.id
                    })}
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Carousel>
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
