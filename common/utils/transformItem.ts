import { Product } from '@/common/models/Product';
import { setCartId } from './setCartId';

type Props = {
  item: Product;
  choosenVariantIndex: number;
  choosenColorIndex: number;
  quantity?: number;
};

export const transformItem = ({
  item,
  choosenVariantIndex,
  choosenColorIndex,
  quantity = 1,
}: Props) => {
  const variantWithoutColor = item.variants[choosenVariantIndex];

  const variant = {
    ...variantWithoutColor,
    color: variantWithoutColor.color?.[choosenColorIndex],
  };

  return {
    ...item,
    _id: setCartId(item.url, variant),
    variant,
    quantity,
  };
};
