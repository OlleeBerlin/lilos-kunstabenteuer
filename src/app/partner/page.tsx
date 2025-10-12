import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner & Museen - Lilos Kunstabenteuer",
  description: "Werden Sie Partner von Lilos Kunstabenteuer! Kooperationen mit Museen, Bildungseinrichtungen und Sponsoren für digitale Kunstbildung.",
  keywords: "Partner, Museen, Kooperation, Bildung, Sponsoring, Zusammenarbeit",
  openGraph: {
    title: "Partner & Museen - Lilos Kunstabenteuer",
    description: "Werden Sie Partner von Lilos Kunstabenteuer! Kooperationen mit Museen und Bildungseinrichtungen.",
    type: "website",
  },
};

export default function Partner() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Partner & Museen
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Wir arbeiten mit führenden Museen, Bildungseinrichtungen und 
              Kulturorganisationen zusammen, um Kunst für alle zugänglich zu machen.
            </p>
            
            <Link
              href="/kontakt"
              className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 inline-block"
            >
              Partner werden
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Arten der Zusammenarbeit
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Wir bieten verschiedene Kooperationsmöglichkeiten, die auf die 
              Bedürfnisse unserer Partner zugeschnitten sind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary/10 to-transparent p-8 rounded-lg border border-primary/20">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-foreground text-center">
                Museums-Kooperationen
              </h3>
              <ul className="text-neutral-600 space-y-2 text-sm">
                <li>• Drehgenehmigungen für Kunstwerke</li>
                <li>• Fachliche Beratung und Expertise</li>
                <li>• Gemeinsame Veranstaltungen</li>
                <li>• Cross-Promotion</li>
                <li>• Bildungsprogramme</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/10 to-transparent p-8 rounded-lg border border-secondary/20">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-foreground text-center">
                Bildungspartnerschaften
              </h3>
              <ul className="text-neutral-600 space-y-2 text-sm">
                <li>• Integration in den Unterricht</li>
                <li>• Lehrerfortbildungen</li>
                <li>• Bildungsmaterialien</li>
                <li>• Pädagogische Evaluation</li>
                <li>• Schülerprojekte</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-accent/10 to-transparent p-8 rounded-lg border border-accent/20">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4 text-foreground text-center">
                Sponsoring & Förderung
              </h3>
              <ul className="text-neutral-600 space-y-2 text-sm">
                <li>• Nachhaltige Finanzierung</li>
                <li>• Markenintegration</li>
                <li>• CSR-Maßnahmen</li>
                <li>• Gesellschaftliches Engagement</li>
                <li>• Langfristige Partnerschaften</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Unsere Partner
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Wir sind stolz darauf, mit diesen herausragenden Institutionen 
              zusammenzuarbeiten.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Placeholder für Partner-Logos */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 flex items-center justify-center aspect-square"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="text-sm text-neutral-500">Partner {i}</p>
                  <p className="text-xs text-neutral-400">Logo Platzhalter</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-neutral-600 mb-6">
              Möchten Sie Teil unseres Partnernetzwerks werden?
            </p>
            <Link
              href="/kontakt"
              className="bg-secondary hover:bg-secondary-hover text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Jetzt Partner werden
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Vorteile einer Partnerschaft
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Erweiterte Reichweite
                  </h3>
                  <p className="text-neutral-600">
                    Erreichen Sie eine junge, digitale Zielgruppe über unsere 
                    Social Media-Kanäle und steigern Sie Ihre Sichtbarkeit.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Innovative Bildung
                  </h3>
                  <p className="text-neutral-600">
                    Gestalten Sie die Zukunft der digitalen Kunstbildung mit und 
                    positionieren Sie sich als Vorreiter im Bereich der kulturellen Bildung.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Gesellschaftlicher Impact
                  </h3>
                  <p className="text-neutral-600">
                    Tragen Sie zur kulturellen Bildung der nächsten Generation bei 
                    und schaffen Sie nachhaltigen gesellschaftlichen Mehrwert.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Qualitätssicherung
                  </h3>
                  <p className="text-neutral-600">
                    Profitieren Sie von unserer Expertise in der Entwicklung 
                    pädagogisch wertvoller, altersgerechter Inhalte.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Schnelle Umsetzung
                  </h3>
                  <p className="text-neutral-600">
                    Nutzen Sie die Agilität eines Start-ups für schnelle 
                    Entscheidungen und flexible Anpassungen.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Kosteneffizienz
                  </h3>
                  <p className="text-neutral-600">
                    Erreichen Sie mehr mit weniger: Digitales Marketing ist 
                    oft kosteneffizienter als traditionelle Bildungsprogramme.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              So wird man Partner
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Der Weg zur Partnerschaft ist einfach und unkompliziert.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">
                Kontakt aufnehmen
              </h3>
              <p className="text-neutral-600 text-sm">
                Schreiben Sie uns über das Kontaktformular oder per E-Mail 
                mit Ihren Kooperationswünschen.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">
                Kennenlernen
              </h3>
              <p className="text-neutral-600 text-sm">
                Wir lernen uns in einem persönlichen Gespräch kennen und 
                besprechen Ihre Ziele und unsere Möglichkeiten.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">
                Konzept entwickeln
              </h3>
              <p className="text-neutral-600 text-sm">
                Gemeinsam entwickeln wir ein maßgeschneidertes 
                Kooperationskonzept für Ihre Bedürfnisse.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">
                Loslegen
              </h3>
              <p className="text-neutral-600 text-sm">
                Nach der Vereinbarung der Details starten wir sofort mit 
                der Umsetzung Ihrer Partnerschaft.
              </p>
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
            Lassen Sie uns gemeinsam die Zukunft der digitalen Kunstbildung gestalten. 
            Wir freuen uns auf eine fruchtbare Zusammenarbeit mit Ihnen.
          </p>
          <Link
            href="/kontakt"
            className="bg-white text-primary hover:bg-neutral-100 px-8 py-3 rounded-full font-medium transition-colors duration-200 inline-block"
          >
            Jetzt Partner werden
          </Link>
        </div>
      </section>
    </div>
  );
}
