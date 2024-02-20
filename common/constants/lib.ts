import { TSizeRanges } from '../types/lib';

export const plantSizeRanges: TSizeRanges = {
  lg: { $gte: 100, $lt: 500 },
  md: { $gte: 50, $lt: 100 },
  sm: { $gte: 15, $lt: 50 },
  xs: { $gte: 0, $lt: 15 },
};

export const potSizeRanges: TSizeRanges = {
  'pot-xxxl': { $gte: 40, $lt: 500 },
  'pot-xxl': { $gte: 30, $lt: 40 },
  'pot-xl': { $gte: 25, $lt: 30 },
  'pot-l': { $gte: 20, $lt: 25 },
  'pot-m': { $gte: 15, $lt: 20 },
  'pot-s': { $gte: 10, $lt: 15 },
  'pot-xs': { $gte: 0, $lt: 10 },
};
