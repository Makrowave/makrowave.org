import {
  Box,
  Divider,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link as RouterLink } from 'react-router';
import {
  TechnologyCard,
  type CardProps,
} from '../common/components/TechnologyCard';
import Tabulation from '../common/components/Tabulation';
import Me from '../common/components/Me';

export const HomePage = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
      sx={{
        m: '40px',
        gap: 6,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 10,
          flexWrap: isMd ? 'wrap' : 'nowrap',
          justifyContent: 'center',
        }}
      >
        <Me />
        <Box
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}
        >
          <Typography variant="h1">Hello, I'm Makrowave</Typography>
          <Typography component={'section'} textAlign={'justify'}>
            <Typography variant="h5">About me</Typography>
            <Typography component={'p'}>
              I'm a web developer, working primarly using <b>react.js</b>. Other
              than that I like playing video games, making content for them
              (especially Minecraft mods/modpacks) and when things are done
              right. It's just satisfying.
            </Typography>
            <Divider orientation="horizontal" />
            <Typography variant="h5">What will you find here</Typography>
            <ul>
              <li>
                Blog posts about frontend code problems - mostly some specific
                problem I've approched not some general patterns discussions.
              </li>
              <li>Blog posts about games I play and screenshots</li>
              <li>My work experience</li>
              <li>
                Projects that I think are worth sharing in{' '}
                <Typography component="span">
                  <Link component={RouterLink} to={'projects'}>
                    projects tab
                  </Link>
                </Typography>
              </li>
              <li>Maybe devlogs from things I made</li>
            </ul>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Typography variant={'h5'}>
          Things I use and recommend/support
        </Typography>
        <Divider sx={{ mt: 1 }} />
        {cards.map((card) => (
          <TechnologyCard {...card} key={card.title} />
        ))}
      </Box>
    </Box>
  );
};

const cards: CardProps[] = [
  {
    title: 'Pterodactyl Panel',

    img: '/pterry.svg',
    imgColor: 'rgba(20, 100, 200, 0.8)',
    href: 'https://pterodactyl.io/',
    text: (
      <>
        <Tabulation />
        Pterodactyl is an open source panel for hosting game servers (can host
        other things too actually!). It uses docker container for every server
        which is well, a baseline for me, but it first convinced me to use it{' '}
        <i>(I might have not researched alternatives - oopsie)</i>. Well it
        works me like a charm but a friend recommended me an alternative:{' '}
        <Link href={'https://pufferpanel.com/'}>PufferPanel</Link>. This one is
        fully ran in a container (as of writing pterodactyl is not). <br />
        <Tabulation />
        Pterodactyl comes out of the box with minecraft servers: PaperMC, Forge,
        Fabric most likely something else I forgot, <b>TeamSpeak server even</b>
        , Rust and Source Engine Games: CS:GO, Ark Survival Evolved, Garry's
        Mod, Insurgency and more. <br />
        <Tabulation />
        Well it supports almost everything provided you have configuration. In
        Pterodactyl's terminology config for game or engine or whatever is
        called "Nest" and configs for certain versions or games are called
        "Eggs".
        <br />
        <Link href={'https://github.com/pelican-eggs'}>
          Check out this repo for community made configs
        </Link>
      </>
    ),
  },
  {
    title: 'ATProto',
    href: 'https://atproto.com/',
    img: '/atproto.png',
    imgColor: 'rgba(20, 100, 200, 0.8)',
    leftImg: true,
    text: (
      <>
        <Tabulation /> Created by people working on{' '}
        <Link href={'https://bsky.app/'}>Bluesky</Link>. Once upon a time{' '}
        <Link href="https://bsky.app/profile/prefetcher.miku.place">
          a friend
        </Link>{' '}
        has shown me his amazing{' '}
        <Link href={'https://pinksea.art/'}>oekaki board</Link>. While showing
        me that he also talked about ATProtocol and Bluesky. I got kind of
        interested in Bluesky, now more than ever (
        <s>
          altough I've never been a type of person to post stuff on the Internet
          which is quite ironic since I am making this website
        </s>
        ). I like the idea of decentralized social media where people can have
        more control than one big platform controlled by corporation. Well while
        I don't post I root for Bluesky which is nice alternative to Twitter.
      </>
    ),
  },
  {
    title: 'My tech stack',
    img: '/react.png',
    text: (
      <>
        <Tabulation />
        Well not gonna write here anything meaningful. I use TypeScript, work
        and make personal projects in React, when I have to write backend I use
        .NET. For components I like <Link href={'https://mui.com/'}>MUI</Link>,
        but when feeling more creative tailwind is also fun. Well besides my PC,
        I use Apple stuff - iPhone, mac. While having scummy practices their -
        environment is neat (except for safari, cmon how bad of web api can you
        implement). Well point of previous statement was to say that I learned
        Swift and SwiftUI. I know some React Native, use React Native at work,
        but I'm not a fan of it.
        <br /> <Tabulation />
        If you're wondering - this website was made using React, Vite and MUI
      </>
    ),
  },
  {
    title: 'Paint.NET',
    href: 'https://www.getpaint.net/',
    img: '/paint.png',
    text: (
      <>
        <Tabulation />
        Really good image editor - MS Paint-esque but has layers, mix-modes,
        transparency and other things you would expect from a good editor.
        Handles image resizing well, anchors etc. - just check it out. I use it
        for pixelart when I need to do something for minecraft mods / modpacks.
        Would be fun to paint their logo in pixelart.{' '}
        <b>
          While I talked about pixelart - you can use it for other stuff too.
        </b>
      </>
    ),
    leftImg: true,
  },
];
