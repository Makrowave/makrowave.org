import React from 'react';
import Box from '@mui/material/Box';

type GradientBoxProps = {
  children: React.ReactNode;
  offBackground: string;
  onBackground: string;
  trigger: boolean;
  duration?: string;
  borderRadius?: string;
};

//Works with gradient
export default function ToggleTransitionOverlay({
  children,
  offBackground,
  onBackground,
  trigger,
  duration = '2s',
  borderRadius = '20px',
}: GradientBoxProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius,
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
        '::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: offBackground,
          transition: `opacity ${duration}`,
          opacity: trigger ? 0 : 1,
          zIndex: -1,
          pointerEvents: 'none',
        },
        '::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: onBackground,
          transition: `opacity ${duration}`,
          opacity: trigger ? 1 : 0,
          zIndex: -1,
          pointerEvents: 'none',
        },
      }}
    >
      {children}
    </Box>
  );
}
