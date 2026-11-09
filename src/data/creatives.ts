export interface CreativeProfile {
  id: string;
  name: string;
  discipline: string;
  location: string;
  bio: string;
  roleInRebirth: string;
  socialHandle?: string;
  website?: string;
  tags: string[];
  quote: string;
  featuredWork: string;
}

export const CREATIVES: CreativeProfile[] = [
  {
    id: 'kgotso-molefe',
    name: 'Kgotso Molefe',
    discipline: 'Editorial & Analog Photography',
    location: 'Cape Town, South Africa',
    bio: 'Visual artist documenting the shifting architectural landscape of Woodstock, Salt River, and the Cape Flats. Working predominantly on medium format film, his portraiture captures the tension between heritage and futuristic African streetwear.',
    roleInRebirth: 'Lead campaign photographer for DROP 01 // FIRST SET editorial lookbook.',
    socialHandle: '@kgotsomolefe.photo',
    tags: ['Medium Format', 'Documentary', 'Streetwear'],
    quote: 'The lens should not merely capture light; it must witness the metamorphosis of a generation refusing to be pigeonholed.',
    featuredWork: '35mm & 120mm Monochrome Lookbook Series (Woodstock Concrete Studios)'
  },
  {
    id: 'zola-ndlovu',
    name: 'Zola Ndlovu',
    discipline: 'Pattern Engineering & Textile Sculpture',
    location: 'Cape Town & Johannesburg',
    bio: 'Textile researcher and bespoke pattern-maker specializing in zero-waste cutting and brutalist garment draping. Collaborates closely with the atelier on ergonomic joint articulation and oversized geometry.',
    roleInRebirth: 'Master pattern cutter for the Marble Hoodie and articulated Ateliers Sweatpants.',
    socialHandle: '@zolandlovu_cut',
    tags: ['Pattern Drafting', 'Zero-Waste', 'Artisanal Tailoring'],
    quote: 'Fabric is memory. Every dart and seam is a decision on how the body occupies space and claims authority.',
    featuredWork: 'Architectural Joint Articulation Patterns for Drop 01'
  },
  {
    id: 'sipho-dlamini',
    name: 'Sipho Dlamini',
    discipline: 'Modular Soundscapes & Synthesis',
    location: 'Bo-Kaap, Cape Town',
    bio: 'Electronic composer exploring indigenous Southern African rhythmic time signatures merged with cold industrial modular ambient drones. Provides runway and runway-installation sonics for avant-garde showcases.',
    roleInRebirth: 'Creator of the Rebirth Ateliers atmospheric audio identity and runway drone.',
    socialHandle: '@siphodlamini.audio',
    tags: ['Sound Design', 'Ambient', 'Modular Synthesis'],
    quote: 'Sound is invisible architecture. It primes the mind for renewal before the eyes even take in the silhouette.',
    featuredWork: 'A Study in Transformation — 20-minute generative ambient soundtrack'
  },
  {
    id: 'amara-van-wyk',
    name: 'Amara Van Wyk',
    discipline: 'Editorial Direction & Styling',
    location: 'Observatory, Cape Town',
    bio: 'Independent fashion stylist and art director championing pan-African youth aesthetics and fluid garment identities across print publications and experimental fashion films.',
    roleInRebirth: 'Casting director and editorial stylist for Rebirth Portfolio Vol. 1.',
    socialHandle: '@amaravanwyk_style',
    tags: ['Creative Direction', 'Casting', 'Editorial Styling'],
    quote: 'Streetwear in South Africa is not subculture anymore—it is the living, breathing sovereign culture.',
    featuredWork: 'The Unfolding: Visual Spreads for RXSTFXL STUDIO Archive'
  }
];
