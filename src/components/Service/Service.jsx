import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useTranslation } from "next-i18next";
import ItemsCarousal from "../../components-ui/carousel/ItemsCarousal";
import ItemCard from "../../components-ui/card/ItemCard";

const Service = ({ isServicePage }) => {
  const { t } = useTranslation("service");
 
  const services = t(`childItems`, { returnObjects: true });

  return (
    <Box sx={{ px: { xs: 3, md: 30 }, py: 3, maxWidth: "100%" }}>
      <Typography variant="h2" color="primary.dark" sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}>
        {t("header")}
      </Typography>
      <Typography variant="h4" color="primary.dark" sx={{ fontStyle: "italic", fontWeight: "bold", textAlign: "center", mb: 4 }}>
        {t("subHeader")}
      </Typography>

      {!isServicePage ? (
          <ItemsCarousal items={services}/>
      ) : (
        <Grid container spacing={4}>
            {services.map((service) => (
              <Grid item xs={12} sm={4} md={3} key={service.id} sx={{textAlign: "center", display: "flex", justifyContent: "center"}}>
                <ItemCard image={service.cardImage} header={service.header} text={service.cardContent} buttonText={t("details")}
                buttonLink={"/services/" + service.id} />
              </Grid>
            ))}
        </Grid>
      )}
     
    </Box>
  );
};

export default Service;
