import type { Metadata } from "next";
import KontaktForm from './KontaktForm';

export const metadata: Metadata = {
  title: "Kontakt - Lilos Kunstabenteuer",
  description: "Kontaktieren Sie uns! Haben Sie Fragen, möchten Partner werden oder einfach nur Hallo sagen? Wir freuen uns auf Ihre Nachricht.",
  keywords: "Kontakt, Team, Partner werden, Fragen, Kooperation",
  openGraph: {
    title: "Kontakt - Lilos Kunstabenteuer",
    description: "Kontaktieren Sie uns! Wir freuen uns auf Ihre Nachricht und Fragen.",
    type: "website",
  },
};

export default function Kontakt() {
  return <KontaktForm />;
}
