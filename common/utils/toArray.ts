export const toArray = (value: string | string[]) =>
  Array.isArray(value) ? value : [value];
