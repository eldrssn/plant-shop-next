import { plantSizeRanges, potSizeRanges } from '../constants/lib';
import {
  FeatureKeysGenerator,
  ResultType,
  SearchParamsProps,
} from '../types/lib';

const toArray = (value: string | string[]) =>
  Array.isArray(value) ? value : [value];

export const generateHeightFilter = (value: string[]) =>
  value.map((el) => {
    const range = plantSizeRanges[el];
    return {
      productType: 'plants',
      'variants.size': { $elemMatch: { $gte: range.$gte, $lt: range.$lt } },
    };
  });

export const generatePotSizeFilter = (value: string[]) =>
  value.map((el) => ({
    productType: 'pots',
    'variants.size': {
      $gte: potSizeRanges[el].$gte,
      $lt: potSizeRanges[el].$lt,
    },
  }));

export const generateColorFilter = (value: string[]) =>
  value.map((el) => ({
    'variants.color': { $elemMatch: { name: el } },
  }));

export const generateProductTypeFilter = (value: string[]) =>
  value.map((el) => ({ productType: el }));

const featureKeysGenerator: FeatureKeysGenerator = {
  height: generateHeightFilter,
  color: generateColorFilter,
  potSize: generatePotSizeFilter,
  type: generateProductTypeFilter,
};

const transformValue = (key: string, value?: string | string[]) => {
  if (featureKeysGenerator[key] && value !== undefined) {
    const filters = toArray(value);
    return featureKeysGenerator[key](filters);
  }

  return Array.isArray(value) ? { $in: value } : value;
};

const getFilterKey = (key: string) =>
  featureKeysGenerator[key] ? '$or' : `details.${key}`;

export const transformObject = (obj: SearchParamsProps) => {
  const result: ResultType = {};

  for (const key in obj) {
    result[getFilterKey(key)] = transformValue(key, obj[key]);
  }

  return result;
};
