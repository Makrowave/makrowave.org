import {
  Box,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import type { Post } from '../blogTypes';
import { Link } from 'react-router';
import { getStringDate, getTitleColor } from '../blogHelper';
import { motion } from 'framer-motion';
const PostPreview = ({
  post,
  noDivider,
}: {
  post: Post;
  noDivider?: boolean;
}) => {
  const color = getTitleColor(post.date);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.15 }}
    >
      <Box sx={{ my: 5 }}>
        <Link to={post.href} style={{ textDecoration: 'none' }}>
          <Typography variant={isMd ? 'h5' : 'h3'} sx={{ color: color }}>
            {post.title}
          </Typography>
        </Link>
        <Stack
          direction={'row'}
          alignItems={'center'}
          flexWrap={'wrap'}
          columnGap={2}
        >
          <Typography
            variant="h6"
            sx={{
              color: color,
              filter: 'grayscale(80%) brightness(150%)',
              pr: 1,
            }}
          >
            {getStringDate(post.date)}
          </Typography>
          {post.tags.map((t) => (
            <Typography variant="h6" sx={{ filter: 'brightness(70%)' }}>
              {t}
            </Typography>
          ))}
        </Stack>
        <Typography
          variant="h5"
          sx={{ color: color, filter: 'grayscale(20%) brightness(150%)' }}
        >
          {post.subtitle}
        </Typography>
      </Box>
      {!noDivider && (
        <Divider
          sx={{ '--Divider-lineColor': color, filter: 'brightness(40%)' }}
        />
      )}
    </motion.div>
  );
};

export default PostPreview;
