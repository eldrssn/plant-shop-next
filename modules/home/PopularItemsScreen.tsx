import { CarouselWrapper } from '@/modules/home/CarouselWrapper';
import { popularItems } from '@/content/carousel';

const PopularItemsScreen = () => (
  <CarouselWrapper
    header="Shop the look"
    description="We’ve made it easy for you to bring your home to life with plants and pots."
    carouselList={popularItems}
  />
);

export { PopularItemsScreen };
