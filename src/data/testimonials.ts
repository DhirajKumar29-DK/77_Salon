import { TestimonialItem } from '@/types';

// Structured review placeholders ready for client-submitted feedback
export const PLACEHOLDER_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'rev-1',
    clientName: 'Priya S.',
    serviceName: 'Hydra Facial & Gel Extensions',
    rating: 5,
    review:
      'The Hydra Facial left my skin luminous for days, and the attention to detail in the gel extensions was immaculate. The salon space feels truly serene and luxurious.',
    date: 'Verified Client',
    verified: true,
    image: '/images/services/facial.jpg',
  },
  {
    id: 'rev-2',
    clientName: 'Rohan M.',
    serviceName: 'Advance Hair Cut & Moroccan Hair Spa',
    rating: 5,
    review:
      'Exceptional precision on the fade and beard contouring. The Moroccan repair spa was restorative and calming. Unquestionably the best unisex salon experience in the city.',
    date: 'Verified Client',
    verified: true,
    image: '/images/services/hair-men.jpg',
  },
  {
    id: 'rev-3',
    clientName: 'Ananya K.',
    serviceName: 'Bridal Glow Facial & Ice Cream Pedicure',
    rating: 5,
    review:
      'Booked the Bridal Glow Facial before my engagement celebrations. The glow was unmistakable, and the paraffin pedicure was pure bliss. Highly recommend their bespoke care.',
    date: 'Verified Client',
    verified: true,
    image: '/images/services/bridal-facial.jpg',
  },
];
