import { CarouselScreen } from '@/components/main/CarouselScreen';
import { carouselTop } from '@/content/carousel';

const CarouselTopScreen = () => (
  <CarouselScreen
    header='Shop the look'
    description='We’ve made it easy for you to bring your home to life with plants and pots.'
    carouselList={carouselTop}
  />
);

export { CarouselTopScreen };
