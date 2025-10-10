export type Theme = 'light' | 'dark' | 'blue' | 'green';

export interface ThemeColors {
  primary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  border: {
    primary: string;
    secondary: string;
  };
  card: {
    background: string;
    border: string;
    shadow: string;
  };
}

export const themes: Record<Theme, ThemeColors> = {
  light: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f9fafb',
      tertiary: '#f3f4f6',
    },
    text: {
      primary: '#111827',
      secondary: '#374151',
      tertiary: '#6b7280',
    },
    border: {
      primary: '#e5e7eb',
      secondary: '#d1d5db',
    },
    card: {
      background: '#ffffff',
      border: '#e5e7eb',
      shadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
  },
  dark: {
    primary: {
      50: '#1e1b4b',
      100: '#312e81',
      200: '#3730a3',
      300: '#4338ca',
      400: '#4f46e5',
      500: '#6366f1',
      600: '#7c3aed',
      700: '#8b5cf6',
      800: '#a855f7',
      900: '#c084fc',
    },
    background: {
      primary: '#0f172a',
      secondary: '#1e293b',
      tertiary: '#334155',
    },
    text: {
      primary: '#ffffff',
      secondary: '#f1f5f9',
      tertiary: '#e2e8f0',
    },
    border: {
      primary: '#334155',
      secondary: '#475569',
    },
    card: {
      background: '#1e293b',
      border: '#334155',
      shadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
    },
  },
  blue: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f0f9ff',
      tertiary: '#e0f2fe',
    },
    text: {
      primary: '#0c4a6e',
      secondary: '#075985',
      tertiary: '#0369a1',
    },
    border: {
      primary: '#bae6fd',
      secondary: '#7dd3fc',
    },
    card: {
      background: '#ffffff',
      border: '#bae6fd',
      shadow: '0 10px 15px -3px rgba(14, 165, 233, 0.1), 0 4px 6px -2px rgba(14, 165, 233, 0.05)',
    },
  },
  green: {
    primary: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f0fdf4',
      tertiary: '#dcfce7',
    },
    text: {
      primary: '#14532d',
      secondary: '#166534',
      tertiary: '#15803d',
    },
    border: {
      primary: '#bbf7d0',
      secondary: '#86efac',
    },
    card: {
      background: '#ffffff',
      border: '#bbf7d0',
      shadow: '0 10px 15px -3px rgba(34, 197, 94, 0.1), 0 4px 6px -2px rgba(34, 197, 94, 0.05)',
    },
  },
};

export const themeNames = {
  light: { name: 'Light', icon: '☀️', description: 'Clean & Professional' },
  dark: { name: 'Dark', icon: '🌙', description: 'Premium & Modern' },
  blue: { name: 'Ocean', icon: '🌊', description: 'Trust & Confidence' },
  green: { name: 'Nature', icon: '🌿', description: 'Fresh & Natural' },
};
