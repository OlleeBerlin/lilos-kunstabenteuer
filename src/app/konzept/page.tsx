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
              Kunst für die 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Generation Digital</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Mit LILO entdecken Kinder und Jugendliche große Künstler, faszinierende Epochen sowie spannende Museen und Ausstellungen in ihrer digitalen Welt.
            </p>
          </div>
          
          {/* Große Haupt-Card - überlappend in Hero-Sektion */}
          <div className="bg-gradient-to-br from-card-bg via-card-bg to-primary/5 rounded-4xl p-8 md:p-16 border border-border-color shadow-2xl relative overflow-hidden -mb-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 right-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative">
              {/* Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-primary font-medium text-lg mb-8 border border-primary/20">
                  🎨 Wir machen Kunst für die Generation Digital
                </div>
                <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                  Lilos Kunstabenteuer
                </h2>
                <p className="text-xl text-foreground/80 leading-relaxed max-w-4xl mx-auto">
                  <strong>Lilos Kunstabenteuer</strong> möchte in Deutschland Kunst gezielt für Kinder und Jugendliche auf <strong>YouTube, Instagram und TikTok</strong> inhaltlich wertvoll und altersgerecht vermitteln. Wir glauben daran, dass Kunst nicht nur in traditionellen Bildungsräumen vermittelt werden sollte, sondern auch dort zu finden sein muss, wo junge Menschen ihre Zeit verbringen – in der digitalen Welt.
                </p>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Mission */}
                <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-3xl p-8 border border-border-color shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-3xl">🚀</span>
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-foreground">Unsere Mission</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    Während <strong>bereits 10 Prozent der Sechs- bis Siebenjährigen aktiv auf TikTok</strong> sind und <strong>junge Menschen durchschnittlich 68 Videos pro Tag</strong> konsumieren, schaffen wir Inhalte, die nicht nur unterhalten, sondern bilden und inspirieren. Kunst fördert <strong>Vorstellungskraft, kritisches Denken und Selbstvertrauen</strong> – und genau diese Superkräfte bringen wir zu den Kids nach Hause.
                  </p>
                </div>

                {/* Das Problem */}
                <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl p-8 border border-border-color shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-3xl">🎯</span>
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-foreground">Das Problem</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    In einer Zeit, in der Kinder und Jugendliche täglich Stunden auf Social Media verbringen, fehlen qualitätsvolle, pädagogisch durchdachte Kunstinhalte. Während Influencer-Marketing und kommerzielle Inhalte die Plattformen dominieren, bleiben echte Bildungschancen ungenutzt. <strong>Lilos Kunstabenteuer</strong> füllt diese Lücke mit authentischen, kreativen und lehrreichen Inhalten.
                  </p>
                </div>
              </div>

              {/* Herzstück LILO - Zentrale Sektion */}
              <div className="bg-card-bg rounded-4xl p-10 md:p-12 border border-border-color shadow-xl mb-16 relative">
                
                <div className="text-center mb-10">
                  <div className="inline-flex items-center px-6 py-3 bg-primary/20 rounded-full text-primary font-bold text-lg mb-6 border border-primary/30">
                    ❤️ Unser Herzstück
                  </div>
                  <h3 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
                    YouTube mit <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">LILO</span> als Seele der Marke
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-xl text-foreground/80 leading-relaxed mb-8">
                      <strong>YouTube ist unser Zuhause</strong> – hier schlägt das Herz von Lilos Kunstabenteuer. Im Mittelpunkt steht <strong>LILO</strong>, die coole große Schwester und ansteckend freundliche Lehrerin, die <strong>Kunstepochen, berühmte Künstler, spannende Ausstellungen, Galerien und Museen</strong> mit Begeisterung und Herzlichkeit zum Leben erweckt.
                    </p>
                    <div className="bg-card-bg rounded-2xl p-6 border border-border-color">
                      <p className="text-foreground/80 font-medium mb-4">
                        Sie macht aus Van Gogh eine faszinierende Persönlichkeit, aus der Renaissance ein spannendes Abenteuer und aus jedem Museum einen Ort voller Geheimnisse.
                      </p>
                    </div>
                  </div>

                  {/* Platform Cards */}
                  <div className="space-y-4">
                    {/* YouTube - Erst */}
                    <div className="bg-card-bg rounded-2xl p-6 border border-border-color shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        </div>
                        <h4 className="font-bold text-foreground text-xl">YouTube</h4>
                      </div>
                      <p className="text-foreground/80">LILOs vollständige Kunst-Abenteuer mit unterhaltsamen Geschichten</p>
                    </div>
                    
                    {/* TikTok - Zweit */}
                    <div className="bg-card-bg rounded-2xl p-6 border border-border-color shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                          </svg>
                        </div>
                        <h4 className="font-bold text-foreground text-xl">TikTok</h4>
                      </div>
                      <p className="text-foreground/80">Kurze, inspirierende Kunst-Teaser über Künstler und Kunstgeschichte</p>
                    </div>
                    
                    {/* Instagram - Dritt */}
                    <div className="bg-card-bg rounded-2xl p-6 border border-border-color shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </div>
                        <h4 className="font-bold text-foreground text-xl">Instagram</h4>
                      </div>
                      <p className="text-foreground/80">Visuelle Einblicke in LILOs Kunstwelt und spannende Fakten über Museen</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Warum jetzt */}
                <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-3xl p-8 border border-border-color shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-3xl">⏰</span>
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-foreground">Warum jetzt?</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    Der Markt für <strong>digitale Kulturbildung wächst kontinuierlich</strong>, während <strong>immersive Kunstproduktionen und neue Technologien</strong> völlig neue Möglichkeiten eröffnen. Gleichzeitig fehlt eine systematische, markenorientierte Herangehensweise an Social Media-Kunstbildung in Deutschland.
                  </p>
                </div>

                {/* Vision */}
                <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl p-8 border border-border-color shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-3xl">🌟</span>
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-foreground">Unsere Vision</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    Wir träumen von einer Generation, die Kunstgeschichte nicht als langweilig oder unzugänglich empfindet, sondern als Teil ihrer digitalen DNA. Mit LILO als warmherziger Begleiterin wollen wir zeigen, dass Kunstgeschichte lebendig ist und jeder sie verstehen kann.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-16">
                <div className="bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 rounded-3xl p-8 border border-border-color">
                  <h4 className="font-heading font-bold text-3xl text-foreground mb-4">
                    <span className="text-primary">Lilos Kunstabenteuer</span> – wo Kunstgeschichte auf Generation Digital trifft
                  </h4>
                  <p className="text-xl text-foreground/80 mb-6">
                    Mit LILO. Mit Herz. Mit Leidenschaft.
                  </p>
                  <p className="text-lg text-foreground/70 italic">
                    Lass uns gemeinsam mit LILO die faszinierende Welt der Kunst entdecken.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gründer-Vorstellung */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5 relative overflow-hidden">
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
                  <div className="w-40 h-40 rounded-3xl mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-300 border-4 border-primary/20">
                    <img 
                      src="/alica-sumbadze.png" 
                      alt="Alica Sumbadze" 
                      className="w-full h-full object-cover"
                    />
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
                  <div className="w-40 h-40 rounded-3xl mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-300 border-4 border-secondary/20">
                    <img 
                      src="/oliver-stoecker.png" 
                      alt="Oliver Stöcker" 
                      className="w-full h-full object-cover"
                    />
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