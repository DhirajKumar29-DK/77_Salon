export type GenderCategory = 'women' | 'men' | 'unisex';

export type ServiceCategoryKey =
  | 'manicure'
  | 'pedicure'
  | 'facial'
  | 'gel-polish'
  | 'nail-extension'
  | 'hair-women-spa'
  | 'hair-women-styling'
  | 'hair-men-spa'
  | 'hair-men-grooming'
  | 'waxing';

export interface ServiceItem {
  id: string;
  name: string;
  slug: string;
  category: ServiceCategoryKey;
  categoryName: string;
  categorySlug: string;
  gender: GenderCategory;
  price: number;
  formattedPrice: string;
  description: string;
  details?: string;
  duration?: string;
  isSignature?: boolean;
  isFeatured?: boolean;
  tag?: string;
}

export interface CategoryInfo {
  id: ServiceCategoryKey;
  slug: string;
  name: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  gender: GenderCategory;
  image: string;
  startingPrice: number;
  highlightServices: string[];
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  serviceId: string;
  genderPreference: 'female' | 'male' | 'no-preference';
  date: string;
  timeSlot: string;
  message?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'salon' | 'hair' | 'nails' | 'facial' | 'beauty';
  imageUrl: string;
  subtitle: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  serviceName: string;
  rating: number;
  review: string;
  date: string;
  verified: boolean;
}
