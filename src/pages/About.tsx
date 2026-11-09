import React from 'react';
import { BrandEmblem } from '../components/BrandLogo';
import { PageId } from '../components/Header';

interface AboutProps {
  onNavigate: (page: PageId) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F2EFE9] text-[#1A1A1A] pt-28 pb-20 selection:bg-[#E1E724] selection:text-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
        {/* ─────────────────────────────────────────────────────────────
            TOP SECTION (PANEL 03 WIREFRAME SPLIT)
            Left: ABOUT REBIRTH ATELIERS®
            Right: Artistic blurred moth wing visual
            ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-[#1A1A1A]/10 pb-12">
          {/* Left Title */}
          <div className="md:col-span-7 space-y-2">
            <h1 className="font-anton text-6xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-[#1A1A1A] leading-[0.9]">
              ABOUT
              <br />
              <span className="text-neutral-800">REBIRTH ATELIERS</span>
              <span className="text-[#E1E724] text-4xl sm:text-6xl align-top ml-1">®</span>
            </h1>
          </div>

          {/* Right Artistic Moth Motion Visual */}
          <div className="md:col-span-5 flex justify-end">
            <div className="w-full max-w-sm aspect-[4/3] bg-neutral-900 overflow-hidden shadow-lg border border-[#1A1A1A]/10 relative group">
              <img
                src="/assets/aistudio/image_0d728e63.png"
                alt="Motion blurred moth wing metamorphosis study"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center grayscale contrast-150 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-white/80">
                METAMORPHOSIS STUDY // WOODSTOCK
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            CORE STATEMENT (EXACT WORDING FROM PANEL 03 WIREFRAME)
            "A CLOTHING LABEL BY RXSTFXL STUDIO EXPLORING TRANSFORMATION, 
            RENEWAL AND CREATIVE EVOLUTION."
            ───────────────────────────────────────────────────────────── */}
        <div className="py-4 max-w-4xl">
          <p className="font-anton text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide text-[#1A1A1A] leading-snug">
            A CLOTHING LABEL BY RXSTFXL STUDIO EXPLORING TRANSFORMATION, RENEWAL AND CREATIVE EVOLUTION.
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            THREE PILLARS WITH VERTICAL HAIRLINE DIVIDERS (PANEL 03)
            REBIRTH / METAMORPHOSIS / PURPOSE
            ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#1A1A1A]/10">
          {/* Pillar 1 */}
          <div className="space-y-2 md:pr-6 md:border-r border-[#1A1A1A]/10">
            <h3 className="font-anton text-2xl uppercase tracking-wide text-[#1A1A1A]">
              REBIRTH
            </h3>
            <span className="font-bebas text-sm tracking-[0.18em] text-neutral-500 uppercase block">
              RENEWAL AFTER CHANGE
            </span>
            <p className="font-body text-xs text-neutral-600 leading-relaxed pt-1">
              Dismantling outdated structures to construct an intentional resurrection. Every garment marks a clean beginning.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="space-y-2 md:px-6 md:border-r border-[#1A1A1A]/10">
            <h3 className="font-anton text-2xl uppercase tracking-wide text-[#1A1A1A]">
              METAMORPHOSIS
            </h3>
            <span className="font-bebas text-sm tracking-[0.18em] text-neutral-500 uppercase block">
              GROWTH THROUGH PROCESS
            </span>
            <p className="font-body text-xs text-neutral-600 leading-relaxed pt-1">
              Transformation requires enduring pressure. We use dense 480GSM South African cotton that evolves with the wearer's life.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="space-y-2 md:pl-6">
            <h3 className="font-anton text-2xl uppercase tracking-wide text-[#1A1A1A]">
              PURPOSE
            </h3>
            <span className="font-bebas text-sm tracking-[0.18em] text-neutral-500 uppercase block">
              CLOTHING WITH INTENTION
            </span>
            <p className="font-body text-xs text-neutral-600 leading-relaxed pt-1">
              Rejecting seasonal hyper-consumption. Engineering garments designed as armor for personal ascension.
            </p>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            HERITAGE BASE: TABLE MOUNTAIN & CAPE TOWN COASTLINE (PANEL 03)
            ───────────────────────────────────────────────────────────── */}
        <div className="pt-6 border-t border-[#1A1A1A]/10 space-y-3">
          <div className="aspect-[21/9] sm:aspect-[24/8] w-full bg-neutral-900 overflow-hidden border border-[#1A1A1A]/15 relative group">
            <img
              src="/assets/aistudio/image_0d728e63.png"
              alt="Table Mountain and Cape Town panoramic coastline"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-bottom grayscale contrast-125 group-hover:scale-102 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-6 text-xs font-mono text-white flex items-center gap-3">
              <span className="text-[#E1E724] font-bold">FOUNDED IN CAPE TOWN</span>
              <span>·</span>
              <span className="text-neutral-300">WOODSTOCK ATELIER</span>
              <span>·</span>
              <span className="text-neutral-400">WESTERN CAPE, SOUTH AFRICA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
