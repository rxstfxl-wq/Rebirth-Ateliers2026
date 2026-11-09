import React, { useState } from 'react';
import { BrandEmblem } from '../components/BrandLogo';
import { Check, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#F2EFE9] text-[#1A1A1A] pt-28 pb-20 selection:bg-[#E1E724] selection:text-[#1A1A1A]">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 space-y-12">
        {/* ─────────────────────────────────────────────────────────────
            HEADER WITH CONCRETE/PAPER TEXTURE & EMBLEM (PANEL 05)
            Left: CONTACT / "LET'S CREATE, COLLABORATE OR CONNECT."
            Right: Rebirth Butterfly Emblem
            ───────────────────────────────────────────────────────────── */}
        <div className="relative p-8 sm:p-12 bg-neutral-200/80 border border-[#1A1A1A]/10 overflow-hidden shadow-sm">
          {/* Subtle concrete grain noise overlay */}
          <div className="absolute inset-0 opacity-15 mix-blend-multiply pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" />
                <feColorMatrix type="saturate" values="0" />
              </filter>
              <rect width="100%" height="100%" filter="url(#noise)" />
            </svg>
          </div>

          <div className="relative z-10 flex items-start justify-between gap-6">
            <div className="space-y-1">
              <h1 className="font-anton text-6xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-[#1A1A1A] leading-none">
                CONTACT
              </h1>
              <p className="font-bebas text-lg sm:text-xl tracking-[0.2em] text-neutral-600 uppercase">
                LET'S CREATE, COLLABORATE
                <br />
                OR CONNECT.
              </p>
            </div>

            <div className="shrink-0 pt-2">
              <BrandEmblem className="w-16 h-20 text-[#1A1A1A]" />
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            MINIMAL FORM (PANEL 05 WIREFRAME)
            Underline fields: NAME *, EMAIL *, SUBJECT, MESSAGE *
            Solid Black Action: SEND MESSAGE ->
            ───────────────────────────────────────────────────────────── */}
        <div className="py-2">
          {submitted ? (
            <div className="p-10 bg-white border border-[#1A1A1A]/15 text-center space-y-4 animate-in fade-in">
              <div className="w-12 h-12 bg-[#1A1A1A] text-[#E1E724] mx-auto flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-anton text-3xl uppercase tracking-wide text-[#1A1A1A]">
                MESSAGE TRANSMITTED
              </h3>
              <p className="font-mono text-xs text-neutral-600 max-w-sm mx-auto">
                Thank you for your dispatch. Our Cape Town atelier team will review and reply directly via email.
              </p>
              <button
                onClick={() => {
                  setFormState({ name: '', email: '', subject: '', message: '' });
                  setSubmitted(false);
                }}
                className="mt-4 px-6 py-2 border border-[#1A1A1A] font-bebas text-sm tracking-wider uppercase hover:bg-[#1A1A1A] hover:text-white transition-colors cursor-pointer"
              >
                NEW MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 font-mono text-xs">
              {/* Field 1: Name */}
              <div className="space-y-1.5">
                <label className="block text-neutral-700 tracking-wider font-bold">
                  NAME *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={e => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-transparent border-b border-[#1A1A1A]/40 pb-2.5 text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors font-sans text-sm"
                />
              </div>

              {/* Field 2: Email */}
              <div className="space-y-1.5">
                <label className="block text-neutral-700 tracking-wider font-bold">
                  EMAIL *
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={e => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-transparent border-b border-[#1A1A1A]/40 pb-2.5 text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors font-sans text-sm"
                />
              </div>

              {/* Field 3: Subject */}
              <div className="space-y-1.5">
                <label className="block text-neutral-700 tracking-wider font-bold">
                  SUBJECT
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={e => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full bg-transparent border-b border-[#1A1A1A]/40 pb-2.5 text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors font-sans text-sm"
                />
              </div>

              {/* Field 4: Message */}
              <div className="space-y-1.5">
                <label className="block text-neutral-700 tracking-wider font-bold">
                  MESSAGE *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={e => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-white/70 border border-[#1A1A1A]/30 p-3 text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors font-sans text-sm"
                />
              </div>

              {/* Solid Black Button: SEND MESSAGE -> */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#1A1A1A] text-white font-bebas text-lg tracking-[0.2em] uppercase hover:bg-[#6D6E37] transition-colors flex items-center justify-center gap-3 cursor-pointer shadow-md disabled:opacity-50"
              >
                <span>{isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}</span>
                <span>→</span>
              </button>
            </form>
          )}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            HERITAGE BASE: TABLE MOUNTAIN PANORAMA (PANEL 05)
            ───────────────────────────────────────────────────────────── */}
        <div className="pt-4 border-t border-[#1A1A1A]/10">
          <div className="aspect-[21/8] sm:aspect-[24/7] w-full bg-neutral-900 overflow-hidden border border-[#1A1A1A]/15 relative group">
            <img
              src="/assets/aistudio/image_0d728e63.png"
              alt="Table Mountain panorama, Cape Town South Africa"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-bottom grayscale contrast-125 group-hover:scale-102 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 text-[11px] font-mono text-neutral-300">
              RXSTFXL STUDIO • WOODSTOCK, CAPE TOWN, SOUTH AFRICA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
