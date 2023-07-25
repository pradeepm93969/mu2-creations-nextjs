import React, { useEffect, useState } from 'react';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';

const ScrollTo = () => {
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  return (
    <>
      <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
    </>
  );
};

export default ScrollTo;