import React from "react";
import SEO from "../layouts/SEO";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Box } from "@mui/material";
import ScrollToTop from "../components-ui/common/ScrollToTop";
import { useTranslation } from "next-i18next";
import { LoadingProvider, useLoading } from "./LoadingProvider";
import Loader from "../components-ui/common/Loader";
import WhatsappSticky from "../components-ui/common/WhatsappSticky";

const MainLayout = ({ title, description, children }) => {
  const { t } = useTranslation("common");
  const loading = useLoading();

  return (
    <LoadingProvider>
      <Box sx={{ fontSize: { xs: "0.925rem", sm: "1rem" } }}>
        {loading && <Loader />}
        <SEO title={title} description={description}></SEO>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <WhatsappSticky phoneNumber={t("company.whatsappNumber")} />
      </Box>
    </LoadingProvider>
  );
};

export default MainLayout;
