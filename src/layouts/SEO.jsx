import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const SEO = (props) => {
  const { title, description, keywords } = props;
  return (
    <Head>
      <title>
        {title
          ? title.slice(0, 60)
          : 'The biggest online E-Commerce in the world'}
      </title>
      <meta
        name="description"
        content={
          description
            ? description.slice(0, 275)
            : 'The biggest online E-Commerce in the world'
        }
      />
      <meta
        name="keywords"
        content={keywords ? keywords.slice(0, 255) : 'E-Commerce, marketplace'}
      />
    </Head>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default SEO;
