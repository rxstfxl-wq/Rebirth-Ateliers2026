import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Pause, Volume2, ChevronDown } from 'lucide-react';
import { BrandEmblem } from '../components/BrandLogo';
import { PRODUCTS, DROP_01_COLLECTION, Product } from '../data/products';
import { PageId } from '../components/Header';
import { soundscape } from '../utils/audio';

interface HomeProps {
  onNavigate: (page: PageId) => void;
  onOpenProduct: (product: Product) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onOpenProduct }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isPlayingReel, setIsPlayingReel] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = async () => {
    const active = await soundscape.toggle();
    setIsAudioActive(active);
  };

  const featuredProducts = PRODUCTS.filter(p => p.isHeroDropPiece).slice(0, 4);

  return (
    <div className="bg-[#1A1A1A] text-[#F2EFE9] selection:bg-[#E1E724] selection:text-[#1A1A1A]">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO (PANEL 01 WIREFRAME ALIGNMENT)
          Dark Hero, Large Butterfly Wing Macro on Right, 
          REBIRTH ATELIERS® left, "CLOTHING FOR A HIGHER STATE.",
          Outlined "SHOP THE DROP ->", and Vertical Indicator "01 \ 02 \ 03"
          ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-24 pb-8 px-6 sm:px-10 lg:px-16 border-b border-white/10">
        {/* Subtle Ambient Sound & Status Header Strip */}
        <div className="relative z-10 w-full flex items-center justify-between text-[11px] font-mono text-neutral-400 border-b border-white/10 pb-3">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[#E1E724]" />
            <span className="text-white tracking-widest uppercase">THE UNFOLDING // DROP 01</span>
            <span className="hidden sm:inline text-neutral-600">|</span>
            <span className="hidden sm:inline text-neutral-400">CAPE TOWN, SOUTH AFRICA</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={handleAudioToggle}
              className="flex items-center gap-1.5 hover:text-[#E1E724] transition-colors cursor-pointer"
            >
              <Volume2 className={`w-3.5 h-3.5 ${isAudioActive ? 'text-[#E1E724] animate-pulse' : 'text-neutral-400'}`} />
              <span className="text-[10px] tracking-widest">{isAudioActive ? 'SOUND: ON' : 'SOUNDSCAPE'}</span>
            </button>
            <span className="text-neutral-500 hidden md:inline">RXSTFXL STUDIO</span>
          </div>
        </div>

        {/* Central Hero Composition */}
        <div className="relative z-10 w-full my-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Typography & Outlined CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1">
              <h1 className="font-anton text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight uppercase leading-[0.88] text-white">
                REBIRTH
                <br />
                <span className="text-neutral-200">ATELIERS</span>
                <span className="text-[#E1E724] text-4xl sm:text-6xl align-top ml-1">®</span>
              </h1>
            </div>

            <p className="font-bebas text-lg sm:text-xl tracking-[0.22em] text-neutral-300 uppercase">
              CLOTHING FOR A HIGHER STATE.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('store')}
                className="group inline-flex items-center gap-3 px-6 py-3 border border-white text-white font-bebas text-base tracking-[0.2em] uppercase hover:bg-white hover:text-[#1A1A1A] transition-all cursor-pointer"
              >
                <span>SHOP THE DROP</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Macro Butterfly Wing Articulation */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full aspect-[4/5] max-w-md bg-neutral-900 border border-white/10 overflow-hidden shadow-2xl">
              <img
                src="/assets/aistudio/image_0d728e63.png"
                alt="Macro butterfly wing"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-left-top grayscale contrast-150 scale-125 hover:scale-130 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 text-[10px] font-mono text-neutral-400">
                SPECIMEN // LEPIDOPTERA WING VENATION
              </div>
            </div>
          </div>

          {/* Far Right: Vertical Wireframe Index Counter '01 \ 02 \ 03' */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center space-y-6 text-xs font-mono text-neutral-500">
            <span className="text-[#E1E724] font-bold">01</span>
            <span className="text-neutral-600">\</span>
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => onNavigate('store')}>02</span>
            <span className="text-neutral-600">\</span>
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => onNavigate('about')}>03</span>
          </div>
        </div>

        {/* Bottom Hero Anchor with Centered Chevron */}
        <div className="relative z-10 w-full flex items-center justify-between text-xs font-mono text-neutral-500 pt-4 border-t border-white/10">
          <div>
            <span>CHAPTER: TRANSFORMATION</span>
          </div>
          <div className="flex items-center gap-1.5 animate-bounce text-neutral-400">
            <ChevronDown className="w-4 h-4 text-[#E1E724]" />
          </div>
          <div>
            <span>AUTUMN / WINTER 2026</span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: REBIRTH // 01 (STUDY IN TRANSFORMATION)
          Matching lower half of Panel 01:
          - Asymmetrical title & video reel portrait
          - 3 square texture thumbnail crops along the base
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#8C8C8C]/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: REBIRTH // 01 Manifesto */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono text-[#E1E724] tracking-widest block uppercase font-bold">
                LOOKBOOK ARCHIVE
              </span>
              <h2 className="font-anton text-5xl sm:text-6xl uppercase tracking-tight text-white leading-none">
                REBIRTH // 01
              </h2>
              <p className="font-bebas text-2xl tracking-[0.2em] text-neutral-300 uppercase">
                A STUDY IN TRANSFORMATION.
              </p>
              <p className="font-body text-neutral-400 text-sm leading-relaxed max-w-sm">
                Documenting the shift from raw mineral textures to sculpted high-gauge South African loopback garments.
              </p>
            </div>

            {/* Right: Editorial Portrait with Circular Play Control */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/9] bg-neutral-900 border border-white/15 overflow-hidden group">
                <img
                  src="/assets/aistudio/image_0d728e63.png"
                  alt="Editorial transformation model portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-bottom grayscale contrast-125 group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlayingReel(!isPlayingReel)}
                    className="w-14 h-14 rounded-full border border-white text-white bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-[#E1E724] hover:text-[#1A1A1A] hover:border-[#E1E724] transition-all cursor-pointer shadow-lg"
                    title={isPlayingReel ? 'Pause' : 'Play'}
                  >
                    {isPlayingReel ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Texture Thumbnail Crops (as shown in wireframe Panel 01 bottom) */}
          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-6">
            <div className="aspect-[4/3] bg-neutral-900 border border-white/10 overflow-hidden relative group">
              <img
                src="/assets/aistudio/image_0d728e63.png"
                alt="Wing texture detail"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center grayscale contrast-150 group-hover:scale-110 transition-transform"
              />
              <div className="absolute bottom-2 left-2 text-[9px] font-mono bg-black/80 px-1.5 py-0.5 text-neutral-300">
                01 // LEPIDOPTERA
              </div>
            </div>

            <div className="aspect-[4/3] bg-neutral-900 border border-white/10 overflow-hidden relative group">
              <img
                src="/assets/aistudio/a_large_detailed_design_presentation_moodboard_and_064e86a5.png"
                alt="Mineral wash texture"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center grayscale contrast-150 group-hover:scale-110 transition-transform"
              />
              <div className="absolute bottom-2 left-2 text-[9px] font-mono bg-black/80 px-1.5 py-0.5 text-neutral-300">
                02 // MINERAL WASH
              </div>
            </div>

            <div className="aspect-[4/3] bg-neutral-900 border border-white/10 overflow-hidden relative group">
              <img
                src="/assets/aistudio/image_0d728e63.png"
                alt="Concrete grain texture"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-left-bottom grayscale contrast-150 group-hover:scale-110 transition-transform"
              />
              <div className="absolute bottom-2 left-2 text-[9px] font-mono bg-black/80 px-1.5 py-0.5 text-neutral-300">
                03 // RAW CONCRETE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: FEATURED COLLECTION PREVIEW
          ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#1A1A1A] text-[#F2EFE9] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-white/10">
            <div>
              <span className="text-xs font-bebas tracking-[0.25em] text-[#E1E724] uppercase block mb-1">
                FEATURED PIECES
              </span>
              <h2 className="font-anton text-4xl sm:text-5xl uppercase tracking-tight text-white leading-none">
                FIRST SET // DROP 01
              </h2>
            </div>

            <button
              onClick={() => onNavigate('store')}
              className="text-xs font-mono text-[#E1E724] hover:text-white flex items-center gap-1.5 tracking-wider cursor-pointer"
            >
              <span>VIEW FULL STORE CATALOGUE</span>
              <span>→</span>
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10">
            {featuredProducts.map(product => (
              <div
                key={product.id}
                onClick={() => onOpenProduct(product)}
                className="group bg-neutral-900/80 border border-white/10 hover:border-[#E1E724] p-4 flex flex-col justify-between cursor-pointer transition-all"
              >
                <div className="aspect-[3/4] bg-neutral-900 overflow-hidden mb-3 border border-white/5 relative flex items-center justify-center p-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-2 right-2 text-[10px] font-mono bg-black/80 px-1.5 text-[#E1E724]">
                    {product.sizes.join('/')}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-anton text-base uppercase text-white group-hover:text-[#E1E724] transition-colors leading-tight">
                      {product.name}
                    </h3>
                    <span className="font-mono text-xs text-neutral-300 tabular-nums">
                      R{product.price.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 block">
                    {product.color}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: CLOSING MANIFESTO BANNER
          ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#1A1A1A] text-center px-6 border-b border-white/10">
        <div className="max-w-3xl mx-auto space-y-4">
          <BrandEmblem className="w-12 h-14 text-[#E1E724] mx-auto mb-4" />
          <h2 className="font-anton text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
            A NEW STATE OF MIND.
          </h2>
          <p className="font-bebas text-xl sm:text-2xl tracking-[0.25em] text-[#E1E724]">
            RESURRECT. REFINE. REBIRTH.
          </p>
          <div className="pt-6">
            <button
              onClick={() => onNavigate('store')}
              className="px-8 py-3.5 bg-[#E1E724] text-[#1A1A1A] font-anton text-lg tracking-wider uppercase hover:bg-white transition-colors cursor-pointer"
            >
              SHOP THE DROP
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
