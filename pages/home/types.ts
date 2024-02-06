import { OfferPositions, TCarouselItem } from '@/common/types';

export type TCarouselWrapper = {
  header: string;
  description: string;
  carouselList: TCarouselItem[];
};

export type TAdItem = {
  title: string;
  description: string;
  buttonText: string;
  href?: string;
  image: string;
  position: OfferPositions;
  id: number;
};

export type TAdsScreen = {
  ads: TAdItem[];
};

export type TDetail = {
  icon: string;
  id: number;
  title: string;
  descriptions: string[];
};

export type TPromiseItem = {
  label: string;
  title: string;
  desciption: string;
  image: string;
  id: number;
};
