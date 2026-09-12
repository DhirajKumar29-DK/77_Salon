export type GalleryCategory = 'ALL WORKS' | 'SALON ATMOSPHERE' | 'HAIR & STYLING' | 'NAIL ART & EXTENSIONS' | 'FACIAL & SKIN' | 'BRIDAL BEAUTY';

export const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[\s_]+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .trim();
};

export interface GalleryAlbum {
  slug: string;
  category: GalleryCategory;
  title: string;
  imageCount: number;
  coverImage: string;
}

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  title: string;
  imageUrl: string;
  size: 'short' | 'tall'; // For masonry layout
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // SALON ATMOSPHERE
  { id: 'sa1', category: 'SALON ATMOSPHERE', title: 'Premium Ambiance', imageUrl: '/images/brand/about_hero.jpg', size: 'short' },
  { id: 'sa2', category: 'SALON ATMOSPHERE', title: 'Luxury Setting', imageUrl: '/images/brand/contact_hero.jpg', size: 'tall' },
  { id: 'sa3', category: 'SALON ATMOSPHERE', title: 'Our Workspace', imageUrl: '/images/brand/gallery_hero.jpg', size: 'short' },
  { id: 'sa4', category: 'SALON ATMOSPHERE', title: 'Gallery Preview', imageUrl: '/images/brand/gallery_hero_new.jpg', size: 'tall' },
  { id: 'sa5', category: 'SALON ATMOSPHERE', title: 'Relaxing Environment', imageUrl: '/images/menu-bg.jpg', size: 'short' },

  // HAIR & STYLING
  { id: 'hs1', category: 'HAIR & STYLING', title: 'Precision Haircuts', imageUrl: '/images/brand/home_hero_hair.jpg', size: 'tall' },
  { id: 'hs2', category: 'HAIR & STYLING', title: 'Expert Styling', imageUrl: '/images/hero/hair.jpg', size: 'short' },
  { id: 'hs3', category: 'HAIR & STYLING', title: 'Men\'s Grooming', imageUrl: '/images/pdf/pdf_men_hair_spa_xref32_2000x1331.jpeg', size: 'short' },
  { id: 'hs4', category: 'HAIR & STYLING', title: 'Healthy Hair', imageUrl: '/images/services/hair-men.jpg', size: 'tall' },

  // NAIL ART & EXTENSIONS
  { id: 'na1', category: 'NAIL ART & EXTENSIONS', title: 'Exquisite Nails', imageUrl: '/images/brand/home_hero_nails.jpg', size: 'short' },
  { id: 'na2', category: 'NAIL ART & EXTENSIONS', title: 'Nail Details', imageUrl: '/images/hero/nails.jpg', size: 'tall' },
  { id: 'na3', category: 'NAIL ART & EXTENSIONS', title: 'Gel Polish', imageUrl: '/images/pdf/pdf_gel_polish_xref18_2000x1334.jpeg', size: 'short' },
  { id: 'na4', category: 'NAIL ART & EXTENSIONS', title: 'Manicure Masters', imageUrl: '/images/pdf/pdf_manicure_xref75_1385x2000.jpeg', size: 'tall' },
  { id: 'na5', category: 'NAIL ART & EXTENSIONS', title: 'Nail Extensions', imageUrl: '/images/pdf/pdf_nail_extension_xref22_2000x1333.jpeg', size: 'short' },
  { id: 'na6', category: 'NAIL ART & EXTENSIONS', title: 'Luxury Pedicure', imageUrl: '/images/pdf/pdf_pedicure_xref6_1500x1000.jpeg', size: 'tall' },
  { id: 'na7', category: 'NAIL ART & EXTENSIONS', title: 'Gloss Finish', imageUrl: '/images/services/gel-polish.jpg', size: 'short' },
  { id: 'na8', category: 'NAIL ART & EXTENSIONS', title: 'Classic Manicure', imageUrl: '/images/services/manicure.jpg', size: 'tall' },
  { id: 'na9', category: 'NAIL ART & EXTENSIONS', title: 'Acrylic Details', imageUrl: '/images/services/nail-extension.jpg', size: 'short' },
  { id: 'na10', category: 'NAIL ART & EXTENSIONS', title: 'Foot Care', imageUrl: '/images/services/pedicure.jpg', size: 'tall' },

  // FACIAL & SKIN
  { id: 'fs1', category: 'FACIAL & SKIN', title: 'Radiant Skin', imageUrl: '/images/hero/facial.jpg', size: 'tall' },
  { id: 'fs2', category: 'FACIAL & SKIN', title: 'Glow Treatment', imageUrl: '/images/pdf/pdf_facial_glow_xref10_2000x1143.jpeg', size: 'short' },
  { id: 'fs3', category: 'FACIAL & SKIN', title: 'Hydra Facial', imageUrl: '/images/pdf/pdf_facial_hydra_xref14_2000x996.jpeg', size: 'tall' },
  { id: 'fs4', category: 'FACIAL & SKIN', title: 'Body Waxing', imageUrl: '/images/pdf/pdf_waxing_body_care_xref83_2000x1152.jpeg', size: 'short' },
  { id: 'fs5', category: 'FACIAL & SKIN', title: 'Face Care', imageUrl: '/images/services/facial.jpg', size: 'tall' },
  { id: 'fs6', category: 'FACIAL & SKIN', title: 'Smooth Skin', imageUrl: '/images/services/waxing.jpg', size: 'short' },

  // BRIDAL BEAUTY
  { id: 'bb1', category: 'BRIDAL BEAUTY', title: 'The Perfect Bride', imageUrl: '/images/brand/home_hero_bride.jpg', size: 'short' },
  { id: 'bb2', category: 'BRIDAL BEAUTY', title: 'Bridal Glow', imageUrl: '/images/hero/bride.jpg', size: 'tall' },
  { id: 'bb3', category: 'BRIDAL BEAUTY', title: 'Pre-Wedding Prep', imageUrl: '/images/services/bridal-facial.jpg', size: 'short' },
  { id: 'bb4', category: 'BRIDAL BEAUTY', title: 'Mehendi & Feet', imageUrl: '/images/services/bride-feet.jpg', size: 'tall' },
  { id: 'bb5', category: 'BRIDAL BEAUTY', title: 'Bridal Hairdo', imageUrl: '/images/services/bride-hair.jpg', size: 'short' },
  { id: 'bb6', category: 'BRIDAL BEAUTY', title: 'Bridal Mehndi', imageUrl: '/images/services/bride-hands.jpg', size: 'tall' },
  { id: 'bb7', category: 'BRIDAL BEAUTY', title: 'Flawless Makeup', imageUrl: '/images/services/bride-makeup.jpg', size: 'short' },
  { id: 'bb8', category: 'BRIDAL BEAUTY', title: 'Indian Bride', imageUrl: '/images/services/indian-bride-hero.jpg', size: 'tall' },
];

export const getAlbums = (): GalleryAlbum[] => {
  const categories: GalleryCategory[] = [
    'SALON ATMOSPHERE',
    'HAIR & STYLING',
    'NAIL ART & EXTENSIONS',
    'FACIAL & SKIN',
    'BRIDAL BEAUTY',
  ];

  const albums: GalleryAlbum[] = [];
  categories.forEach(category => {
    const items = GALLERY_ITEMS.filter(item => item.category === category);
    if (items.length > 0) {
      albums.push({
        slug: slugify(category),
        category: category,
        title: category,
        imageCount: items.length,
        coverImage: items[0].imageUrl,
      });
    }
  });

  return albums;
};
