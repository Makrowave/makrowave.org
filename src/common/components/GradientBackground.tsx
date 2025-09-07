import { Box } from '@mui/joy';
import { backgroundGradient } from '../../styles/backgroundStyles';
import type { ReactElement } from 'react';

export const GradientBackground = ({
  children,
}: {
  children: ReactElement;
}) => {
  return (
    <Box sx={{ height: '100vh' }}>
      <Box sx={backgroundGradient}>
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
  );
};
