import { FC } from 'react';
import { CarouselWrapper } from '@/modules/home-page/CarouselWrapper';
import { CarouselScreenProps } from './types';

const PopularItemsScreen: FC<CarouselScreenProps> = ({ items }) => (
  <CarouselWrapper
    header="Patch’s top 20"
    description="Discover and shop our most popular plants, pots and accessories."
    items={items}
  />
);

export { PopularItemsScreen };
