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
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              🎨 Das Konzept
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-foreground mb-8 leading-tight">
              Kunst neu 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> entdecken</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Wir bringen Kindern und Jugendlichen die Faszination für Kunst 
              über moderne digitale Kanäle näher.
            </p>
          </div>
        </div>
      </section>

      {/* Konzept Details */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Vision */}
            <div className="lg:col-span-2">
              <div className="bg-card-bg rounded-3xl p-8 border border-border-color shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h2 className="font-heading font-bold text-3xl text-foreground">Unsere Vision</h2>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Wir möchten Kindern und Jugendlichen im Alter von 8-14 Jahren die Welt der Kunst 
                  auf eine moderne, altersgerechte und spannende Weise näherbringen. 
                  Durch die Kombination von traditioneller Kunstbildung und zeitgemäßer 
                  Mediennutzung schaffen wir eine Brücke zwischen Museen und der digitalen Welt.
                </p>
              </div>
            </div>
            
            {/* Statistiken */}
            <div className="space-y-6">
              <div className="bg-card-bg rounded-2xl p-6 border border-border-color shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">8-14</div>
                  <div className="text-sm font-medium text-foreground/80">Jahre Zielgruppe</div>
                </div>
              </div>

              <div className="bg-card-bg rounded-2xl p-6 border border-border-color shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div className="text-4xl font-bold text-secondary mb-2">3</div>
                  <div className="text-sm font-medium text-foreground/80">Plattformen</div>
                  <div className="flex justify-center space-x-2 mt-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Zwei-Spalten Layout für weitere Inhalte */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Zielgruppe & Plattformen */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 border border-border-color">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h2 className="font-heading font-bold text-2xl text-foreground">Zielgruppe & Plattformen</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Unser Content richtet sich primär an Kinder und Jugendliche zwischen 8 und 14 Jahren. 
                Wir sind auf YouTube, Instagram und TikTok aktiv und passen unsere Inhalte 
                spezifisch an die jeweilige Plattform und deren Nutzerverhalten an.
              </p>
              
              {/* Social Media Plattformen */}
              <div className="bg-card-bg rounded-xl p-4 border border-border-color">
                <div className="flex justify-center items-center space-x-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <span className="font-medium text-foreground/80">YouTube</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                    <span className="font-medium text-foreground/80">Instagram</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                    <span className="font-medium text-foreground/80">TikTok</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pädagogischer Ansatz */}
            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-3xl p-8 border border-border-color">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h2 className="font-heading font-bold text-2xl text-foreground">Pädagogischer Ansatz</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Alle Inhalte werden von erfahrenen Pädagogen entwickelt und sind darauf ausgelegt, 
                sowohl bildend als auch unterhaltsam zu sein. Wir kombinieren Kunstgeschichte, 
                kreative Techniken und moderne Medienkompetenz in einem ganzheitlichen Ansatz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gründer-Vorstellung */}
      <section className="py-24 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-48 h-48 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-56 h-56 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary font-medium text-sm mb-6">
              👥 Das Team
            </div>
            <h2 className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-8">
              Die 
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"> Gründer</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
              Hinter Lilos Kunstabenteuer stehen zwei leidenschaftliche Menschen mit 
              umfassender Erfahrung in Bildung, Kunst und Medien.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Alica Sumbadze */}
            <div className="group">
              <div className="bg-card-bg rounded-3xl p-8 border border-border-color shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-40 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-5xl">🎨</span>
                  </div>
                  <h3 className="font-heading font-bold text-3xl text-foreground mb-3">
                    Alica Sumbadze
                  </h3>
                  <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
                    Co-Gründerin & Kreativdirektorin
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Alica bringt ihre Leidenschaft für Kunst und ihre Erfahrung in der 
                    Kunstgeschichte und der kreativen Bildung in das Projekt ein. Sie ist 
                    verantwortlich für die künstlerische Ausrichtung und die Entwicklung 
                    der Charaktere.
                  </p>
                  
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border border-border-color">
                    <h4 className="font-bold text-foreground mb-4 flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Expertise
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <span className="text-sm">📚</span>
                        </div>
                        <span className="text-foreground/80">Kunstgeschichte & Museologie</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <span className="text-sm">👶</span>
                        </div>
                        <span className="text-foreground/80">Kreative Bildung für Kinder</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <span className="text-sm">📖</span>
                        </div>
                        <span className="text-foreground/80">Charakterentwicklung & Storytelling</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Oliver Stöcker */}
            <div className="group">
              <div className="bg-card-bg rounded-3xl p-8 border border-border-color shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-40 h-40 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-5xl">💻</span>
                  </div>
                  <h3 className="font-heading font-bold text-3xl text-foreground mb-3">
                    Oliver Stöcker
                  </h3>
                  <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary font-medium">
                    Co-Gründer & Projektleiter
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Oliver bringt seine Erfahrung in der Medienproduktion und 
                    Geschäftsentwicklung ein. Er ist verantwortlich für die strategische 
                    Ausrichtung und die technische Umsetzung der digitalen Inhalte.
                  </p>
                  
                  <div className="bg-gradient-to-r from-secondary/5 to-accent/5 rounded-2xl p-6 border border-border-color">
                    <h4 className="font-bold text-foreground mb-4 flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                      Expertise
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                          <span className="text-sm">🎬</span>
                        </div>
                        <span className="text-foreground/80">Medienproduktion & Video</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                          <span className="text-sm">📈</span>
                        </div>
                        <span className="text-foreground/80">Geschäftsentwicklung</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                          <span className="text-sm">⚙️</span>
                        </div>
                        <span className="text-foreground/80">Technische Umsetzung</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}