import type { JSX } from 'react';

export type Post = {
  title: string;
  subtitle: string;
  date: Date;
  href: string;
  component: () => JSX.Element;
};
