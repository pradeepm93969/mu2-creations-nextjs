// pages/404.js
import React from 'react';
import { Fade, Typography, Box, Card, Button } from '@mui/material';
import MainLayout from '../src/layouts/MainLayout';
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


export default function Custom404() {
  const { t } = useTranslation("common");

  return (
    <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "#eceff1",
          height: "80vh"
        }}>
    
    <Card sx={{
        maxWidth: "800px",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        bgcolor: "#FFF",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        p: 4,
      }}>
        <Box >
          <Fade in>
            <div>
              <Typography variant="h1" sx={{fontWeight: "bold", color: "primary.dark"}}>
                {t("404.code")}
              </Typography>
              <Typography variant="h3" sx={{fontWeight: "bold", color: "primary.dark", my: 2}}>
                {t("404.text")}
              </Typography>
            </div>
          </Fade>
        </Box>
        <Link href="/" style={{ textDecoration: 'none', color: 'white' }} passHref>
          <Button variant="contained" sx={{fontWeight: "bold", my: 2, fontSize: 20}}>
            {t("404.homeLink")}
          </Button>
        </Link>
      </Card>
    </Box>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
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
