export const VIOLET_SCALE = {
  100: '#d4d4d8',
  200: '#d4d4d8',
  300: '#d4d4d8',
  400: '#71717a',
  500: '#71717a',
  600: '#71717a',
  700: '#3f3f46',
  800: '#3f3f46',
} as const;

export type VioletStep = keyof typeof VIOLET_SCALE;

export function clampPercentage(percentage: number) {
  return Math.min(100, Math.max(0, Math.round(percentage)));
}

export function getVioletStep(percentage: number): VioletStep {
  const clampedPercentage = clampPercentage(percentage);
  const calculatedStep = Math.round((clampedPercentage * 8) / 100) * 100;
  const clampedStep = Math.min(800, Math.max(100, calculatedStep));

  return clampedStep as VioletStep;
}
