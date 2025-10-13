import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum - Lilos Kunstabenteuer",
  description: "Impressum und rechtliche Informationen von Lilos Kunstabenteuer gemäß § 5 TMG und § 55 RStV.",
  robots: "noindex, follow",
};

export default function Impressum() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-light to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Impressum
            </h1>
            
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Angaben gemäß § 5 TMG und § 55 RStV
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Anbieter */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                Anbieter
              </h2>
              
              <div className="bg-neutral-light p-6 rounded-lg">
                <p className="text-neutral-700 mb-2">
                  <strong>Oliver Stöcker</strong>
                </p>
                <p className="text-neutral-700 mb-2">
                  Johanna-Spyri-Weg 1a<br />
                  12205 Berlin
                </p>
                <p className="text-neutral-700 mb-2">
                  Deutschland
                </p>
              </div>
            </div>

            {/* Kontakt */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                Kontakt
              </h2>
              
              <div className="bg-neutral-light p-6 rounded-lg">
                <p className="text-neutral-700 mb-2">
                  <strong>E-Mail:</strong> info@liloskunstabenteuer.de
                </p>
                <p className="text-neutral-700">
                  <strong>Website:</strong> liloskunstabenteuer.de
                </p>
              </div>
            </div>

            {/* Verantwortlich für den Inhalt */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              
              <div className="bg-neutral-light p-6 rounded-lg">
                <p className="text-neutral-700 mb-2">
                  Oliver Stöcker
                </p>
                <p className="text-neutral-700 mb-2">
                  Johanna-Spyri-Weg 1a<br />
                  12205 Berlin
                </p>
                <p className="text-neutral-700">
                  Deutschland
                </p>
              </div>
            </div>

            {/* Streitschlichtung */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                Streitschlichtung
              </h2>
              
              <div className="bg-neutral-light p-6 rounded-lg">
                <p className="text-neutral-700 mb-4">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                
                <p className="text-neutral-700 mb-4">
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
                
                <p className="text-neutral-700">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>

            {/* Haftung für Inhalte */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                Haftung für Inhalte
              </h2>
              
              <div className="bg-neutral-light p-6 rounded-lg">
                <p className="text-neutral-700 mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen 
                  Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind 
                  wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder 
                  gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, 
                  die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                
                <p className="text-neutral-700 mb-4">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach 
                  den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung 
                  ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung 
                  möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese 
                  Inhalte umgehend entfernen.
                </p>
              </div>
            </div>

            {/* Haftung für Links */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                Haftung für Links
              </h2>
              
              <div className="bg-neutral-light p-6 rounded-lg">
                <p className="text-neutral-700 mb-4">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir 
                  keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine 
                  Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige 
                  Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden 
                  zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige 
                  Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
                
                <p className="text-neutral-700">
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne 
                  konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden 
                  von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>
            </div>

            {/* Urheberrecht */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                Urheberrecht
              </h2>
              
              <div className="bg-neutral-light p-6 rounded-lg">
                <p className="text-neutral-700 mb-4">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
                  unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
                  Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
                  bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen 
                  Gebrauch gestattet.
                </p>
                
                <p className="text-neutral-700 mb-4">
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden 
                  die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche 
                  gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam 
                  werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von 
                  Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </div>

            {/* Bildnachweis */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                Bildnachweis
              </h2>
              
              <div className="bg-neutral-light p-6 rounded-lg">
                <p className="text-neutral-700">
                  Soweit nicht anders angegeben, stammen alle verwendeten Bilder und Grafiken 
                  von Lilos Kunstabenteuer oder wurden unter freien Lizenzen (z.B. Creative Commons) 
                  erworben. Alle Rechte vorbehalten.
                </p>
              </div>
            </div>

            {/* Stand */}
            <div className="mb-12">
              <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                <p className="text-neutral-700">
                  <strong>Stand:</strong> Oktober 2025
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
