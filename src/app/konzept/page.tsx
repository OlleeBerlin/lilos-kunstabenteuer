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
              Wo Kunstgeschichte auf Generation Digital trifft.<br />
              Mit LILO. Mit Herz. Mit Leidenschaft.
            </p>
          </div>
        </div>
      </section>

      {/* Konzept Details */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Einführung */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-border-color shadow-lg">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
                  🎨 Wir machen Kunst für die Generation Digital
                </div>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                <strong>Lilos Kunstabenteuer</strong> möchte in Deutschland Kunst gezielt für Kinder und Jugendliche auf <strong>YouTube, Instagram und TikTok</strong> inhaltlich wertvoll und altersgerecht vermitteln. Wir glauben daran, dass Kunst nicht nur in traditionellen Bildungsräumen vermittelt werden sollte, sondern auch dort zu finden sein muss, wo junge Menschen ihre Zeit verbringen – in der digitalen Welt.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card-bg rounded-3xl p-8 md:p-12 border border-border-color shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h2 className="font-heading font-bold text-3xl text-foreground">Unsere Mission: Kreativität trifft Digital Native</h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Während <strong>bereits 10 Prozent der Sechs- bis Siebenjährigen aktiv auf TikTok</strong> sind und <strong>junge Menschen durchschnittlich 68 Videos pro Tag</strong> konsumieren, schaffen wir Inhalte, die nicht nur unterhalten, sondern bilden und inspirieren. Kunst fördert <strong>Vorstellungskraft, kritisches Denken und Selbstvertrauen</strong> – und genau diese Superkräfte bringen wir zu den Kids nach Hause.
              </p>
            </div>

            {/* Das Problem */}
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl p-8 md:p-12 border border-border-color shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h2 className="font-heading font-bold text-3xl text-foreground">Das Problem, das wir lösen</h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                In einer Zeit, in der Kinder und Jugendliche täglich Stunden auf Social Media verbringen, fehlen qualitätsvolle, pädagogisch durchdachte Kunstinhalte. Während Influencer-Marketing und kommerzielle Inhalte die Plattformen dominieren, bleiben echte Bildungschancen ungenutzt. <strong>Lilos Kunstabenteuer</strong> füllt diese Lücke mit authentischen, kreativen und lehrreichen Inhalten, die junge Menschen dort abholen, wo sie sind.
              </p>
            </div>

            {/* Herzstück YouTube mit LILO */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 border border-border-color shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <h2 className="font-heading font-bold text-3xl text-foreground">Unser Herzstück: YouTube mit LILO als Seele der Marke</h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                <strong>YouTube ist unser Zuhause</strong> – hier schlägt das Herz von Lilos Kunstabenteuer. Im Mittelpunkt steht <strong>LILO</strong>, die coole große Schwester und ansteckend freundliche Lehrerin, die <strong>Kunstepochen, berühmte Künstler, spannende Ausstellungen, Galerien und Museen</strong> mit Begeisterung und Herzlichkeit zum Leben erweckt. Sie macht aus Van Gogh eine faszinierende Persönlichkeit, aus der Renaissance ein spannendes Abenteuer und aus jedem Museum einen Ort voller Geheimnisse.
              </p>
              
              <div className="bg-card-bg rounded-2xl p-6 border border-border-color mb-6">
                <p className="text-foreground/80 leading-relaxed mb-4">
                  <strong>TikTok und Instagram</strong> nutzen wir als kreative Brücken zu unserem YouTube-Kanal:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl p-4 border border-red-200 dark:border-red-800">
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 bg-red-500 rounded-lg flex items-center justify-center mr-2">
                        <span className="text-white text-xs">⚡</span>
                      </div>
                      <h3 className="font-bold text-foreground">TikTok</h3>
                    </div>
                    <p className="text-sm text-foreground/80">Kurze, inspirierende Kunst-Teaser über Künstler und Kunstgeschichte</p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-xl p-4 border border-pink-200 dark:border-pink-800">
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 bg-pink-500 rounded-lg flex items-center justify-center mr-2">
                        <span className="text-white text-xs">📸</span>
                      </div>
                      <h3 className="font-bold text-foreground">Instagram</h3>
                    </div>
                    <p className="text-sm text-foreground/80">Visuelle Einblicke in LILOs Kunstwelt und spannende Fakten über Museen</p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center mr-2">
                        <span className="text-white text-xs">🎥</span>
                      </div>
                      <h3 className="font-bold text-foreground">YouTube</h3>
                    </div>
                    <p className="text-sm text-foreground/80">LILOs vollständige Kunst-Abenteuer mit unterhaltsamen Geschichten</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Warum jetzt */}
            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-border-color shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <h2 className="font-heading font-bold text-3xl text-foreground">Warum jetzt?</h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Der Markt für <strong>digitale Kulturbildung wächst kontinuierlich</strong>, während <strong>immersive Kunstproduktionen und neue Technologien</strong> völlig neue Möglichkeiten eröffnen. Gleichzeitig fehlt eine systematische, markenorientierte Herangehensweise an Social Media-Kunstbildung in Deutschland. <strong>Lilos Kunstabenteuer</strong> möchte diese Lücke schließen und gemeinsam mit Museen, Schulen und Kulturinstitutionen neue Standards für digitale Kunstbildung setzen.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card-bg rounded-3xl p-8 md:p-12 border border-border-color shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h2 className="font-heading font-bold text-3xl text-foreground">Unsere Vision</h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Wir träumen von einer Generation, die Kunstgeschichte nicht als langweilig oder unzugänglich empfindet, sondern als Teil ihrer digitalen DNA. Eine Generation, die durch das Entdecken großer Künstler und Kunstepochen gestärkt wird und Museen als spannende Erlebnisorte begreift. Mit LILO als warmherziger Begleiterin wollen wir zeigen, dass Kunstgeschichte lebendig ist und jeder sie verstehen kann.
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 border border-border-color">
                <p className="text-lg font-medium text-foreground text-center">
                  <span className="text-primary font-bold">Lilos Kunstabenteuer</span> – wo Kunstgeschichte auf Generation Digital trifft.<br />
                  Mit LILO. Mit Herz. Mit Leidenschaft.
                </p>
                <p className="text-center text-foreground/80 mt-4 italic">
                  Lass uns gemeinsam mit LILO die faszinierende Welt der Kunst entdecken.
                </p>
              </div>
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