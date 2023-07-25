import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { AppBar, Toolbar, IconButton, Button, Typography, Box, Divider, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu, SupportAgent, ChevronRight, Close } from '@mui/icons-material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router'; 

const MainHeader = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  const [showDropdown, setShowDropdown] = React.useState(null);
  const [servicesSubmenuOpen, setServicesSubmenuOpen] = React.useState(false); // New state for the "Services" submenu
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleMouseEnter = (index) => {
    setShowDropdown(index);
  };

  const handleMouseLeave = () => {
    setShowDropdown(null);
  };

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleServicesSubmenuToggle = () => {
    setServicesSubmenuOpen((prevOpen) => !prevOpen); // Toggle the state when the right icon is clicked
  };

  const handleChildLinkClick = (href) => {
    router.push(href); // Navigate to the specified href on click
    handleDrawerClose(); // Close the drawer after navigation if needed
  };

  const renderChildLinks = () => {
    const childLinksCount = t(`header.mainHeader.count`);
    const links = [];
  
    for (let i = 0; i < childLinksCount; i++) {
      const link = (
        <div key={t(`header.mainHeader.childLinks.${i}.label`)} style={{ position: "relative" }} 
          onMouseEnter={() => handleMouseEnter(i)} // Use the onMouseEnter event to trigger the dropdown display
          onMouseLeave={handleMouseLeave} // Use the onMouseLeave event to hide the dropdown
        >
          <Link href={t(`header.mainHeader.childLinks.${i}.href`)} passHref style={{ textDecoration: 'none', color: 'white' }}>
            <Typography variant="h3" 
              sx={{
                mx: 5,
                pb: 1,
                display: "flex",
                justifyContent: { xs: "center", lg: "flex-start" },
                color: "primary.dark",
                fontWeight: "bold",
                position: "relative", // To make the pseudo-element position relative to the Typography
                cursor: "pointer",
                "&::before": {
                  content: "''",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: "5px",
                  backgroundColor: "#1976d2", // Set the primary color with alpha for the underline
                  transition: "width 0.5s", // Transition the width property for a slow effect
                },
                "&:hover::before": {
                  width: "100%", // Expand the underline to 100% on hover
                },
              }}>
              {t(`header.mainHeader.childLinks.${i}.label`)}
            </Typography>
          </Link>
          {t(`header.mainHeader.childLinks.${i}.childLinks`) && t(`header.mainHeader.childLinks.${i}.count`) > 0 && (
            <Box
              sx={{
                position: "absolute",
                width: "300px",
                top: "100%",
                p: 2,
                mt: "0px", // Adjust the margin as needed
                backgroundColor: "#FFF", // Background color for the dropdown menu
                boxShadow: "0 8px 8px rgba(0, 0, 0, 0.5)", // Optional: Add box shadow for dropdown menu
                display: showDropdown === i ? "block" : "none",
                zIndex: 1, // Ensure the dropdown menu is above other elements
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
              {Array.from({ length: t(`header.mainHeader.childLinks.${i}.count`) }, (_, j) => (
                <React.Fragment key={t(`header.mainHeader.childLinks.${i}.childLinks.${j}.label`)}>
                  <Link href={t(`header.mainHeader.childLinks.${i}.childLinks.${j}.href`)} passHref>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      {t(`header.mainHeader.childLinks.${i}.childLinks.${j}.label`)}
                    </Typography>
                  </Link>
                  {j !== t(`header.mainHeader.childLinks.${i}.count`) - 1 && (
                    <Divider />
                  )}
                </React.Fragment>
              ))}
            </Box>
          )}
        </div>
      );
  
      links.push(link);
    }

    return links;
  };

  return (
    <>
      {/* Mobile view */}
      <AppBar position="fixed" sx={{ display: { xs: 'flex', md: 'none' }, top: trigger ? '0px' : '40px', zIndex: 999, transition: 'top 0.1s', width: "100%"}}>
        <Toolbar sx={{ backgroundColor: "common.white" , justifyContent: "space-between", px: 1}}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
            <Menu fontSize="large" sx={{color: "common.black", mx: 1}} />
          </IconButton>
          <Logo device={'mobile'} />
          <Link href="/contact-us">
            <IconButton edge="start" color="inherit">
              <SupportAgent fontSize="large" sx={{color: "common.black", mx: 1}}/>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>

      {/* MUI Drawer */}
      <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
        <Box sx={{ width: "300px" }}>
          <IconButton sx={{ position: "absolute", top: 1, right: 1 }} onClick={handleDrawerClose}>
            <Close />
          </IconButton>
          <List>
            {Array.from({ length: t(`header.mainHeader.count`) }, (_, i) => (
              <React.Fragment key={t(`header.mainHeader.childLinks.${i}.label`)}>
                <ListItem
                  button
                >
                  <ListItemText primary={t(`header.mainHeader.childLinks.${i}.label`)} 
                    onClick={() => handleChildLinkClick(t(`header.mainHeader.childLinks.${i}.href`))}/>
                  {(t(`header.mainHeader.childLinks.${i}.childLinks`) &&
                    t(`header.mainHeader.childLinks.${i}.count`) > 0) && 
                    <ChevronRight onClick={handleServicesSubmenuToggle} />} 
                </ListItem>
                {t(`header.mainHeader.childLinks.${i}.childLinks`) &&
                  t(`header.mainHeader.childLinks.${i}.count`) > 0 && (
                    <List sx={{p: 0}}>
                      {Array.from({ length: t(`header.mainHeader.childLinks.${i}.count`) }, (_, j) => (
                        <React.Fragment key={t(`header.mainHeader.childLinks.${i}.childLinks.${j}.label`)}>
                          <ListItem
                            button
                            
                            sx={{ pl: 4, display: servicesSubmenuOpen ? "block" : "none" }} 
                          >
                            <ListItemText primary={t(`header.mainHeader.childLinks.${i}.childLinks.${j}.label`)} onClick={() => handleChildLinkClick(t(`header.mainHeader.childLinks.${i}.childLinks.${j}.href`))}/>
                          </ListItem>
                        </React.Fragment>
                      ))}
                    </List>
                  )}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>

        
      {/* Web view */}
      <AppBar position="fixed" sx={{ display: { xs: 'none', md: 'flex' }, top: trigger ? '0px' : '40px', zIndex: 999, transition: 'top 0.1s', maxHeight: '96px' }}>
        <Toolbar sx={{px: {xs:0, sm:20}, backgroundColor: "common.white" }}>
          <Logo device={'desktop'} />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {renderChildLinks()}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MainHeader;






