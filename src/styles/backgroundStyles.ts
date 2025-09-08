import type { SxProps } from '@mui/material/styles/types';

const flexFill: SxProps = {
  width: '100%',
  height: '100%',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
};

export const backgroundGradient: SxProps = {
  ...flexFill,
  background:
    'linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), linear-gradient(to left, rgba(0, 255, 136, 0.5) 0%, rgba(0, 255, 136, 0) 49%, rgba(178, 0, 255, 0) 51%, rgba(178, 0, 255, 0.7) 100%)',
};

export const translucentBlur: SxProps = {
  backdropFilter: 'blur(20px)',
  background: 'rgba(0, 0, 0, 0.3)',
};

export const background: SxProps = {
  width: '100%',
  height: '100%',
  bgcolor: 'black',
  display: 'flex',
  flexDirection: 'column',
};
