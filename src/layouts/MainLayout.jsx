import React from "react";
import { useRouter } from "next/router";
import SEO from "../layouts/SEO";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Box } from "@mui/material";
import ScrollToTop from "../components-ui/common/ScrollToTop";
import { useTranslation } from "next-i18next";
import Loader from "../components-ui/common/Loader";
import WhatsappSticky from "../components-ui/common/WhatsappSticky";

const MainLayout = (props) => {
  const { t } = useTranslation("common");
  const { title, description, keywords } = props;
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <Box sx={{ fontSize: { xs: "0.925rem", sm: "1rem" } }}>
      {loading && <Loader />}
      <SEO title={title} description={description} keywords={keywords}></SEO>
      <Header />
      <main>{props.children}</main>
      <Footer />
      <ScrollToTop />
      <WhatsappSticky phoneNumber={t("company.whatsappNumber")} />
    </Box>
  );
};

export default MainLayout;
