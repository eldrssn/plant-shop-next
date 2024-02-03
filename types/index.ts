import { ReactNode } from 'react';

export type Children = { children: ReactNode };
export type ClassName = { className?: string };

export type TButton = Children & {
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

export type TOnClick = { onClick?: () => void };

export enum OfferPositions {
  LEFT = 'left',
  RIGHT = 'right',
}

export type TCarouselItem = {
  id: number;
  title: string;
  description?: string;
  price: number;
  isOptions: boolean;
  img: string;
};
