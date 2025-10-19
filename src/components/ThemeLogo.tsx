'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ThemeLogoProps {
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function ThemeLogo({ 
  width = 40, 
  height = 40, 
  className = '',
  priority = false 
}: ThemeLogoProps) {
  const [logoPath, setLogoPath] = useState('/logo.svg');

  useEffect(() => {
    // Initial Logo basierend auf gespeichertem Theme setzen
    const updateLogo = () => {
      const themeLogoAttr = document.documentElement.getAttribute('data-theme-logo');
      if (themeLogoAttr) {
        setLogoPath(themeLogoAttr);
      } else {
        setLogoPath('/logo.svg');
      }
    };

    // Initial setzen
    updateLogo();

    // Observer für Theme-Änderungen
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme-logo') {
          updateLogo();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme-logo'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Image
      src={logoPath}
      alt="Lilos Kunstabenteuer Logo"
      width={width}
      height={height}
      className={className}
      priority={priority}
      style={{ background: 'transparent' }}
    />
  );
}

