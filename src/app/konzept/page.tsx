import Image from "next/image";
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
      {/* Projekt-Erklärung */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-foreground mb-8">
              Das Konzept
            </h1>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Mit Lilos Kunstabenteuer vermitteln wir Kindern und Jugendlichen die Faszination 
              für Kunst über moderne digitale Kanäle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-4">
                  Unsere Vision
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Wir möchten Kindern und Jugendlichen im Alter von 8-14 Jahren die Welt der Kunst 
                  auf eine moderne, altersgerechte und spannende Weise näherbringen. 
                  Durch die Kombination von traditioneller Kunstbildung und zeitgemäßer 
                  Mediennutzung schaffen wir eine Brücke zwischen Museen und der digitalen Welt.
                </p>
              </div>
              
              <div>
                <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-4">
                  Zielgruppe & Plattformen
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Unser Content richtet sich primär an Kinder und Jugendliche zwischen 8 und 14 Jahren. 
                  Wir sind auf YouTube, Instagram und TikTok aktiv und passen unsere Inhalte 
                  spezifisch an die jeweilige Plattform und deren Nutzerverhalten an.
                </p>
              </div>
              
              <div>
                <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-4">
                  Pädagogischer Ansatz
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Alle Inhalte werden von erfahrenen Pädagogen entwickelt und sind darauf ausgelegt, 
                  sowohl bildend als auch unterhaltsam zu sein. Wir kombinieren Kunstgeschichte, 
                  kreative Techniken und moderne Medienkompetenz in einem ganzheitlichen Ansatz.
                </p>
              </div>
            </div>
            
            {/* Visuelles Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-12 text-center">
                <div className="space-y-6">
                  <div className="text-6xl font-bold text-primary">8-14</div>
                  <div className="text-xl text-neutral-600">Jahre Zielgruppe</div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                  <div className="text-4xl font-bold text-secondary">3</div>
                  <div className="text-lg text-neutral-600">Plattformen</div>
                  <div className="text-sm text-neutral-700">YouTube • Instagram • TikTok</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gründer-Vorstellung */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Die Gründer
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Hinter Lilos Kunstabenteuer stehen zwei leidenschaftliche Menschen mit 
              umfassender Erfahrung in Bildung, Kunst und Medien.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Alica Sumbadze */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">AS</span>
                </div>
                <h3 className="font-heading font-semibold text-2xl text-foreground mb-2">
                  Alica Sumbadze
                </h3>
                <p className="text-primary font-medium">Co-Gründerin & Kreativdirektorin</p>
              </div>
              <div className="space-y-4">
                <p className="text-neutral-600 leading-relaxed">
                  Alica bringt ihre Leidenschaft für Kunst und ihre Erfahrung in der 
                  Kunstgeschichte und der kreativen Bildung in das Projekt ein. Sie ist 
                  verantwortlich für die künstlerische Ausrichtung und die Entwicklung 
                  der Charaktere.
                </p>
                <div className="pt-4 border-t border-neutral-200">
                  <h4 className="font-medium text-foreground mb-2">Expertise:</h4>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Kunstgeschichte & Museologie</li>
                    <li>• Kreative Bildung für Kinder</li>
                    <li>• Charakterentwicklung & Storytelling</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Oliver Stöcker */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-secondary">OS</span>
                </div>
                <h3 className="font-heading font-semibold text-2xl text-foreground mb-2">
                  Oliver Stöcker
                </h3>
                <p className="text-secondary font-medium">Co-Gründer & Projektleiter</p>
              </div>
              <div className="space-y-4">
                <p className="text-neutral-600 leading-relaxed">
                  Oliver bringt seine Erfahrung in der Medienproduktion und 
                  Geschäftsentwicklung ein. Er ist verantwortlich für die strategische 
                  Ausrichtung und die technische Umsetzung der digitalen Inhalte.
                </p>
                <div className="pt-4 border-t border-neutral-200">
                  <h4 className="font-medium text-foreground mb-2">Expertise:</h4>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Medienproduktion & Video</li>
                    <li>• Geschäftsentwicklung</li>
                    <li>• Technische Umsetzung</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
              <h3 className="font-heading font-semibold text-2xl mb-4">
                Möchten Sie mehr über unser Team erfahren?
              </h3>
              <p className="text-white/90 mb-6">
                Kontaktieren Sie uns gerne für weitere Informationen oder Kooperationsmöglichkeiten.
              </p>
              <Link
                href="/kontakt"
                className="bg-white text-primary hover:bg-neutral-100 px-8 py-3 rounded-full font-medium transition-colors duration-200 inline-block"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}