import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über Lilo - Lilos Kunstabenteuer",
  description: "Lerne Lilo kennen! Unsere coole große Schwester und verspielte Entdeckerin, die euch die Welt der Kunst näherbringen möchte.",
  keywords: "Lilo, Charakter, Kunst, Kinder, Entdeckerin, Freundlich, Kreativ",
  openGraph: {
    title: "Über Lilo - Lilos Kunstabenteuer",
    description: "Lerne Lilo kennen! Unsere coole große Schwester und verspielte Entdeckerin, die euch die Welt der Kunst näherbringen möchte.",
    type: "website",
  },
};

export default function AboutLilo() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/10 via-accent/5 to-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Image
              src="/logo.svg"
              alt="Lilo Charakter"
              width={150}
              height={150}
              className="mx-auto h-32 w-32 md:h-40 md:w-40 mb-8"
            />
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Hallo, ich bin Lilo!
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
              Ich bin eure coole große Schwester und verspielte Entdeckerin, 
              die euch die Welt der Kunst näherbringen möchte!
            </p>
          </div>
        </div>
      </section>

      {/* Wer ist Lilo? */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Wer ist Lilo?
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Ich bin Lilo, eure Kunstabenteuer-Begleiterin! Als coole große Schwester 
                und verspielte Entdeckerin liebe ich es, die Welt der Kunst zu erkunden 
                und euch dabei mitzunehmen.
              </p>
              <p className="text-lg text-neutral-600 mb-6">
                Ich bin neugierig, energiegeladen und immer auf der Suche nach neuen 
                spannenden Kunstwerken und Künstlern. Zusammen entdecken wir berühmte 
                Gemälde, lernen neue Techniken und werden selbst kreativ!
              </p>
              <p className="text-lg text-neutral-600">
                Mein Ziel ist es, euch zu zeigen, dass Kunst nicht langweilig oder 
                kompliziert sein muss. Mit mir wird Kunst zum Abenteuer!
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 text-center">
                <Image
                  src="/logo.svg"
                  alt="Lilo Charakter"
                  width={200}
                  height={200}
                  className="mx-auto h-40 w-40 mb-6"
                />
                <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                  Lilos Eigenschaften
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="text-primary font-semibold mb-1">🌱 Neugierig</div>
                    <div className="text-neutral-600">Immer auf Entdeckungstour</div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="text-secondary font-semibold mb-1">🎨 Kreativ</div>
                    <div className="text-neutral-600">Voll von Ideen</div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="text-accent font-semibold mb-1">😊 Freundlich</div>
                    <div className="text-neutral-600">Wie eine große Schwester</div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="text-primary font-semibold mb-1">🚀 Energiegeladen</div>
                    <div className="text-neutral-600">Voller Begeisterung</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lilos Mission */}
      <section className="py-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Lilos Mission
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Ich möchte euch zeigen, dass Kunst für alle da ist - egal wie alt ihr seid 
              oder wie viel ihr schon über Kunst wisst!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">Spaß an Kunst</h3>
              <p className="text-neutral-600">
                Kunst soll Spaß machen! Ich zeige euch, wie spannend und aufregend 
                die Welt der Kunst sein kann.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">Zugänglich</h3>
              <p className="text-neutral-600">
                Keine komplizierten Worte oder langweiligen Erklärungen. 
                Ich erkläre alles so, dass ihr es versteht!
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">Gemeinsam</h3>
              <p className="text-neutral-600">
                Wir entdecken Kunst zusammen! Ihr seid Teil einer tollen Community 
                von jungen Kunstliebhabern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lilos Werte */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Was mir wichtig ist
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🎨</span>
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  Kreativität fördern
                </h3>
                <p className="text-neutral-600">
                  Jeder von euch ist kreativ! Ich helfe euch dabei, eure eigene 
                  künstlerische Seite zu entdecken und zu entwickeln.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🌟</span>
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  Selbstvertrauen stärken
                </h3>
                <p className="text-neutral-600">
                  Kunst gibt euch Selbstvertrauen! Wenn ihr selbst kreativ werdet, 
                  seid ihr stolz auf eure Werke.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🤝</span>
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  Respektvoll sein
                </h3>
                <p className="text-neutral-600">
                  Wir respektieren alle Arten von Kunst und alle Menschen. 
                  Jeder darf seine Meinung sagen!
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🎓</span>
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  Immer lernen
                </h3>
                <p className="text-neutral-600">
                  Es gibt immer etwas Neues zu entdecken! Auch ich lerne 
                  jeden Tag etwas dazu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
            Begleite mich auf meinen Kunstabenteuern!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Lass uns gemeinsam die Welt der Kunst entdecken. Ich freue mich darauf, 
            euch auf YouTube, Instagram und TikTok zu treffen!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/konzept"
              className="bg-white text-secondary hover:bg-neutral-100 px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Unser Konzept entdecken
            </Link>
            <Link
              href="/kontakt"
              className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Hallo sagen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
