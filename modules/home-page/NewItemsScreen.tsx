import { FC } from 'react';

import { CarouselWrapper } from '@/modules/home-page/CarouselWrapper';
import { CarouselScreenProps } from './types';

const NewItemsScreen: FC<CarouselScreenProps> = ({ items }) => (
  <CarouselWrapper
    header="Shop the look"
    description="We’ve made it easy for you to bring your home to life with plants and pots."
    items={items}
  />
);

export { NewItemsScreen };
