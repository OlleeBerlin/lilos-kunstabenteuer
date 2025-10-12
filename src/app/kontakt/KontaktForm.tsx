'use client';

import { useState } from 'react';

export default function KontaktForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Hier würde die echte Form-Submission stattfinden
    // z.B. mit EmailJS, Formspree, oder eigenem API Endpoint
    try {
      // Simuliere API Call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/10 via-secondary/5 to-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Hast du Fragen, möchtest Partner werden oder einfach nur Hallo sagen? 
              Wir freuen uns auf deine Nachricht!
            </p>
          </div>
        </div>
      </section>

      {/* Kontaktformular & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kontaktformular */}
            <div>
              <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-6">
                Schreib uns eine Nachricht
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Dein Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="deine@email.de"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                    Betreff *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="general">Allgemeine Anfrage</option>
                    <option value="partnership">Partnership / Kooperation</option>
                    <option value="press">Presseanfrage</option>
                    <option value="museum">Museum-Kooperation</option>
                    <option value="sponsor">Sponsoring</option>
                    <option value="other">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Deine Nachricht an uns..."
                  />
                </div>

                <div className="text-sm text-neutral-600">
                  Mit dem Absenden stimmst du unserer{' '}
                  <a href="/datenschutz" className="text-primary hover:text-primary-hover underline">
                    Datenschutzerklärung
                  </a>
                  {' '}zu.
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-secondary/10 border border-secondary rounded-lg text-secondary">
                    ✅ Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-300 rounded-lg text-red-700">
                    ❌ Ups! Da ist etwas schiefgelaufen. Bitte versuche es später erneut.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-hover disabled:bg-neutral-400 text-white font-medium px-8 py-4 rounded-full transition-colors duration-200"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>
              </form>
            </div>

            {/* Kontakt-Infos */}
            <div>
              <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-6">
                Weitere Kontaktmöglichkeiten
              </h2>

              <div className="space-y-6">
                {/* E-Mail */}
                <div className="p-6 bg-gradient-to-br from-primary/5 to-transparent rounded-lg">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">E-Mail</h3>
                  <a href="mailto:contact@liloskunstabenteuer.de" className="text-primary hover:text-primary-hover">
                    contact@liloskunstabenteuer.de
                  </a>
                </div>

                {/* Social Media */}
                <div className="p-6 bg-gradient-to-br from-secondary/5 to-transparent rounded-lg">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Social Media</h3>
                  <div className="space-y-2">
                    <a href="#" className="block text-secondary hover:text-secondary-hover">
                      @liloskunstabenteuer
                    </a>
                  </div>
                </div>

                {/* Team */}
                <div className="p-6 bg-gradient-to-br from-accent/5 to-transparent rounded-lg">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Unser Team</h3>
                  <p className="text-neutral-600">
                    Wir sind ein kleines, leidenschaftliches Team von 2-3 Personen, 
                    das sich für digitale Kunstbildung für Kinder begeistert.
                  </p>
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-8">
                <h3 className="font-heading font-semibold text-xl mb-4">Häufige Fragen</h3>
                <div className="space-y-4">
                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-700 hover:text-primary">
                      Wie schnell antwortet ihr auf Anfragen?
                    </summary>
                    <p className="mt-2 text-neutral-600 pl-4">
                      Wir bemühen uns, innerhalb von 24-48 Stunden zu antworten. 
                      Bei dringenden Anfragen schreib uns bitte direkt eine E-Mail.
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-700 hover:text-primary">
                      Kann ich Lilos Kunstabenteuer für Schulen oder Museen buchen?
                    </summary>
                    <p className="mt-2 text-neutral-600 pl-4">
                      Ja! Wir sind offen für Kooperationen mit Bildungseinrichtungen und Museen. 
                      Wähle im Formular "Museum-Kooperation" oder "Partnership".
                    </p>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer font-medium text-neutral-700 hover:text-primary">
                      Wie kann ich Sponsor werden?
                    </summary>
                    <p className="mt-2 text-neutral-600 pl-4">
                      Schön, dass du uns unterstützen möchtest! Wähle "Sponsoring" im Formular 
                      und beschreib uns deine Ideen. Wir melden uns schnellstmöglich bei dir.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
