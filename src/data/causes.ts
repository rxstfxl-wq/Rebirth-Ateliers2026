export interface CauseInitiative {
  id: string;
  title: string;
  category: 'Anti-Xenophobia' | 'Social Cohesion' | 'Mental Health & Counselling' | 'Youth & Creative Empowerment';
  organization: string;
  location: string;
  headline: string;
  mission: string;
  keyInitiatives: string[];
  contactResource: {
    helpline?: string;
    website?: string;
    email?: string;
    address?: string;
  };
  relevanceToRebirth: string;
  verifiedStatus: string;
}

export const CAUSES_DATA: CauseInitiative[] = [
  {
    id: 'anti-xenophobia-social-cohesion',
    title: 'A More Welcoming South Africa',
    category: 'Anti-Xenophobia',
    organization: 'Scalabrini Centre of Cape Town & Community Partners',
    location: '47 Commercial Street, Cape Town CBD, South Africa',
    headline: 'Different origins. Shared humanity. One place to call home.',
    mission: 'Active advocacy, legal protection, integration assistance, and public education confronting xenophobia and championing the safety and dignity of refugees, asylum seekers, and cross-border migrants living in Cape Town.',
    keyInitiatives: [
      'Legal and welfare advice clinics for displaced families',
      'Anti-discrimination community dialogues across Western Cape townships',
      'Language exchange and digital literacy workshops',
      'Rapid support and safe shelter navigation during neighborhood tensions'
    ],
    contactResource: {
      helpline: '+27 (0)21 465 6433',
      website: 'https://scalabrini.org.za',
      email: 'info@scalabrini.org.za',
      address: '47 Commercial St, Cape Town CBD, 8001'
    },
    relevanceToRebirth: 'Rebirth Ateliers is built on the tenet that creative culture has no borders. A portion of proceeds from Drop 01 studio sales is channeled into emergency legal aid and integration supplies.',
    verifiedStatus: 'Verified NGO Partner • Cape Town'
  },
  {
    id: 'trauma-counselling-mental-health',
    title: 'Trauma & Psycho-Social Sanctuary',
    category: 'Mental Health & Counselling',
    organization: 'Cape Mental Health & Community Solidarity Support',
    location: 'Observatory & Mitchells Plain, Cape Town',
    headline: 'Access to dignity, mental care, and confidential support without judgment.',
    mission: 'Providing accessible, trauma-informed psychological counseling, group therapy, and community support groups for vulnerable individuals and creatives enduring displacement, hostility, or economic precarity.',
    keyInitiatives: [
      'Free and sliding-scale confidential counseling sessions',
      'Trauma-informed group healing circles for cross-border residents',
      'Youth mental health first aid workshops in creative communities',
      '24-Hour crisis referral helpline navigation'
    ],
    contactResource: {
      helpline: '+27 (0)21 447 9040 (24h Referral: 0800 567 567)',
      website: 'https://capementalhealth.co.za',
      email: 'info@cmh.org.za',
      address: '22 Ivy Street, Observatory, Cape Town, 7925'
    },
    relevanceToRebirth: 'Rebirth begins within the mind. Transformation cannot occur without safe spaces where emotional and psychological burdens are acknowledged and tended to with care.',
    verifiedStatus: 'Accredited Healthcare Non-Profit'
  },
  {
    id: 'youth-creative-apprenticeship',
    title: 'Creative Atelier Apprenticeship Initiative',
    category: 'Youth & Creative Empowerment',
    organization: 'RXSTFXL Community Guild in partnership with Woodstock Open Studios',
    location: 'Woodstock & Salt River, Cape Town',
    headline: 'Equipping the next generation with tangible technical tailoring and digital media skills.',
    mission: 'Connecting aspiring South African and pan-African youth with professional garment makers, pattern engineers, analog darkrooms, and digital design studios for paid, skills-building apprenticeships.',
    keyInitiatives: [
      '6-Month hands-on garment construction and cut-and-sew internships',
      'Subsidized equipment and fabric access for independent micro-labels',
      'Portfolio review and global digital commerce mentorship',
      'Exhibition showcases at local cultural events'
    ],
    contactResource: {
      email: 'guild@rxstfxl.com',
      website: 'https://rxstfxl.com/community',
      address: 'Albert Road, Woodstock, Cape Town, 7915'
    },
    relevanceToRebirth: 'True renewal requires investing in generational longevity. We do not just make clothing—we cultivate the skilled hands that will redefine African garment design.',
    verifiedStatus: 'Studio-Operated Community Initiative'
  }
];
