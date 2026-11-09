export interface Product {
  id: string;
  sku: string;
  name: string;
  collection: string;
  category: 'Hoodie' | 'Pants' | 'Tee' | 'Top' | 'Accessories';
  color: string;
  colorHex: string;
  sizes: string[];
  price: number; // in South African Rand (ZAR)
  inStock: boolean;
  stockCount: number;
  isHeroDropPiece?: boolean;
  shortDescription: string;
  description: string;
  details: string[];
  fabricCare: string[];
  image: string;
  secondaryImage?: string;
  editorialCrop?: string;
}

export const DROP_01_COLLECTION = {
  id: 'rebirth-01',
  code: 'REBIRTH // 01',
  title: 'FIRST SET',
  subtitle: 'A STUDY IN TRANSFORMATION',
  accentColor: '#E1E724', // Drop 01 Acid Yellow
  year: '2026/2027',
  location: 'Cape Town, South Africa',
  manifesto: 'Exploring transformation, renewal and creative evolution through raw concrete textures, high-gauge cottons, and metamorphosis-inspired silhouettes.'
};

export const PRODUCTS: Product[] = [
  {
    id: 'marble-hoodie-01',
    sku: 'RA-01-HD-001',
    name: 'Marble Hoodie',
    collection: 'REBIRTH // 01',
    category: 'Hoodie',
    color: 'Grey Marble',
    colorHex: '#B5B5B5',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 1750,
    inStock: true,
    stockCount: 14,
    isHeroDropPiece: true,
    shortDescription: 'Heavyweight 480GSM custom French Terry with artisanal marble pigment wash.',
    description: 'The definitive hero silhouette of Drop 01. Cut from ultra-dense 480GSM loopback French Terry in Cape Town. Individually treated with a hand-applied organic marble wash technique, ensuring no two garments possess identical grain. Features exaggerated dropped shoulders, double-layered hood without drawstrings, and tonal high-density butterfly emblem embroidery at the nape.',
    details: [
      '480GSM 100% combed South African cotton',
      'Artisanal hand-marble pigment wash',
      'Oversized dropped shoulder boxy cut',
      'Double-lined seamless hood construction',
      'Embroidered Rebirth moth emblem on nape',
      'Pre-shrunk and garment-softened'
    ],
    fabricCare: [
      'Machine wash cold gentle cycle (inside out)',
      'Hang dry in shade to preserve organic marble pigment',
      'Do not bleach or tumble dry',
      'Cool iron inside out if needed'
    ],
    image: '/Shop content/rebirth2026/Rebirth 02 - Hood.jpg',
  },
  {
    id: 'marble-sweatpants-01',
    sku: 'RA-01-PT-002',
    name: 'Marble Sweatpants',
    collection: 'REBIRTH // 01',
    category: 'Pants',
    color: 'Grey Marble',
    colorHex: '#B5B5B5',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 1650,
    inStock: true,
    stockCount: 18,
    isHeroDropPiece: true,
    shortDescription: 'Relaxed taper sweatpants with articulated knee darting and elasticated cuff.',
    description: 'Designed as the harmonic counterpart to the Marble Hoodie. Crafted from custom 480GSM cotton with internal encaged drawstrings, deep welted side pockets, and a zippered rear archival pocket. Subtle darting at the knee allows fluid, natural movement without bagging out.',
    details: [
      '480GSM combed heavyweight loopback terry',
      'Elasticated waistband with dipped cotton drawcord',
      'Concealed matte black YKK zipper back pocket',
      'Articulated knee seams for anatomical drape',
      'Tonal Rebirth emblem micro-screenprint on calf'
    ],
    fabricCare: [
      'Machine wash cold gentle cycle',
      'Dry flat in shade',
      'Do not dry clean'
    ],
    image: '/Shop content/rebirth2026/Rebirth 02 - Joggers.jpg',
  },
  {
    id: 'rebirth-hoodie-black',
    sku: 'RA-01-HD-003',
    name: 'Rebirth Hoodie',
    collection: 'REBIRTH // 01',
    category: 'Hoodie',
    color: 'Charcoal Black',
    colorHex: '#1A1A1A',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 1750,
    inStock: true,
    stockCount: 8,
    isHeroDropPiece: true,
    shortDescription: 'Deep black silhouette with brutalist Gothic "REBIRTH ATELIERS" chest embroidery.',
    description: 'A study in raw monochrome presence. Saturated in jet charcoal dye, featuring tactile Gothic brand lettering across the chest paired with the Rebirth butterfly emblem. Designed for structured drape and insulating warmth during Cape Town winter winds.',
    details: [
      '500GSM ultra-dense organic cotton fleece',
      'High-tactile raised white thread embroidery',
      'Ribbed side gusset panels for extended flexibility',
      'Reinforced bar-tack stitching on kangaroo pocket'
    ],
    fabricCare: [
      'Machine wash inside out cold',
      'Do not iron directly over embroidery',
      'Lay flat to dry'
    ],
    image: '/Shop content/rebirth2025/Rebirth 01 - Hood.jpg',
  },
  {
    id: 'ateliers-sweatpants-black',
    sku: 'RA-01-PT-004',
    name: 'Ateliers Sweatpants',
    collection: 'REBIRTH // 01',
    category: 'Pants',
    color: 'Black / Acid Yellow',
    colorHex: '#1A1A1A',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 1650,
    inStock: true,
    stockCount: 11,
    isHeroDropPiece: true,
    shortDescription: 'Heavyweight black sweatpants with Drop 01 signature acid yellow vertical racing stripe.',
    description: 'Featuring the signature Drop 01 acid yellow contrast racing stripe down the left leg. Represents the sudden metamorphosis from dark chrysalis into luminous renewal. Built with deep side pockets and custom engraved aglets.',
    details: [
      '480GSM heavyweight loopback cotton',
      'Drop 01 Acid Yellow contrast engineered side ribbon',
      'Heavy ribbed ankle cuffs with stretch memory',
      'Embossed matte aglets and eyelets'
    ],
    fabricCare: [
      'Wash cold with dark garments',
      'Do not tumble dry'
    ],
    image: '/Shop content/rebirth2025/Rebirth 01 - Sweats Joggers.jpg',
  },
  {
    id: 'rebirth-01-shirt',
    sku: 'RA-01-SH-005',
    name: 'Rebirth 01 Shirt',
    collection: 'REBIRTH // 01',
    category: 'Tee',
    color: 'Charcoal Black',
    colorHex: '#1A1A1A',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 850,
    inStock: true,
    stockCount: 20,
    shortDescription: 'Heavyweight boxy cotton tee with tonal Rebirth emblem embroidery.',
    description: 'A foundation silhouette crafted from 280GSM dense combed South African cotton. Built with exaggerated dropped shoulders, tight mock-rib collar, and tonal Rebirth butterfly chest embroidery.',
    details: [
      '280GSM 100% combed South African cotton',
      'Boxy drop-shoulder streetwear cut',
      'Thick 1.25" seamless rib collar',
      'Tonal high-density emblem embroidery',
      'Cape Town atelier origin tag'
    ],
    fabricCare: [
      'Machine wash cold gentle cycle (inside out)',
      'Hang dry in shade',
      'Do not bleach or tumble dry'
    ],
    image: '/Shop content/rebirth2025/Rebirth 01 - Shirt.jpg',
  },
  {
    id: 'rebirth-01-beanie',
    sku: 'RA-01-BN-006',
    name: 'Rebirth 01 Beanie',
    collection: 'REBIRTH // 01',
    category: 'Accessories',
    color: 'Charcoal Black',
    colorHex: '#1A1A1A',
    sizes: ['One Size'],
    price: 550,
    inStock: true,
    stockCount: 30,
    shortDescription: '100% South African Merino wool ribbed watch cap with metal emblem pin.',
    description: 'Spun from fine South African Merino wool in the Karoo. Traditional 7-gauge fisherman rib knit featuring a detachable brushed antique nickel butterfly emblem badge.',
    details: [
      '100% ethically sourced Karoo Merino wool',
      'Traditional 7-gauge fisherman rib knit',
      'Detachable solid metal emblem pin',
      'Fold-over cuff with woven atelier label'
    ],
    fabricCare: [
      'Hand wash in tepid water with wool detergent',
      'Reshape and dry flat'
    ],
    image: '/Shop content/rebirth2025/Rebirth 01 - Beanie.jpg',
  },
  {
    id: 'rebirth-02-bag-black',
    sku: 'RA-02-BG-007',
    name: 'Rebirth 02 Bag — Black',
    collection: 'REBIRTH // 02',
    category: 'Accessories',
    color: 'Black',
    colorHex: '#1A1A1A',
    sizes: ['One Size'],
    price: 950,
    inStock: true,
    stockCount: 15,
    shortDescription: 'Heavyweight architectural studio utility bag with reinforced modular webbing.',
    description: 'Designed as the definitive carrying vessel for RXSTFXL STUDIO. Cut from ultra-durable heavy cotton canvas in deep black with matte hardware, internal laptop partition, and embossed Rebirth emblem patch.',
    details: [
      '18oz heavy industrial cotton canvas',
      'Reinforced tubular webbing shoulder and hand straps',
      'Matte black metal hardware and YKK zippered closure',
      'Internal 16" laptop sleeve and key tether',
      'Silk-screened Cape Town coordinates'
    ],
    fabricCare: [
      'Spot clean with cold water and mild soap',
      'Air dry naturally'
    ],
    image: '/Shop content/rebirth2026/Rebirth 02 - Bag Black.jpg',
  },
  {
    id: 'rebirth-02-bag-bone',
    sku: 'RA-02-BG-008',
    name: 'Rebirth 02 Bag — Bone',
    collection: 'REBIRTH // 02',
    category: 'Accessories',
    color: 'Bone',
    colorHex: '#EAE6DF',
    sizes: ['One Size'],
    price: 950,
    inStock: true,
    stockCount: 15,
    shortDescription: 'Raw bone cotton canvas utility bag with tonal webbing and interior organizer.',
    description: 'The natural unbleached companion to the Rebirth 02 Bag. Showcases the organic grain of untreated South African cotton with contrasting black webbing and archival studio typography.',
    details: [
      '18oz unbleached raw natural cotton canvas',
      'High-tensile industrial contrast webbing',
      'Matte black hardware and secure zip closure',
      'Padded internal device divider',
      'Handcrafted in Woodstock, Cape Town'
    ],
    fabricCare: [
      'Spot clean with gentle cold water',
      'Do not machine wash'
    ],
    image: '/Shop content/rebirth2026/Rebirth 02 - Bag Bone.jpg',
  }
];
