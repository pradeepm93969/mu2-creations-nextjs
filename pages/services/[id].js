import React from 'react';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ServiceDetail from '../../src/components/ServiceDetail/ServiceDetail';
import MainLayoutWithoutSEO from '../../src/layouts/MainLayoutWithoutSEO';

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
    <MainLayoutWithoutSEO>
      {page}
    </MainLayoutWithoutSEO>
  );
};