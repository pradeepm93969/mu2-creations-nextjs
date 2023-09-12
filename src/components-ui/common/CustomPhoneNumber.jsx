import { Phone } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";

export default function CustomPhoneNumber({phoneNumber}) {

  const handleLinkClick = (phoneNumber) => {
    window.open("tel:" + phoneNumber);
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
      <Phone sx={{ mx: 1 }} />
      {phoneNumber}
    </Typography>
  );
}
