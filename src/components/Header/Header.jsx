import React from 'react';
import TopHeader from './TopHeader/TopHeader';
import { useMediaQuery } from '@mui/material';
import MainHeaderMobile from './MainHeader/MainHeaderMobile';
import MainHeaderDesktop from './MainHeader/MainHeaderDesktop';

const Header = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <header>
      <TopHeader />
      {isMobile ? <MainHeaderMobile/> : <MainHeaderDesktop />}
    </header>
  );
};

export default Header;
