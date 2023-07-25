import React from "react";
import { Box, Typography, useMediaQuery, Grid, Slide, IconButton } from "@mui/material";
import { useTranslation } from "next-i18next";
import { AdsClick, Diamond, RemoveRedEye } from "@mui/icons-material";

const Mission = () => {
  const { t } = useTranslation("home");
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const renderItem = ({ header, text, backgroundGradient }) => (
    isMobile ? (
      <Box
        sx={{
          my: { xs: 2},
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          overflow: "hidden",
          borderRadius: 4
        }}
      >
        <Grid container>
          <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center",
            background: backgroundGradient}}>
            <IconButton sx={{ backgroundColor: "common.white", color: "common.black" }}>
              {header === "Vision" && <RemoveRedEye fontSize="large" />}
              {header === "Mission" && <AdsClick fontSize="large" />}
              {header === "Value" && <Diamond fontSize="large" />}
            </IconButton>
          </Grid>
          <Grid item xs={8} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "common.white", p: 1, pt: 2 }}>
            <Typography variant="h3" color="common.black" sx={{ fontWeight: "bold" }}>
              {header}
            </Typography>
            <Typography variant="body1" color="common.black" sx={{ py: 1, px: 1, textAlign: "center" }}>
              {text}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    ) : (
      <Box
      sx={{
        my: { xs: 2, md: 4 },
        borderRadius: "50%",
        background: backgroundGradient,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        overflow: "hidden",
        width: 300,
        height: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ textAlign: "center", pb: 2 }}>
        <IconButton sx={{ backgroundColor: "common.white", color: "common.black" }}>
          {header === "Vision" && <RemoveRedEye fontSize="large" />}
          {header === "Mission" && <AdsClick fontSize="large" />}
          {header === "Value" && <Diamond fontSize="large" />}
        </IconButton>
      </Box>
      <Typography variant="h3" color="common.white" sx={{ pt: 2, textAlign: "center", fontWeight: "bold" }}>
        {header}
      </Typography>
      <Typography variant="body1" color="common.white" sx={{ py: 3, px: 5, textAlign: "center" }}>
        {text}
      </Typography>
    </Box>
    )
  );

  return (
    <Box sx={{ px: { xs: 3, md: 40 }, py: 3, maxWidth: "100%", backgroundColor: "#eceff1" }}>
      <Typography variant="h2" color="primary.dark" sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}>
        {t("mission.header")}
      </Typography>
      <Typography variant="h4" color="primary.dark" sx={{ fontStyle: "italic", fontWeight: "bold", textAlign: "center", pb: { xs: 2, md: 3 } }}>
        {t("mission.subHeader")}
      </Typography>

      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={12} md={4} sx={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
          {renderItem({ header: t("mission.children.0.header"), text: t("mission.children.0.text"), backgroundGradient: "linear-gradient(180deg, #1976d2, #000)" })}
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
          {renderItem({ header: t("mission.children.1.header"), text: t("mission.children.1.text"), backgroundGradient: "linear-gradient(180deg, #ffc107, #000)" })}
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
          {renderItem({ header: t("mission.children.2.header"), text: t("mission.children.2.text"), backgroundGradient: "linear-gradient(180deg, #9c27b0, #000)" })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Mission;
