import React from "react";
import { Box, Typography, Divider, Menu, MenuItem, ListItemIcon } from "@mui/material";
import { useTranslation } from "next-i18next";
import { Email, KeyboardArrowDown, KeyboardArrowUp, Phone } from "@mui/icons-material";

export default function SupportDropdown() {

  const handleSupportMenuLinkClick = (href) => {
    handleClose();
    window.open(href);
  };

  const { t } = useTranslation("common");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', cursor: "pointer" }}
        onClick={handleClick}
        aria-controls={open ? 'support-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}>

        <Typography variant='h6' sx={{ mr: 2 }}>
          {t('header.topHeader.contactText')}
        </Typography>
        {open ? (<KeyboardArrowUp/>): (<KeyboardArrowDown/>)}

      </Box> 
      <Menu
        anchorEl={anchorEl}
        id="support-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => handleSupportMenuLinkClick("tel:" + t("company.phonenumber"))}>
          <ListItemIcon>
            <Phone fontSize="small" sx={{ mr: 1 }} />
          </ListItemIcon>
          {t("company.phonenumber")}
        </MenuItem>
        <Divider />
        <MenuItem onClick={() =>
                  handleSupportMenuLinkClick("mailto:" + t("company.email"))
                }>
        <ListItemIcon>
            <Email fontSize="small" sx={{ mr: 1 }} />
          </ListItemIcon>
          {t("footer.topFooter.emailUs")}
        </MenuItem>
        
      </Menu>
    </>


  );
}
