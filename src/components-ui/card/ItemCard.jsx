
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
        mx: 2,
        mt: { xs: 1, md: 2 },
        mb: { xs: 4, md: 8 },
      }}
      raised
    >
      <Box
        sx={{
          overflow: "hidden",
          position: "relative",
          height: "250px"
        }}
      >
        <Image
          src={image}
          alt={header}
          fill
          sizes="100%"
          style={{objectFit: "contain"}}
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
        <CustomButton text={buttonText} link={buttonLink} size={"small"} />
      </CardContent>
      
    </Card>
  );
}
