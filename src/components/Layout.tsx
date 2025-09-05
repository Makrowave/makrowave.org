import { Box } from "@mui/joy";
import { Outlet } from "react-router";
import { translucentBlur } from "../styles/backgroundStyles";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <Box sx={{ maxWidth: 1080, position: "relative" }}>
      <Navigation />

      <Box
        sx={{
          ...translucentBlur,
          minHeight: "100vh",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          my: 0,
          backdropFilter: "blur(20px)",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
