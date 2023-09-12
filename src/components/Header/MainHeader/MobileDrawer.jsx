import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Divider,
} from "@mui/material";
import { ChevronRight, Close } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import CustomPhoneNumber from "../../../components-ui/common/CustomPhoneNumber";
import CustomEmail from "../../../components-ui/common/CustomEmail";
import CustomWhatsApp from "../../../components-ui/common/CustomWhatsApp";

const MobileDrawer = ({ open, onClose, headerLinks }) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const { t } = useTranslation("common");

  const router = useRouter();
  const [servicesSubmenuOpen, setServicesSubmenuOpen] = React.useState(false);

  const handleServicesSubmenuToggle = () => {
    setServicesSubmenuOpen((prevOpen) => !prevOpen);
  };

  const handleChildLinkClick = (href) => {
    router.push(href);
    onClose();
  };

  return (
    <Drawer anchor={isRTL ? "right" : "left"} open={open} onClose={onClose}>
      <Box
        sx={{
          width: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <List>
          <ListItem sx={{ backgroundColor: "grey.900", color: "white" }}>
            <ListItemText primary={t("header.mainHeader.menu")} />

            <IconButton onClick={onClose} sx={{ zIndex: 10, color: "white" }}>
              <Close />
            </IconButton>
          </ListItem>
          <Box sx={{ marginBottom: 2 }} />
          {headerLinks.map((link, index) => (
            <React.Fragment key={link.label}>
              <ListItem>
                <ListItemText
                  primary={link.label}
                  onClick={() => handleChildLinkClick(link.href)}
                />
                {link.childLinks && link.childLinks.length > 0 && (
                  <IconButton
                    onClick={handleServicesSubmenuToggle}
                    sx={{ zIndex: 10 }}
                  >
                    <ChevronRight />
                  </IconButton>
                )}
              </ListItem>
              {link.childLinks && link.childLinks.length > 0 && (
                <List sx={{ p: 0 }}>
                  {link.childLinks.map((childLink, j) => (
                    <ListItem
                      sx={{
                        pl: 4,
                        display: servicesSubmenuOpen ? "block" : "none",
                      }}
                      key={childLink.label}
                    >
                      <ListItemText
                        primary={childLink.label}
                        onClick={() => handleChildLinkClick(childLink.href)}
                      />
                    </ListItem>
                  ))}
                </List>
              )}
            </React.Fragment>
          ))}
        </List>

        <Box>
          <Divider />
          <Box sx={{ marginTop: 3 }}>
            <CustomPhoneNumber phoneNumber={t("company.phonenumber")} />
          </Box>
          <Box sx={{ marginTop: 3 }}>
            <CustomEmail emailAddress={t("company.email")} />
          </Box>
          {/* <LanguageDropdown /> */}
          <Box sx={{ marginTop: 3, marginBottom: 4 }}>
            <CustomWhatsApp phoneNumber={t("company.whatsappNumber")} />
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
