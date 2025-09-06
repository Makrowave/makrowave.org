import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  typography: {
    h1: {
      background:
        'linear-gradient(to right, rgba(225, 155, 255, 1), rgba(255, 255, 255, 1), rgba(169, 252, 214, 1))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      color: 'transparent',
    },
  },
  components: {
    JoyLink: {
      styleOverrides: {
        root: {
          color: 'rgba(169, 252, 214, 1)',
          textDecorationColor: 'rgba(169, 252, 214, 1)',
          '&:visited': {
            color: 'rgba(225, 155, 255, 1)',
            textDecorationColor: 'rgba(225, 155, 255, 1)',
          },
        },
      },
    },
  },
});

export default theme;
