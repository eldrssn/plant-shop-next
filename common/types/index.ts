import { ReactNode } from 'react';

export type Children = { children: ReactNode };
export type ClassName = { className?: string };

export type TActionBox = Children & {
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

export type TItem = {
  id: number;
  title: string;
  description?: string;
  price: number;
  isOptions: boolean;
  img: string;
};

export type SlugObject = {
  [key: string]: string[];
};
