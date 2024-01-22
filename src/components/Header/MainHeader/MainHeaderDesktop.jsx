import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Divider,
  useScrollTrigger,
  Grid,
} from "@mui/material";
import { useTranslation } from "next-i18next";

const MainHeaderDesktop = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const { t } = useTranslation("common");
  const headerLinks = t(`header.mainHeader.childLinks`, {
    returnObjects: true,
  });
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  const [showDropdown, setShowDropdown] = useState(null);

  const handleMouseEnter = (index) => {
    setShowDropdown(index);
  };

  const handleMouseLeave = () => {
    setShowDropdown(null);
  };

  const renderChildLinks = (childLinks) => (
    <Box>
      {childLinks.map((childLink, j) => (
        <Box
          key={childLink.label}
          onClick={() => {
            setShowDropdown(null);
          }}
        >
          <Link href={childLink.href} passHref>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {childLink.label}
            </Typography>
          </Link>
          {j !== childLinks.length - 1 && <Divider />}
        </Box>
      ))}
    </Box>
  );

  return (
    <Box
      sx={{
        width: "100%",
        display: { xs: "none", md: "flex" },
        justifyContent: "space-around",
        backgroundColor: "common.white",
        alignItems: "center",
        top: trigger ? "0px" : "40px",
        zIndex: 999,
        transition: "top 0.1s",
        maxHeight: "96px",
        position: "fixed",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
      }}
    >
      <Box sx={{
          display: "flex" }}>
        <Logo />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {headerLinks.map((link, index) => (
          <div
            key={link.label} // Use link.label as the key
            style={{
              position: "relative",
              marginRight: "10px", // Add margin between links
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={link.href}
              passHref
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography
                variant="h3"
                sx={{
                  mx: 3,
                  pb: 1,
                  display: "flex",
                  justifyContent: { xs: "center", lg: "flex-start" },
                  color: "primary.dark",
                  fontWeight: "bold",
                  position: "relative",
                  cursor: "pointer",
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: "5px",
                    backgroundColor: "#1976d2",
                    transition: "width 0.5s",
                  },
                  "&:hover::before": {
                    width: "100%",
                  },
                }}
              >
                {link.label}
              </Typography>
            </Link>
            {link.childLinks && link.childLinks.length > 0 && (
              <Box
                sx={{
                  position: "absolute",
                  display: showDropdown === index ? "flex" : "none",
                  zIndex: 1,
                  width: "600px", // Set the width for the two columns
                  backgroundColor: "#FFF",
                  boxShadow: "0 8px 8px 8px rgba(0, 0, 0, 0.5)",
                  top: "100%",
                  right: isRTL ? "-430px" : "0%",
                  p: 2,
                  mt: "0px",
                  flexDirection: "row", // Display items in a row
                  "& a": {
                    display: "block",
                    textDecoration: "none",
                    color: "primary.dark",
                    p: 1,
                    "&:hover": {
                      backgroundColor: "#F0F0F0", // Optional: Change background color on hover
                    },
                  },
                }}
              >
                <Box sx={{ flex: 1, px: 2 }}>
                  {renderChildLinks(
                    link.childLinks.slice(
                      0,
                      Math.ceil(link.childLinks.length / 2)
                    )
                  )}
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box sx={{ flex: 1, px: 2 }}>
                  {renderChildLinks(
                    link.childLinks.slice(Math.ceil(link.childLinks.length / 2))
                  )}
                </Box>
              </Box>
            )}
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default MainHeaderDesktop;
