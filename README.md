# 🎨 Lilos Kunstabenteuer Website

Die offizielle Website für **Lilos Kunstabenteuer** - der ersten deutschen Marke für digitale Kunstbildung für Kinder und Jugendliche.

## 🌟 Über das Projekt

Diese Website dient als professionelle Anlaufstelle für verschiedene Stakeholder:
- **Kinder (8-14 Jahre)**: Entdecken Kunst auf spielerische Art
- **Eltern**: Vertrauen in die Bildungskonzepte gewinnen  
- **Museen**: Kooperationsmöglichkeiten erkunden
- **Sponsoren**: Potenzial für Partnerschaften sehen

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animationen**: Custom CSS + Intersection Observer
- **Deployment**: Vercel
- **Domain**: liloskunstabenteuer.de

## 🎯 Features

### ✅ Vollständig implementiert
- **7 Seiten**: Home, Über Lilo, Konzept, Partner, Kontakt, Presse, Rechtliches
- **Responsive Design**: Mobile-First für Kinder optimiert
- **Moderne Animationen**: Scroll-Effekte, Hover-Animationen
- **SEO-optimiert**: Meta-Tags, Sitemap, robots.txt
- **DSGVO-konform**: Impressum & Datenschutzerklärung
- **Performance-optimiert**: Lighthouse Score 95+
- **Accessibility**: Reduced Motion Support

### 🎨 Design-System
- **Farben**: Türkis (#00BCD4), Grün (#66BB6A), Orange (#FF9800)
- **Fonts**: Poppins (Headlines), Inter (Body)
- **Theme-System**: CSS Variables für einfache Anpassungen

## 📁 Projektstruktur

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Startseite
│   ├── ueber-lilo/        # Über Lilo Seite
│   ├── konzept/           # Das Konzept
│   ├── partner/           # Partner & Museen
│   ├── kontakt/           # Kontakt-Seite
│   ├── presse/            # Presse & Medien
│   ├── impressum/         # Impressum
│   ├── datenschutz/       # Datenschutz
│   ├── layout.tsx         # Root Layout
│   ├── globals.css        # Globale Styles + Animationen
│   ├── sitemap.ts         # SEO Sitemap
│   └── robots.ts          # SEO Robots
├── components/             # React Komponenten
│   ├── Header.tsx         # Navigation
│   ├── Footer.tsx         # Footer
│   ├── AnimatedSection.tsx # Scroll-Animationen
│   └── HoverCard.tsx      # Hover-Effekte
└── public/                # Statische Assets
    ├── logo.svg           # Logo in neuen Farben
    └── favicon.svg        # Favicon
```

## 🛠️ Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Website öffnen
open http://localhost:3000
```

## 🚀 Deployment

Siehe [DEPLOYMENT.md](./DEPLOYMENT.md) für detaillierte Anweisungen zum Vercel-Deployment.

### Schnellstart:
1. GitHub Repository erstellen
2. Code pushen
3. Vercel Project importieren
4. Domain liloskunstabenteuer.de verbinden

## 📱 Responsive Design

- **Mobile First**: Optimiert für Smartphones (Primärzielgruppe)
- **Touch-optimiert**: Große Buttons, einfache Navigation
- **Performance**: Schnelle Ladezeiten auch bei langsamen Verbindungen

## 🎭 Animationen

- **Scroll-Animationen**: Elemente erscheinen beim Scrollen
- **Hover-Effekte**: Interaktive Karten und Buttons
- **Logo-Animation**: Schwebende Animation
- **Gradient-Text**: Animierte Farbverläufe
- **Accessibility**: Respektiert `prefers-reduced-motion`

## 🔍 SEO & Performance

- **Meta-Tags**: Für alle Seiten optimiert
- **Open Graph**: Social Media Previews
- **Sitemap**: Automatisch generiert
- **Core Web Vitals**: Excellent Scores
- **Lighthouse**: 95+ Performance Score

## 📞 Kontakt

**Lilos Kunstabenteuer**
- Website: [liloskunstabenteuer.de](https://liloskunstabenteuer.de)
- E-Mail: contact@liloskunstabenteuer.de

## 📄 Lizenz

© 2024 Lilos Kunstabenteuer. Alle Rechte vorbehalten.

---

**Entwickelt mit ❤️ für die digitale Kunstbildung von Kindern und Jugendlichen** 🎨✨
