import React from "react";
import { Box, Typography, Grid, Slide, useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";
import ImageCard from "../../components-ui/card/ImageCard";

const AboutUs = () => {
  const { t } = useTranslation("home");
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box sx={{ px: { xs: 3, md: 30 }, py: 3, maxWidth: "100%" }}>
      <Typography variant="h2" color="primary.dark" sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}>
        {t("about-us.header")}
      </Typography>
      <Typography variant="h4" color="primary.dark" sx={{ fontStyle: "italic", fontWeight: "bold", textAlign: "center" }}>
        {t("about-us.subHeader")}
      </Typography>

      <Grid container spacing={2}>
        <Slide direction="right" in={true} timeout={500} mountOnEnter unmountOnExit>
          <Grid item sm={6}>
            <Box sx={{ px: { xs: 2, md: 10 }, my: {xs: 2, md: 4} }}>
              <Typography variant="body1" sx={{ pt: 2, textAlign: "justify" }}>
                {t("about-us.text1")}
              </Typography>
            </Box>
          </Grid>
        </Slide>
        <Slide direction="left" in={true} timeout={500} mountOnEnter unmountOnExit>
          <Grid item sm={6} sx={{my: {sm: 5, md: 0}}}>
            <ImageCard src={t("about-us.image1")} alt={t("about-us.header")}/>
          </Grid>
        </Slide>
        {!isMobile && (
          <Slide direction="right" in={true} timeout={500} mountOnEnter unmountOnExit>
            <Grid item sm={6}  sx={{my: {sm: 5, md: 0}}}>
              <ImageCard src={t("about-us.image2")} alt={t("about-us.header")}/>
            </Grid>
          </Slide>
        )}
        
        <Slide direction="left" in={true} timeout={500} mountOnEnter unmountOnExit>
          <Grid item sm={6}>
            <Box sx={{ px: { xs: 2, md: 10 }, py: 4 }}>
              <Typography variant="body1" sx={{ pb: 2, textAlign: "justify" }}>
                {t("about-us.text2")}
              </Typography>
            </Box>
          </Grid>
        </Slide>

        {isMobile && (
          <Slide direction="right" in={true} timeout={500} mountOnEnter unmountOnExit>
            <Grid item sm={6}  sx={{my: {sm: 5, md: 0}}}>
              <ImageCard src={t("about-us.image2")} alt={t("about-us.header")}/>
            </Grid>
          </Slide>
        )}
      </Grid>
    </Box>
  );
};

export default AboutUs;
