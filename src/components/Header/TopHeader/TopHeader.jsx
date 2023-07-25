import React from "react";
import { Box, Typography, Grid, Slide, AppBar } from "@mui/material";
import { useTranslation } from "next-i18next";
import SupportDropdown from './SupportDropdown';
import LanguageDropdown from './LanguageDropdown';
import { Email, Phone } from "@mui/icons-material";

const TopHeader = () => {

  const { t } = useTranslation("common");
  const topHeaderEnabled = t('header.topHeader.enabled');

  const handleLinkClick = (href) => {
    window.open(href);
  };

  return (
    <>
      {topHeaderEnabled && (
        <AppBar position="static">
          <Box sx={{ px: {xs:0, sm:20}, height: "40px", backgroundColor: "common.black", color: "common.white" }}>

            <Grid container>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  alignItems: "center",
                }}
              >
                <Typography variant="body1" sx={{px: {xs: 2, sm: 10}, py:1}} noWrap>{t('header.topHeader.text')}</Typography>
              </Grid>


              <Grid
                item
                xs={12}
                md={2}
                sx={{
                  px: {xs:0, sm:6},
                  justifyContent: { xs: "center", md: "flex-start" },
                  display: {xs:"none", md:"flex"},
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body1"
                  align="center"
                  onClick={() => handleLinkClick("tel:" + t("company.phonenumber"))}
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-start" },
                    alignItems: "center",
                  }}
                >
                  <Phone sx={{ mx: 1 }} />
                  {t("company.phonenumber")}
                </Typography>
                
              </Grid>
              <Grid
                item
                xs={12}
                md={2}
                sx={{
                  px: {xs:0, sm:6},
                  justifyContent: { xs: "center", md: "flex-start" },
                  display: {xs:"none", md:"flex"},
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body1"
                  align="center"
                  onClick={() =>
                    handleLinkClick("mailto:" + t("company.email"))
                  }
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-start" },
                    alignItems: "center",
                  }}
                >
                  <Email sx={{ mx: 1 }} />
                  {t("company.email")}
                </Typography>
                
              </Grid>
              <Grid
                item
                xs={12}
                md={2}
                sx={{
                  px: {xs:0, sm:6},
                  justifyContent: { xs: "center", md: "flex-end" },
                  display: {xs:"none", md:"flex"},
                  alignItems: "center",
                }}
              > 
                <LanguageDropdown />
              </Grid>
            </Grid>
          </Box>
        </AppBar>
      )}
      
    </>
    
  );
};

export default TopHeader;
