import { Box, Divider, Typography } from '@mui/joy';
import type { Post } from './BlogTypes';
import { Link } from 'react-router';
import { getTitleColor } from '../blogHelper';

const PostPreview = ({
  post,
  noDivider,
}: {
  post: Post;
  noDivider?: boolean;
}) => {
  const color = getTitleColor(post.date);

  return (
    <>
      <Box sx={{ my: 5 }}>
        <Link to={post.href} style={{ textDecoration: 'none' }}>
          <Typography component={'h2'} fontSize={28} sx={{ color: color }}>
            {post.title}
          </Typography>
        </Link>
        <Typography
          fontSize={18}
          sx={{ color: color, filter: 'grayscale(80%) brightness(180%)' }}
        >
          {post.date.toLocaleDateString('en', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </Typography>
        <Typography
          fontSize={21}
          sx={{ color: color, filter: 'grayscale(80%) brightness(180%)' }}
        >
          {post.subtitle}
        </Typography>
      </Box>
      {!noDivider && (
        <Divider
          sx={{ '--Divider-lineColor': color, filter: 'brightness(40%)' }}
        />
      )}
    </>
  );
};

export default PostPreview;
