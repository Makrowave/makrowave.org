import { AppBar, Box, Divider, Slide } from '@mui/material';
import { useRef, useLayoutEffect, useState } from 'react';
import NavButton from './NavButton';
import { Pages } from '../../pages/pages';

export type Page = {
  href: Pages;
  label: string;
};

const pages = [
  { href: Pages.Home, label: 'Home' },
  { href: Pages.Blog, label: 'Random Thoughts' },
  { href: Pages.Projects, label: 'Projects' },
  { href: Pages.Experience, label: 'Experience' },
];

const SlidingAppBar = ({ trigger }: { trigger?: boolean }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const [navWidth, setNavWidth] = useState(0);

  useLayoutEffect(() => {
    if (navRef.current) {
      setNavWidth(navRef.current.offsetWidth);
    }
  }, []);

  const body = (
    <AppBar
      ref={navRef}
      component="nav"
      sx={{
        position: 'sticky',
        my: 'auto',
        bgcolor: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(20px)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        {pages.map((p, idx) => (
          <NavButton
            page={p}
            key={p.href}
            navWidth={navWidth}
            idx={idx}
            total={pages.length}
          />
        ))}
      </Box>
      <Divider variant="gradient" sx={{ my: 0 }} />
    </AppBar>
  );

  if (trigger === undefined) {
    return body;
  }

  return (
    <Slide
      appear={false}
      direction="down"
      in={!trigger}
      unmountOnExit={false}
      mountOnEnter={false}
    >
      {body}
    </Slide>
  );
};

export default SlidingAppBar;
