import { Box, Divider } from '@mui/joy';
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

const Navigation = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [navWidth, setNavWidth] = useState(0);

  useLayoutEffect(() => {
    if (navRef.current) {
      setNavWidth(navRef.current.offsetWidth);
    }
  }, []);

  return (
    <Box
      ref={navRef}
      component="nav"
      sx={{
        position: 'sticky',
        top: 0,
        display: 'flex',
        zIndex: 10,
        flexDirection: 'column',
        bgcolor: 'rgba(0, 0, 0, 0.5)',
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
      <Divider
        sx={{
          borderBottom: '0.1px solid',
          borderImage:
            'linear-gradient(to right, rgba(225,155,255,1), rgba(255,255,255,1), rgba(169,252,214,1)) 1',
        }}
      />
    </Box>
  );
};

export default Navigation;
