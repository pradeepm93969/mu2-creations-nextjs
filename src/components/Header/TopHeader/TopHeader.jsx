import React from "react";
import { Box, Typography, AppBar, Grid } from "@mui/material";
import { useTranslation } from "next-i18next";
import LanguageDropdown from "./LanguageDropdown";
import CustomPhoneNumber from "../../../components-ui/common/CustomPhoneNumber";
import CustomEmail from "../../../components-ui/common/CustomEmail";
import CustomWhatsApp from "../../../components-ui/common/CustomWhatsApp";

const TopHeader = () => {
  const { t } = useTranslation("common");
  const topHeaderEnabled = t("header.topHeader.enabled");

  return (
    <>
      {topHeaderEnabled && (
        <AppBar position="static">
          <Grid
            container
            sx={{
              height: "40px",
              backgroundColor: "grey.900",
              color: "common.white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              item xs={12} md={5}
              sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, paddingX: {xs: 0, md: 6} }}
            >
              <Typography variant="body1" noWrap>
                {t("header.topHeader.text")}
              </Typography>
            </Grid>

            <Grid item md={5}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "space-around",
              }}
            >
              <CustomPhoneNumber phoneNumber={t("company.phonenumber")} />
              <CustomEmail emailAddress={t("company.email")} />
              {/* <LanguageDropdown /> */}
              <CustomWhatsApp phoneNumber={t("company.whatsappNumber")} />
            </Grid>
          </Grid>
        </AppBar>
      )}
    </>
  );
};

export default TopHeader;
