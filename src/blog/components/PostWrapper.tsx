import { Box } from '@mui/material';
import { Outlet } from 'react-router';

const PostWrapper = () => {
  return (
    <Box
      sx={{
        mx: '25px',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        color: 'white',
        p: 2,
        '& h1, & h2': {
          color: 'white',
        },
        '& h3, & h4, & h5, & h6': {
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
        // '& code': {
        //   fontFamily: 'monospace',
        //   bgcolor: 'grey.100',
        //   px: 0.5,
        //   borderRadius: 1,
        // },
        '& ul, & ol': {
          pl: 4,
          mb: 2,
        },
        '& li': {
          mb: 1,
        },
      }}
    >
      <Outlet />
    </Box>
  );
};

export default PostWrapper;
