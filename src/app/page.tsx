import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import HoverCard from "@/components/HoverCard";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AnimatedSection direction="up" delay={200}>
              <div className="mb-8">
                <Image
                  src="/logo.svg"
                  alt="Lilos Kunstabenteuer Logo"
                  width={200}
                  height={200}
                  className="mx-auto h-32 w-32 md:h-48 md:w-48 logo-float"
                  priority
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={400}>
              <h1 className="font-heading font-bold text-4xl md:text-6xl text-foreground mb-6 gradient-text">
                Lilos Kunstabenteuer
              </h1>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={600}>
              <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto">
                Die erste deutsche Marke für digitale Kunstbildung für Kinder und Jugendliche. 
                Entdecke mit Lilo die Welt der Kunst auf YouTube, Instagram und TikTok!
              </p>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link
                  href="/konzept"
                  className="btn-primary bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
                >
                  Mehr erfahren
                </Link>
                <Link
                  href="/kontakt"
                  className="hover-lift border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
            </AnimatedSection>
            
            {/* Social Media Buttons */}
            <AnimatedSection direction="up" delay={1000}>
              <div className="flex justify-center space-x-6">
                <a
                  href="#"
                  className="hover-scale bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors duration-200"
                  aria-label="YouTube"
                >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
                <a
                  href="#"
                  className="hover-scale bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-3 rounded-full transition-colors duration-200"
                  aria-label="Instagram"
                >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
                <a
                  href="#"
                  className="hover-scale bg-black hover:bg-gray-800 text-white p-3 rounded-full transition-colors duration-200"
                  aria-label="TikTok"
                >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Was ist Lilos Kunstabenteuer? */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={200}>
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Was ist Lilos Kunstabenteuer?
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Wir bringen Kunst zu Kindern und Jugendlichen auf eine völlig neue Art - 
                altersgerecht, modern und mit viel Spaß! Lilo nimmt euch mit auf spannende 
                Entdeckungsreisen durch die Welt der Kunst.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection direction="up" delay={400}>
              <HoverCard className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/10 to-transparent">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Kunstgeschichte</h3>
                <p className="text-neutral-600">
                  Entdecke berühmte Künstler und ihre Werke auf eine spannende, verständliche Art.
                </p>
              </HoverCard>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={600}>
              <HoverCard className="text-center p-6 rounded-lg bg-gradient-to-br from-secondary/10 to-transparent">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Kreativ werden</h3>
                <p className="text-neutral-600">
                  Lerne verschiedene Kunsttechniken und werde selbst kreativ - egal ob malen, zeichnen oder basteln.
                </p>
              </HoverCard>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={800}>
              <HoverCard className="text-center p-6 rounded-lg bg-gradient-to-br from-accent/10 to-transparent">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Gemeinsam lernen</h3>
                <p className="text-neutral-600">
                  Werde Teil unserer Community und tausche dich mit anderen jungen Kunstliebhabern aus.
                </p>
              </HoverCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* YouTube Platzhalter */}
      <section className="py-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={200}>
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Bald auf YouTube!
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-8">
                Unsere ersten Kunstabenteuer-Videos sind bereits in Produktion. 
                Bald könnt ihr Lilo auf YouTube begleiten!
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={400}>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center hover-glow">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    Bald verfügbar!
                  </h3>
                  <p className="text-neutral-600">
                    Folge uns für Updates über neue Videos
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Instagram Feed Platzhalter */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={200}>
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Folge uns auf Instagram
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Erlebe Lilos Kunstabenteuer auch auf Instagram mit spannenden Posts und Stories!
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <AnimatedSection key={i} direction="up" delay={400 + (i * 100)}>
                <HoverCard className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-neutral-600">@liloskunstabenteuer</span>
                  </div>
                </HoverCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up" delay={200}>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
              Lass uns gemeinsam die Welt der Kunst entdecken!
            </h2>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={400}>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Hast du Fragen, möchtest Partner werden oder einfach nur Hallo sagen? 
              Wir freuen uns auf deine Nachricht!
            </p>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={600}>
            <Link
              href="/kontakt"
              className="btn-primary bg-white text-primary hover:bg-neutral-100 px-8 py-3 rounded-full font-medium transition-colors duration-200 inline-block"
            >
              Jetzt Kontakt aufnehmen
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}