
import React from "react";
import { Box } from "@mui/material";
import MainLayout from "../src/layouts/MainLayout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CenterErrorCard from "../src/components-ui/card/CenterErrorCard";

export default function Custom500() {
  const { t } = useTranslation("common");
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#eceff1",
        height: "80vh",
      }}
    >
      <CenterErrorCard
        title={t("500.code")}
        subtitle={t("500.text")}
        buttonText={t("500.homeLink")}
        buttonLink={"/"}
      />
    </Box>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

Custom500.getLayout = function getLayout(page) {
  return (
    <MainLayout
      title="Internal Server Error - MU2 Creations"
      description="Oops! Something went wrong on our server. At MU2 Creations, we offer expert printing, branding, fabrication, and design services to transform your ideas into tangible impressions that leave a lasting impact. Discover our large format printing, vehicle branding, offset printing, personalized gift items, digital offset printing, digital fabric printing, signages, exhibition stands, lenticular printing, metal fabrication, inflatable structures, and Styrofoam works."
    >
      {page}
    </MainLayout>
  );
};
