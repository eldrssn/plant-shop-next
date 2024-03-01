import { CarouselWrapper } from '@/modules/home/CarouselWrapper';
import { Product } from '@/models/Product';

const PopularItemsScreen = ({ items }: { items: Product[] }) => (
  <CarouselWrapper
    header="Patch’s top 20"
    description="Discover and shop our most popular plants, pots and accessories."
    items={items}
  />
);

export { PopularItemsScreen };
