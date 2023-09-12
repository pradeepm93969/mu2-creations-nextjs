import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function ImageCard({src, alt}) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const width = isMobile ? 300 : 800; // Adjust dimensions as needed
  const height = isMobile ? 500 : 200;
  return (
    <Box
      sx={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        overflow: "hidden",
        borderRadius: "8px",
        textAlign: "center",
        maxWidth: "100%",
        height: { xs: "320px", md: "400px" },
        my: { xs: 0, md: 4 },
      }}
    >
      <Image
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "fill" }}
        width={width}
        height={height}
      />
    </Box>
  );
}
