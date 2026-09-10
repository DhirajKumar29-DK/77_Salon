export interface ServiceCategoryGroup {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  startingPrice: number;
  gender: 'women' | 'men' | 'unisex';
  heroImage: string;
  badge: string;
  serviceCategoryKeys: string[];
}

export const CATEGORIES: ServiceCategoryGroup[] = [
  {
    id: 'manicure',
    slug: 'manicure',
    name: 'Manicure',
    tagline: 'Precision Nail Shaping & Hand Therapy',
    description:
      'From meticulous cuticle refinement to our indulgent Luxury Manicure, experience artisanal care designed to restore softness, contour, and natural lustre.',
    startingPrice: 300,
    gender: 'unisex',
    heroImage: '/images/services/manicure.jpg',
    badge: 'Artisanal Care',
    serviceCategoryKeys: ['manicure'],
  },
  {
    id: 'pedicure',
    slug: 'pedicure',
    name: 'Pedicure',
    tagline: 'Deep Foot Rejuvenation & Paraffin Indulgence',
    description:
      'Reawaken tired feet with botanical soaks, intensive callus removal, soothing pressure massages, and our signature Ice Cream Pedicure with paraffin therapy.',
    startingPrice: 350,
    gender: 'unisex',
    heroImage: '/images/services/pedicure.jpg',
    badge: 'Signature Treatment',
    serviceCategoryKeys: ['pedicure'],
  },
  {
    id: 'facial',
    slug: 'facial',
    name: 'Facial & Skin Health',
    tagline: 'Clinical Purity, Oxygen Infusion & Bridal Luminosity',
    description:
      'Bespoke clinical facial rituals tailored to your skin’s unique rhythm — featuring Hydra Facial, O3+ Oxygen infusions, Anti-Ageing therapy, and the revered Bridal Glow Facial.',
    startingPrice: 700,
    gender: 'unisex',
    heroImage: '/images/services/facial.jpg',
    badge: 'Couture Skincare',
    serviceCategoryKeys: ['facial'],
  },
  {
    id: 'gel-polish',
    slug: 'gel-polish',
    name: 'Gel Polish',
    tagline: 'High-Gloss Longevity, Ombre, Chrome & Cat Eye',
    description:
      'Long-lasting chip-resistant gel artistry for hands and feet. Choose from mirror chrome, velvet cat-eye, hand-painted nail art, ombre gradients, and timeless French finishes.',
    startingPrice: 800,
    gender: 'unisex',
    heroImage: '/images/services/gel-polish.jpg',
    badge: 'Editorial Nails',
    serviceCategoryKeys: ['gel-polish'],
  },
  {
    id: 'nail-extension',
    slug: 'nail-extension',
    name: 'Nail Extension',
    tagline: 'Sculpted Acrylic & Builder Gel Architecture',
    description:
      'Custom length, architectural apex sculpting, and resilient durability. Featuring full-set Acrylic & Gel extensions, gentle refills, overlays, and careful removals.',
    startingPrice: 899,
    gender: 'unisex',
    heroImage: '/images/services/nail-extension.jpg',
    badge: 'Architectural Sculpt',
    serviceCategoryKeys: ['nail-extension'],
  },
  {
    id: 'hair-women',
    slug: 'hair-women',
    name: 'Hair – Women',
    tagline: 'Moroccon Spas, Balayage, Precision Cuts & Couture Styling',
    description:
      'Elevated haircare from pure Moroccan argan restoration to bespoke precision cutting, blowout artistry, and full head Global Colour transformations.',
    startingPrice: 400,
    gender: 'women',
    heroImage: '/images/services/bridal-facial.jpg',
    badge: 'Hair Artistry',
    serviceCategoryKeys: ['hair-women-spa', 'hair-women-styling'],
  },
  {
    id: 'hair-men',
    slug: 'hair-men',
    name: 'Hair & Grooming – Men',
    tagline: 'Executive Cuts, Beard Architecture & Scalp Therapy',
    description:
      'Refined gentleman’s grooming encompassing modern scissor and taper cuts, warm-towel hot lathers, precision beard contouring, and invigorating keratin scalp treatments.',
    startingPrice: 200,
    gender: 'men',
    heroImage: '/images/services/hair-men.jpg',
    badge: 'Gentleman Grooming',
    serviceCategoryKeys: ['hair-men-spa', 'hair-men-grooming'],
  },
  {
    id: 'waxing',
    slug: 'waxing',
    name: 'Waxing & Body Care',
    tagline: 'Gentle Honey, Premium Rica & Silken Body Polishing',
    description:
      'Smooth, radiant skin with premium Italian Rica liposoluble wax, traditional soothing honey wax, precision threading, full Brazilian care, and full body polishing rituals.',
    startingPrice: 50,
    gender: 'unisex',
    heroImage: '/images/services/waxing.jpg',
    badge: 'Velvet Smoothness',
    serviceCategoryKeys: ['waxing'],
  },
];
