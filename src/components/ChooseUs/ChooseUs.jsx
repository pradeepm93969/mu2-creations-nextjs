import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "next-i18next";

const ChooseUs = () => {
  const { t } = useTranslation("home");
  const items = t(`why-choose-us.children`, {
    returnObjects: true,
  });

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTab = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const spacing = isMobile ? 0 : (isTab ? 1 : 15);

  const CustomCard = ({ header, text, backgroundColor }) => {
    return (
      <Card raised sx={{maxWidth: "400px"}}>
        <CardHeader
          sx={{
            background:
              "linear-gradient(180deg, " + backgroundColor + ", #000)",
            color: "common.white",
            height: { sm: "80px" }, // Set the desired height for the card header
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            
          }}
          title={
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {header}
            </Typography>
          }
        />
        <CardContent>
          <Typography variant="body1">{text}</Typography>
        </CardContent>
      </Card>
    );
  };

  return (
    <Box
      sx={{
        px: { xs: 3, md: 10 },
        py: 3,
        maxWidth: "100%",
        backgroundColor: "#eceff1",
      }}
    >
      <Typography
        variant="h2"
        color="primary.dark"
        sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
      >
        {t("why-choose-us.header")}
      </Typography>
      <Typography
        variant="h4"
        color="primary.dark"
        sx={{
          fontStyle: "italic",
          fontWeight: "bold",
          textAlign: "center",
          pb: { xs: 4, md: 6 },
        }}
      >
        {t("why-choose-us.subHeader")}
      </Typography>

      <Grid container sx={{ display: "flex", justifyContent: "center", pb: 2 }}>
        {items.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              mb: 2,
              px:1
            }}
            key={item.header}
          >
            {CustomCard({
              header: item.header,
              text: item.text,
              backgroundColor: item.color,
            })}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ChooseUs;
