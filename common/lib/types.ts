import { SortOrder } from 'mongoose';

export type TSizeRanges = Record<string, Record<string, number>>;

export type FilterGenerator<T> = (value: string[]) => T;

export type HeightFilter = {
  productType: string;
  'variants.size': {
    $elemMatch: {
      $gte: number;
      $lt: number;
    };
  };
}[];

type ColorFilter = {
  'variants.color': {
    $elemMatch: {
      name: string;
    };
  };
}[];

type PotSizeFilter = {
  productType: string;
  'variants.size': {
    $gte: number;
    $lt: number;
  };
}[];

type ProductTypeFilter = {
  productType: string;
}[];

type SearchFilter = {
  [key: string]: { $regex: RegExp };
}[];

export type ResultValue =
  | string
  | { $in: string[] }
  | HeightFilter
  | ColorFilter
  | PotSizeFilter
  | ProductTypeFilter
  | SearchFilter
  | undefined;

export type ResultType = {
  [key: string]: ResultValue;
};

type FilterTypes =
  | FilterGenerator<HeightFilter>
  | FilterGenerator<PotSizeFilter>
  | FilterGenerator<ColorFilter>
  | FilterGenerator<ProductTypeFilter>
  | FilterGenerator<SearchFilter>;

export type FeatureKeysGenerator = {
  [key: string]: FilterTypes;
};

export type Orders = Record<string, Record<string, SortOrder>>;