import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const BottomFooter = () => {

  const { t } = useTranslation("common");
  const bottomFooterEnabled = t('footer.bottomFooter.enabled');

  return (
    <>
      {bottomFooterEnabled && (
        <Box sx={{ px: {xs:0, sm:20}, backgroundColor: "common.black", color: "common.white" }}>

        <Divider sx={{ mx: 2 }} color="white" flexItem />

        <Box>
          <Grid container>
            {/* <Grid
              item
              xs={12}
              lg={6}
              sx={{
                py: 2,
                px: {xs:0, sm:2},
                display: "flex",
                justifyContent: { xs: "center", lg: "flex-start" },
                alignItems: "center",
              }}
            >
              <Link href={t('footer.bottomFooter.termsOfUse.href')} style={{ textDecoration: 'none', color: 'white' }}> 
                <Typography variant="body1" sx={{px: 2}}>{t('footer.bottomFooter.termsOfUse.label')}</Typography>
              </Link>
              
              <Divider color="white" orientation="vertical" flexItem />

              <Link href={t('footer.bottomFooter.privacyPolicy.href')} style={{ textDecoration: 'none', color: 'white' }}> 
                <Typography variant="body1" sx={{px: 2}}>{t('footer.bottomFooter.privacyPolicy.label')}</Typography>
              </Link>

              <Divider color="white" orientation="vertical" flexItem />

              <Link href={t('footer.bottomFooter.siteMap.href')} style={{ textDecoration: 'none', color: 'white' }}> 
                <Typography variant="body1" sx={{px: 2}}>{t('footer.bottomFooter.siteMap.label')}</Typography>
              </Link>

              
            </Grid> */}
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
