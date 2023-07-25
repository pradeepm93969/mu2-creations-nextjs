import React from 'react';
import { WhatsApp } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useTranslation } from "next-i18next";

const WhatsappSticky = () => {
  
  const { t } = useTranslation("common");

  const handleLinkClick = (href) => {
    window.open(href);
  };

  return (
      <IconButton
        onClick={() => handleLinkClick("https://wa.me/" + t("company.whatsappNumber") + "?text=")}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, left: 16, color: "common.white", backgroundColor: "#25D366", "&:hover": {
          backgroundColor: "#128C7E", // Hover color
        } }}
      >
          <WhatsApp sx={{ fontSize: {xs:30, md:40 }}}/>
      </IconButton>
  );
};

export default WhatsappSticky;