import { redirect } from 'next/navigation';

// /pricing now redirects to the main service page
export default function PricingPage() {
  redirect('/services/manicure');
}
