import React from "react";
import { Box, Typography, Grid, Slide } from "@mui/material";
import { useTranslation } from "next-i18next";
import CustomButton from "../../components-ui/form/CustomButton";
import ImageCard from "../../components-ui/card/ImageCard";

const AboutUsHome = () => {
  const { t } = useTranslation("home");
  
  return (
    <Box sx={{ px: { xs: 3, md: 30 }, py: 3, maxWidth: "100%" }}>
      <Typography variant="h2" color="primary.dark" sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}>
        {t("about-us.header")}
      </Typography>
      <Typography variant="h4" color="primary.dark" sx={{ fontStyle: "italic", fontWeight: "bold", textAlign: "center" }}>
        {t("about-us.subHeader")}
      </Typography>

      <Box sx={{my: 5}}/>

      <Grid container spacing={4}>
        <Slide direction="right" in={true} timeout={500} mountOnEnter unmountOnExit>
          <Grid item sm={6}>
            <Box sx={{px: {md: 5}}}>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                {t("about-us.text1")}
              </Typography>
              
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CustomButton text={t("about-us.viewMoreButton")} link={"/about-us"} size={"large"}/>
              </Box>
            </Box>
          </Grid>
        </Slide>

        <Slide direction="left" in={true} timeout={500} mountOnEnter unmountOnExit>
          <Grid item sm={6}>
            <ImageCard src={t("about-us.image1")} alt={t("about-us.header")}/>
          </Grid>
        </Slide>
        
      </Grid>

      <Box sx={{my: 2}}/>
    </Box>
  );
};

export default AboutUsHome;
