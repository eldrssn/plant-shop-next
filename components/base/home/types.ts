import { TOfferItem } from '@/components/ui/OfferItem/types';

export type TOfferScreen = {
  offers: TOfferItem[];
};

export type TTrustMessage = {
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
