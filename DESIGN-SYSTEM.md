# 🎨 Lilos Kunstabenteuer - Design System

## 📋 **Überblick**

Dieses Dokument definiert das komplette Design-System für die Lilos Kunstabenteuer Website. Es dient als zentrale Referenz für alle visuellen und gestalterischen Entscheidungen.

---

## 🎯 **Brand Identity**

### **Kernbotschaft**
"Spaß an der Kunst für Kinder" - Zugänglich, ermächtigend, bildend und gemeinschaftlich

### **Markenpersönlichkeit**
- **Coole große Schwester** + **Verspielte Entdeckerin**
- Modern, zugänglich, abenteuerlustig und energiegeladen
- Freundlich und einladend, aber auch professionell

### **Tonalität & Sprachstil**
- **Du-Form freundlich** für Kinder
- **Wir-Form gemeinschaftlich** für Community-Gefühl
- Warm, einladend, verbindend
- Kindergerecht aber nicht infantil

---

## 🎨 **Farbpalette**

### **Primärfarben**

```css
/* Kunst-Türkis */
--primary: #00BCD4;
--primary-hover: #00ACC1;

/* Kreativ-Grün */
--secondary: #66BB6A;
--secondary-hover: #5CB85C;

/* Sonnen-Orange */
--accent: #FF9800;
--accent-hover: #F57C00;
```

### **Neutrale Farben**

```css
/* Cremeweiß */
--neutral-light: #FAFAFA;

/* Anthrazit */
--neutral-dark: #263238;

/* System-Farben */
--background: var(--neutral-light);
--foreground: var(--neutral-dark);
```

### **Farbverwendung**

