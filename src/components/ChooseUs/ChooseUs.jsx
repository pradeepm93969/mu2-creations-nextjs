import React from "react";
import { Box, Typography, useMediaQuery, Grid, Card, CardHeader, CardContent } from "@mui/material";
import { useTranslation } from "next-i18next";

const ChooseUs = () => {
  const { t } = useTranslation("home");

  const CustomCard = ({ header, text, backgroundGradient }) => {
    return (
      <Card sx={{ maxWidth: 300 }} raised>
        <CardHeader
          sx={{ background: backgroundGradient, 
          color: "common.white",
          height: {md: "80px"}, // Set the desired height for the card header
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center" }}
          title={<Typography variant="h4" sx={{ fontWeight: "bold" }}>{header}</Typography>}
        />
        <CardContent >
          <Typography variant="body1">{text}</Typography>
        </CardContent>
      </Card>
    );
  };

  return (
    <Box sx={{ px: { xs: 3, md: 40 }, py: 3, maxWidth: "100%", backgroundColor: "#eceff1" }}>
      <Typography variant="h2" color="primary.dark" sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}>
        {t("why-choose-us.header")}
      </Typography>
      <Typography variant="h4" color="primary.dark" sx={{ fontStyle: "italic", fontWeight: "bold", textAlign: "center", pb: { xs: 4, md: 6 } }}>
        {t("why-choose-us.subHeader")}
      </Typography>

      <Grid container sx={{ display: "flex", justifyContent: "center", pb: 2 }}>
        <Grid item xs={12} md={4} sx={{ textAlign: "center", display: "flex", justifyContent: "center", mb: 2 }}>
          {CustomCard({ header: t("why-choose-us.children.0.header"), text: t("why-choose-us.children.0.text"), backgroundGradient: "linear-gradient(180deg, #1976d2, #000)" })}
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: "center", display: "flex", justifyContent: "center", mb: 2 }}>
          {CustomCard({ header: t("why-choose-us.children.1.header"), text: t("why-choose-us.children.1.text"), backgroundGradient: "linear-gradient(180deg, #ffc107, #000)" })}
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: "center", display: "flex", justifyContent: "center", mb: {md: 2}}}>
          {CustomCard({ header: t("why-choose-us.children.2.header"), text: t("why-choose-us.children.2.text"), backgroundGradient: "linear-gradient(180deg, #9c27b0, #000)" })}
        </Grid>
      </Grid>

    </Box>
  );
};

export default ChooseUs;
