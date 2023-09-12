
import React from "react";
import CustomButton from "../form/CustomButton";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function ItemCard({
  image,
  header,
  text,
  buttonText,
  buttonLink,
}) {
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
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt="Header Image"
      />
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
