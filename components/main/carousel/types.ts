import { TCarouselItem } from '@/types';

export type TCarousel = {
  carouselList: TCarouselItem[];
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
