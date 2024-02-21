import { Orders, TSizeRanges } from '../types/lib';

export const ORDER_KEY = 'order';

export const ORDERS: Orders = {
  'price:asc': { 'variants.0.price': 1 },
  'price:desc': { 'variants.0.price': -1 },
  'created:desc': { 'details.new': -1 },
};

export const PLANT_SIZE_RANGES: TSizeRanges = {
  lg: { $gte: 100, $lt: 500 },
  md: { $gte: 50, $lt: 100 },
  sm: { $gte: 15, $lt: 50 },
  xs: { $gte: 0, $lt: 15 },
};

export const POT_SIZE_RANGES: TSizeRanges = {
  'pot-xxxl': { $gte: 40, $lt: 500 },
  'pot-xxl': { $gte: 30, $lt: 40 },
  'pot-xl': { $gte: 25, $lt: 30 },
  'pot-l': { $gte: 20, $lt: 25 },
  'pot-m': { $gte: 15, $lt: 20 },
  'pot-s': { $gte: 10, $lt: 15 },
  'pot-xs': { $gte: 0, $lt: 10 },
};
