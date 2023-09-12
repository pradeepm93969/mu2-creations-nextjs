import {
    Facebook,
    Instagram,
    LinkedIn,
    Twitter,
    YouTube,
  } from "@mui/icons-material";
  import { Box, Link } from "@mui/material";
  import React from "react";
  
  export default function CustomSocialLinks({
    youtubeLink,
    facebookLink,
    twitterLink,
    instagramLink,
    linkedinLink,
  }) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", lg: "flex-start" },
          alignItems: "center",
          m: 2,
          mt: 4,
        }}
      >
        {youtubeLink && (
          <Link href={youtubeLink} >
            <YouTube fontSize="large" style={{ color: "primary", marginRight: "10px" }} />
          </Link>
        )}
        {facebookLink && (
          <Link href={facebookLink} >
            <Facebook fontSize="large" style={{ color: "primary", marginRight: "10px" }} />
          </Link>
        )}
        {twitterLink && (
          <Link href={twitterLink} >
            <Twitter fontSize="large" style={{ color: "primary", marginRight: "10px" }} />
          </Link>
        )}
        {instagramLink && (
          <Link href={instagramLink} >
            <Instagram fontSize="large" style={{ color: "primary", marginRight: "10px" }} />
          </Link>
        )}
        {linkedinLink && (
          <Link href={linkedinLink} >
            <LinkedIn fontSize="large" style={{ color: "primary", marginRight: "10px" }} />
          </Link>
        )}
      </Box>
    );
  }
  