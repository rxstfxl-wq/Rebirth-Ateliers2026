import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { BrandLogo, BrandEmblem } from './BrandLogo';
import { PageId } from './Header';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#F2EFE9] border-t border-white/10 selection:bg-[#E1E724] selection:text-[#1A1A1A]">
      {/* Top Banner statement */}
      <div className="border-b border-white/10 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-[11px] font-bebas tracking-[0.25em] text-[#E1E724] block mb-1">
            BRAND CREED
          </span>
          <h3 className="font-anton text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wide">
            CLOTHING FOR A HIGHER STATE.
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <BrandEmblem className="w-8 h-10 text-[#E1E724]" />
          <div className="text-left font-mono text-xs text-neutral-400">
            <div>CAPE TOWN // 2026</div>
            <div className="text-neutral-500">RXSTFXL STUDIO FOUNDRY</div>
          </div>
        </div>
      </div>

      {/* Main Grid Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Col 1 & 2: Brand Lockup & Dispatch Subscription */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <BrandLogo variant="light" size="lg" onClick={() => onNavigate('home')} />
            <p className="mt-4 font-body text-neutral-400 text-sm max-w-sm leading-relaxed">
              A clothing label exploring transformation, renewal and creative evolution. Operating between an independent fashion publication, design archive and clothing atelier.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <span className="text-xs font-bebas tracking-[0.2em] text-[#E1E724] block mb-2 uppercase">
              THE UNFOLDING DISPATCH
            </span>
            <p className="text-xs text-neutral-400 mb-3">
              Receive confidential lookbooks, release notifications, and editorial zines directly from Cape Town.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-white/5 border border-[#E1E724] text-xs font-mono text-[#E1E724]">
                <Check className="w-4 h-4" />
                <span>YOU HAVE ENTERED THE ARCHIVE. VERIFIED.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="ENTER EMAIL ADDRESS"
                  required
                  className="bg-neutral-900 border border-white/20 text-xs px-3.5 py-2.5 font-mono text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#E1E724] flex-1"
                />
                <button
                  type="submit"
                  className="bg-[#E1E724] text-[#1A1A1A] px-4 font-bebas tracking-wider text-sm flex items-center gap-1 hover:bg-white transition-colors cursor-pointer"
                >
                  <span>JOIN</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Col 3: Navigation Index */}
        <div>
          <h4 className="text-xs font-bebas tracking-[0.22em] text-neutral-400 uppercase mb-4">
            SITE MAP
          </h4>
          <ul className="flex flex-col gap-2.5 font-bebas text-lg tracking-[0.15em]">
            <li>
              <button
                onClick={() => onNavigate('home')}
                className="hover:text-[#E1E724] transition-colors cursor-pointer"
              >
                01 // HOME (LANDING)
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('store')}
                className="hover:text-[#E1E724] transition-colors cursor-pointer"
              >
                02 // STORE (CATALOGUE)
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('gallery')}
                className="hover:text-[#E1E724] transition-colors cursor-pointer"
              >
                03 // GALLERY (PORTFOLIO)
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('about')}
                className="hover:text-[#E1E724] transition-colors cursor-pointer"
              >
                04 // ABOUT ATELIERS
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('contact')}
                className="hover:text-[#E1E724] transition-colors cursor-pointer"
              >
                05 // CONTACT STUDIO
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Archival Chapters */}
        <div>
          <h4 className="text-xs font-bebas tracking-[0.22em] text-neutral-400 uppercase mb-4">
            PORTFOLIO PILLARS
          </h4>
          <ul className="flex flex-col gap-2 text-xs font-mono text-neutral-400">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#E1E724]" />
              <button onClick={() => onNavigate('gallery')} className="hover:text-white transition-colors text-left cursor-pointer">
                TALENT & CREATIVES
              </button>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-neutral-600" />
              <button onClick={() => onNavigate('gallery')} className="hover:text-white transition-colors text-left cursor-pointer">
                BRAND COLLABORATIONS
              </button>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#E1E724]" />
              <button onClick={() => onNavigate('gallery')} className="hover:text-white transition-colors text-left cursor-pointer">
                CAUSES: ANTI-XENOPHOBIA
              </button>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-neutral-600" />
              <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors text-left cursor-pointer">
                THE UNFOLDING MANIFESTO
              </button>
            </li>
          </ul>

          <div className="mt-6 pt-6 border-t border-white/10">
            <span className="text-[11px] font-bebas tracking-[0.2em] text-neutral-500 uppercase block mb-1">
              CURRENT SET
            </span>
            <span className="font-anton text-lg tracking-wide text-white">
              DROP 01 // FIRST SET
            </span>
          </div>
        </div>

        {/* Col 5: Studio Origin & Links */}
        <div>
          <h4 className="text-xs font-bebas tracking-[0.22em] text-neutral-400 uppercase mb-4">
            STUDIO ORIGIN
          </h4>
          <div className="text-xs font-mono text-neutral-400 space-y-2">
            <div>REBIRTH ATELIERS®</div>
            <div>A Division of RXSTFXL STUDIO</div>
            <div>Cape Town, Western Cape</div>
            <div>Republic of South Africa</div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-2 font-mono text-xs">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-[#E1E724] transition-colors flex items-center justify-between"
            >
              <span>INSTAGRAM</span>
              <span>↗</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="text-neutral-400 hover:text-[#E1E724] transition-colors flex items-center justify-between text-left cursor-pointer"
            >
              <span>DIRECT INQUIRIES</span>
              <span>↗</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
        <div>
          © {new Date().getFullYear()} REBIRTH ATELIERS®. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-6">
          <span>CAPE TOWN, SOUTH AFRICA</span>
          <span>·</span>
          <span>BY RXSTFXL STUDIO</span>
        </div>
      </div>
    </footer>
  );
};
