import { Box } from '@mui/joy';
import {
  leftGradient,
  rightGradient,
  topGradient,
} from '../styles/backgroundStyles';
import type { ReactElement } from 'react';

export const GradientBackground = ({
  children,
}: {
  children: ReactElement;
}) => {
  return (
    <Box sx={{ ...rightGradient, height: '100vh' }}>
      <Box sx={leftGradient}>
        <Box sx={topGradient}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flex: 1,
              overflowY: 'auto',
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
