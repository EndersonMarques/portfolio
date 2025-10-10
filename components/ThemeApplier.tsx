'use client';

import { useEffect } from 'react';
import { useTheme } from '@/lib/useTheme';

export default function ThemeApplier() {
  const { colors } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    
    // Apply primary colors
    Object.entries(colors.primary).forEach(([key, value]) => {
      root.style.setProperty(`--color-primary-${key}`, value);
    });

    // Apply background colors
    Object.entries(colors.background).forEach(([key, value]) => {
      root.style.setProperty(`--color-bg-${key}`, value);
    });

    // Apply text colors
    Object.entries(colors.text).forEach(([key, value]) => {
      root.style.setProperty(`--color-text-${key}`, value);
    });

    // Apply border colors
    Object.entries(colors.border).forEach(([key, value]) => {
      root.style.setProperty(`--color-border-${key}`, value);
    });

    // Apply card colors
    Object.entries(colors.card).forEach(([key, value]) => {
      root.style.setProperty(`--color-card-${key}`, value);
    });

  }, [colors]);

  return null;
}
