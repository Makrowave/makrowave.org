import { Box, Typography } from '@mui/joy';
import { Outlet } from 'react-router';
import { translucentBlur } from '../styles/backgroundStyles';
import Navigation from './Navigation';
import { Copyright } from '@mui/icons-material';

const Layout = () => {
  return (
    <Box sx={{ width: 1080, position: 'relative' }}>
      <Navigation />

      <Box
        sx={{
          ...translucentBlur,
          minHeight: '100vh',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          my: 0,
          backdropFilter: 'blur(20px)',
        }}
      >
        <Outlet />
        <Typography
          sx={{
            mx: '40px',
            mb: '10px',
            mt: 'auto',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
          fontSize={18}
        >
          Makrowave
          <Copyright sx={{ fontSize: '0.9em', color: 'inherit' }} />
          2025
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;
