import React from "react";
import { Box, Typography, Button, useMediaQuery, Grid, Slide } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';

const AboutUs = ({ isAboutUs }) => {
  const { t } = useTranslation("home");
  const router = useRouter();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const handleButtonClick = () => {
    router.push('/about-us');
  };

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
          <Grid item md={6}>
            <Box sx={{ px: { xs: 2, md: 10 }, my: {xs: 2, md: 4} }}>
              <Typography variant="body1" sx={{ pt: 2, textAlign: "justify" }}>
                {t("about-us.text1")}
              </Typography>
              {(!isMobile || isAboutUs) && (
                <Typography variant="body1" sx={{ py: 3, textAlign: "justify" }}>
                  {t("about-us.text2")}
                </Typography>
              )}
              {!isAboutUs && (
                <Box sx={{ py: 3, display: "flex", justifyContent: "center" }}>
                  <Button size="large" variant="contained" color="primary" onClick={handleButtonClick}>
                    {t("about-us.viewMoreButton")}
                  </Button>
                </Box>
              )}
            </Box>
          </Grid>
        </Slide>
        <Slide direction="left" in={true} timeout={500} mountOnEnter unmountOnExit>
          <Grid item md={6}>
            <Box
              sx={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                overflow: "hidden",
                borderRadius: "8px",
                textAlign: "center",
                maxWidth: "100%",
                height: { xs: "300px", md: "400px" },
                my: {xs: 0, md: 4}
              }}
            >
              <img src={t("about-us.image1")} alt="About Us 2" style={{width: "100%", height: "100%", objectFit: "fill" }} />
            </Box>
          </Grid>
        </Slide>
        {(isAboutUs && !isMobile) && (
          <Slide direction="right" in={isAboutUs} timeout={500} mountOnEnter unmountOnExit>
            <Grid item md={6}>
              <Box
                sx={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                  overflow: "hidden",
                  borderRadius: "8px",
                  textAlign: "center",
                  maxWidth: "100%",
                  height: { xs: "300px", md: "400px" },
                  my: 1,
                }}
              >
                <img src={t("about-us.image1")} alt="About Us 1" style={{ width: "100%", height: "100%", objectFit: "fill" }} />
              </Box>
            </Grid>
          </Slide>
        )}
        {isAboutUs && (
          <Slide direction="left" in={isAboutUs} timeout={500} mountOnEnter unmountOnExit>
            <Grid item md={6}>
              <Box sx={{ px: { xs: 2, md: 10 }, py: 4 }}>
                <Typography variant="body1" sx={{ pb: 2, textAlign: "justify" }}>
                  {t("about-us.text3")}
                </Typography>
                <Typography variant="body1" sx={{ pb:{xs: 0, md: 2}, textAlign: "justify" }}>
                  {t("about-us.text4")}
                </Typography>
              </Box>
            </Grid>
          </Slide>
        )}
        {(isAboutUs && isMobile) && (
          <Slide direction="right" in={isAboutUs} timeout={500} mountOnEnter unmountOnExit>
            <Grid item md={6}>
              <Box
                sx={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                  overflow: "hidden",
                  borderRadius: "8px",
                  textAlign: "center",
                  maxWidth: "100%",
                  height: { xs: "300px", md: "450px" },
                  mb: 1,
                }}
              >
                <img src={t("about-us.image1")} alt="About Us 1" style={{ width: "100%", height: "100%", objectFit: "fill" }} />
              </Box>
            </Grid>
          </Slide>
        )}
      </Grid>
    </Box>
  );
};

export default AboutUs;
