'use client';

import { useState } from 'react';
import { Palette, Check } from 'lucide-react';
import { useTheme } from '@/lib/useTheme';
import { themeNames, Theme } from '@/lib/themes';

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = Object.entries(themeNames) as [Theme, typeof themeNames.light][];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors duration-200"
      >
        <Palette size={20} />
        <span className="text-sm font-medium">
          {themeNames[theme].icon} {themeNames[theme].name}
        </span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          <div className="px-3 py-2 border-b border-gray-200">
            <h4 className="text-sm font-semibold text-gray-900">Choose Theme</h4>
            <p className="text-xs text-gray-500">Select your preferred color scheme</p>
          </div>
          
          <div className="py-1">
            {themes.map(([themeKey, themeInfo]) => (
              <button
                key={themeKey}
                onClick={() => {
                  setTheme(themeKey);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-3 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between ${
                  theme === themeKey ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{themeInfo.icon}</span>
                  <div>
                    <div className="font-medium text-sm">{themeInfo.name}</div>
                    <div className="text-xs text-gray-500">{themeInfo.description}</div>
                  </div>
                </div>
                {theme === themeKey && (
                  <Check size={16} className="text-primary-600" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
