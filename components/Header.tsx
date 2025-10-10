'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, Globe } from 'lucide-react';
import { PROFILE } from '@/lib/data';
import { useLanguage } from '@/lib/useLanguage';
import { useTheme } from '@/lib/useTheme';
import { themeNames, Theme } from '@/lib/themes';
import ThemeSelector from './ThemeSelector';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme, colors } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const languages = [
    { code: 'pt', name: 'PT', flag: '🇧🇷' },
    { code: 'en', name: 'EN', flag: '🇺🇸' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      style={{
        backgroundColor: isScrolled ? `${colors.background.primary}95` : 'transparent'
      }}
    >
      <nav className="container-max">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r from-primary-500 to-blue-500 p-0.5">
                <img
                  src="/profile_me.png"
                  alt={PROFILE.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-xl font-bold gradient-text">
                {PROFILE.name.split(' ')[0]}
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Theme Selector, Language Selector & Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Selector */}
            <ThemeSelector />

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors duration-200"
              >
                <Globe size={20} />
                <span className="text-sm font-medium">
                  {languages.find(lang => lang.code === language)?.flag} {languages.find(lang => lang.code === language)?.name}
                </span>
              </button>
              
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as 'pt' | 'en');
                        setIsLanguageMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 ${
                        language === lang.code ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                      }`}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Social Links */}
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-200">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              {/* Theme Selector Mobile */}
              <div className="px-3 py-2 border-t border-gray-200">
                <div className="mb-3">
                  <span className="text-sm font-medium text-gray-700 block mb-2">Theme</span>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(themeNames).map(([themeKey, themeInfo]) => (
                      <button
                        key={themeKey}
                        onClick={() => {
                          setTheme(themeKey as Theme);
                          setIsMenuOpen(false);
                        }}
                        className={`px-3 py-2 text-sm rounded-lg transition-colors duration-200 flex items-center space-x-2 ${
                          theme === themeKey 
                            ? 'bg-primary-100 text-primary-600' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <span>{themeInfo.icon}</span>
                        <span>{themeInfo.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Language Selector Mobile */}
              <div className="px-3 py-2 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Language</span>
                  <div className="flex space-x-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as 'pt' | 'en');
                          setIsMenuOpen(false);
                        }}
                        className={`px-3 py-1 text-sm rounded-lg transition-colors duration-200 ${
                          language === lang.code 
                            ? 'bg-primary-100 text-primary-600' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {lang.flag} {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Social Links Mobile */}
              <div className="flex items-center space-x-4 px-3 py-2">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
