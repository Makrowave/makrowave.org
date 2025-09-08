import { Box } from '@mui/material';
import { posts } from '../blog/blogPosts';
import PostPreview from '../blog/components/PostPreview';

const BlogPage = () => {
  return (
    <Box sx={{ mt: '40px', mx: 25 }}>
      {posts.map((p, i) => (
        <PostPreview post={p} noDivider={i === posts.length - 1} />
      ))}
    </Box>
  );
};

export default BlogPage;
