import { notFound } from 'next/navigation';
import { getAlbums, GALLERY_ITEMS } from '@/data/gallery';
import { AlbumDetail } from '@/components/gallery/AlbumDetail';

export function generateStaticParams() {
  const albums = getAlbums();
  return albums.map((album) => ({
    slug: album.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const albums = getAlbums();
  const album = albums.find((a) => a.slug === resolvedParams.slug);

  if (!album) {
    return { title: 'Album Not Found' };
  }

  return {
    title: `${album.title} Gallery | 77 SALON`,
    description: `View our curated portfolio of ${album.title.toLowerCase()}.`,
  };
}

export default async function AlbumPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const albums = getAlbums();
  const album = albums.find((a) => a.slug === resolvedParams.slug);

  if (!album) {
    notFound();
  }

  const items = GALLERY_ITEMS.filter((item) => item.category === album.category);

  return <AlbumDetail album={album} items={items} />;
}
