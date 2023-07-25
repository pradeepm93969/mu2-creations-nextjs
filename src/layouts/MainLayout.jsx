import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import SEO from '../layouts/SEO';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ScrollTo from '../components/ScrollTo/ScrollTo';
import { Box } from '@mui/material';
import WhatsappSticky from '../components/Whatsapp/WhatsappSticky';
import Loader from '../components/Loader/Loader';

const MainLayout = (props) => {
  const { title, description, keywords } = props;
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <Box sx={{fontSize: {xs: "0.925rem", sm: "1rem" }}}>
      {loading && <Loader/>}
      <SEO title={title} description={description} keywords={keywords}></SEO>
      <Header/>
      <main>{props.children}</main>
      <Footer />
      <ScrollTo />
      <WhatsappSticky/>
    </Box>
  );
};

MainLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default MainLayout;
