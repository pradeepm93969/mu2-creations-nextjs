import React from 'react';
import { Box } from '@mui/material';
import MainLayout from '../src/layouts/MainLayout';
import AboutUsComp from '../src/components/AboutUs/AboutUs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function AboutUs() {
  return (
    <Box sx={{maxWidth: "100%", mt: "96px"}}>
      <AboutUsComp isAboutUs/>
    </Box>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
}

AboutUs.getLayout = function getLayout(page) {
  return (
    <MainLayout
      title="MU2 Creations | Digital printing and production"
      description="At MU2 Creations, we offer expert printing, branding, fabrication, and design services to transform your ideas into tangible impressions that leave a lasting impact. Discover our large format printing, vehicle branding, offset printing, personalized gift items, digital offset printing, digital fabric printing, signages, exhibition stands, lenticular printing, metal fabrication, inflatable structures, and Styrofoam works."
    >
      {page}
    </MainLayout>
  );
};