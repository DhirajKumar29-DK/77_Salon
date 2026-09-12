import { notFound } from 'next/navigation';
import { SERVICE_CATEGORIES } from '@/data/serviceCategories';
import { ServiceCategoryPage } from '@/components/services/ServiceCategoryPage';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return SERVICE_CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const cat = SERVICE_CATEGORIES.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `${cat.label} — ${cat.tagline} | 77 SALON`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = SERVICE_CATEGORIES.find((c) => c.slug === category);
  if (!cat) notFound();

  return (
    <div className="pt-[68px]">
      <ServiceCategoryPage initialCategory={cat.id} />
    </div>
  );
}
