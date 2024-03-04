import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import Image from 'next/image';

import { Icon } from '@/components/ui/icons/Icon';
import { ITEM_SLUG } from '@/common/constants';
import { CartProduct } from '@/common/models/Product';
import { useStore } from '@/common/store/useStore';
import { formatSizes } from '@/common/utils';
import { CartItemQuantity } from './CartItemQuantity';

type CartItemProps = {
  item: CartProduct;
};

export const CartItem: FC<CartItemProps> = observer(({ item }) => {
  const { changeQuantity, deleteItem } = useStore();

  return (
    <li className="flex gap-5">
      <Link href={`/${ITEM_SLUG}/${item.url}`}>
        <Image
          src={item.imgs[0]}
          alt={`${item.title}-image`}
          width={100}
          height={100}
          priority={true}
        />
      </Link>

      <div className="flex justify-between flex-grow gap-5">
        <div className="flex flex-col justify-between h-full gap-1">
          <Link
            href={`/${ITEM_SLUG}/${item.url}`}
            className="text-sm font-bold text-teal-700 hover:underline hover:underline-offset-2"
          >
            {item.title}
          </Link>

          <p className="flex-grow text-sm text-neutral-500">
            {formatSizes(item.variant.size)}cm {item.variant.color?.name}
          </p>

          <button type="button" onClick={() => deleteItem(item._id)}>
            <Icon
              svgId="rubbish_bin"
              className="fill-neutral-500"
              width="16"
              height="16"
            />
          </button>
        </div>

        <div className="flex flex-col justify-between h-full">
          <p className="text-sm font-bold text-right">
            £{item.variant.price}.00
          </p>
          <CartItemQuantity
            quantity={item.quantity}
            changeQuantity={(quantity: number) =>
              changeQuantity(item._id, quantity)
            }
          />
        </div>
      </div>
    </li>
  );
});
