export const tokens = {
  spacing: [8, 16, 24, 32, 48, 64, 80],

  typography: {
    title: {
      fontSize: 64,
      lineHeight: 1.05,
      fontWeight: 700,
      letterSpacing: -0.5,
    },
    subtitle: {
      fontSize: 24,
      lineHeight: 1.4,
    },
    label: {
      fontSize: 14,
    },
  },

  colors: {
    darkBg: '#020617',
    lightText: '#FFFFFF',
    darkText: '#0F172A',
    subLight: '#94A3B8',
    subDark: '#475569',
    accent: '#8B5CF6',
  },

  radius: 24,
} as const;
