import {  WhatsApp } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";

export default function CustomWhatsApp({phoneNumber}) {

  const handleLinkClick = (phoneNumber) => {
    window.open("https://wa.me/" + phoneNumber + "?text=",  '_self');
  };

  return (
    <Typography
      variant="body1"
      align="center"
      onClick={() => handleLinkClick(phoneNumber)}
      sx={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <WhatsApp sx={{ mx: 1 }} />
      {phoneNumber}
    </Typography>
  );
}
