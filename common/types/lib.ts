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

export type SearchParamsProps = {
  [key: string]: string | string[] | undefined;
};

export type ResultValue =
  | string
  | { $in: string[] }
  | HeightFilter
  | ColorFilter
  | PotSizeFilter
  | ProductTypeFilter
  | undefined;

export type ResultType = {
  [key: string]: ResultValue;
};

type FilterTypes =
  | FilterGenerator<HeightFilter>
  | FilterGenerator<PotSizeFilter>
  | FilterGenerator<ColorFilter>
  | FilterGenerator<ProductTypeFilter>;

export type FeatureKeysGenerator = {
  [key: string]: FilterTypes;
};

