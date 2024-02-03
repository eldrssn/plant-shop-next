import { CarouselScreen } from '@/components/main/CarouselScreen';
import { carouselBottom } from '@/content/carousel';

const CarouselBottomScreen = () => (
  <CarouselScreen
    header='Patch’s top 20'
    description='Discover and shop our most popular plants, pots and accessories.'
    carouselList={carouselBottom}
  />
);

export { CarouselBottomScreen };
