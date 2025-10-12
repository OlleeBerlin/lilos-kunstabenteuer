import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Presse & Medien - Lilos Kunstabenteuer",
  description: "Presseinformationen für Journalisten und Medienvertreter. Fact Sheet, Press Kit und Kontakt für Presseanfragen von Lilos Kunstabenteuer.",
  keywords: "Presse, Medien, Journalisten, Pressemitteilung, Fact Sheet, Press Kit",
  openGraph: {
    title: "Presse & Medien - Lilos Kunstabenteuer",
    description: "Presseinformationen und Materialien für Journalisten und Medienvertreter.",
    type: "website",
  },
};

export default function Presse() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Presse & Medien
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Informationen für Journalisten, Blogger und Medienvertreter über 
              Lilos Kunstabenteuer - die erste deutsche Marke für digitale Kunstbildung.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
              >
                Pressekontakt
              </Link>
              <a
                href="#press-kit"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
              >
                Press Kit Download
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Press Release */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Aktuelle Pressemitteilung
              </h2>
              
              <div className="bg-gradient-to-br from-primary/10 to-transparent p-8 rounded-lg border-l-4 border-primary mb-8">
                <div className="flex items-center mb-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Pressemitteilung
                  </span>
                  <span className="ml-4 text-neutral-500 text-sm">
                    [Datum einfügen]
                  </span>
                </div>
                
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
                  Lilos Kunstabenteuer: Erste deutsche Marke für digitale Kunstbildung startet
                </h3>
                
                <p className="text-neutral-600 mb-4">
                  <strong>Berlin, [Datum]</strong> - Mit "Lilos Kunstabenteuer" startet die erste 
                  systematische Marke für digitale Kunstbildung für Kinder und Jugendliche in Deutschland. 
                  Das innovative Start-up kombiniert traditionelle Kunstpädagogik mit modernen 
                  Social Media-Plattformen und schafft damit eine neue Form der kulturellen Bildung.
                </p>
                
                <p className="text-neutral-600 mb-4">
                  Das Projekt richtet sich primär an Kinder und Jugendliche zwischen 8 und 14 Jahren 
                  und nutzt YouTube, Instagram und TikTok als Bildungsplattformen. Durch altersgerechte, 
                  unterhaltsame Inhalte soll Kunst für alle zugänglich gemacht werden - unabhängig von 
                  geografischen Grenzen oder sozialen Hintergründen.
                </p>
                
                <p className="text-neutral-600">
                  "Wir wollen Kunst demokratisieren und zeigen, dass kulturelle Bildung nicht langweilig 
                  oder kompliziert sein muss", erklärt [Name, Position]. "Mit Lilo als Identifikationsfigur 
                  schaffen wir eine emotionale Verbindung und machen Kunst zu einem echten Abenteuer."
                </p>
                
                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <p className="text-sm text-neutral-500">
                    <strong>Kontakt für Presseanfragen:</strong><br />
                    [Name] - [Position]<br />
                    E-Mail: presse@liloskunstabenteuer.de<br />
                    Telefon: [Telefonnummer]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Unser Team
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Hinter Lilos Kunstabenteuer steht ein erfahrenes Team aus 
              Bildungsexperten, Kreativen und Technologen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                [Name einfügen]
              </h3>
              <p className="text-primary font-medium mb-4">Projektleitung & Strategie</p>
              <p className="text-neutral-600 text-sm mb-4">
                Verantwortlich für die strategische Ausrichtung, Kooperationen mit Museen 
                und Bildungseinrichtungen sowie die Gesamtkoordination des Projekts.
              </p>
              <div className="text-sm text-neutral-500">
                <p><strong>Hintergrund:</strong> [Bildungshintergrund einfügen]</p>
                <p><strong>Expertise:</strong> [Bereiche einfügen]</p>
                <p><strong>Kontakt:</strong> [E-Mail einfügen]</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-secondary/20 to-secondary/40 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                [Name einfügen]
              </h3>
              <p className="text-secondary font-medium mb-4">Content & Produktion</p>
              <p className="text-neutral-600 text-sm mb-4">
                Entwickelt altersgerechte Inhalte, koordiniert die Videoproduktion 
                und ist verantwortlich für die pädagogische Konzeption.
              </p>
              <div className="text-sm text-neutral-500">
                <p><strong>Hintergrund:</strong> [Bildungshintergrund einfügen]</p>
                <p><strong>Expertise:</strong> [Bereiche einfügen]</p>
                <p><strong>Kontakt:</strong> [E-Mail einfügen]</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/40 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                [Name einfügen]
              </h3>
              <p className="text-accent font-medium mb-4">Technik & Design</p>
              <p className="text-neutral-600 text-sm mb-4">
                Verantwortlich für Website, technische Infrastruktur, visuelle Gestaltung 
                und die technische Umsetzung der Marke.
              </p>
              <div className="text-sm text-neutral-500">
                <p><strong>Hintergrund:</strong> [Bildungshintergrund einfügen]</p>
                <p><strong>Expertise:</strong> [Bereiche einfügen]</p>
                <p><strong>Kontakt:</strong> [E-Mail einfügen]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fact Sheet */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Fact Sheet
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Die wichtigsten Fakten über Lilos Kunstabenteuer auf einen Blick.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-lg">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Grunddaten
                </h3>
                <ul className="space-y-2 text-neutral-600">
                  <li><strong>Markenname:</strong> Lilos Kunstabenteuer</li>
                  <li><strong>Gegründet:</strong> [Jahr einfügen]</li>
                  <li><strong>Standort:</strong> Deutschland (Remote-First)</li>
                  <li><strong>Rechtsform:</strong> [Rechtsform einfügen]</li>
                  <li><strong>Website:</strong> liloskunstabenteuer.de</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-secondary/10 to-transparent p-6 rounded-lg">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Zielgruppe
                </h3>
                <ul className="space-y-2 text-neutral-600">
                  <li><strong>Primär:</strong> Kinder & Jugendliche (8-14 Jahre)</li>
                  <li><strong>Sekundär:</strong> Eltern, Pädagogen</li>
                  <li><strong>Marktgröße:</strong> 25+ Mio. TikTok-Nutzer in Deutschland</li>
                  <li><strong>Nutzungsverhalten:</strong> 68 Videos/Tag im Schnitt</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-accent/10 to-transparent p-6 rounded-lg">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Plattformen
                </h3>
                <ul className="space-y-2 text-neutral-600">
                  <li><strong>YouTube:</strong> Ausführliche Tutorials</li>
                  <li><strong>Instagram:</strong> Visuelle Inhalte & Stories</li>
                  <li><strong>TikTok:</strong> Kurze, trendige Videos</li>
                  <li><strong>Website:</strong> Professionelle Anlaufstelle</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-lg">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  Alleinstellungsmerkmal
                </h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Erste spezialisierte Marke für Social Media-Kunstbildung</li>
                  <li>• Altersgerechte, systematische Inhaltsentwicklung</li>
                  <li>• Multi-Plattform-Ansatz</li>
                  <li>• Pädagogische Qualität + Social Media-Kompetenz</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section id="press-kit" className="py-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Press Kit
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Downloads für Journalisten und Medienvertreter.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                Logo & Branding
              </h3>
              <p className="text-neutral-600 text-sm mb-6">
                Logo in verschiedenen Formaten und Größen, Brand Guidelines und Farbpalette.
              </p>
              <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                Download ZIP
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                Presseinformationen
              </h3>
              <p className="text-neutral-600 text-sm mb-6">
                Pressemitteilungen, Fact Sheet und Hintergrundinformationen als PDF.
              </p>
              <button className="bg-secondary hover:bg-secondary-hover text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                Download PDF
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                Bilder & Videos
              </h3>
              <p className="text-neutral-600 text-sm mb-6">
                Hochauflösende Bilder, Screenshots und Videomaterial für die Berichterstattung.
              </p>
              <button className="bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                Download ZIP
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Press */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg">
              <div className="text-center mb-8">
                <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                  Pressekontakt
                </h2>
                <p className="text-lg text-neutral-600">
                  Haben Sie Fragen oder benötigen Sie zusätzliche Informationen? 
                  Wir stehen gerne für Interviews und weitere Auskünfte zur Verfügung.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                    Allgemeine Presseanfragen
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-neutral-600">presse@liloskunstabenteuer.de</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-neutral-600">[Telefonnummer einfügen]</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-neutral-600">Antwortzeit: 24 Stunden</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                    Interview-Anfragen
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    Wir sind verfügbar für:
                  </p>
                  <ul className="space-y-2 text-neutral-600">
                    <li>• Telefon-Interviews</li>
                    <li>• Video-Calls (Zoom, Teams)</li>
                    <li>• Persönliche Treffen (nach Absprache)</li>
                    <li>• Schriftliche Statements</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-neutral-200 text-center">
                <Link
                  href="/kontakt"
                  className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 inline-block"
                >
                  Jetzt Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
