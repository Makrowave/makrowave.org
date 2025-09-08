import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '60px',
      background:
        'linear-gradient(to right, rgba(225, 155, 255, 1), rgba(255, 255, 255, 1), rgba(169, 252, 214, 1))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      color: 'transparent',
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
          color: 'rgba(169, 252, 214, 1)',
          textDecoration: 'none',
          '&:visited': {
            color: 'rgba(225, 155, 255, 1)',
          },
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        color: 'white',
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'gradient' },
              style: {
                borderImage:
                  'linear-gradient(to right, rgba(225,155,255,1), rgba(255,255,255,1), rgba(169,252,214,1)) 1',
              },
            },
            {
              props: { orientation: 'horizontal' },
              style: {
                margin: '16px 0px',
              },
            },
            {
              props: { orientation: undefined },
              style: {
                margin: '16px 0px',
              },
            },
            {
              props: { orientation: 'vertical' },
              style: {
                margin: '0px 16px',
              },
            },
          ],
          borderColor: 'white',
        },
      },
    },
  },
});

export default theme;
