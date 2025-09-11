import { AppBar, Box, Chip } from '@mui/material';
import { useState, type Dispatch } from 'react';
import { generateGradient, getAllTags } from '../blogHelper';
import Tag from './Tag';
import type { Post } from './BlogTypes';
import { posts } from '../blogPosts';
import ToggleTransitionOverlay from '../../common/components/ToggleTransitionOverlay';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import WhiteSwitch from '../../common/components/WhiteSwitch';

type Props = {
  filterPostsCallback: Dispatch<Post[]>;
};

const TagsBar = ({ filterPostsCallback }: Props) => {
  const tags = getAllTags();

  const [selected, setSelected] = useState<string[]>([]);
  const [anyTag, setAnyTag] = useState<boolean>(true);

  const handleTagClick = (tag: string) => {
    const active = selected.includes(tag);

    let newSelected: string[] = [];

    if (active) {
      newSelected = selected.filter((t) => t !== tag);
    } else {
      newSelected = [...selected, tag];
    }

    setSelected(newSelected);

    if (newSelected.length === 0) {
      return filterPostsCallback(posts);
    }

    if (anyTag) {
      const postsToSet = posts.filter((post) =>
        newSelected.some((t) => post.tags.includes(t)),
      );

      filterPostsCallback(postsToSet);
    } else {
      const postsToSet = posts.filter((post) =>
        newSelected.every((t) => post.tags.includes(t)),
      );
      filterPostsCallback(postsToSet);
    }
  };

  const handleSwitch = () => {
    if (selected.length === 0) {
      filterPostsCallback(posts);
    } else if (!anyTag) {
      const postsToSet = posts.filter((post) =>
        selected.some((t) => post.tags.includes(t)),
      );

      filterPostsCallback(postsToSet);
    } else {
      const postsToSet = posts.filter((post) =>
        selected.every((t) => post.tags.includes(t)),
      );

      filterPostsCallback(postsToSet);
    }

    setAnyTag((p) => !p);
  };

  const clear = () => {
    setSelected([]);
  };

  return (
    <AppBar
      sx={{
        position: 'sticky',
        my: 'auto',
        bgcolor: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        gap: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }}
    >
      {tags.map((t) => (
        <Tag
          tag={t}
          key={t}
          onClick={() => handleTagClick(t)}
          active={selected.includes(t)}
        />
      ))}

      <ToggleTransitionOverlay
        offBackground="gray"
        onBackground={generateGradient('CLEAR')}
        trigger={selected.length > 0}
        duration="0.5s"
      >
        <Chip
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
              clear
              <HighlightOffIcon sx={{ fontSize: 20 }} />
            </Box>
          }
          sx={{
            m: 0.25,
            fontSize: '20px',
            color: selected.length > 0 ? 'white' : 'gray',
            display: 'flex',
            bgcolor: 'black',
            transition: 'color 0.5s',
          }}
          disabled={selected.length < 0}
          onClick={clear}
        />
      </ToggleTransitionOverlay>
      <ToggleTransitionOverlay
        offBackground="gray"
        onBackground={generateGradient('tags')}
        trigger={anyTag}
        duration="0.5s"
      >
        <Chip
          sx={{
            m: 0.25,
            fontSize: '20px',
            color: selected.length > 0 ? 'white' : 'gray',
            display: 'flex',
            bgcolor: 'black',
            transition: 'color 0.5s',
          }}
          label={
            <Box sx={{ display: 'flex', color: 'white', alignItems: 'center' }}>
              <WhiteSwitch
                color="default"
                defaultChecked
                value={anyTag}
                onChange={handleSwitch}
              />
              {
                <Box width={150}>
                  {anyTag ? 'Any of the tags' : 'All of the tags'}
                </Box>
              }
            </Box>
          }
        ></Chip>
      </ToggleTransitionOverlay>
    </AppBar>
  );
};

export default TagsBar;
