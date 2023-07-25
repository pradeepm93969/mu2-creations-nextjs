import React from "react";
import { Box, Typography, Button, useMediaQuery, Grid, Slide, Card, CardMedia, CardContent, IconButton, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';
import Link from "next/link";
import { ExpandMore } from "@mui/icons-material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ServiceDetail = ({ id }) => {
  const { t } = useTranslation("service");
  const router = useRouter();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const serviceData = t(`service:service-children`, { returnObjects: true }).find((service) => service.id === id);

  if (!serviceData) {
    // Handle the case where the id doesn't match any service
    return (
      <Box sx={{ px: { xs: 3, md: 30 }, py: 3, maxWidth: '100%' }}>
        <Typography variant="h2" color="primary.dark" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
          {t('service:notFound')}
        </Typography>
      </Box>
    );
  }

  const ImageBox = ({ imageSource, header, imageNumber }) => {
    const altText = `${header}-image${imageNumber}`;
  
    return (
      <Box
        sx={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          overflow: "hidden",
          borderRadius: "8px",
          textAlign: "center",
          maxWidth: "100%",
          height: { xs: "300px", md: "400px" },
          my: { xs: 2, md: 4 },
          mb: { xs: 6, md: 0 },
          mx: { xs: 1, md: 0},
        }}
      >
        <img src={imageSource} alt={altText} style={{ width: "100%", height: "100%", objectFit: "fill" }} />
      </Box>
    );
  };

  const { header, subHeader, accordianContent, pageContent1, pageContent2, pageImage1, pageImage2 } = serviceData;

  return (
    <Box sx={{ px: { xs: 3, md: 30 }, py: 3, maxWidth: "100%" }}>
      <Typography variant="h2" color="primary.dark" sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}>
        {t(`${header}`)}
      </Typography>
      <Typography variant="h4" color="primary.dark" sx={{ fontStyle: "italic", fontWeight: "bold", textAlign: "center", mb: 4 }}>
        {t(`${subHeader}`)}
      </Typography>

      <Grid container>
        <Slide direction="right" in={true} timeout={500} mountOnEnter unmountOnExit>
          <Grid item md={6} sx={{px: 2}}>
          {isMobile ? (
              <Carousel showStatus={false} showThumbs={false} showArrows={true} showIndicators={true} infiniteLoop autoPlay interval={3000}  centerMode centerSlidePercentage={90}>
                {ImageBox({ imageSource: `${pageImage1}`, header: `${header}`, imageNumber: 1 })}
                {ImageBox({ imageSource: `${pageImage2}`, header: `${header}`, imageNumber: 2 })}
              </Carousel>
            ) : (
              <Box>
                {ImageBox({ imageSource: `${pageImage1}`, header: `${header}`, imageNumber: 1 })}
                {ImageBox({ imageSource: `${pageImage2}`, header: `${header}`, imageNumber: 2 })}
              </Box>
            )}
            
          </Grid>
        </Slide>
        <Slide direction="left" in={true} timeout={500} mountOnEnter unmountOnExit>
          <Grid item md={6} sx={{px: { xs: 2, md: 10 }}}>
            <Box sx={{ my: {xs: 2, md: 4} }}>
              <Typography variant="body1" sx={{ pt: 2, textAlign: "justify" }}>
                {t(`${pageContent1}`)}
              </Typography>
            </Box>
            <Box sx={{ mb: {xs: 2, md: 8} }}>
              <Typography variant="body1" sx={{ pt: 2, textAlign: "justify" }}>
                {t(`${pageContent2}`)}
              </Typography>
            </Box>
            {accordianContent.map((accordianItem, index) => (
              <Box sx={{mb: {xs: 2, md: 6}}}> 
                <Accordion
                  key={index}
                  sx={{
                    mb: { xs: 2, md: 10 },
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
                  }}
                  defaultExpanded={true}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore sx={{ color: 'common.white' }} />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                    sx={{
                      backgroundColor: 'primary.dark'
                    }}
                  >
                    <Typography variant="h5" color='common.white'>
                      {t(accordianItem.header)}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1" color="text.primary">
                      {t(accordianItem.content)}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                </Box>
              ))}
     
          </Grid>
        </Slide>
        
      </Grid>

      
    </Box>
  );
};

export default ServiceDetail;
