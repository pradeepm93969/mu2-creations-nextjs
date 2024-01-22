import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { useTranslation } from "next-i18next";
import CustomPhoneNumber from "../../../components-ui/common/CustomPhoneNumber";
import CustomEmail from "../../../components-ui/common/CustomEmail";

const TopFooter = () => {

  const { t } = useTranslation("common");
  const topFooterEnabled = t('footer.topFooter.enabled');

  return (
    <>
      {topFooterEnabled && (
        <Box
          py={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor: "primary.main",
            color: "common.white",
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", textTransform: "uppercase", fontSize: {xs: "1rem", sm: "1.125rem"},
            display: {xs: "none", sm: "block"} }}
          >
            {t("footer.topFooter.helpText")}
          </Typography>
          <Box/>
          <CustomPhoneNumber phoneNumber={t("company.phonenumber")} />
          <Divider color="white" orientation="vertical" flexItem />
          <CustomEmail emailAddress={t("company.email")} />
          
        </Box>
      )}
      
    </>
  );
};

export default TopFooter;
