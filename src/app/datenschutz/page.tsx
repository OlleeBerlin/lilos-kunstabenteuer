import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz - Lilos Kunstabenteuer",
  description: "Datenschutzerklärung von Lilos Kunstabenteuer gemäß DSGVO. Informationen zum Umgang mit Ihren personenbezogenen Daten.",
  robots: "noindex, follow",
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Datenschutzerklärung
            </h1>
            
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Informationen zum Umgang mit Ihren Daten gemäß DSGVO
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Einleitung */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                1. Datenschutz auf einen Blick
              </h2>
              
              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                  Allgemeine Hinweise
                </h3>
                <p className="text-neutral-700 mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                  personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                  Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
                <p className="text-neutral-700">
                  Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter 
                  diesem Text aufgeführten Datenschutzerklärung.
                </p>
              </div>
            </div>

            {/* Datenerfassung */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                2. Datenerfassung auf dieser Website
              </h2>
              
              <div className="bg-card-bg border border-border-color p-6 rounded-lg">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                  Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                </h3>
                <p className="text-neutral-700 mb-4">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                  Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" 
                  in dieser Datenschutzerklärung entnehmen.
                </p>
                
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 mt-6">
                  Wie erfassen wir Ihre Daten?
                </h3>
                <p className="text-neutral-700 mb-4">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                  Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
                <p className="text-neutral-700 mb-4">
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der 
                  Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten 
                  (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                </p>
                
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 mt-6">
                  Wofür nutzen wir Ihre Daten?
                </h3>
                <p className="text-neutral-700 mb-4">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website 
                  zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>
                
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 mt-6">
                  Welche Rechte haben Sie bezüglich Ihrer Daten?
                </h3>
                <p className="text-neutral-700">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger 
                  und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem 
                  ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                </p>
              </div>
            </div>

            {/* Verantwortliche Stelle */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              
              <div className="bg-card-bg border border-border-color p-6 rounded-lg">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                  Datenschutz
                </h3>
                <p className="text-neutral-700 mb-4">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                  Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den 
                  gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
                <p className="text-neutral-700 mb-4">
                  Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. 
                  Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. 
                  Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir 
                  sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                </p>
                <p className="text-neutral-700">
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der 
                  Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz 
                  der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                </p>
              </div>
            </div>

            {/* Datenerfassung Website */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                4. Datenerfassung auf dieser Website
              </h2>
              
              <div className="bg-card-bg border border-border-color p-6 rounded-lg">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                  Server-Log-Dateien
                </h3>
                <p className="text-neutral-700 mb-4">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so 
                  genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc pl-6 text-neutral-700 mb-4">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="text-neutral-700">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                </p>
              </div>
            </div>

            {/* Kontaktformular */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                5. Kontaktformular
              </h2>
              
              <div className="bg-card-bg border border-border-color p-6 rounded-lg">
                <p className="text-neutral-700 mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
                  aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
                  zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
                <p className="text-neutral-700 mb-4">
                  <strong>Rechtsgrundlage:</strong> Die Verarbeitung dieser Daten erfolgt auf Grundlage 
                  von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags 
                  zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
                </p>
                <p className="text-neutral-700 mb-4">
                  <strong>Speicherdauer:</strong> Die von Ihnen im Kontaktformular eingegebenen Daten 
                  verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur 
                  Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach 
                  abgeschlossener Bearbeitung Ihrer Anfrage).
                </p>
                <p className="text-neutral-700">
                  Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                6. Social Media
              </h2>
              
              <div className="bg-card-bg border border-border-color p-6 rounded-lg">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                  Instagram
                </h3>
                <p className="text-neutral-700 mb-4">
                  Auf unseren Seiten sind Plugins des sozialen Netzwerks Instagram eingebunden. 
                  Anbieter ist die Instagram Inc., 1601 Willow Road, Menlo Park, CA 94025, USA.
                </p>
                <p className="text-neutral-700 mb-4">
                  Wenn Sie eine unserer mit einem Instagram-Plugin ausgestatteten Seiten besuchen, 
                  wird eine direkte Verbindung zwischen Ihrem Browser und dem Instagram-Server 
                  hergestellt. Instagram erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse 
                  unsere Seite besucht haben.
                </p>
                <p className="text-neutral-700 mb-6">
                  Wenn Sie die Instagram-Buttons anklicken, während Sie in Ihrem Instagram-Account 
                  eingeloggt sind, können Sie die Inhalte unserer Seiten mit Ihrem Instagram-Profil 
                  verlinken. Dadurch kann Instagram den Besuch unserer Seiten Ihrem Benutzerkonto 
                  zuordnen.
                </p>
                
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                  YouTube
                </h3>
                <p className="text-neutral-700 mb-4">
                  Unsere Website nutzt Plugins der von Google betriebenen Seite YouTube. 
                  Betreiber der Seiten ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA.
                </p>
                <p className="text-neutral-700">
                  Wenn Sie eine unserer mit einem YouTube-Plugin ausgestatteten Seiten besuchen, 
                  wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem 
                  YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                7. Cookies
              </h2>
              
              <div className="bg-card-bg border border-border-color p-6 rounded-lg">
                <p className="text-neutral-700 mb-4">
                  Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Textdateien 
                  und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend 
                  für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (dauerhafte Cookies) 
                  auf Ihrem Endgerät gespeichert.
                </p>
                <p className="text-neutral-700 mb-4">
                  Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Dauerhafte 
                  Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder 
                  eine automatische Löschung durch Ihren Webbrowser erfolgt.
                </p>
                <p className="text-neutral-700 mb-4">
                  Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert 
                  werden, wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese ermöglichen 
                  uns oder Ihnen die Nutzung bestimmter Dienstleistungen des Drittunternehmens.
                </p>
                <p className="text-neutral-700">
                  Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, 
                  da bestimmte Websitefunktionen ohne diese nicht funktionieren würden. Andere Cookies 
                  dienen dazu, das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.
                </p>
              </div>
            </div>

            {/* Ihre Rechte */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                8. Ihre Rechte
              </h2>
              
              <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary">
                <p className="text-neutral-700 mb-4">
                  Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
                </p>
                <ul className="list-disc pl-6 text-neutral-700 mb-4">
                  <li><strong>Recht auf Auskunft</strong> über die verarbeiteten Daten</li>
                  <li><strong>Recht auf Berichtigung</strong> unrichtiger Daten</li>
                  <li><strong>Recht auf Löschung</strong> der Daten</li>
                  <li><strong>Recht auf Einschränkung</strong> der Verarbeitung</li>
                  <li><strong>Recht auf Datenübertragbarkeit</strong></li>
                  <li><strong>Widerspruchsrecht</strong> gegen die Verarbeitung</li>
                </ul>
                <p className="text-neutral-700">
                  Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter: 
                  <a href="mailto:info@liloskunstabenteuer.de" className="text-primary hover:underline">
                    info@liloskunstabenteuer.de
                  </a>
                </p>
              </div>
            </div>

            {/* Kontakt bei Datenschutzfragen */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                9. Kontakt bei Datenschutzfragen
              </h2>
              
              <div className="bg-card-bg border border-border-color p-6 rounded-lg">
                <p className="text-neutral-700 mb-4">
                  <strong>Verantwortlicher:</strong> Oliver Stöcker
                </p>
                <p className="text-neutral-700 mb-4">
                  <strong>E-Mail:</strong> info@liloskunstabenteuer.de
                </p>
                <p className="text-neutral-700">
                  Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden.
                </p>
              </div>
            </div>

            {/* Änderungen */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                10. Änderungen dieser Datenschutzerklärung
              </h2>
              
              <div className="bg-card-bg border border-border-color p-6 rounded-lg">
                <p className="text-neutral-700">
                  Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren, 
                  damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um 
                  Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z. B. 
                  bei der Einführung neuer Services.
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
