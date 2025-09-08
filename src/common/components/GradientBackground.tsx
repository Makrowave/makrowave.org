import { Box } from '@mui/material';
import { backgroundGradient } from '../../styles/backgroundStyles';
import type { ReactElement } from 'react';

export const GradientBackground = ({
  children,
}: {
  children: ReactElement;
}) => {
  return (
    <Box sx={{ height: '100vh' }}>
      <Box sx={backgroundGradient}>{children}</Box>
    </Box>
  );
};
