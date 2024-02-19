import { heightRanges } from '../constants/lib';
import { ResultType, SearchParamsProps } from '../types/lib';

const isHeightFilter = (key: string) => key.toLowerCase() === 'height';

export function generateHeightFilter(heightFilters: string | string[]) {
  const filters = Array.isArray(heightFilters)
    ? heightFilters
    : [heightFilters];

  return filters.map((size) => {
    const range = heightRanges[size];
    return {
      'variants.size': { $elemMatch: { $gte: range.$gte, $lt: range.$lt } },
    };
  });
}

function transformValue(key: string, value?: string | string[]) {
  if (isHeightFilter(key) && value) {
    return generateHeightFilter(value);
  }

  if (Array.isArray(value)) {
    return { $in: value };
  } else {
    return value;
  }
}

export function transformObject(obj: SearchParamsProps) {
  const result: ResultType = {};

  for (const key in obj) {
    const transformedValue = transformValue(key, obj[key]);
    result[isHeightFilter(key) ? '$or' : `details.${key}`] = transformedValue;
  }

  return result;
}
