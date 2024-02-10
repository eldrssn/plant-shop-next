import React, { FC } from 'react';
import { TItem } from '@/common/types';
import Image from 'next/image';
import { Icon } from '@/components/ui/icons/Icon';
import { CartItemQuantity } from './CartItemQuantity';

type TCartItem = {
  item: TItem;
};
export const CartItem: FC<TCartItem> = ({ item }) => (
  <li className="flex gap-5">
    <Image
      src={item.img}
      alt={`${item.title}-image`}
      width={100}
      height={100}
    />

    <div className="flex gap-5 flex-grow justify-between">
      <div className="flex flex-col justify-between gap-1 h-full">
        <a
          href="#"
          className="text-teal-700 text-sm font-bold hover:underline hover:underline-offset-2"
        >
          {item.title}
        </a>

        <p className="flex-grow text-neutral-500 text-sm">{item.description}</p>

        <button type="button">
          <Icon
            svgId="rubbish_bin"
            className="fill-neutral-500"
            width="16"
            height="16"
          />
        </button>
      </div>

      <div className="flex flex-col h-full justify-between">
        <p className="font-bold text-right text-sm">£{item.price}.00</p>
        <CartItemQuantity />
      </div>
    </div>
  </li>
);