| Farbe | Verwendung | Zielgruppe |
|-------|------------|------------|
| **Türkis (#00BCD4)** | Hauptaktionen, Links, Logo-Elemente | Alle |
| **Grün (#66BB6A)** | Sekundäre Buttons, Erfolgsmeldungen | Alle |
| **Orange (#FF9800)** | Highlights, Warnungen, CTAs | Alle |
| **Grau (#263238)** | Text, Navigation | Alle |
| **Weiß (#FAFAFA)** | Hintergründe, Karten | Alle |

### **Farbpsychologie**
- **Türkis:** Vertrauen, Kreativität, Frische
- **Grün:** Wachstum, Natur, Harmonie, Erfolg
- **Orange:** Energie, Spaß, Wärme, Abenteuer
- **Geschlechtsneutral:** Spricht Jungen und Mädchen gleichermaßen an

---

## ✍️ **Typografie**

### **Schriftarten**

```css
/* Headlines & Logo */
--font-heading: 'Baboo 2', sans-serif;

/* Body & Fließtext */
--font-body: 'Inter', sans-serif;
```

### **Google Fonts Import**
```html
<link href="https://fonts.googleapis.com/css2?family=Baboo+2:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### **Font-Gewichtungen**

| Gewichtung | Verwendung | Beispiel |
|------------|------------|----------|
| **Baboo 2 700** | Hauptüberschriften (H1) | "Lilos Kunstabenteuer" |
| **Baboo 2 600** | Unterüberschriften (H2, H3) | "Was ist Lilos Kunstabenteuer?" |
| **Baboo 2 500** | Buttons, Labels | "Mehr erfahren" |
| **Baboo 2 400** | Kleinere Headlines | Navigation |
| **Inter 600** | Betonter Body-Text | Wichtige Absätze |
| **Inter 400** | Standard Body-Text | Fließtext |
| **Inter 300** | Leichte Texte | Beschreibungen |

### **Typografische Hierarchie**

```css
/* H1 - Hauptüberschrift */
font-family: 'Baboo 2', sans-serif;
font-weight: 700;
font-size: 3rem; /* 48px */
line-height: 1.1;

/* H2 - Sektionsüberschriften */
font-family: 'Baboo 2', sans-serif;
font-weight: 600;
font-size: 2.25rem; /* 36px */
line-height: 1.2;

/* H3 - Unterüberschriften */
font-family: 'Baboo 2', sans-serif;
font-weight: 600;
font-size: 1.5rem; /* 24px */
line-height: 1.3;

/* Body - Standardtext */
font-family: 'Inter', sans-serif;
font-weight: 400;
font-size: 1rem; /* 16px */
line-height: 1.6;

/* Small - Kleinere Texte */
font-family: 'Inter', sans-serif;
font-weight: 400;
font-size: 0.875rem; /* 14px */
line-height: 1.5;
```

---

## 🖼️ **Logo & Branding**

### **Logo-Spezifikationen**
- **Format:** SVG (skalierbar)
- **Stil:** Cartoon-Charakter mit freundlichem Ausdruck
- **Farben:** Angepasst an neue Markenfarben (Türkis-Grün-Orange)
- **Verwendung:** Header, Favicon, Social Media

### **Logo-Varianten**
- **Full Logo:** Mit Text "LILOS KUNSTABENTEUER"
- **Icon Only:** Nur Charakter für kleine Bereiche
- **Favicon:** 32x32px, vereinfacht

### **Logo-Größen**
```css
/* Header */
width: 200px;
height: 200px;

/* Mobile Header */
width: 150px;
height: 150px;

/* Favicon */
width: 32px;
height: 32px;
```

---

## 🎭 **Animationen & Interaktionen**

### **Scroll-Animationen**
```css
/* Fade In Up */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Fade In Left */
@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

/* Fade In Right */
@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}
```

### **Hover-Effekte**
```css
/* Hover Lift */
.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Hover Glow */
.hover-glow:hover {
  box-shadow: 0 0 20px rgba(0, 188, 212, 0.3);
}

/* Hover Scale */
.hover-scale:hover {
  transform: scale(1.05);
}
```

### **Button-Animationen**
```css
/* Shine Effect */
.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}
```

### **Logo-Animation**
```css
/* Floating Logo */
.logo-float {
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

---

## 📐 **Layout & Spacing**

### **Container-Breiten**
```css
/* Max Content Width */
--container-max: 1280px; /* 7xl */

/* Content Areas */
--content-width: 1024px; /* 6xl */

/* Text Width */
--text-width: 768px; /* 4xl */
```

### **Spacing-System**
```css
/* Tailwind Spacing Scale */
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
```

### **Sektion-Abstände**
```css
/* Standard Sektion */
padding: 4rem 0; /* py-16 */

/* Hero Sektion */
padding: 5rem 0; /* py-20 */

/* Kompakte Sektion */
padding: 3rem 0; /* py-12 */
```

---

## 📱 **Responsive Design**

### **Breakpoints**
```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* sm */
--breakpoint-md: 768px;   /* md */
--breakpoint-lg: 1024px;  /* lg */
--breakpoint-xl: 1280px;  /* xl */
--breakpoint-2xl: 1536px; /* 2xl */
```

### **Mobile-Optimierungen**
- **Touch-Targets:** Mindestens 44px x 44px
- **Font-Sizes:** Mindestens 16px für bessere Lesbarkeit
- **Abstände:** Größere Abstände zwischen interaktiven Elementen
- **Performance:** Optimiert für langsamere Verbindungen

### **Grid-System**
```css
/* Standard Grid */
.grid-cols-1.md:grid-cols-2.lg:grid-cols-3

/* Feature Grid */
.grid-cols-1.md:grid-cols-3

/* Instagram Grid */
.grid-cols-2.md:grid-cols-4
```

---

## 🎨 **Komponenten-Styling**

### **Buttons**
```css
/* Primary Button */
.btn-primary {
  background: var(--primary);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 500;
  transition: all 0.3s ease-out;
}

.btn-primary:hover {
  background: var(--primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 188, 212, 0.4);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 500;
  transition: all 0.3s ease-out;
}
```

### **Karten**
```css
/* Standard Card */
.card {
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
```

### **Formulare**
```css
/* Input Fields */
.input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-family: 'Inter', sans-serif;
  transition: all 0.2s ease-out;
}

.input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(0, 188, 212, 0.1);
}
```

---

## 🌈 **Gradient & Effekte**

### **Hintergrund-Gradienten**
```css
/* Hero Gradient */
bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10

/* Card Gradient */
bg-gradient-to-br from-primary/5 to-transparent

/* CTA Gradient */
bg-gradient-to-r from-primary to-secondary
```

### **Text-Effekte**
```css
/* Gradient Text */
.gradient-text {
  background: linear-gradient(-45deg, var(--primary), var(--secondary), var(--accent), var(--primary));
  background-size: 400% 400%;
  animation: gradient-shift 3s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## ♿ **Accessibility**

### **Reduced Motion Support**
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### **Farbkontraste**
- **Text:** Mindestens 4.5:1 Kontrastverhältnis
- **Großer Text:** Mindestens 3:1 Kontrastverhältnis
- **Interactive Elements:** Mindestens 3:1 Kontrastverhältnis

### **Focus States**
```css
/* Focus Ring */
.focus-ring:focus {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
```

---

## 📊 **Performance**

### **Optimierungen**
- **CSS:** Minifiziert und optimiert
- **Fonts:** Preload für kritische Schriftarten
- **Images:** WebP-Format mit Fallbacks
- **Animations:** GPU-beschleunigt mit `transform` und `opacity`

### **Lighthouse-Ziele**
- **Performance:** 95+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 95+

---

## 🎯 **Zielgruppe-Anpassungen**

### **Kinder (8-14 Jahre)**
- Große, klare Buttons
- Einfache Navigation
- Bunte, ansprechende Farben
- Touch-optimiert für Smartphones

### **Eltern**
- Professionelle Darstellung
- Vertrauensbildende Elemente
- Klare Informationen über Bildungswert

### **Museen/Sponsoren**
- Business-orientierte Seiten
- Professionelle Sprache
- Daten und Fakten im Vordergrund

---

## 🔄 **Theme-System**

Das Design-System ist modular aufgebaut und ermöglicht einfache Anpassungen:

```css
:root {
  /* Farben über CSS Variables */
  --primary: #00BCD4;
  --secondary: #66BB6A;
  --accent: #FF9800;
  
  /* Schriftarten */
  --font-heading: 'Baboo 2', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

**Zukunft:** Einfaches Theme-Switching durch Austausch der CSS Variables möglich.

---

## 📝 **Usage Guidelines**

### **Do's**
✅ Konsistente Verwendung der definierten Farben
✅ Poppins für alle Überschriften
✅ Inter für alle Body-Texte
✅ Mindestens 4.5:1 Farbkontrast
✅ Mobile-First Approach

### **Don'ts**
❌ Neue Farben ohne Begründung hinzufügen
❌ Mischen verschiedener Schriftarten
❌ Zu kleine Touch-Targets
❌ Übermäßige Animationen
❌ Schlechte Kontraste

---

**Letzte Aktualisierung:** Oktober 2024  
**Version:** 1.0  
**Verantwortlich:** Design Team Lilos Kunstabenteuer
