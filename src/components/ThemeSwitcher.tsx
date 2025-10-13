'use client';

import { useState, useEffect } from 'react';

interface Theme {
  name: string;
  logo?: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    primaryHover: string;
    secondaryHover: string;
    accentHover: string;
    background?: string;
    foreground?: string;
    cardBg?: string;
    borderColor?: string;
  };
}

const themes: Theme[] = [
  {
    name: 'Lilos Original',
    logo: '/logo.svg',
    colors: {
      primary: '#00BCD4',
      secondary: '#66BB6A',
      accent: '#FF9800',
      primaryHover: '#00ACC1',
      secondaryHover: '#5CB85C',
      accentHover: '#F57C00',
    },
  },
  {
    name: 'Alica 1',
    logo: '/logo-alica1.svg',
    colors: {
      primary: '#2f5d50',
      secondary: '#FF9EBB',
      accent: '#FFF8DC',
      primaryHover: '#234739',
      secondaryHover: '#FF7AA3',
      accentHover: '#FFE8B0',
    },
  },
  {
    name: 'Alica 2',
    logo: '/logo-alica2.svg',
    colors: {
      primary: '#f7804a',
      secondary: '#a8e6cf',
      accent: '#fff3c2',
      primaryHover: '#E66A34',
      secondaryHover: '#8FD4B6',
      accentHover: '#FFE8A0',
    },
  },
  {
    name: 'Dark Mode',
    logo: '/logo-dark.svg',
    colors: {
      primary: '#FF9EBB',
      secondary: '#B7E4C7',
      accent: '#FFF8DC',
      primaryHover: '#FF7AA3',
      secondaryHover: '#9FD4B0',
      accentHover: '#FFE8B0',
      background: '#2F5D50',
      foreground: '#FFF8DC',
      cardBg: '#234739',
      borderColor: '#3A6E5F',
    },
  },
];

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Theme aus localStorage laden
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const themeIndex = parseInt(savedTheme);
      setCurrentTheme(themeIndex);
      applyTheme(themeIndex);
    }
  }, []);

  const applyTheme = (index: number) => {
    const theme = themes[index];
    const root = document.documentElement;
    
    root.style.setProperty('--primary', theme.colors.primary);
    root.style.setProperty('--secondary', theme.colors.secondary);
    root.style.setProperty('--accent', theme.colors.accent);
    root.style.setProperty('--primary-hover', theme.colors.primaryHover);
    root.style.setProperty('--secondary-hover', theme.colors.secondaryHover);
    root.style.setProperty('--accent-hover', theme.colors.accentHover);
    
    // Dark Mode Support
    if (theme.colors.background && theme.colors.foreground) {
      root.style.setProperty('--background', theme.colors.background);
      root.style.setProperty('--foreground', theme.colors.foreground);
      root.style.setProperty('--card-bg', theme.colors.cardBg || theme.colors.background);
      root.style.setProperty('--border-color', theme.colors.borderColor || theme.colors.foreground);
    } else {
      // Reset zu Standard
      root.style.setProperty('--background', '#FAFAFA');
      root.style.setProperty('--foreground', '#263238');
      root.style.setProperty('--card-bg', '#FFFFFF');
      root.style.setProperty('--border-color', '#E5E7EB');
    }
    
    // Logo-Switching
    if (theme.logo) {
      root.setAttribute('data-theme-logo', theme.logo);
    } else {
      root.removeAttribute('data-theme-logo');
    }
    
    // Theme-Name als Data-Attribut für CSS
    root.setAttribute('data-theme', theme.name.toLowerCase().replace(/\s+/g, '-'));
  };

  const handleThemeChange = (index: number) => {
    setCurrentTheme(index);
    applyTheme(index);
    localStorage.setItem('theme', index.toString());
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-neutral-300 hover:text-primary transition-colors duration-200 text-sm"
        aria-label="Theme wechseln"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
        <span>{themes[currentTheme].name}</span>
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-2 left-0 bg-white rounded-lg shadow-xl border border-neutral-200 py-2 min-w-[200px] z-50">
          {themes.map((theme, index) => (
            <button
              key={index}
              onClick={() => handleThemeChange(index)}
              className={`w-full px-4 py-2 text-left hover:bg-neutral-100 transition-colors duration-200 flex items-center justify-between ${
                currentTheme === index ? 'bg-neutral-50' : ''
              }`}
            >
              <span className="text-neutral-800">{theme.name}</span>
              <div className="flex space-x-1">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.secondary }}></div>
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.accent }}></div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

