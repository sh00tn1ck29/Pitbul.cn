import { VideoHero } from '../components/VideoHero';
import { Features } from '../components/Features';
import { ProductGrid } from '../components/ProductGrid';
import { Collection } from '../components/Collection';

export function HomePage() {
  return (
    <>
      <VideoHero />
      <Features />
      <ProductGrid />
      <Collection />
    </>
  );
}
