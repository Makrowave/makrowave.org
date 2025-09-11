import type { Post } from './components/BlogTypes';
import MakingOf from './components/Posts/MakingOf.mdx';

// export const posts: Post[] = [
//   {
//     title: 'i18next',
//     subtitle: 'What I like and how upgrading is pain',
//     date: new Date('09-06-2025'),
//     href: 'i18next',
//     element: <I18npost />,
//   },
// ];

function mockPosts(count: number): Post[] {
  const posts: Post[] = [];
  const tags = ['gaming', 'iOS', 'React', 'i18n'];

  for (let i = 0; i < count; i++) {
    posts.push({
      title: `Post Title ${i + 1}`,
      subtitle: `This is the subtitle for post ${i + 1}`,
      tags: [tags[(i + 1) % 4], tags[i % 4]],
      date: new Date(2025, 8, 8 - 7 * i),
      href: `post-${i + 1}`,
      element: <MakingOf />,
    });
  }

  return posts;
}

export const posts: Post[] = mockPosts(20);
