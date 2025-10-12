'use client';

import { useState } from 'react';
import type { Metadata } from "next";

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'allgemein'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        type: 'allgemein'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Kontakt
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
              Hast du Fragen, möchtest Partner werden oder einfach nur Hallo sagen? 
              Wir freuen uns auf deine Nachricht!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Team Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-8">
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
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
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
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="deine@email.de"
                  />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-neutral-700 mb-2">
                    Art der Anfrage
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                  >
                    <option value="allgemein">Allgemeine Anfrage</option>
                    <option value="partnerschaft">Partnerschaft / Kooperation</option>
                    <option value="presse">Presse / Medien</option>
                    <option value="sponsoring">Sponsoring / Förderung</option>
                    <option value="technisch">Technische Frage</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                    Betreff
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="Worum geht es?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-vertical"
                    placeholder="Erzähl uns, was du auf dem Herzen hast..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-hover disabled:bg-neutral-400 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">
                      ✅ Vielen Dank! Deine Nachricht wurde erfolgreich gesendet. 
                      Wir melden uns bald bei dir zurück.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">
                      ❌ Es gab ein Problem beim Senden deiner Nachricht. 
                      Bitte versuche es erneut oder kontaktiere uns direkt per E-Mail.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Team & Contact Info */}
            <div>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-8">
                Unser Team
              </h2>
              
              <div className="space-y-8 mb-8">
                <div className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-lg">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    Projektleitung
                  </h3>
                  <p className="text-neutral-600 mb-2">
                    <strong>Name:</strong> [Name einfügen]<br />
                    <strong>E-Mail:</strong> kontakt@liloskunstabenteuer.de<br />
                    <strong>Bereich:</strong> Strategie, Kooperationen, Content
                  </p>
                  <p className="text-sm text-neutral-500">
                    Verantwortlich für die strategische Ausrichtung und Kooperationen 
                    mit Museen und Bildungseinrichtungen.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-secondary/10 to-transparent p-6 rounded-lg">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    Content & Produktion
                  </h3>
                  <p className="text-neutral-600 mb-2">
                    <strong>Name:</strong> [Name einfügen]<br />
                    <strong>E-Mail:</strong> content@liloskunstabenteuer.de<br />
                    <strong>Bereich:</strong> Videoproduktion, Social Media, Pädagogik
                  </p>
                  <p className="text-sm text-neutral-500">
                    Entwickelt altersgerechte Inhalte und koordiniert die Produktion 
                    für alle Social Media-Plattformen.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-accent/10 to-transparent p-6 rounded-lg">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    Technik & Design
                  </h3>
                  <p className="text-neutral-600 mb-2">
                    <strong>Name:</strong> [Name einfügen]<br />
                    <strong>E-Mail:</strong> tech@liloskunstabenteuer.de<br />
                    <strong>Bereich:</strong> Webentwicklung, Design, Technische Umsetzung
                  </p>
                  <p className="text-sm text-neutral-500">
                    Verantwortlich für Website, technische Infrastruktur und 
                    visuelle Gestaltung der Marke.
                  </p>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="bg-neutral-light p-6 rounded-lg">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                  Direkter Kontakt
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-neutral-600">kontakt@liloskunstabenteuer.de</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-neutral-600">Antwortzeit: 1-2 Werktage</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-neutral-600">Deutschland (Remote-First)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Häufige Fragen
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Wann startet der YouTube-Kanal?
              </h3>
              <p className="text-neutral-600">
                Unsere ersten Videos sind bereits in Produktion. Der Kanal wird 
                in den kommenden Monaten starten. Folge uns auf unseren Social Media 
                Kanälen für Updates!
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Wie kann ich Partner werden?
              </h3>
              <p className="text-neutral-600">
                Wir freuen uns über Kooperationen mit Museen, Bildungseinrichtungen 
                und Sponsoren. Kontaktiere uns über das Formular oder per E-Mail 
                für ein persönliches Gespräch.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Für welche Altersgruppe sind die Inhalte?
              </h3>
              <p className="text-neutral-600">
                Unsere Inhalte richten sich primär an Kinder und Jugendliche 
                zwischen 8 und 14 Jahren, sind aber für alle Altersgruppen interessant.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Wie oft werden neue Inhalte veröffentlicht?
              </h3>
              <p className="text-neutral-600">
                Wir planen regelmäßige Veröffentlichungen auf allen Plattformen. 
                Die genaue Frequenz wird nach dem Start bekannt gegeben.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
            Folge uns auf Social Media
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl mx-auto">
            Verpasse keine Updates und werde Teil der Lilos Kunstabenteuer Community!
          </p>
          
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-colors duration-200 flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>YouTube</span>
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full transition-colors duration-200 flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href="#"
              className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full transition-colors duration-200 flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
              <span>TikTok</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
