import { Email } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";

export default function CustomEmail({ emailAddress }) {
  const handleLinkClick = (emailAddress) => {
    window.open("mailto:" + emailAddress);
  };

  return (
    <Typography
      variant="body1"
      align="center"
      onClick={() => handleLinkClick(emailAddress)}
      sx={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Email sx={{ mx: 1 }} />
      {emailAddress}
    </Typography>
  );
}
