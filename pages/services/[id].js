import React from 'react';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ServiceDetail from '../../src/components/ServiceDetail/ServiceDetail';
import MainLayoutWithoutSEO from '../../src/layouts/MainLayoutWithoutSEO';
import Head from 'next/head';

export default function ServiceDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const href = `https://www.mu2creations.com/services/${id}`;

  return (
    <Box sx={{maxWidth: "100%", mt: "96px"}}>
      <Head>
        <link rel="canonical" href={href}></link>
      </Head>
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