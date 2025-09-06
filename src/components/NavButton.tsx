import { NavLink } from 'react-router';
import type { Page } from './Navigation';
import { Link } from '@mui/joy';

const NavButton = ({
  page,
  navWidth,
  idx,
  total,
}: {
  page: Page;
  navWidth: number;
  idx: number;
  total: number;
}) => {
  const gradient =
    'linear-gradient(to right, rgba(225,155,255,1), rgba(255,255,255,1), rgba(169,252,214,1))';

  return (
    <Link
      fontSize={24}
      to={page.href}
      component={NavLink}
      sx={{
        px: 1,
        py: 0.8,
        textDecoration: 'none',
        fontWeight: 'bold',
        background: gradient,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
        backgroundSize: `${navWidth}px 100%`,
        backgroundPosition: `${(idx / total) * 100}% 0`,
        transition: 'all 0.3s ease',

        '&::after': {
          content: `"${page.label}"`,
          position: 'absolute',
          textDecoration: 'none',
          fontWeight: 'bold',
          background: gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'black',
          backgroundClip: 'text',
          color: 'black',
          opacity: 0,
          backgroundSize: `${navWidth}px 100%`,
          backgroundPosition: `${(idx / total) * 100}% 0`,
          transition: 'all 0.3s ease',
        },

        '&:hover::after': {
          opacity: 0.3, // adjust darkness
        },
      }}
    >
      {page.label}
    </Link>
  );
};
export default NavButton;
