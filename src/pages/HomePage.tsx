import { Box, Link, Typography } from '@mui/joy';
import {
  TechnologyCard,
  type CardProps,
} from '../common/components/TechnologyCard';
import Tabulation from '../common/components/Tabulation';
import Me from '../common/components/Me';

export const HomePage = () => {
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
      <Box sx={{ display: 'flex', gap: 10 }}>
        <Me />
        <Box
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}
        >
          <Typography level="h1" textColor={'common.white'} fontSize={50}>
            Hello, I'm Makrowave
          </Typography>
          <Typography
            variant="plain"
            textColor={'common.white'}
            fontSize={20}
            textAlign={'justify'}
          >
            Professionaly I'm a <b>React.js</b> software developer. And casually
            I love when things are done right in the Internet, playing Minecraft
            and since I find the game boring: creating mods/modpacks. <br /> I
            have created this page since I've bought a domain, but also because
            I started to appreciate things on the internet and creating more of
            my own <i>(or as of now trying to)</i>. Well needless to say its
            common for software engineers to have their own websites so here is
            my own - not made for advertisement for job search like many of my
            peers do.
            <br /> Also bye bye to relative anonimity.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 4 }}>
        <Box sx={{ borderBottom: '1px solid white' }}>
          <Typography component={'h2'} textColor={'common.white'} fontSize={25}>
            Things I find cool (and use)
          </Typography>
        </Box>
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
        I use Apple stuff - iPhone, mac. While having scummy practices their
        environment is cool (except for safari webapi, cmon, you are really
        making my work harder). Well point of previous statement was to say that
        naturally I learned Swift and SwiftUI. I know some React Native, work in
        React Native but not really enjoy React Native.
        <br /> <Tabulation />
        If you're wondering - this website was made using React, Vite, MUI
        and... yeah that's it. TS ofc.
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
        <b>Note: you can use Paint.NET for other things than pixelart</b>
      </>
    ),
    leftImg: true,
  },
];
