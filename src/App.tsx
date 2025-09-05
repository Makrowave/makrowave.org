import { Box, CssVarsProvider } from "@mui/joy";
import { background } from "./styles/backgroundStyles";
import { RouterProvider } from "react-router";
import router from "./router";
import theme from "./styles/theme";
import { GradientBackground } from "./components/GradientBackground";

const App = () => {
  return (
    <CssVarsProvider theme={theme}>
      <Box sx={background}>
        <GradientBackground>
          <RouterProvider router={router} />
        </GradientBackground>
      </Box>
    </CssVarsProvider>
  );
};

export default App;
