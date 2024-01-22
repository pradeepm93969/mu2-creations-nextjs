import React from "react";
import { Box, Typography } from "@mui/material";
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
          <Box
            sx={{
              height: "40px",
              backgroundColor: "grey.900",
              color: "common.white",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Box
              sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }}}
            >
              <Typography variant="body1" noWrap>
                {t("header.topHeader.text")}
              </Typography>
            </Box>

            <Box 
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <CustomPhoneNumber phoneNumber={t("company.phonenumber")} />
              
            </Box>
            
            <Box
              sx={{
                display: { xs: "none", md: "flex" }
              }}
            >
              <CustomEmail emailAddress={t("company.email")} />
              
            </Box>

            <Box item md={6}
              sx={{
                display: { xs: "none", md: "flex" }
              }}
            >
              <CustomWhatsApp phoneNumber={t("company.whatsappNumber")} />
              
            </Box>


            
              {/* <LanguageDropdown /> */}
              
          </Box>
      )}
    </>
  );
};

export default TopHeader;
