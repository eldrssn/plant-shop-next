import { ORDER_KEY } from '@/common/constants';
import {
  DEFAULT_TYPE,
  ORDERS,
  PLANT_SIZE_RANGES,
  POT_SIZE_RANGES,
  SEARCH_FIELDS,
} from './constants';
import { FeatureKeysGenerator, ResultType } from './types';
import { SearchParams } from '../types';
import { toArray } from '../utils';

export const generateHeightFilter = (value: string[]) =>
  value.map((el) => {
    const range = PLANT_SIZE_RANGES[el];
    return {
      productType: 'plants',
      'variants.size': { $elemMatch: { $gte: range.$gte, $lt: range.$lt } },
    };
  });

export const generatePotSizeFilter = (value: string[]) =>
  value.map((el) => ({
    productType: 'pots',
    'variants.size': {
      $gte: POT_SIZE_RANGES[el].$gte,
      $lt: POT_SIZE_RANGES[el].$lt,
    },
  }));

export const generateColorFilter = (value: string[]) =>
  value.map((el) => ({
    'variants.color': { $elemMatch: { name: el } },
  }));

export const generateProductTypeFilter = (value: string[]) =>
  value.map((el) => ({ productType: el }));

export const generateSearchFilter = (
  value: string[],
  fields: string[] = SEARCH_FIELDS
) => {
  const regex = new RegExp(value[0], 'i');
  return fields.map((field) => ({ [field]: { $regex: regex } }));
};

const featureKeysGenerator: FeatureKeysGenerator = {
  height: generateHeightFilter,
  color: generateColorFilter,
  potSize: generatePotSizeFilter,
  type: generateProductTypeFilter,
  search: generateSearchFilter,
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

export const getFilters = (obj: SearchParams) => {
  const result: ResultType = {};

  for (const key in obj) {
    if (key !== ORDER_KEY) {
      result[getFilterKey(key)] = transformValue(key, obj[key]);
    }
  }

  return result;
};

export const getOrder = (key?: string | string[]) => {
  return key && !Array.isArray(key) ? ORDERS[key] : {};
};

export const getSearchParamsFilters = (value?: string | string[]) => {
  if (!value) {
    return {};
  }
  const result = { $or: [{ productType: DEFAULT_TYPE }] };

  const filters = toArray(value);
  filters.map((el) => result['$or'].push({ productType: el }));

  return result;
};
