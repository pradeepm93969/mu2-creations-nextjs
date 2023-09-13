import React from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  Grid,
  Slide,
  IconButton,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { AdsClick, Diamond, RemoveRedEye } from "@mui/icons-material";

const Mission = () => {
  const { t } = useTranslation("home");
  const items = t(`mission.children`, {
    returnObjects: true,
  });

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTab = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const spacing = isMobile ? 0 : isTab ? 1 : 15;

  const CustomCard = ({ header, text, backgroundColor }) => (
    <Box
      sx={{
        my: { xs: 2 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        overflow: "hidden",
        borderRadius: 4,
      }}
    >
      <Grid container>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(180deg, " + backgroundColor + ", #000)",
            minHeight: {xs: "140px", sm: "200px"}
          }}
        >
          <IconButton
            sx={{ backgroundColor: "common.white", color: "common.black" }}
          >
            {header === "Vision" && <RemoveRedEye fontSize="large" />}
            {header === "Mission" && <AdsClick fontSize="large" />}
            {header === "Value" && <Diamond fontSize="large" />}
          </IconButton>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "common.white",
            p: 1,
            pt: 2,
          }}
        >
          <Typography
            variant="h3"
            color="common.black"
            sx={{ fontWeight: "bold" }}
          >
            {header}
          </Typography>
          <Typography
            variant="body1"
            color="common.black"
            sx={{ py: 1, px: 1, textAlign: "center" }}
          >
            {text}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Box
      sx={{
        px: { xs: 3, md: 40 },
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
        {t("mission.header")}
      </Typography>
      <Typography
        variant="h4"
        color="primary.dark"
        sx={{
          fontStyle: "italic",
          fontWeight: "bold",
          textAlign: "center",
          pb: { xs: 2, md: 3 },
        }}
      >
        {t("mission.subHeader")}
      </Typography>

      <Grid
        container
        sx={{ display: "flex", justifyContent: "center" }}
        spacing={spacing}
      >
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

export default Mission;
