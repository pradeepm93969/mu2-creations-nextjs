import React from "react";
import { Box, Typography, Button, useMediaQuery, Grid, Slide, Card, CardMedia, CardContent, IconButton, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';
import { ExpandMore } from "@mui/icons-material";
import SEO from "../../layouts/SEO";
import ImageCard from "../../components-ui/card/ImageCard";

const ServiceDetail = ({ id }) => {
  const { t } = useTranslation("service", "common");
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const serviceData = t(`service:childItems`, { returnObjects: true }).find((service) => service.id === id);

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

  return (
    <>
    <SEO title={t("common:company.name") + " | " + serviceData.header} description={serviceData.pageContent1}/>

    <Box sx={{ px: { xs: 3, md: 30 }, py: 3, maxWidth: "100%" }}>
      <Typography variant="h2" color="primary.dark" sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}>
        {serviceData.header}
      </Typography>
      <Typography variant="h4" color="primary.dark" sx={{ fontStyle: "italic", fontWeight: "bold", textAlign: "center", mb: 4 }}>
        {serviceData.subHeader}
      </Typography>

      <Grid container>
        <Slide direction="right" in={true} timeout={500} mountOnEnter unmountOnExit>
          <Grid item sm={6} sx={{my: {sm: 5, md: 0}, px: 2}}>
            <ImageCard src={serviceData.pageImage1} alt={serviceData.header}/>
          </Grid>
        </Slide>
        <Slide direction="left" in={true} timeout={500} mountOnEnter unmountOnExit>
          <Grid item sm={6} sx={{px: { xs: 2, md: 10 }}}>
            <Box sx={{ my: {xs: 2, md: 4} }}>
              <Typography variant="body1" sx={{ pt: 2, textAlign: "justify" }}>
                {serviceData.pageContent1}
              </Typography>
            </Box>
            <Box sx={{ mb: {xs: 2, md: 8} }}>
              <Typography variant="body1" sx={{ pt: 2, textAlign: "justify" }}>
                {serviceData.pageContent2}
              </Typography>
            </Box>
            {serviceData.accordianContent.map((accordianItem, index) => (
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
    </>
  );
};

export default ServiceDetail;
