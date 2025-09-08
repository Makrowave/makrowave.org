import { Box, Divider, Link, Typography } from '@mui/material';
import type { ReactElement } from 'react';

export type CardProps = {
  text: string | ReactElement;
  title: string;
  img: string;
  imgColor?: string;
  href?: string;
  leftImg?: boolean;
  noDivider?: boolean;
};

export const TechnologyCard = ({
  text,
  title,
  img,
  imgColor,
  href,
  leftImg,
  noDivider,
}: CardProps) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: leftImg ? 'row-reverse' : 'row',
          justifyContent: leftImg ? 'start' : 'space-between',
          gap: 10,
        }}
      >
        <Box>
          <Typography component={'h3'} fontSize={22}>
            {href ? <Link href={href}>{title}</Link> : title}
          </Typography>
          <Typography fontSize={18} textAlign={'justify'}>
            {text}
          </Typography>
        </Box>
        <Box
          component={'img'}
          src={img}
          sx={{ height: 240, width: 240, borderRadius: 10 }}
          bgcolor={imgColor}
        />
      </Box>
      {!noDivider && (
        <Divider sx={{ '--Divider-lineColor': 'rgba(255, 255, 255, 0.15)' }} />
      )}
    </>
  );
};
