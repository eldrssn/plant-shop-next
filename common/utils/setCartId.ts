import { CartProductVariant } from '@/common/models/Product';

export const setCartId = (url: string, variant: CartProductVariant) =>
  `${url}-${variant.size.toString()}${variant.color?.name || ''}`;
