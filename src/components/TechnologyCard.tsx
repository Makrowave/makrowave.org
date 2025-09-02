import { Box, Link, Typography } from "@mui/joy";
import type { ReactElement } from "react";

export type CardProps = {
  text: string | ReactElement;
  title: string;
  img: string;
  imgColor?: string;
  href?: string;
  leftImg?: boolean;
};

export const TechnologyCard = ({ text, title, img, imgColor, href, leftImg }: CardProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: leftImg ? "row-reverse" : "row",
        justifyContent: leftImg ? "start" : "space-between",
        gap: 10,
      }}
    >
      <Box>
        <Typography component={"h3"} fontSize={22} textColor={"common.white"}>
          {href ? <Link href={href}>{title}</Link> : title}
        </Typography>
        <Typography textColor={"common.white"} fontSize={18} textAlign={"justify"}>
          {text}
        </Typography>
      </Box>
      <Box component={"img"} src={img} sx={{ height: 240, width: 240, borderRadius: 20 }} bgcolor={imgColor} />
    </Box>
  );
};
