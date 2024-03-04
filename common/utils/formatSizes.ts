export const formatSizes = (size?: number[] | number) =>
  size && Array.isArray(size) ? size.join('-') : size;
