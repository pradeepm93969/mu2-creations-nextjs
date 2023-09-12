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

      <Grid container>

        <Slide direction="right" in={true} timeout={500} mountOnEnter unmountOnExit>
          <Grid item sm={6}>
            <Box sx={{ px: { xs: 2, md: 10 }, my: {xs: 2, md: 4} }}>
              <Typography variant="body1" sx={{ pt: 2, textAlign: "justify" }}>
                {t("about-us.text1")}
              </Typography>
              
              <Box sx={{ py: 3, display: "flex", justifyContent: "center" }}>
                <CustomButton text={t("about-us.viewMoreButton")} link={"/about-us"} size={"large"}/>
              </Box>
            </Box>
          </Grid>
        </Slide>

        <Slide direction="left" in={true} timeout={500} mountOnEnter unmountOnExit>
          <Grid item sm={6} sx={{py: {sm: 5, md: 3}, px: {sm: 1} }}>
            <ImageCard src={t("about-us.image1")} alt={t("about-us.header")}/>
          </Grid>
        </Slide>
        
      </Grid>
    </Box>
  );
};

export default AboutUsHome;
