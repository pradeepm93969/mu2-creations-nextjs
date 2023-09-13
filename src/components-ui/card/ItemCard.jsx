
import React from "react";
import CustomButton from "../form/CustomButton";
import { Box, Card, CardContent, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

export default function ItemCard({
  image,
  header,
  text,
  buttonText,
  buttonLink,
}) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Card
      sx={{
        width: 300,
        pb: 4,
        mt: { xs: 1, md: 2 },
        mb: { xs: 4, md: 8 },
      }}
      raised
    >
      <Box
        sx={{
          overflow: "hidden",
          width: isMobile ? "89vw" : "auto",
          position: "relative",
          height: "250px"
        }}
      >
        <Image
          src={image}
          alt={header}
          fill
        />
      </Box>
      <CardContent>
        <Typography variant="h4" sx={{ fontWeight: "bold", py: 2 }} noWrap>
          {header}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "4",
            WebkitBoxOrient: "vertical",
          }}
        >
          {text}
        </Typography>
      </CardContent>
      <CustomButton text={buttonText} link={buttonLink} size={"small"} />
    </Card>
  );
}
