import { Box, useMediaQuery, useTheme } from '@mui/material';
import { posts } from '../blog/blogPosts';
import PostPreview from '../blog/components/PostPreview';
import TagsBar from '../blog/components/TagsBar';
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';

const BlogPage = () => {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ mt: 1 }}>
      <TagsBar filterPostsCallback={setFilteredPosts} />
      <Box sx={{ mt: '40px', mx: isMd ? 4 : 25 }}>
        <AnimatePresence>
          {filteredPosts.map((p, i) => (
            <PostPreview
              post={p}
              noDivider={i === posts.length - 1}
              key={p.href}
            />
          ))}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default BlogPage;
