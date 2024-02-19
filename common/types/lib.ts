type VariantsSizePicker = {
  'variants.size': { $elemMatch: { $gte: number; $lt: number } };
};

export type SearchParamsProps = {
  [key: string]: string | string[] | undefined;
};

export type ResultValue =
  | string
  | { $in: string[] }
  | VariantsSizePicker
  | VariantsSizePicker[]
  | undefined;

export type ResultType = {
  [key: string]: ResultValue;
};

export type THightRanges = Record<string, Record<string, number>>;
