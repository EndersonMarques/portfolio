'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/lib/useLanguage';

export default function LanguageDetector() {
  const { language } = useLanguage();

  useEffect(() => {
    // Update HTML lang attribute based on current language
    document.documentElement.lang = language;
  }, [language]);

  return null; // This component doesn't render anything
}
