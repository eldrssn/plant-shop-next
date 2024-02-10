import { TItem } from '@/common/types';

export type TCarousel = {
  carouselList: TItem[];
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
