import { Product } from '@/common/models/Product';
import { OfferPositions } from '@/common/types';

export type CarouselScreenProps = { items: Product[] };

export type TAdItem = {
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  image: string;
  position: OfferPositions;
  id: number;
};

export type TDetail = {
  icon: string;
  id: number;
  title: string;
  descriptions: string[];
};
