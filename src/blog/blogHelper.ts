import { gradientColors } from '../styles/colors';

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
