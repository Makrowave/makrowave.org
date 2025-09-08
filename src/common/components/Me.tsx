import { BlueskyIcon } from '../components/icons/BlueskyIcon';
import SteamIcon from '../components/icons/SteamIcon';
import DiscordIcon from '../components/icons/DiscordIcon';
import { EmailIcon } from '../components/icons/EmailIcon';
import { GithubIcon } from '../components/icons/GithubIcon';
import { Avatar, Badge, Link, Stack } from '@mui/material';

// Not reusable hehe but I dont like a lot of stuff in one place - my page my rules
// Altough many rules are worth following in general - but this exception is fine
const Me = () => {
  return (
    <Stack gap={1}>
      <Badge
        overlap="circular"
        badgeContent={
          <Link
            href={'https://www.youtube.com/watch?v=2_Dtmpe9qaQ'}
            target="_blank"
          >
            <Avatar
              alt="Clippy"
              src="/clippy.png"
              sx={{
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
          src="/avatar.png"
          sx={{ width: '250px', height: '250px', border: '2px solid white' }}
        />
      </Badge>

      <Link href="#">
        <DiscordIcon style={{ marginRight: '10px' }} />
        makrowave
      </Link>
      <Link href="https://github.com/Makrowave" target="_blank">
        <GithubIcon style={{ marginRight: '10px' }} />
        Github
      </Link>
      <Link
        href="https://bsky.app/profile/makrowave.bsky.social"
        target="_blank"
      >
        <BlueskyIcon style={{ marginRight: '10px' }} />
        Bluesky
      </Link>
      <Link href="https://steamcommunity.com/id/Makrowave" target="_blank">
        <SteamIcon style={{ marginRight: '10px' }} />
        Steam
      </Link>
      <Link href="mailto:maksstyzej@gmail.com" target="_blank">
        <EmailIcon style={{ marginRight: '10px' }} />
        maksstyzej@gmail.com
      </Link>
    </Stack>
  );
};

export default Me;
