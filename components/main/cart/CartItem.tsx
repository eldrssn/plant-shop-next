import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import Image from 'next/image';

import { Icon } from '@/components/ui/icons/Icon';
import { ITEM_SLUG } from '@/common/constants';
import { CartProduct } from '@/models/Product';
import { useStore } from '@/common/hooks/useStore';
import { CartItemQuantity } from './CartItemQuantity';

type TCartItem = {
  item: CartProduct;
};

export const CartItem: FC<TCartItem> = observer(({ item }) => {
  const { changeQuantity, deleteItem } = useStore();

  return (
    <li className="flex gap-5">
      <Link href={`/${ITEM_SLUG}/${item.url}`}>
        <Image
          src={item.imgs[0]}
          alt={`${item.title}-image`}
          width={100}
          height={100}
        />
      </Link>

      <div className="flex gap-5 flex-grow justify-between">
        <div className="flex flex-col justify-between gap-1 h-full">
          <Link
            href={`/${ITEM_SLUG}/${item.url}`}
            className="text-teal-700 text-sm font-bold hover:underline hover:underline-offset-2"
          >
            {item.title}
          </Link>

          <p className="flex-grow text-neutral-500 text-sm">
            {item.variant.size.join('-')}cm {item.variant.color?.name}
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

        <div className="flex flex-col h-full justify-between">
          <p className="font-bold text-right text-sm">
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
