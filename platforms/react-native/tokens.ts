export const colors = {
  bg: '#000000',
  surface: '#111111',
  border: '#333333',
  text: '#FFFFFF',
  muted: '#9ca3af',
  accent: '#FF6A3D',
  brand: '#969455',
  success: '#22c55e',
  danger: '#ef4444',
} as const;

export const spacing = { 1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24 } as const;
export const radius = { sm: 8, md: 12, lg: 16, pill: 999 } as const;

export const typography = {
  fonts: {
    sans: ['Gotham', 'System'],
    accent: ['Exo 2', 'System'],
    hand: ['NanumPenScript', 'System'],
  },
  sizes: { h1: 56, h2: 32, h3: 20, body: 14 },
  weights: { regular: '400', medium: '500', bold: '700', black: '900' },
} as const;

export const theme = { colors, spacing, radius, typography } as const;
export type Theme = typeof theme;

