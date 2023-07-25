import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',  
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontSize: '3rem', // Font size for desktop (md) breakpoint
    },
    h2: {
      fontSize: '2rem', // Font size for desktop (md) breakpoint
    },
    h3: {
      fontSize: '1.5rem', // Font size for desktop (md) breakpoint
    },
    h4: {
      fontSize: '1.3rem', // Font size for desktop (md) breakpoint
    },
    h5: {
      fontSize: '1.2rem', // Font size for desktop (md) breakpoint
    },
    h6: {
      fontSize: '1.1rem', // Font size for desktop (md) breakpoint
    },
    subtitle1: {
      fontSize: '1rem', // Font size for desktop (md) breakpoint
    },
    subtitle2: {
      fontSize: '0.9rem', // Font size for desktop (md) breakpoint
    },
    body1: {
      fontSize: '1.1rem', // Font size for desktop (md) breakpoint
    },
    body2: {
      fontSize: '0.875rem', // Font size for desktop (md) breakpoint
    },
    button: {
      fontSize: '0.875rem', // Font size for desktop (md) breakpoint
    },
    caption: {
      fontSize: '0.75rem', // Font size for desktop (md) breakpoint
    },
    overline: {
      fontSize: '0.625rem', // Font size for desktop (md) breakpoint
    },
  },
});

theme = responsiveFontSizes(theme, {
  breakpoints: ['md'],
  factor: 3, // Adjust this value to reduce the font size for mobile
});

export default theme;
