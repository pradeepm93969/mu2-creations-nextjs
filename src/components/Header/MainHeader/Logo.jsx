import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from "next-i18next";

const Logo = ({device}) => {

  const { t } = useTranslation("common");

  return (
    <>
      {device === 'mobile' ? (
        <Box sx={{mt:1}}>
          <Link href="/">
            <Image src="/img/Logo.png" width={100} height={80} alt="Logo"/>
          </Link>
        </Box>
      ) : (
        <Box sx={{my:1, mx: 5}}>
        <Link href="/" style={{ textDecoration: 'none', color: 'white' }}>
          <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Image src="/img/Logo-d.png" width={100} height={80} alt="Logo"/>
            <Typography
                variant="h1"
                sx={{ fontWeight: "bold", mx: 2}}
                color= "primary.dark"
              >
                {t("company.name")}
              </Typography>
          </Box>
        </Link>
      </Box>
      )
    }
    </>
  );
};

export default Logo;
