import type { Post } from './components/BlogTypes';
import I18npost from './components/Posts/I18npost.mdx';

export const posts: Post[] = [
  {
    title: 'i18next',
    subtitle: 'What I like and how upgrading is pain',
    date: new Date('09-06-2025'),
    href: 'i18next',
    element: <I18npost />,
  },
];
