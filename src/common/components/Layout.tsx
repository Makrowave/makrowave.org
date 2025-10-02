import { Box, Typography, useScrollTrigger } from '@mui/material';
import { Outlet } from 'react-router';
import { translucentBlur } from '../../styles/backgroundStyles';
import Navigation from './SlidingAppBar';
import { Copyright } from '@mui/icons-material';
import { useEffect, useRef, useState } from 'react';

const Layout = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollTarget, setScrollTarget] = useState<Element | undefined>(
    undefined,
  );

  const trigger = useScrollTrigger({
    target: scrollTarget,
  });

  useEffect(() => {
    if (scrollRef.current) {
      setScrollTarget(scrollRef.current);
    }
  }, []);

  return (
    <Box
      id="test"
      ref={scrollRef}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
        overflowY: 'auto',
      }}
    >
      <Box
        sx={(theme) => ({
          position: 'relative',
          width: '100%',
          // display: 'flex',
          [theme.breakpoints.up('lg')]: {
            width: 1200,
            display: 'block',
          },
        })}
      >
        <Navigation trigger={trigger} />
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
    </Box>
  );
};

export default Layout;
