import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#ffffff',
    },
    error: {
      main: red.A400,
    },
    grey:{
      main: '#1E1E1E',
    },
    lightgrey:{
      main: '#A5A5A5',
    },
  },
});

export default theme;
