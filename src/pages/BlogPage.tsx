import { Box } from '@mui/material';
import { posts } from '../blog/blogPosts';
import PostPreview from '../blog/components/PostPreview';
import TagsBar from '../blog/components/TagsBar';
import { useState } from 'react';

const BlogPage = () => {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  return (
    <Box sx={{ mt: 1 }}>
      <TagsBar filterPostsCallback={setFilteredPosts} />
      <Box sx={{ mt: '40px', mx: 25 }}>
        {filteredPosts.map((p, i) => (
          <PostPreview
            post={p}
            noDivider={i === posts.length - 1}
            key={p.href}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BlogPage;
