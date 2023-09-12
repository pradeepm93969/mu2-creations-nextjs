import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import {
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import { Menu, SupportAgent} from "@mui/icons-material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useTranslation } from "next-i18next";
import MobileDrawer from "./MobileDrawer";

const MainHeaderMobile = () => {
  
  const { t } = useTranslation("common");
  const headerLinks = t(`header.mainHeader.childLinks`, {
    returnObjects: true,
  });
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      {/* Mobile view */}
      <AppBar
        position="fixed"
        sx={{
          display: { xs: "flex", md: "none" },
          top: trigger ? "0px" : "40px",
          zIndex: 999,
          transition: "top 0.1s",
          width: "100%",
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "common.white",
            justifyContent: "space-between",
            px: 1,
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <Menu fontSize="large" sx={{ color: "common.black", mx: 1 }} />
          </IconButton>
          <Logo />
          <Link href="/contact-us">
            <IconButton edge="start" color="inherit">
              <SupportAgent
                fontSize="large"
                sx={{ color: "common.black", mx: 1 }}
              />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>

      {/* MUI Drawer */}
      <MobileDrawer
        open={openDrawer}
        onClose={handleDrawerClose}
        headerLinks={headerLinks}
        />
    </>
  );
};

export default MainHeaderMobile;
