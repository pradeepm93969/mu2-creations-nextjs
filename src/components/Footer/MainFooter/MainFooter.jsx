import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Email, Facebook, Instagram, LinkedIn, Phone, Pin, Place, Twitter } from "@mui/icons-material";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const MainFooter = () => {
  const { t } = useTranslation("common");

  const handleLinkClick = (href) => {
    window.open(href);
  };

  const renderChildLinks = (column) => {
    const childLinksCount = t(`footer.mainFooter.${column}.count`);
    const links = [];

    for (let i = 0; i < childLinksCount; i++) {
      const link = (
        <div key={t(`footer.mainFooter.${column}.childLinks.${i}.label`)}>
          <Link
            href={t(`footer.mainFooter.${column}.childLinks.${i}.href`)}
            passHref
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography
              variant="body1"
              sx={{
                px: 2,
                pb: 2,
                display: "flex",
                justifyContent: { xs: "center", lg: "flex-start" },
              }}
            >
              {t(`footer.mainFooter.${column}.childLinks.${i}.label`)}
            </Typography>
          </Link>
        </div>
      );

      links.push(link);
    }

    return links;
  };

  return (
    <>
      <Box
        sx={{
          py: 2,
          px: { xs: 0, sm: 20 },
          backgroundColor: "common.black",
          color: "common.white",
        }}
      >
        <Grid container px={3}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              py: 2,
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-start" },
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="h2"
                sx={{
                  pb: 2,
                  px: 2,
                  display: "flex",
                  justifyContent: { xs: "center", lg: "flex-start" },
                  fontWeight: "Bold",
                }}
              >
                {t("company.name")}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  px: 2,
                  display: "flex",
                  justifyContent: { xs: "center", lg: "flex-start" },
                  maxHeight: "calc(1.5em * 6)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineClamp: 6,
                  WebkitLineClamp: 6, // for Safari support
                  WebkitBoxOrient: "vertical", // for Safari support}>
                  textAlign: "justify",
                  width: {xs: "100%", md: "75%"},
                }}
              >
                {t("footer.mainFooter.about")}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", lg: "flex-start" },
                  alignItems: "center",
                  m: 2,
                  mt: 4
                }}
              >
                <Link
                  href={t("company.facebookLink")}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Facebook sx={{ mr: 2 }} fontSize="large" color="primary" />
                </Link>
                <Link
                  href={t("company.twitterLink")}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Twitter sx={{ mr: 2 }} fontSize="large" color="primary" />
                </Link>
                <Link
                  href={t("company.instaLink")}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Instagram sx={{ mr: 2 }} fontSize="large" color="primary" />
                </Link>
                <Link
                  href={t("company.hrefdinLink")}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <LinkedIn sx={{ mr: 2 }} fontSize="large" color="primary" />
                </Link>
              </Box>
            </Box>
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
            md={2}
            sx={{
              py: 2,
              px: {xs: 0, md: 2},
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-start" },
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{
                  pb: 2,
                  px: 2,
                  display: "flex",
                  justifyContent: { xs: "center", lg: "flex-start" },
                  fontWeight: "Bold",
                }}
              >
                {t("footer.mainFooter.column1.label")}
              </Typography>

              {renderChildLinks("column1")}
            </Box>
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
            md={2}
            sx={{
              py: 2,
              px: {xs: 0, md: 2},
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-start" },
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{
                  pb: 2,
                  px: 2,
                  display: "flex",
                  justifyContent: { xs: "center", lg: "flex-start" },
                  fontWeight: "Bold",
                }}
              >
                {t("footer.mainFooter.column2.label")}
              </Typography>
              {renderChildLinks("column2")}
            </Box>
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
            sm={4}
            sx={{
              py: 2,
              px: {xs: 0, md: 6},
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-start" },
            }}
          >
            <Box sx={{ width: "100%" }}>

              <Typography
                variant="h3"
                sx={{
                  pb: 2,
                  px: 2,
                  display: "flex",
                  justifyContent: { xs: "center", lg: "flex-start" },
                  fontWeight: "Bold",
                }}
              >
                {t("footer.mainFooter.contactUs")}
              </Typography>

              <Typography
                variant="body1"
                align="center"
                onClick={() =>
                  handleLinkClick("mailto:" + t("company.email"))
                }
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: { xs: "center", lg: "flex-start" },
                  alignItems: "center",
                  py: {xs: 1, md: 0},
                  px: 1
                }}
              >
                <Email sx={{ mx: 1 }} />
                {t("company.email")}
              </Typography>

              <Divider
                sx={{ width: "75%", display: { xs: "none", md: "flex" }, my: 1 }}
                color="white"
                orientation="horizontal"
                variant="middle"
              />


              <Typography
                variant="body1"
                onClick={() => handleLinkClick("tel:" + t("company.phonenumber"))}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: { xs: "center", lg: "flex-start" },
                  alignItems: "center",
                  py: {xs: 1, md: 0},
                  px: 1
                }}
              >
                <Phone sx={{ mx: 1 }} />
                {t("company.phonenumber")}
              </Typography>

              <Divider
                sx={{ width: "75%", display: { xs: "none", md: "flex" }, my: 1 }}
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
                  justifyContent: { xs: "center", lg: "flex-start" },
                  alignItems: "center",
                  py: {xs: 1, md: 0},
                  px: 1,
                  textAlign: "justify",
                  width: {xs: "100%", md: "75%"} 
                }}
              >
                <Place sx={{ mx: 1 }} />
                {t("company.address")}
              </Typography>

              <Divider
                sx={{ width: {xs: "100%", md: "75%"} , display: { xs: "none", md: "flex" }, my: 1 }}
                color="white"
                orientation="horizontal"
                variant="middle"
              />

              <Typography
                variant="body1"
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", lg: "flex-start" },
                  fontWeight: "Bold",
                  py: {xs: 1, md: 0},
                  px: 3
                }}
              >
                {t("footer.mainFooter.column3.text1")}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  px: 3,
                  display: "flex",
                  justifyContent: { xs: "center", lg: "flex-start" }
                }}
              >
                {t("footer.mainFooter.column3.text2")}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MainFooter;
