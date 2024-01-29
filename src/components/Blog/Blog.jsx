import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useTranslation } from "next-i18next";
import ItemBlogCard from "../../components-ui/card/ItemBlogCard";
import ItemsBlogCarousal from "../../components-ui/carousel/ItemsBlogCarousal";

const Blog = ({ isBlogPage }) => {
  const { t } = useTranslation("blog");
 
  const blogs = t(`childItems`, { returnObjects: true });

  return (
    <Box sx={{ px: { xs: 3, md: 10 }, pt: 3, pb: {xs: 3, sm: 0}, maxWidth: "100%" }}>
      <Typography variant="h2" color="primary.dark" sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}>
        {t("header")}
      </Typography>
      <Typography variant="h4" color="primary.dark" sx={{ fontStyle: "italic", fontWeight: "bold", textAlign: "center", mb: 4 }}>
        {t("subHeader")}
      </Typography>

      {!isBlogPage ? (
          <ItemsBlogCarousal items={blogs}/>
      ) : (
        <Grid container>
            {blogs.map((blog) => (
              <Grid item xs={12} sm={4} lg={3} key={blog.id} sx={{textAlign: "center", display: "flex", justifyContent: "center"}}>
                <ItemBlogCard image={blog.cardImage} header={blog.header} date={blog.createdAt} buttonText={t("details")}
                buttonLink={"/blogs/" + blog.id} />
              </Grid>
            ))}
        </Grid>
      )}
     
    </Box>
  );
};

export default Blog;
