import { THightRanges } from "../types/lib";

export const heightRanges: THightRanges = {
  lg: { $gte: 100, $lt: 500 },
  md: { $gte: 50, $lt: 100 },
  sm: { $gte: 15, $lt: 50 },
  xs: { $gte: 0, $lt: 15 },
};