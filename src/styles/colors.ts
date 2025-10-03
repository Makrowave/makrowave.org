export const gradientColors = [
  '#AF7AFF',
  '#BB8EFF',
  '#C399FF',
  '#CFAAFF',
  '#DBBDFF',
  '#E0C6FF',
  '#E3C9FF',
  '#E7CFFF',
  '#F0E0FF',
  '#F9F0FF',
  '#FFFFFF',
  '#E6FFF5',
  '#CCFFEB',
  '#B8FFD9',
  '#A9FFD1',
  '#92FFC2',
  '#86FFBF',
  '#7BFFBB',
  '#71FFB7',
  '#68FFB3',
  '#58FFA3',
];

// export const fullGradient =
//   'linear-gradient(45deg, rgba(0,255,136,1) 0%, rgba(0,255,136,0.5) 30%, rgba(178,0,255,0.7) 70%,rgba(178,0,255,1) 100%)';

type GradientColor = {
  color: string;
  position: number;
};

const makeGradient = (
  colors: GradientColor[],
  rotation: number = 0,
  type: GradientType = GradientType.Linear,
  xCenter: number = 50,
  yCenter: number = 50,
) => {
  switch (type) {
    case GradientType.Linear:
      return `linear-gradient(${rotation}deg, ${colors
        .map((c) => `${c.color} ${c.position}%`)
        .join(',')})`;
    case GradientType.Radial:
      return `radial-gradient(circle at ${xCenter}% ${yCenter}%, ${colors
        .map((c) => `${c.color} ${c.position}%`)
        .join(',')})`;
    case GradientType.Conic:
      return `conic-gradient(from ${rotation}deg at ${xCenter}% ${yCenter}%, ${colors
        .map((c) => `${c.color} ${c.position}%`)
        .join(',')})`;
  }
};

enum GradientType {
  Linear,
  Radial,
  Conic,
}

// const fullGradientColors: GradientColor[] = [
//   { color: '#00d2ff', position: 0 },
//   { color: '#3a47d5', position: 90 },
//   { color: '#00d2ff', position: 100 },
// ];

const fullGradientColors: GradientColor[] = [
  { color: 'rgba(0,255,136,1)', position: 0 },
  // { color: 'rgba(0,255,136,1)', position: 30 },
  { color: 'rgba(178,0,255,1)', position: 90 },
  { color: 'rgba(0,255,136,1)', position: 100 },
];

// export const fullGradient = makeGradient(fullGradientColors, 45);
export const stepLine = makeGradient(fullGradientColors.slice(0, -1), 45);
export const conicStepBackground = makeGradient(
  fullGradientColors,
  -45,
  GradientType.Conic,
  50,
  50,
);
