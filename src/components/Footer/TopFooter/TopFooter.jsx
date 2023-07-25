import React from "react";
import { Box, Typography, Grid, Divider, useMediaQuery } from "@mui/material";
import { Phone, Chat, Email } from "@mui/icons-material";
import { useTranslation } from "next-i18next";

const TopFooter = () => {
  const handleLinkClick = (href) => {
    window.open(href);
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const { t } = useTranslation("common");
  const topFooterEnabled = t('footer.topFooter.enabled');

  return (
    <>
      {topFooterEnabled && (
        <Box
          py={2}
          sx={{
            px: {xs:0, sm:20},
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "primary.main",
            color: "common.white",
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs />
            <Grid item sm={2} sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", textTransform: "uppercase", fontSize: {xs: "1rem", sm: "1.125rem"} }}
              >
                {t("footer.topFooter.helpText")}
              </Typography>
            </Grid>
            <Grid item xs={5} sm={2}>
              
              <Typography
                variant="body1"
                align="center"
                onClick={() => handleLinkClick("tel:" + t("company.phonenumber"))}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: {xs: "1rem", sm: "1.125rem"}
                }}
              >
                <Phone sx={{ mx: 1 }} />
                {t("company.phonenumber")}
              </Typography>
            </Grid>
            <Divider color="white" orientation="vertical" flexItem />
            <Grid item xs={5} sm={2}>
              <Typography
                variant="body1"
                align="center"
                onClick={() =>
                  handleLinkClick("mailto:" + t("company.email"))
                }
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: {xs: "1rem", sm: "1.125rem"}
                }}
              >
                <Email sx={{ mx: 1 }} />
                {isMobile ? t("footer.topFooter.emailUs") : t("company.email")}
              </Typography>
            </Grid>
            <Grid item xs />
          </Grid>
        </Box>
      )}
      
    </>
  );
};

export default TopFooter;
