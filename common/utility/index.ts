import { regexEmail } from '@/common/constants/regex';
import { SlugObject } from '../types';
import { CartProduct, CartProductVariant, Product } from '@/models/Product';
import { POTS_TYPE } from '../constants';

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
