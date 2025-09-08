import { Box, ThemeProvider } from '@mui/material';
import { background } from './styles/backgroundStyles';
import { RouterProvider } from 'react-router';
import router from './router';
import theme from './styles/theme';
import { GradientBackground } from './common/components/GradientBackground';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={background}>
        <GradientBackground>
          <RouterProvider router={router} />
        </GradientBackground>
      </Box>
    </ThemeProvider>
  );
};

export default App;
