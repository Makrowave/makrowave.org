import type { JSX } from 'react';

export type Post = {
  title: string;
  subtitle: string;
  date: Date;
  tags: string[];
  href: string;
  element: JSX.Element;
};
