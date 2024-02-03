import { OfferPositions } from '@/types';

export type TOfferItem = {
  title: string;
  description: string;
  buttonText: string;
  href?: string;
  image: string;
  position: OfferPositions;
  id: number;
};
