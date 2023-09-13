import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function ImageCard({src, alt}) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        borderRadius: "8px",
        overflow: "hidden",
        width: isMobile ? "89vw" : "auto",
        position: "relative",
        height: isMobile ? "233px" : "350px"
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
      />
    </Box>
  );
}
