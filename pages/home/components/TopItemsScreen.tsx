import { CarouselWrapper } from '@/pages/home/components/CarouselWrapper';
import { topItems } from '@/content/carousel';

const TopItemsScreen = () => (
  <CarouselWrapper
    header="Patch’s top 20"
    description="Discover and shop our most popular plants, pots and accessories."
    carouselList={topItems}
  />
);

export { TopItemsScreen };
