import React, { useState, useEffect } from 'react';
import { ShoppingBag, Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { BrandLogo, BrandEmblem } from './BrandLogo';
import { useCart } from '../context/CartContext';
import { soundscape } from '../utils/audio';

export type PageId = 'home' | 'store' | 'gallery' | 'about' | 'contact';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  variant?: 'light' | 'dark' | 'auto';
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  variant = 'auto'
}) => {
  const { totalCount, setIsDrawerOpen } = useCart();
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = async () => {
    const active = await soundscape.toggle();
    setIsAudioActive(active);
  };

  // Determine dark or light theme based on current page and scroll state
  const isDarkHero = currentPage === 'home' && !isScrolled;
  const headerTheme = isDarkHero || variant === 'dark' ? 'dark' : 'light';

  const navLinks: { id: PageId; label: string; tag: string }[] = [
    { id: 'store', label: 'SHOP', tag: 'DROP 01' },
    { id: 'gallery', label: 'GALLERY', tag: 'ARCHIVE' },
    { id: 'about', label: 'ABOUT', tag: 'PHILOSOPHY' },
    { id: 'contact', label: 'CONTACT', tag: 'STUDIO' }
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          headerTheme === 'dark'
            ? 'bg-[#1A1A1A]/90 text-[#F2EFE9] border-b border-white/10 backdrop-blur-md'
            : 'bg-[#F2EFE9]/95 text-[#1A1A1A] border-b border-[#1A1A1A]/10 backdrop-blur-md'
        } ${isScrolled ? 'py-3' : 'py-5'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <div className="shrink-0 flex items-center">
            <BrandLogo
              variant={headerTheme === 'dark' ? 'light' : 'dark'}
              size="md"
              onClick={() => handleNavClick('home')}
            />
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map(link => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative font-bebas text-lg lg:text-xl tracking-[0.18em] uppercase transition-colors py-1 group whitespace-nowrap cursor-pointer ${
                    isActive
                      ? headerTheme === 'dark'
                        ? 'text-[#E1E724]'
                        : 'text-[#1A1A1A] font-bold'
                      : headerTheme === 'dark'
                      ? 'text-neutral-400 hover:text-white'
                      : 'text-neutral-500 hover:text-[#1A1A1A]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all ${
                        headerTheme === 'dark' ? 'bg-[#E1E724]' : 'bg-[#1A1A1A]'
                      }`}
                    />
                  )}
                  <span
                    className={`absolute -top-1 -right-2 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity ${
                      headerTheme === 'dark' ? 'bg-[#E1E724]' : 'bg-[#1A1A1A]'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Soundscape + Bag + Mobile Menu) */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Ambient Soundscape Toggle */}
            <button
              onClick={handleAudioToggle}
              title={isAudioActive ? 'Mute ambient soundscape' : 'Play ambient soundscape'}
              className={`p-2 transition-all rounded-none border border-transparent hover:border-current flex items-center gap-1.5 text-xs font-bebas tracking-widest cursor-pointer ${
                isAudioActive
                  ? headerTheme === 'dark'
                    ? 'text-[#E1E724] border-[#E1E724]/40 bg-[#E1E724]/10'
                    : 'text-[#1A1A1A] border-[#1A1A1A]/30 bg-[#1A1A1A]/5'
                  : 'text-neutral-400 hover:text-current'
              }`}
            >
              {isAudioActive ? (
                <>
                  <Volume2 className="w-4 h-4 animate-pulse" />
                  <span className="hidden xl:inline text-[11px]">AMBIENT: ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 opacity-70" />
                  <span className="hidden xl:inline text-[11px]">SOUND</span>
                </>
              )}
            </button>

            {/* Shopping Bag Trigger */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className={`flex items-center gap-2 px-3 py-1.5 transition-all border cursor-pointer ${
                headerTheme === 'dark'
                  ? 'border-white/20 hover:border-[#E1E724] hover:text-[#E1E724]'
                  : 'border-[#1A1A1A]/30 hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F2EFE9]'
              }`}
              aria-label="Open shopping bag"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="font-bebas text-sm sm:text-base tracking-[0.15em]">
                BAG
              </span>
              <span
                className={`font-mono text-xs px-1.5 py-0.2 ${
                  totalCount > 0
                    ? headerTheme === 'dark'
                      ? 'bg-[#E1E724] text-[#1A1A1A] font-bold'
                      : 'bg-[#1A1A1A] text-[#F2EFE9] font-bold'
                    : 'opacity-50'
                }`}
              >
                {totalCount}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-current hover:opacity-70 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile navigation overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#1A1A1A] text-[#F2EFE9] flex flex-col justify-between p-6 pt-24 md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-6 mt-4">
            <span className="text-[11px] font-bebas tracking-[0.25em] text-[#E1E724]">
              NAVIGATION INDEX // 2026
            </span>

            {navLinks.map((link, idx) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="flex items-center justify-between text-left py-3 border-b border-white/10 group cursor-pointer"
              >
                <div>
                  <span className="text-xs font-mono text-neutral-500 mr-3">
                    0{idx + 1}
                  </span>
                  <span
                    className={`font-anton text-3xl tracking-wide uppercase ${
                      currentPage === link.id ? 'text-[#E1E724]' : 'text-[#F2EFE9]'
                    }`}
                  >
                    {link.label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bebas tracking-widest text-neutral-400">
                    {link.tag}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-[#E1E724] transition-colors" />
                </div>
              </button>
            ))}
          </div>

          <div className="pt-8 border-t border-white/15 flex flex-col gap-4 text-xs font-mono text-neutral-400">
            <div className="flex items-center justify-between">
              <span>LOCATION:</span>
              <span className="text-[#F2EFE9]">CAPE TOWN, ZA</span>
            </div>
            <div className="flex items-center justify-between">
              <span>STUDIO:</span>
              <span className="text-[#F2EFE9]">RXSTFXL STUDIO</span>
            </div>
            <div className="flex items-center justify-between">
              <span>PHILOSOPHY:</span>
              <span className="text-[#E1E724]">CLOTHING FOR A HIGHER STATE</span>
            </div>
            <div className="flex justify-center pt-2">
              <BrandEmblem className="w-6 h-7 text-[#E1E724]" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
