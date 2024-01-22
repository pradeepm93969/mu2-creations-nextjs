import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { useTranslation } from "next-i18next";
import { Place } from "@mui/icons-material";
import CustomSocialLinks from "../../../components-ui/common/CustomSocialLinks";
import CustomEmail from "../../../components-ui/common/CustomEmail";
import CustomPhoneNumber from "../../../components-ui/common/CustomPhoneNumber";
import FooterColumn from "./FooterColumn";

const MainFooter = () => {
  const { t } = useTranslation("common");
  const footerLinks1 = t(`footer.mainFooter.column1`, { returnObjects: true });
  const footerLinks2 = t(`footer.mainFooter.column2`, { returnObjects: true });

  return (
    <>
      <Box
        sx={{
          py: 2,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: "grey.900",
          color: "common.white",
        }}
      >
        <Grid container sx={{display: "flex", mx: 1}}>
          <Grid
            item md={1}/>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              py: 2,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
              <Typography
                variant="h2"
                sx={{
                  pb: 2,
                  display: "flex",
                  justifyContent: { xs: "flex-start"},
                  fontWeight: "Bold",
                  mx:2
                }}
              >
                {t("company.name")}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center" },
                  maxHeight: "calc(1.5em * 6)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineClamp: 6,
                  WebkitLineClamp: 6, // for Safari support
                  WebkitBoxOrient: "vertical", // for Safari support}>
                  textAlign: "justify",
                  width: { xs: "90%", md: "75%" },
                  mx:2
                }}
              >
                {t("footer.mainFooter.about")}
              </Typography>

              <CustomSocialLinks
                facebookLink={t("company.facebookLink")}
                linkedinLink={t("company.linkdinLink")}
                instagramLink={t("company.instaLink")}
                twitterLink={t("company.twitterLink")}
              />
          </Grid>

          <Divider
            sx={{ width: "100%", display: { xs: "flex", sm: "none" }, mx: 0 }}
            color="white"
            orientation="horizontal"
            variant="middle"
          />

          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            sx={{
              py: 2,
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-start" },
            }}
          >
            <FooterColumn input={footerLinks1}/>
          </Grid>

          <Divider
            sx={{ width: "100%", display: { xs: "flex", md: "none" }, mx: 0 }}
            color="white"
            orientation="horizontal"
            variant="middle"
          />

          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            sx={{
              py: 2,
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-start" },
            }}
          >
            <FooterColumn input={footerLinks2}/>
          </Grid>

          <Divider
            sx={{ width: "100%", display: { xs: "flex", sm: "none" }, mx: 0 }}
            color="white"
            orientation="horizontal"
            variant="middle"
          />

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              py: 2,
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  pb: 2,
                  px: 2,
                  display: "flex",
                  justifyContent: { xs: "center", sm: "flex-start" },
                  fontWeight: "Bold",
                }}
              >
                {t("footer.mainFooter.contactUs")}
              </Typography>

              <Box sx={{ marginTop: 2, marginLeft: 1, display: "flex", justifyContent: { xs: "center", sm: "flex-start" } }}>
                <CustomEmail emailAddress={t("company.email")} />
              </Box>

              <Divider
                sx={{
                  width: "75%",
                  display: { xs: "none", md: "flex" },
                  my: 1,
                }}
                color="white"
                orientation="horizontal"
                variant="middle"
              />

              <Box sx={{ marginTop: 2, marginLeft: 1, display: "flex", justifyContent: { xs: "center", sm: "flex-start" } }}>
                <CustomPhoneNumber phoneNumber={t("company.phonenumber")} />
              </Box>
              <Divider
                sx={{
                  width: "75%",
                  display: { xs: "none", md: "flex" },
                  my: 1,
                }}
                color="white"
                orientation="horizontal"
                variant="middle"
              />

              <Typography
                variant="body1"
                align="center"
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: { xs: "center", sm: "flex-start" },
                  alignItems: "center",
                  marginTop: 2, marginLeft: 1,
                  textAlign: "justify",
                  width: { xs: "100%", md: "75%" },
                }}
              >
                <Place sx={{ mx: 1 }} />
                {t("company.address")}
              </Typography>

              {/* <Divider
                sx={{
                  width: { xs: "100%", md: "75%" },
                  display: { xs: "none", md: "flex" },
                  my: 1,
                }}
                color="white"
                orientation="horizontal"
                variant="middle"
              />

              <Typography
                variant="body1"
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "flex-start" },
                  fontWeight: "Bold",
                  py: { xs: 1, md: 0 },
                  px: 3,
                }}
              >
                {t("footer.mainFooter.column3.text1")}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  px: 3,
                  display: "flex",
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
                {t("footer.mainFooter.column3.text2")}
              </Typography> */}
            </Box>
          </Grid>

          <Grid
            item md={1}/>
        </Grid>
      </Box>
    </>
  );
};

export default MainFooter;
