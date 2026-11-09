export interface BrandCollaboration {
  id: string;
  name: string;
  type: string;
  year: string;
  description: string;
  scope: string;
  status: 'Archival' | 'Ongoing' | 'Upcoming Capsule';
  linkText?: string;
  linkUrl?: string;
}

export const BRANDS_DATA: BrandCollaboration[] = [
  {
    id: 'rxstfxl-studio',
    name: 'RXSTFXL STUDIO',
    type: 'Parent Design Lab & Architectural Foundry',
    year: '2024–Present',
    description: 'The creative incubator and parent entity of Rebirth Ateliers. Based in Cape Town, RXSTFXL operates across architectural spatial design, visual identity, typography, and experimental apparel systems.',
    scope: 'Brand identity, digital experience architecture, textile engineering, and creative direction.',
    status: 'Ongoing',
    linkText: 'Studio Archive',
    linkUrl: '#'
  },
  {
    id: 'table-mountain-granite-lab',
    name: 'Table Mountain Mineral Dye Lab',
    type: 'Artisanal Dye & Pigment Workshop',
    year: '2026',
    description: 'Bespoke natural mineral extraction workshop in the Western Cape. Collaborated on the proprietary sediment washing technique that created the organic grey marble pattern for Drop 01 garments.',
    scope: 'Pigment research, non-toxic mineral dyes, and water-recirculation wash protocols.',
    status: 'Ongoing',
    linkText: 'Mineral Study Notes',
    linkUrl: '#'
  },
  {
    id: 'cape-analog-press',
    name: 'Cape Analog Printworks',
    type: 'Independent Screenprinting & Zine Publisher',
    year: '2025–2026',
    description: 'Independent letterpress and screen studio responsible for the physical archival lookbook publications, drop packaging boxes, and hang-tags on recycled cotton paper.',
    scope: 'Packaging architecture, risograph lookbooks, and high-density textile silkscreens.',
    status: 'Archival',
    linkText: 'Print Retrospective',
    linkUrl: '#'
  }
];
