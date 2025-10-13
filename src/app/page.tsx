import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-12">
              <Image
                src="/logo.svg"
                alt="Lilos Kunstabenteuer Logo"
                width={300}
                height={300}
                className="mx-auto h-40 w-40 md:h-56 md:w-56 logo-float"
                priority
              />
            </div>
            
            {/* Hauptüberschrift */}
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-foreground mb-8">
              Lilos Kunstabenteuer
            </h1>
            
            {/* Untertitel */}
            <p className="text-2xl md:text-3xl text-neutral-600 mb-16 max-w-4xl mx-auto leading-relaxed">
              Wir bringen Kindern und Jugendlichen die Welt der Kunst auf moderne und spannende Weise näher
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/konzept"
                className="btn-primary bg-primary hover:bg-primary-hover text-white px-12 py-4 text-xl rounded-full font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Unser Konzept
              </Link>
              <Link
                href="/kontakt"
                className="hover-lift border-2 border-primary text-primary hover:bg-primary hover:text-white px-12 py-4 text-xl rounded-full font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Kontakt aufnehmen
              </Link>
            </div>
            
            {/* Zusätzliche Info */}
            <div className="mt-16 text-neutral-700">
              <p className="text-lg">
                Wir bringen Museen, Bildung und moderne Medien zusammen
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}