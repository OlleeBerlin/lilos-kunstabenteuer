import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Das Konzept - Lilos Kunstabenteuer",
  description: "Die erste deutsche Marke für digitale Kunstbildung für Kinder und Jugendliche. Altersgerechte Inhalte für YouTube, Instagram und TikTok.",
  keywords: "Konzept, digitale Kunstbildung, Social Media, Kinder, Jugendliche, Bildung, Pädagogik",
  openGraph: {
    title: "Das Konzept - Lilos Kunstabenteuer",
    description: "Die erste deutsche Marke für digitale Kunstbildung für Kinder und Jugendliche.",
    type: "website",
  },
};

export default function Konzept() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Das Konzept
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto mb-8">
              Die erste deutsche Marke für systematische, altersgerechte Kunstbildung 
              über Social Media-Plattformen für Kinder und Jugendliche.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
              >
                Partner werden
              </Link>
              <Link
                href="/presse"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
              >
                Presse-Informationen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Unsere Vision
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Als erste spezialisierte Marke für Social Media-Kunstbildung in Deutschland 
                schaffen wir eine neue Form der kulturellen Bildung im digitalen Raum. 
                Wir verbinden traditionelle Kunstpädagogik mit modernen digitalen Plattformen.
              </p>
              <p className="text-lg text-neutral-600">
                Unser Ziel ist es, Kunst für alle Kinder und Jugendlichen zugänglich zu machen - 
                unabhängig von geografischen Grenzen oder sozialen Hintergründen.
              </p>
            </div>
            
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Unsere Mission
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Wir entwickeln systematisch altersgerechte Kunstinhalte speziell für 
                Social Media-Plattformen und schaffen damit eine neue Kategorie der 
                digitalen Kunstbildung.
              </p>
              <p className="text-lg text-neutral-600">
                Durch die Kombination aus pädagogischer Qualität und Social Media-Kompetenz 
                erreichen wir Kinder dort, wo sie sich aufhalten und lernen möchten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zielgruppe */}
      <section className="py-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Zielgruppen
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-2xl text-foreground">
                  Primäre Zielgruppe
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Kinder und Jugendliche (8-14 Jahre)
                  </h4>
                  <ul className="text-neutral-600 space-y-2">
                    <li>• Digital Natives, die mit sozialen Medien aufgewachsen sind</li>
                    <li>• Aktive Nutzer von YouTube, Instagram und TikTok</li>
                    <li>• Hohe Bereitschaft für interaktive, visuelle Inhalte</li>
                    <li>• Starkes Interesse an kreativen Aktivitäten</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-2xl text-foreground">
                  Sekundäre Zielgruppen
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Eltern und Erziehungsberechtigte
                  </h4>
                  <p className="text-neutral-600 mb-3">
                    Suchen nach qualitätsvollen, sicheren digitalen Inhalten für ihre Kinder
                  </p>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Pädagogen und Bildungseinrichtungen
                  </h4>
                  <p className="text-neutral-600">
                    Integrieren moderne Kunstbildung in ihren Unterricht
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plattformen */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Unsere Plattformen
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Wir entwickeln plattformspezifische Inhalte für die drei wichtigsten 
              Social Media-Kanäle unserer Zielgruppe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-gradient-to-br from-red-50 to-red-100 border border-red-200">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">YouTube</h3>
              <p className="text-neutral-600 mb-4">
                Ausführliche Tutorials und Künstlerporträts für vertieftes Lernen
              </p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Step-by-Step Anleitungen</li>
                <li>• Künstlerbiografien</li>
                <li>• Kunstgeschichte erklärt</li>
                <li>• Community-Interaktion</li>
              </ul>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">Instagram</h3>
              <p className="text-neutral-600 mb-4">
                Visuell orientierte Inhalte mit Step-by-Step-Anleitungen
              </p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Bildbasierte Tutorials</li>
                <li>• Stories und Reels</li>
                <li>• Community-Challenges</li>
                <li>• Künstler-Highlights</li>
              </ul>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">TikTok</h3>
              <p className="text-neutral-600 mb-4">
                Kurze, unterhaltsame Kunstvideos mit viralen Trends
              </p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Quick-Facts über Künstler</li>
                <li>• Trend-Integration</li>
                <li>• Kurze Tutorials</li>
                <li>• Interaktive Challenges</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Selling Proposition */}
      <section className="py-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Unser Alleinstellungsmerkmal
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">Altersgerechte Inhalte</h3>
              <p className="text-neutral-600 text-sm">
                Systematische Entwicklung von Inhalten speziell für 8-14-Jährige
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">Multi-Plattform</h3>
              <p className="text-neutral-600 text-sm">
                Alle drei relevanten Plattformen werden gleichzeitig bespielt
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">Pädagogische Qualität</h3>
              <p className="text-neutral-600 text-sm">
                Verbindung von Bildungsexpertise mit Social Media-Kompetenz
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">Community-orientiert</h3>
              <p className="text-neutral-600 text-sm">
                Aufbau einer loyalen, engagierten Followerschaft
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kooperationspotenzial */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Kooperationsmöglichkeiten
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Wir suchen strategische Partnerschaften mit verschiedenen Stakeholdern 
              im Bereich der kulturellen Bildung.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-primary/10 to-transparent rounded-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-foreground text-center">
                Museen & Kulturinstitutionen
              </h3>
              <ul className="text-neutral-600 space-y-2">
                <li>• Drehgenehmigungen für Kunstwerke</li>
                <li>• Fachliche Beratung und Expertise</li>
                <li>• Gemeinsame Veranstaltungen</li>
                <li>• Cross-Promotion</li>
              </ul>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-secondary/10 to-transparent rounded-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-foreground text-center">
                Bildungseinrichtungen
              </h3>
              <ul className="text-neutral-600 space-y-2">
                <li>• Integration in den Unterricht</li>
                <li>• Lehrerfortbildungen</li>
                <li>• Bildungsmaterialien</li>
                <li>• Pädagogische Evaluation</li>
              </ul>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-accent/10 to-transparent rounded-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-foreground text-center">
                Sponsoren & Förderer
              </h3>
              <ul className="text-neutral-600 space-y-2">
                <li>• Nachhaltige Finanzierung</li>
                <li>• Markenintegration</li>
                <li>• CSR-Maßnahmen</li>
                <li>• Gesellschaftliches Engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
            Werden Sie Teil unserer Vision!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Haben Sie Interesse an einer Partnerschaft oder möchten Sie mehr über 
            unser Konzept erfahren? Wir freuen uns auf den Austausch mit Ihnen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-white text-primary hover:bg-neutral-100 px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Jetzt Kontakt aufnehmen
            </Link>
            <Link
              href="/presse"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Presse-Informationen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
