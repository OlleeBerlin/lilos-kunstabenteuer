'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeLogo from './ThemeLogo';
import SocialIcons from './SocialIcons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Start', href: '/' },
    { name: 'Das Konzept', href: '/konzept' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <header className="bg-header-bg shadow-sm sticky top-0 z-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <ThemeLogo
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="font-heading font-semibold text-lg text-foreground">
              Lilos Kunstabenteuer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground/70 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Media Links */}
          <div className="hidden md:flex items-center">
            <SocialIcons className="space-x-4" size="sm" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground/70 hover:text-primary focus:outline-none focus:text-primary"
              aria-label="Menü öffnen"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-neutral-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground/70 hover:text-primary hover:bg-neutral-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <SocialIcons className="space-x-4" size="sm" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
