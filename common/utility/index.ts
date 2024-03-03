import { regexEmail } from '@/common/constants/regex';
import { SlugObject } from '../types';
import { CartProduct, CartProductVariant, Product } from '@/models/Product';
import { MAX_TITLES_COUNT, POTS_TYPE } from '../constants';
import { Filter } from '@/models/Filters';
import { SearchParamsProps } from '../types/lib';

export const validate = (email: string) =>
  email !== '' && regexEmail.test(email);

export const getCurrentYear = () => new Date(Date.now()).getFullYear();

export const convertSlugsToObject = (slugs?: string[]): SlugObject => {
  const result: SlugObject = {};

  if (!slugs) {
    return result;
  }

  for (let i = 0; i < slugs.length; i += 2) {
    const key = slugs[i];
    const value = slugs[i + 1];

    if (result[key]) {
      result[key].push(value);
    } else {
      result[key] = [value];
    }
  }

  return result;
};

const setCartId = (url: string, variant: CartProductVariant) =>
  `${url}-${variant.size.toString()}${variant.color?.name || ''}`;

const setVariant = (
  item: Product,
  choosenVariantIndex: number,
  choosenColorIndex: number
) => {
  const variant = item.variants[choosenVariantIndex];

  return item.productType === POTS_TYPE && variant.color
    ? { ...variant, color: variant.color[choosenColorIndex] }
    : variant;
};

//TODO: to work on types
export const transformItem = ({
  item,
  choosenVariantIndex,
  choosenColorIndex,
  quantity = 1,
}: {
  item: Product;
  choosenVariantIndex: number;
  choosenColorIndex: number;
  quantity?: number;
}): CartProduct => {
  const variant = setVariant(
    item,
    choosenVariantIndex,
    choosenColorIndex
  ) as CartProductVariant;

  return {
    ...item,
    _id: setCartId(item.url, variant as CartProductVariant),
    variant,
    quantity,
  };
};

export const transformSingleItem = ({
  item,
  quantity = 1,
}: {
  item: Product;
  quantity?: number;
}) =>
  transformItem({
    choosenVariantIndex: 0,
    choosenColorIndex: 0,
    item,
    quantity,
  });

export const formatSizes = (size?: number[] | number) =>
  size && Array.isArray(size) ? size.join('-') : size;

export const generateFilterTitle = (
  filters: Filter[],
  slugs: SearchParamsProps,
  isHead?: boolean
) => {
  const connector = isHead ? ' | ' : ' - ';
  const filterTitles: string[] = [];
  console.log(slugs);

  if (slugs.search) {
    return `Search: ${slugs.search}`;
  }

  filters.forEach((filter) => {
    const paramValues = slugs[filter.slug] || [];

    filter.variants.forEach((variant) => {
      if (paramValues.includes(variant.slug)) {
        filterTitles.push(variant.title);
      }
    });
  });

  if (filterTitles.length === 0) {
    return 'All Products';
  }

  if (filterTitles.length > MAX_TITLES_COUNT) {
    return filterTitles.slice(0, MAX_TITLES_COUNT).join(connector);
  }

  return filterTitles.join(connector);
};
