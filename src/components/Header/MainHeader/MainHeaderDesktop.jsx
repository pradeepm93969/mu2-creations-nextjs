import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { AppBar, Toolbar, Typography, Box, Divider, useScrollTrigger } from '@mui/material';
import { useTranslation } from "next-i18next";

const MainHeaderDesktop = () => {

  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const { t } = useTranslation("common");
  const headerLinks = t(`header.mainHeader.childLinks`, { returnObjects: true });
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
        <React.Fragment key={childLink.label}>
          <Link href={childLink.href} passHref>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {childLink.label}
            </Typography>
          </Link>
          {j !== childLinks.length - 1 && (
            <Divider />
          )}
        </React.Fragment>
      ))}
    </Box>
  );

  return (
    <AppBar position="fixed" sx={{ display: { xs: 'none', md: 'flex' }, top: trigger ? '0px' : '40px', zIndex: 999, transition: 'top 0.1s', maxHeight: '96px' }}>
      <Toolbar sx={{ px: { xs: 0, md: 20 }, backgroundColor: "common.white" }}>
        <Logo />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {headerLinks.map((link, index) => (
            <div
              key={link.label} // Use link.label as the key
              style={{
                position: "relative",
                marginRight: '10px', // Add margin between links
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={link.href} passHref style={{ textDecoration: 'none', color: 'white' }}>
                <Typography
                  variant="h3"
                  sx={{
                    mx: 5,
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
                  <Box sx={{flex: 1, px: 2 }}>
                    {renderChildLinks(link.childLinks.slice(0, Math.ceil(link.childLinks.length / 2)))}
                  </Box>
                  <Divider orientation="vertical" flexItem />
                  <Box sx={{flex: 1, px: 2 }}>
                    {renderChildLinks(link.childLinks.slice(Math.ceil(link.childLinks.length / 2)))}
                  </Box>
                </Box>
              )}
            </div>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeaderDesktop;
