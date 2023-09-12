import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { useTranslation } from "next-i18next";

const BottomFooter = () => {

  const { t } = useTranslation("common");
  const bottomFooterEnabled = t('footer.bottomFooter.enabled');

  return (
    <>
      {bottomFooterEnabled && (
        <Box sx={{ px: {xs:0, sm:20}, backgroundColor: "grey.900", color: "common.white" }}>

        <Divider sx={{ mx: 2 }} color="white" flexItem />

        <Box>
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                py: 2,
                justifyContent: { xs: "center"},
                display: "flex",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              <Typography variant="body1" sx={{py: {xs:2, lg:0}}}>
                  © {t("company.name")} {new Date().getFullYear()} - {t("footer.bottomFooter.developedBy")} 
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      )}
      
    </>
  );
};

export default BottomFooter;
