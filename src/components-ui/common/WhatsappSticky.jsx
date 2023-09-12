import React from "react";
import { WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function WhatsappSticky({ phoneNumber }) {
  const handleLinkClick = (phoneNumber) => {
    window.open("https://wa.me/" + phoneNumber + "?text=");
  };

  return (
    <IconButton
      onClick={() => handleLinkClick(phoneNumber)}
      role="presentation"
      sx={{
        position: "fixed",
        bottom: 16,
        left: 16,
        color: "common.white",
        backgroundColor: "#25D366",
        "&:hover": {
          backgroundColor: "#128C7E", // Hover color
        },
      }}
    >
      <WhatsApp sx={{ fontSize: { xs: 30, md: 40 } }} />
    </IconButton>
  );
}
