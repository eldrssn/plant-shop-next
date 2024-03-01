import { Product } from '@/models/Product';

export type TCarousel = {
  items: Product[];
};

export enum Directions {
  NEXT = 'Next',
  PREV = 'Previous',
}

export type TArrowButton = {
  onClick: () => void;
  isDisabled: boolean;
  direction: Directions;
};
