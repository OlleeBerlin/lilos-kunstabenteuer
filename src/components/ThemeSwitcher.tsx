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
    footerBg?: string;
    footerText?: string;
  };
}

const themes: Theme[] = [
  {
    name: 'Rahmen',
    logo: '/logo-rahmen.svg',
    colors: {
      primary: '#8B5A2B', // Warmes Braun
      secondary: '#D4AF37', // Gold
      accent: '#CD853F', // Perubraun
      primaryHover: '#7A4F26',
      secondaryHover: '#B8941F',
      accentHover: '#B87333',
      background: '#FDF5E6', // Altweiß
      foreground: '#2F1B14',
      cardBg: '#FFF8DC', // Cornsilk
      borderColor: '#D2B48C', // Tan
      headerBg: '#F5DEB3', // Weizen
      footerBg: '#F5DEB3', // Weizen
      footerText: '#2F1B14',
    },
  },
  {
    name: 'Neu', // Neues Theme mit Koralle/Türkis/Sonnengelb
    logo: '/logo-neu.svg',
    colors: {
      primary: '#FF6B6B', // Koralle
      secondary: '#4ECDC4', // Türkis
      accent: '#FFE66D', // Sonnengelb
      primaryHover: '#EE5A52',
      secondaryHover: '#45B8AF',
      accentHover: '#FFD93D',
      background: '#FAF3E0', // Warmes Beige
      foreground: '#2C3E50',
      cardBg: '#FFF8E7', // Helles Creme
      borderColor: '#E8DCC4',
      headerBg: '#E8E2D9', // Mittelwarmes Grau - besserer Kontrast
      footerBg: '#E8E2D9', // Mittelwarmes Grau - besserer Kontrast
      footerText: '#2C3E50',
    },
  },
  {
    name: 'NurSchrift',
    logo: '/logo-nurschrift.svg',
    colors: {
      primary: '#2563EB', // Kräftiges Blau
      secondary: '#DC2626', // Kräftiges Rot
      accent: '#059669', // Kräftiges Grün
      primaryHover: '#1D4ED8',
      secondaryHover: '#B91C1C',
      accentHover: '#047857',
      background: '#F8FAFC', // Sehr helles Grau
      foreground: '#1E293B',
      cardBg: '#FFFFFF', // Reines Weiß
      borderColor: '#E2E8F0',
      headerBg: '#F1F5F9', // Helles Blaugrau
      footerBg: '#F1F5F9', // Helles Blaugrau
      footerText: '#1E293B',
    },
  },
];

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState(0); // Rahmen als Standard (jetzt Index 0)
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Theme aus localStorage laden
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const themeIndex = parseInt(savedTheme);
      setCurrentTheme(themeIndex);
      applyTheme(themeIndex);
    } else {
      // Standard-Theme (Rahmen) anwenden
      applyTheme(0);
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
      root.style.setProperty('--footer-bg', theme.colors.footerBg || '#263238');
      root.style.setProperty('--footer-text', theme.colors.footerText || '#FFFFFF');
    } else {
      // Reset zu Standard
      root.style.setProperty('--background', '#FAFAFA');
      root.style.setProperty('--foreground', '#263238');
      root.style.setProperty('--card-bg', '#FFFFFF');
      root.style.setProperty('--border-color', '#E5E7EB');
      root.style.setProperty('--footer-bg', '#263238');
      root.style.setProperty('--footer-text', '#FFFFFF');
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

