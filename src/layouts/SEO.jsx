import React from "react";
import Head from "next/head";

const SEO = ({ title, description }) => {
  return (
    <Head>
      <title>{title ? title.slice(0, 60) : ""}</title>
      <meta
        name="description"
        content={description ? description.slice(0, 275) : ""}
      />
    </Head>
  );
};

export default SEO;
