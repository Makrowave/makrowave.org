import { Box } from '@mui/material';
import type { ReactNode } from 'react';
import { Outlet } from 'react-router';

const MdxWrapper = ({ children }: { children?: ReactNode }) => {
  return (
    <Box
      sx={{
        mx: '25px',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        color: 'white',
        p: children ? 0 : 2,
        '& h1, & h2, & h3, & h4': {
          color: 'white',
        },
        '& h5, & h6': {
          color: 'gray',
        },
        '& p': {
          lineHeight: 1.6,
          mb: 2,
        },
        '& a': {
          color: 'secondary.main',
          textDecoration: 'underline',
        },
        '& ul, & ol': {
          pl: 4,
          mb: 2,
        },
        '& li': {
          mb: 1,
        },
      }}
    >
      {children ? children : <Outlet />}
    </Box>
  );
};

export default MdxWrapper;
