import React from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  Grid,
  Slide,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Dialog,
  AppBar,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { Close, ExpandMore } from "@mui/icons-material";
import SEO from "../../layouts/SEO";
import ImageCard from "../../components-ui/card/ImageCard";
import Image from "next/image";

const ServiceDetail = ({ id }) => {
  const { t } = useTranslation("service", "common");
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalUrl, setModalUrl] = React.useState("");

  const handleClickOpen = (url) => {
    setModalOpen(true);
    setModalUrl(url);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const serviceData = t(`service:childItems`, { returnObjects: true }).find(
    (service) => service.id === id
  );

  if (!serviceData) {
    // Handle the case where the id doesn't match any service
    return (
      <Box sx={{ px: { xs: 3, md: 30 }, py: 3, maxWidth: "100%" }}>
        <Typography
          variant="h2"
          color="primary.dark"
          sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
        >
          {t("service:notFound")}
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <SEO
        title={serviceData.header + " - " + t("common:company.name")}
        description={serviceData.pageContent1}
      />

      <Box sx={{ px: { xs: 3, md: 10 }, py: 3, maxWidth: "100%" }}>
        <Typography
          variant="h2"
          color="primary.dark"
          sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
        >
          {serviceData.header}
        </Typography>
        <Typography
          variant="h4"
          color="primary.dark"
          sx={{
            fontStyle: "italic",
            fontWeight: "bold",
            textAlign: "center",
            mb: 4,
          }}
        >
          {serviceData.subHeader}
        </Typography>

        <Box sx={{ py: 1 }} />

        <Grid container spacing={6}>
          <Slide
            direction="right"
            in={true}
            timeout={500}
            mountOnEnter
            unmountOnExit
          >
            <Grid item sm={6}>
              <ImageCard
                src={serviceData.mainImage}
                alt={serviceData.header}
              />
            </Grid>
          </Slide>
          <Slide
            direction="left"
            in={true}
            timeout={500}
            mountOnEnter
            unmountOnExit
          >
            <Grid item sm={6}>
              <Box>
                <Typography variant="body1" sx={{ textAlign: "justify" }}>
                  {serviceData.pageContent1}
                </Typography>
              </Box>
              <Box sx={{ mb: { xs: 2, md: 8 } }}>
                <Typography
                  variant="body1"
                  sx={{ pt: 2, textAlign: "justify" }}
                >
                  {serviceData.pageContent2}
                </Typography>
              </Box>
              
            </Grid>
          </Slide>
        </Grid>


        <Grid container spacing={6} py={5}>
        {serviceData.accordianContent.map((accordianItem, index) => (
          <Grid item xs={12} sm={4} lg={3} key={index} sx={{textAlign: "center", display: "flex", justifyContent: "center"}}>
            <Accordion
              sx={{
                width: "100%",
                mb: { xs: 2, md: 10 },
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
              }}
              defaultExpanded={true}
            >
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: "common.white" }} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{
                  backgroundColor: "primary.dark",
                }}
              >
                <Typography variant="h5" color="common.white">
                  {t(accordianItem.header)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="text.primary" textAlign={"justify"}>
                  {t(accordianItem.content)}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
        </Grid>

        <Typography
          variant="h2"
          color="primary.dark"
          sx={{ fontWeight: "bold", mb: 2, py: 3, textAlign: "center" }}
        >
          {t("service:gallery")}
        </Typography>

        <Grid container spacing={6}>
          {serviceData.galleryImages.map((url, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={serviceData.id + "-" + index}
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  width: isMobile ? "89vw" : "50vw",
                  position: "relative",
                  height: "300px",
                  cursor: "pointer",
                }}
                onClick={() => handleClickOpen(url)}
              >
                <Image src={url} alt={serviceData.id + "-" + index} fill sizes="100%" style={{objectFit: "contain"}}/>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ my: 4 }} />

        <Dialog fullScreen open={modalOpen} onClose={handleClose}>
          <IconButton
            edge="end"
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: "16px",
              right: "16px",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              zIndex: 100 // Make close button white
            }}
          >
            <Close />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
          >
            <Image src={modalUrl} alt={modalUrl} fill sizes="100%" style={{objectFit: "contain"}} />
          </Box>
        </Dialog>
      </Box>
    </>
  );
};

export default ServiceDetail;
