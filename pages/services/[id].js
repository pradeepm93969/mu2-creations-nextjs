import React from 'react';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import MainLayout from '../../src/layouts/MainLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ServiceDetail from '../../src/components/ServiceDetail/ServiceDetail';

export default function ServiceDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Box sx={{maxWidth: "100%", mt: "96px"}}>
      <ServiceDetail id={id}/>
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

ServiceDetailPage.getLayout = function getLayout(page) {
  return (
    <MainLayout
      title="MU2 Creations | The Best Printing Press in the Gulf"
      description="At MU2 Creations, we offer expert printing, branding, fabrication, and design services to transform your ideas into tangible impressions that leave a lasting impact. Discover our large format printing, vehicle branding, offset printing, personalized gift items, digital offset printing, digital fabric printing, signages, exhibition stands, lenticular printing, metal fabrication, inflatable structures, and Styrofoam works."
    >
      {page}
    </MainLayout>
  );
};