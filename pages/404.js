// pages/404.js
import React from "react";
import { Box } from "@mui/material";
import MainLayout from "../src/layouts/MainLayout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CenterErrorCard from "../src/components-ui/card/CenterErrorCard";

export default function Custom404() {
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
        title={t("404.code")}
        subtitle={t("404.text")}
        buttonText={t("404.homeLink")}
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

Custom404.getLayout = function getLayout(page) {
  return (
    <MainLayout
      title="Page Not Found - MU2 Creations"
      description="Oops! The page you are looking for could not be found. At MU2 Creations, we offer expert printing, branding, fabrication, and design services to transform your ideas into tangible impressions that leave a lasting impact. Discover our large format printing, vehicle branding, offset printing, personalized gift items, digital offset printing, digital fabric printing, signages, exhibition stands, lenticular printing, metal fabrication, inflatable structures, and Styrofoam works."
    >
      {page}
    </MainLayout>
  );
};
