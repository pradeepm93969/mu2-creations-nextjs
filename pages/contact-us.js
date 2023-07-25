import React from 'react';
import { Box } from '@mui/material';
import MainLayout from '../src/layouts/MainLayout';
import ContactUsComp from '../src/components/ContactUs/ContactUs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function ContactUs() {
  return (
    <Box sx={{maxWidth: "100%", mt: "96px", backgroundColor: "#eceff1",}}>
      <ContactUsComp/>
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

ContactUs.getLayout = function getLayout(page) {
  return (
    <MainLayout
      title="MU2 Creations | The Best Printing Press in the Gulf"
      description="At MU2 Creations, we offer expert printing, branding, fabrication, and design services to transform your ideas into tangible impressions that leave a lasting impact. Discover our large format printing, vehicle branding, offset printing, personalized gift items, digital offset printing, digital fabric printing, signages, exhibition stands, lenticular printing, metal fabrication, inflatable structures, and Styrofoam works."
    >
      {page}
    </MainLayout>
  );
};