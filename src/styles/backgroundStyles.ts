import type { SxProps } from "@mui/joy/styles/types";

const flexFill: SxProps = {
  width: "100%",
  height: "100%",
  flex: 1,
  display: "flex",
  flexDirection: "column",
};

export const topGradient: SxProps = {
  ...flexFill,
  background: "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
};

export const leftGradient: SxProps = {
  ...flexFill,
  background: "linear-gradient(to left, rgba(0, 255, 136, 0.3), rgba(0, 255, 136, 0))",
};

export const rightGradient: SxProps = {
  ...flexFill,
  background: "linear-gradient(to right, rgba(178, 0, 255, 0.5), rgba(178, 0, 255, 0))",
};

export const translucentBlur: SxProps = {
  backdropFilter: "blur(20px)",
  background: "rgba(0, 0, 0, 0.3)",
};

export const background: SxProps = {
  width: "100%",
  height: "100%",
  bgcolor: "black",
  display: "flex",
  flexDirection: "column",
};
