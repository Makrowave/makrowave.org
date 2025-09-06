import { BlueskyIcon } from '../components/icons/BlueskyIcon';
import SteamIcon from '../components/icons/SteamIcon';
import DiscordIcon from '../components/icons/DiscordIcon';
import { EmailIcon } from '../components/icons/EmailIcon';
import { GithubIcon } from '../components/icons/GithubIcon';
import { Avatar, Badge, Box, Link } from '@mui/joy';

// Not reusable hehe but I dont like a lot of stuff in one place - my page my rules
// Altough many rules are worth following in general - but this exception is fine
const Me = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Badge
        variant="plain"
        badgeInset={'8%'}
        badgeContent={
          <Link
            href={'https://www.youtube.com/watch?v=2_Dtmpe9qaQ'}
            target="_blank"
          >
            <Avatar
              alt="Clippy"
              src="/src/assets/clippy.png"
              variant="outlined"
              sx={{
                '--Avatar-size': '70px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0px 0px 100px 20px rgba(255, 255, 255, 0.32)',
                p: 0.5,
              }}
            />
          </Link>
        }
        sx={{
          '--Badge-paddingX': '0px',
          '& .MuiBadge-badge': {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        <Avatar
          alt="Makrowave (Me)"
          src="/src/assets/avatar.png"
          sx={{ width: '250px', height: '250px', border: '2px solid white' }}
        />
      </Badge>

      <Link href="#" sx={{ gap: 1 }}>
        <DiscordIcon />
        makrowave
      </Link>
      <Link href="https://github.com/Makrowave" sx={{ gap: 1 }} target="_blank">
        <GithubIcon />
        Github
      </Link>
      <Link
        href="https://bsky.app/profile/makrowave.bsky.social"
        sx={{ gap: 1 }}
        target="_blank"
      >
        <BlueskyIcon />
        Bluesky
      </Link>
      <Link
        href="https://steamcommunity.com/id/Makrowave"
        sx={{ gap: 1 }}
        target="_blank"
      >
        <SteamIcon />
        Steam
      </Link>
      <Link href="mailto:maksstyzej@gmail.com" sx={{ gap: 1 }} target="_blank">
        <EmailIcon />
        maksstyzej@gmail.com
      </Link>
    </Box>
  );
};

export default Me;
