import React, { useState } from 'react';
import { CREATIVES } from '../data/creatives';
import { BRANDS_DATA } from '../data/brands';
import { CAUSES_DATA } from '../data/causes';
import { BrandEmblem } from '../components/BrandLogo';
import { ArrowRight, ChevronDown, ChevronUp, ExternalLink, Phone, Mail, MapPin } from 'lucide-react';
import { PageId } from '../components/Header';

interface GalleryProps {
  onNavigate: (page: PageId) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onNavigate }) => {
  // State for which banner drawer is actively expanded
  const [expandedSection, setExpandedSection] = useState<'talent' | 'brands' | 'causes' | null>('causes');

  const toggleSection = (section: 'talent' | 'brands' | 'causes') => {
    setExpandedSection(prev => (prev === section ? null : section));
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#F2EFE9] pt-24 pb-20 selection:bg-[#E1E724] selection:text-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-10">
        {/* ─────────────────────────────────────────────────────────────
            DARK HEADER SECTION (PANEL 04 WIREFRAME)
            Left: REBIRTH PORTFOLIO / Subtitle
            Right: Macro butterfly wing crop
            ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-white/10 pb-10">
          <div className="md:col-span-8 space-y-2">
            <h1 className="font-anton text-6xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-[0.9]">
              REBIRTH
              <br />
              PORTFOLIO
            </h1>
            <p className="font-bebas text-base sm:text-lg tracking-[0.22em] text-neutral-400 uppercase pt-1">
              A COLLECTIVE ARCHIVE OF PEOPLE, PARTNERSHIPS AND PURPOSE.
            </p>
          </div>

          <div className="md:col-span-4 flex justify-end">
            <div className="w-full max-w-[240px] aspect-[4/3] bg-neutral-900 border border-white/10 overflow-hidden relative">
              <img
                src="/assets/aistudio/image_0d728e63.png"
                alt="Butterfly wing crop detail"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-right grayscale contrast-150"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-2 text-[9px] font-mono text-neutral-400">
                ARCHIVE // VOL. 01
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            THREE WIDE HORIZONTAL PHOTOGRAPHIC BANNERS (PANEL 04)
            1. TALENT & CREATIVES ->
            2. BRANDS ->
            3. CAUSES ->
            ───────────────────────────────────────────────────────────── */}
        <div className="space-y-6">
          {/* BANNER 1: TALENT & CREATIVES */}
          <div className="border border-white/10 bg-neutral-900/60 overflow-hidden transition-all">
            <div
              onClick={() => toggleSection('talent')}
              className="relative aspect-[21/6] sm:aspect-[24/5] w-full overflow-hidden cursor-pointer group"
            >
              <img
                src="/assets/aistudio/image_0d728e63.png"
                alt="Talent and Creatives portrait banner"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center grayscale contrast-125 group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors" />

              <div className="absolute inset-0 px-8 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#E1E724] tracking-widest uppercase block mb-1">
                    SECTION 01
                  </span>
                  <h2 className="font-anton text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide text-white group-hover:text-[#E1E724] transition-colors leading-none">
                    TALENT & CREATIVES
                  </h2>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-neutral-300 hidden sm:inline">
                    4 VERIFIED PROFILES
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white group-hover:border-[#E1E724] group-hover:text-[#E1E724] transition-colors">
                    {expandedSection === 'talent' ? <ChevronUp className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                  </div>
                </div>
              </div>
            </div>

            {/* Expandable Talent Details */}
            {expandedSection === 'talent' && (
              <div className="p-8 bg-neutral-900 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-300">
                {CREATIVES.map(c => (
                  <div key={c.id} className="p-6 bg-black/50 border border-white/10 space-y-3">
                    <div className="flex justify-between items-start border-b border-white/10 pb-3">
                      <div>
                        <span className="text-[10px] font-mono text-[#E1E724] uppercase block">
                          {c.discipline}
                        </span>
                        <h4 className="font-anton text-2xl uppercase text-white">{c.name}</h4>
                        <span className="text-xs font-mono text-neutral-400">{c.location}</span>
                      </div>
                      <span className="text-xs font-mono text-neutral-400 bg-white/5 px-2 py-1">
                        {c.socialHandle}
                      </span>
                    </div>
                    <p className="font-body text-xs text-neutral-300 leading-relaxed">{c.bio}</p>
                    <blockquote className="font-script text-lg text-white bg-white/5 p-2.5 border-l-2 border-[#E1E724]">
                      "{c.quote}"
                    </blockquote>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* BANNER 2: BRANDS */}
          <div className="border border-white/10 bg-neutral-900/60 overflow-hidden transition-all">
            <div
              onClick={() => toggleSection('brands')}
              className="relative aspect-[21/6] sm:aspect-[24/5] w-full overflow-hidden cursor-pointer group"
            >
              <img
                src="/assets/aistudio/image_0d728e63.png"
                alt="Brand Collaborations landscape banner"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-bottom grayscale contrast-125 group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors" />

              <div className="absolute inset-0 px-8 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#E1E724] tracking-widest uppercase block mb-1">
                    SECTION 02
                  </span>
                  <h2 className="font-anton text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide text-white group-hover:text-[#E1E724] transition-colors leading-none">
                    BRANDS
                  </h2>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-neutral-300 hidden sm:inline">
                    3 COLLABORATIONS
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white group-hover:border-[#E1E724] group-hover:text-[#E1E724] transition-colors">
                    {expandedSection === 'brands' ? <ChevronUp className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                  </div>
                </div>
              </div>
            </div>

            {/* Expandable Brand Details */}
            {expandedSection === 'brands' && (
              <div className="p-8 bg-neutral-900 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
                {BRANDS_DATA.map(b => (
                  <div key={b.id} className="p-6 bg-black/50 border border-white/10 space-y-3">
                    <div className="flex justify-between items-start text-xs font-mono">
                      <span className="bg-[#E1E724]/20 text-[#E1E724] px-1.5 py-0.5">{b.status}</span>
                      <span className="text-neutral-400">{b.year}</span>
                    </div>
                    <h4 className="font-anton text-xl uppercase text-white">{b.name}</h4>
                    <span className="font-bebas text-xs tracking-wider text-neutral-400 block">{b.type}</span>
                    <p className="font-body text-xs text-neutral-300 leading-relaxed">{b.description}</p>
                    <div className="pt-2 border-t border-white/10 text-[11px] font-mono text-neutral-400">
                      SCOPE: {b.scope}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* BANNER 3: CAUSES (PRIORITY COMMUNITY PLATFORM) */}
          <div className="border border-white/10 bg-neutral-900/60 overflow-hidden transition-all">
            <div
              onClick={() => toggleSection('causes')}
              className="relative aspect-[21/6] sm:aspect-[24/5] w-full overflow-hidden cursor-pointer group"
            >
              <img
                src="/assets/aistudio/image_0d728e63.png"
                alt="Causes anti-xenophobia lagoon landscape banner"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-bottom grayscale contrast-125 group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors" />

              <div className="absolute inset-0 px-8 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#E1E724] tracking-widest uppercase block mb-1">
                    SECTION 03 // A MORE WELCOMING SOUTH AFRICA
                  </span>
                  <h2 className="font-anton text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide text-white group-hover:text-[#E1E724] transition-colors leading-none">
                    CAUSES
                  </h2>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#E1E724] hidden sm:inline font-bold">
                    ANTI-XENOPHOBIA ADVOCACY
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white group-hover:border-[#E1E724] group-hover:text-[#E1E724] transition-colors">
                    {expandedSection === 'causes' ? <ChevronUp className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                  </div>
                </div>
              </div>
            </div>

            {/* Expandable Causes Details */}
            {expandedSection === 'causes' && (
              <div className="p-8 bg-neutral-900 border-t border-white/10 space-y-6 animate-in fade-in duration-300">
                <div className="max-w-3xl space-y-2 border-b border-white/10 pb-4">
                  <h3 className="font-anton text-2xl uppercase tracking-wide text-[#E1E724]">
                    "DIFFERENT ORIGINS. SHARED HUMANITY. ONE PLACE TO CALL HOME."
                  </h3>
                  <p className="font-body text-xs text-neutral-300 leading-relaxed">
                    Rebirth Ateliers stands with refugees, asylum seekers, and cross-border neighbors in Cape Town. We support verified counseling, legal protection, and social cohesion initiatives.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {CAUSES_DATA.map(cause => (
                    <div key={cause.id} className="p-6 bg-black/60 border border-white/10 space-y-3">
                      <div className="flex justify-between items-start text-xs font-mono">
                        <span className="bg-[#E1E724] text-[#1A1A1A] font-bold px-1.5 py-0.5">{cause.category}</span>
                      </div>
                      <h4 className="font-anton text-xl uppercase text-white">{cause.title}</h4>
                      <p className="font-mono text-xs text-neutral-400">{cause.organization}</p>
                      <p className="font-body text-xs text-neutral-300 leading-relaxed">{cause.mission}</p>
                      {cause.contactResource.helpline && (
                        <div className="text-[11px] font-mono text-[#E1E724] pt-2 border-t border-white/10">
                          HELPLINE: {cause.contactResource.helpline}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
