import Link from 'next/link';
import ThemeLogo from './ThemeLogo';
import ThemeSwitcher from './ThemeSwitcher';
import SocialIcons from './SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: 'Start', href: '/' },
      { name: 'Das Konzept', href: '/konzept' },
      { name: 'Kontakt', href: '/kontakt' },
    ],
    legal: [
      { name: 'Impressum', href: '/impressum' },
      { name: 'Datenschutz', href: '/datenschutz' },
    ],
  };

  return (
    <footer className="bg-footer-bg text-footer-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Beschreibung */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <ThemeLogo
                width={56}
                height={56}
                className="h-14 w-14"
              />
              <span className="font-heading font-semibold text-lg">
                Lilos Kunstabenteuer
              </span>
            </div>
            <p className="text-footer-text/80 mb-6 max-w-md">
              Wir bringen Kindern die Welt der Kunst näher - auf YouTube, Instagram und TikTok
            </p>
            
            {/* Social Media Links */}
            <SocialIcons />
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-footer-text/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-footer-text/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-footer-text/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-footer-text/70 text-sm">
            © {currentYear} Lilos Kunstabenteuer. Alle Rechte vorbehalten.
          </p>
          
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <p className="text-footer-text/70 text-sm hidden md:block">
              Made with ❤️ for young art explorers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
