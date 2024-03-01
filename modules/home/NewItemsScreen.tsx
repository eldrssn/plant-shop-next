import { FC } from 'react';

import { CarouselWrapper } from '@/modules/home/CarouselWrapper';
import { Product } from '@/models/Product';

const NewItemsScreen: FC<{ items: Product[] }> = ({ items }) => (
  <CarouselWrapper
    header="Shop the look"
    description="We’ve made it easy for you to bring your home to life with plants and pots."
    items={items}
  />
);

export { NewItemsScreen };
