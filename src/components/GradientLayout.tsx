import { Box } from "@mui/joy";
import { leftGradient, rightGradient, topGradient, translucentBlur } from "../styles/backgroundStyles";
import { Outlet } from "react-router";

export const GradientLayout = () => {
  return (
    <Box sx={rightGradient}>
      <Box sx={leftGradient}>
        <Box sx={topGradient}>
          <Box sx={{ display: "flex", justifyContent: "center", flex: 1, overflowY: "auto" }}>
            <Box
              sx={{
                ...translucentBlur,
                maxWidth: 1080,
                minHeight: "100vh",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                my: 0,
              }}
            >
              <Outlet />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
