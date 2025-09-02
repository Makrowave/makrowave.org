import { Box, CssVarsProvider } from "@mui/joy";
import { background } from "./styles/backgroundStyles";
import { RouterProvider } from "react-router";
import router from "./router";
import theme from "./styles/theme";

const App = () => {
  return (
    <CssVarsProvider theme={theme}>
      <Box sx={background}>
        <RouterProvider router={router} />
      </Box>
    </CssVarsProvider>
  );
};

export default App;
