import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lilos Kunstabenteuer - Digitale Kunstbildung für Kinder",
  description: "Die erste deutsche Marke für digitale Kunstbildung für Kinder und Jugendliche. Entdecke mit Lilo die Welt der Kunst auf YouTube, Instagram und TikTok!",
  keywords: "Kunst, Kinder, Bildung, YouTube, Instagram, TikTok, Kunstgeschichte, kreativ, Lilo",
  authors: [{ name: "Lilos Kunstabenteuer" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Lilos Kunstabenteuer - Digitale Kunstbildung für Kinder",
    description: "Die erste deutsche Marke für digitale Kunstbildung für Kinder und Jugendliche.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
