import { ReactNode } from 'react';

export type Children = { children: ReactNode };
export type ClassName = { className?: string };

export enum OfferPositions {
  LEFT = 'left',
  RIGHT = 'right',
}

export type SlugObject = {
  [key: string]: string[];
};

export type SearchParams = {
  [key: string]: string | string[] | undefined;
};
