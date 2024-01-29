import React from 'react';
import { Box } from '@mui/material';
import MainLayout from '../src/layouts/MainLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Blog from '../src/components/Blog/Blog';

export default function Blogs() {
  return (
    <Box sx={{maxWidth: "100%", mt: "96px"}}>
      <Head>
        <link rel="canonical" href="https://www.mu2creations.com/blogs"></link>
      </Head>
      <Blog isBlogPage/>
    </Box>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home', 'blog'])),
    },
  };
}

Blogs.getLayout = function getLayout(page) {
  return (
    <MainLayout
      title="MU2 Creations | Digital printing and production"
      description="At MU2 Creations, we offer expert printing, branding, fabrication, and design services to transform your ideas into tangible impressions that leave a lasting impact. Discover our large format printing, vehicle branding, offset printing, personalized gift items, digital offset printing, digital fabric printing, signages, exhibition stands, lenticular printing, metal fabrication, inflatable structures, and Styrofoam works."
    >
      {page}
    </MainLayout>
  );
};