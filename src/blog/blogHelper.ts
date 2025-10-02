import { gradientColors } from '../styles/colors';
import { posts } from './blogPosts';
import randomColor from 'randomcolor';
const colorDayInterval = 7;
const dayToMs = 1000 * 60 * 60 * 24;

export const getTitleColor = (date: Date) => {
  const now = new Date();
  const index = Math.min(
    Math.floor((now.getTime() - date.getTime()) / dayToMs / colorDayInterval),
    gradientColors.length - 1,
  );

  return gradientColors[index];
};

export const getAllTags = () => {
  return [...new Set(posts.flatMap((p) => p.tags ?? []))];
};

const hashStringToInt = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
};

export const generateGradient = (tag: string) => {
  const seed = hashStringToInt(tag);
  const colors = randomColor({
    count: 2,
    luminosity: 'bright',
    hue: 'random',
    seed: seed,
    format: 'rgb',
  });
  const rotation = seed % 360;

  return `linear-gradient(${rotation}deg, ${colors[0]}, ${colors[1]})`;
};

export const getStringDate = (date: Date) => {
  return date.toLocaleDateString('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};
