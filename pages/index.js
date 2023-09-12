import React from 'react';
import { Box } from '@mui/material';
import MainLayout from '../src/layouts/MainLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HeroBanner from '../src/components/HeroBanner/HeroBanner';
import Mission from '../src/components/Mission/Mission';
import ChooseUs from '../src/components/ChooseUs/ChooseUs';
import Service from '../src/components/Service/Service';
import AboutUsHome from '../src/components/AboutUs/AboutUsHome';

export default function Home() {
  return (
    <Box sx={{maxWidth: "100%", mt: "96px"}}>
      <HeroBanner/>
      <Service/>
      <ChooseUs/>
      <AboutUsHome/>
      <Mission/>
    </Box>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home', 'service'])),
    },
  };
}

Home.getLayout = function getLayout(page) {
  return (
    <MainLayout
      title="MU2 creations | The best printing press in the gulf"
      description="At MU2 Creations, we offer expert printing, branding, fabrication, and design services to transform your ideas into tangible impressions that leave a lasting impact. Discover our large format printing, vehicle branding, offset printing, personalized gift items, digital offset printing, digital fabric printing, signages, exhibition stands, lenticular printing, metal fabrication, inflatable structures, and Styrofoam works."
    >
      {page}
    </MainLayout>
  );
};