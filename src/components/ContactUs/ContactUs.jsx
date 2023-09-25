import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  Grid,
  Slide,
  Divider,
  Card,
  TextField,
  MenuItem,
  Autocomplete,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
  Place,
  Twitter,
} from "@mui/icons-material";
import Link from "next/link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MuiTelInput } from "mui-tel-input";
import CustomEmail from "../../components-ui/common/CustomEmail";
import CustomPhoneNumber from "../../components-ui/common/CustomPhoneNumber";
import CustomSocialLinks from "../../components-ui/common/CustomSocialLinks";

const ContactUs = () => {
  const { t } = useTranslation(["home", "common"]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(t("home:contact-us.validation.required")),
    lastName: Yup.string().required(t("home:contact-us.validation.required")),
    mobile: Yup.string().required(t("home:contact-us.validation.required")),
    email: Yup.string()
      .email(t("home:contact-us.validation.emailInvalid"))
      .required(t("home:contact-us.validation.required")),
    details: Yup.string().required(t("home:contact-us.validation.required")),
  });

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <Box sx={{ px: { xs: 3, md: 30 }, py: 3, maxWidth: "100%" }}>
      <Typography
        variant="h2"
        color="primary.dark"
        sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
      >
        {t("home:contact-us.header")}
      </Typography>
      <Typography
        variant="h4"
        color="primary.dark"
        sx={{ fontStyle: "italic", fontWeight: "bold", textAlign: "center" }}
      >
        {t("home:contact-us.subHeader")}
      </Typography>

      <Card sx={{ my: { xs: 2, md: 5 }, p: { xs: 2, md: 4 } }} raised>
        <Grid container>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              py: 2,
              px: { xs: 0, md: 6 },
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-start" },
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="h3"
                sx={{
                  pb: 4,
                  px: 4,
                  display: { xs: "none", lg: "flex" },
                  justifyContent: { xs: "center", lg: "flex-start" },
                  fontWeight: "Bold",
                }}
              >
                {t("common:footer.mainFooter.contactUs")}
              </Typography>

              <Box
                sx={{
                  marginTop: 2,
                  marginLeft: 1,
                  display: "flex",
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
                <CustomEmail emailAddress={t("common:company.email")} />
              </Box>

              <Divider
                sx={{
                  width: "75%",
                  display: { xs: "none", md: "flex" },
                  my: 1,
                }}
                color="white"
                orientation="horizontal"
                variant="middle"
              />

              <Box
                sx={{
                  marginTop: 2,
                  marginLeft: 1,
                  display: "flex",
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
                <CustomPhoneNumber
                  phoneNumber={t("common:company.phonenumber")}
                />
              </Box>

              <Divider
                sx={{
                  width: "75%",
                  display: { xs: "none", md: "flex" },
                  my: 1,
                }}
                color="white"
                orientation="horizontal"
                variant="middle"
              />

              <Typography
                variant="body1"
                align="center"
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: { xs: "center", lg: "flex-start" },
                  alignItems: "center",
                  py: { xs: 1, md: 0 },
                  px: 1,
                  textAlign: "justify",
                  width: { xs: "100%", md: "75%" },
                }}
              >
                <Place sx={{ mx: 1 }} />
                {t("common:company.address")}
              </Typography>

              {/* <Divider
                sx={{
                  width: { xs: "100%", md: "75%" },
                  display: { xs: "none", md: "flex" },
                  my: 1,
                }}
                color="white"
                orientation="horizontal"
                variant="middle"
              />

              <Typography
                variant="body1"
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", lg: "flex-start" },
                  fontWeight: "Bold",
                  py: { xs: 1, md: 0 },
                  px: 3,
                }}
              >
                {t("common:footer.mainFooter.column3.text1")}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  px: 3,
                  display: "flex",
                  justifyContent: { xs: "center", lg: "flex-start" },
                }}
              >
                {t("common:footer.mainFooter.column3.text2")}
              </Typography> */}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", lg: "flex-start" },
                  alignItems: "center",
                  m: 2,
                  mt: 3,
                  px: 4,
                }}
              >
                <CustomSocialLinks
                  facebookLink={t("common:company.facebookLink")}
                  linkedinLink={t("common:company.linkdinLink")}
                  instagramLink={t("common:company.instaLink")}
                  twitterLink={t("common:company.twitterLink")}
                />
              </Box>
            </Box>
          </Grid>

          <Divider
            sx={{ width: { xs: "88%" }, display: { xs: "flex", md: "none " } }}
            color="white"
            orientation="horizontal"
            variant="middle"
          />

          {/* Contact Us Form      */}
          <Grid item xs={12} md={7}>
            <Box sx={{ px: { xs: 2, md: 4 }, pt: { xs: 2, md: 0 } }}>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  mobile: "+971",
                  email: "",
                  details: "",
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  // Start the submission process
                  setSubmitting(true);
                  try {
                    const response = await fetch("/api/sendEmail", {
                      method: "POST",
                      body: JSON.stringify(values),
                      headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                      },
                    });

                    if (!response.ok) {
                      throw new Error("Failed to send message");
                    }

                    // Reset the form and mark submission as complete
                    resetForm();
                    setSubmitting(false);

                    // Show success alert
                    setAlertSeverity("success");
                    setAlertMessage("Form submitted successfully");
                    setShowAlert(true);
                  } catch (error) {
                    console.error("Failed to send email:", error);
                    setSubmitting(false);

                    // Show failure alert
                    setAlertSeverity("error");
                    setAlertMessage("Failed to submit form");
                    setShowAlert(true);
                  }
                }}
              >
                {({
                  values,
                  handleChange,
                  handleSubmit,
                  handleBlur,
                  errors,
                  touched,
                  setFieldValue,
                  isSubmitting,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <TextField
                      id="firstName"
                      name="firstName"
                      label={t("home:contact-us.firstNameLabel")}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.firstName && !!errors.firstName}
                      helperText={touched.firstName && errors.firstName}
                    />
                    <TextField
                      id="lastName"
                      name="lastName"
                      label={t("home:contact-us.lastNameLabel")}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.lastName && !!errors.lastName}
                      helperText={touched.lastName && errors.lastName}
                    />
                    <MuiTelInput
                      label={t("home:contact-us.mobileLabel")}
                      defaultCountry={"ae"}
                      value={values.mobile}
                      onChange={(values) => setFieldValue("mobile", values)}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />

                    <TextField
                      id="email"
                      name="email"
                      label={t("home:contact-us.emailLabel")}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                    />
                    <TextField
                      id="details"
                      name="details"
                      label={t("home:contact-us.detailsLabel")}
                      variant="outlined"
                      multiline
                      rows={4}
                      fullWidth
                      margin="normal"
                      value={values.details}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.details && !!errors.details}
                      helperText={touched.details && errors.details}
                    />
                    <Button
                      type="submit"
                      size="large"
                      fullWidth
                      variant="contained"
                      color="primary"
                      sx={{
                        fontWeight: "bold",
                        my: 2,
                        backgroundImage:
                          "linear-gradient(45deg, #8450A3, #4766B2, #F8B733)",
                        backgroundSize: "200% auto",
                        color: "white",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", // Add shadow here
                        transition: "0.3s",
                        "&:hover": {
                          backgroundPosition: "right center",
                        },
                      }}
                      disabled={
                        isSubmitting ||
                        Object.keys(errors).length !== 0 ||
                        Object.keys(touched).length === 0
                      }
                    >
                      {isSubmitting ? (
                        <CircularProgress size={24} />
                      ) : (
                        t("home:contact-us.submitButton")
                      )}
                    </Button>
                    <Snackbar
                      open={showAlert}
                      autoHideDuration={5000}
                      onClose={handleAlertClose}
                    >
                      <Alert
                        onClose={handleAlertClose}
                        severity={alertSeverity}
                        sx={{ mt: 2 }}
                      >
                        {alertMessage}
                      </Alert>
                    </Snackbar>
                  </Form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default ContactUs;
