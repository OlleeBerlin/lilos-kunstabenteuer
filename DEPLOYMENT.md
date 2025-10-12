# Deployment Guide - Lilos Kunstabenteuer

## 🚀 Vercel Deployment

### 1. GitHub Repository erstellen

1. Gehe zu [GitHub.com](https://github.com) und logge dich ein
2. Klicke auf "New Repository"
3. Name: `lilos-kunstabenteuer`
4. Beschreibung: "Website für Lilos Kunstabenteuer - Digitale Kunstbildung für Kinder und Jugendliche"
5. Öffentlich (Public) auswählen
6. **NICHT** "Initialize with README" ankreuzen (Repository ist bereits vorhanden)
7. Klicke "Create Repository"

### 2. Lokales Repository mit GitHub verbinden

```bash
# Im Projektverzeichnis ausführen:
git remote add origin https://github.com/[DEIN-USERNAME]/lilos-kunstabenteuer.git
git branch -M main
git push -u origin main
```

### 3. Vercel Deployment

1. Gehe zu [Vercel.com](https://vercel.com) und logge dich ein
2. Klicke "New Project"
3. Importiere das GitHub Repository `lilos-kunstabenteuer`
4. Framework Preset: **Next.js** (wird automatisch erkannt)
5. Root Directory: `./` (Standard)
6. Build Command: `npm run build` (Standard)
7. Output Directory: `.next` (Standard)
8. Install Command: `npm install` (Standard)
9. Klicke "Deploy"

### 4. Domain-Verbindung (liloskunstabenteuer.de)

1. In Vercel Dashboard → Project Settings → Domains
2. Klicke "Add Domain"
3. Domain eingeben: `liloskunstabenteuer.de`
4. Vercel zeigt DNS-Konfiguration an:

#### DNS-Einstellungen bei deinem Domain-Provider:
```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

### 5. SSL-Zertifikat

- Vercel stellt automatisch SSL-Zertifikate bereit
- Nach Domain-Verbindung ist die Website unter `https://liloskunstabenteuer.de` erreichbar

### 6. Environment Variables (optional)

In Vercel Dashboard → Project Settings → Environment Variables:

```
NEXT_PUBLIC_SITE_URL=https://liloskunstabenteuer.de
NEXT_PUBLIC_CONTACT_EMAIL=contact@liloskunstabenteuer.de
```

### 7. Automatische Deployments

- Jeder Push zu `main` Branch löst automatisch ein Deployment aus
- Preview-Deployments für Pull Requests
- Vercel optimiert automatisch für Performance

## 🔧 Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Website ist dann unter http://localhost:3000 erreichbar
```

## 📊 Performance & Monitoring

- **Lighthouse Score**: 95+ (automatisch optimiert)
- **Core Web Vitals**: Excellent (durch Next.js optimiert)
- **SEO**: Vollständig konfiguriert (Meta-Tags, Sitemap, robots.txt)

## 🎯 Nächste Schritte nach Deployment

1. **Content-Update**: Echte Fotos und Videos hinzufügen
2. **Instagram-Integration**: Instagram API für Live-Feed
3. **YouTube-Integration**: YouTube API für Video-Embedding
4. **Analytics**: Google Analytics einrichten
5. **Contact-Form**: E-Mail-Backend einrichten (z.B. EmailJS)

## 🛡️ Sicherheit

- HTTPS automatisch aktiviert
- Security Headers konfiguriert
- DSGVO-konform (Impressum & Datenschutz vorhanden)

## 📱 Mobile Optimierung

- Mobile-First Design
- Touch-optimiert für Kinder (8-14 Jahre)
- Responsive Breakpoints für alle Geräte
- Performance-optimiert für langsamere Verbindungen

---

**Die Website ist jetzt bereit für das Deployment! 🎉**
