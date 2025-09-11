import type { Post } from './blogTypes';
import MakingOf from './components/Posts/MakingOf.mdx';
export const posts: Post[] = [
  {
    title: 'Making of this site',
    tags: ['React', 'MUI', 'Motion', 'MDX', 'Makrowave'],
    subtitle: 'How I made this stuff',
    date: new Date('09-11-2025'),
    href: 'making-of',
    element: <MakingOf />,
  },
];

//ts shouts at me when unused
// const mockPosts = (count: number): Post[] => {
//   const posts: Post[] = [];
//   const tags = ['gaming', 'iOS', 'React', 'i18n'];

//   for (let i = 0; i < count; i++) {
//     posts.push({
//       title: `Post Title ${i + 1}`,
//       subtitle: `This is the subtitle for post ${i + 1}`,
//       tags: [tags[(i + 1) % 4], tags[i % 4]],
//       date: new Date(2025, 8, 8 - 7 * i),
//       href: `post-${i + 1}`,
//       element: <MakingOf />,
//     });
//   }

//   return posts;
// };

// export const posts: Post[] = mockPosts(20);
