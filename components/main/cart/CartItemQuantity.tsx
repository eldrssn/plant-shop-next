'use client';

import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Icon } from '@/components/ui/icons/Icon';

type CartItemQuantityProps = {
  quantity: number;
  changeQuantity: (quantity: number) => void;
};

export const CartItemQuantity: FC<CartItemQuantityProps> = observer(
  ({ quantity, changeQuantity }) => {
    console.log(quantity);

    const increment = () => {
      if (quantity <= 1) {
        return;
      }
      changeQuantity(quantity - 1);
    };

    const decrement = () => {
      changeQuantity(quantity + 1);
    };

    return (
      <div className="flex gap-4">
        <button type="button" className="w-6 h-6" onClick={increment}>
          <Icon svgId="minus_button" width="13" height="13" />
        </button>

        <input
          type="number"
          className="w-8 text-center text-sm"
          value={quantity}
          onChange={(event) => changeQuantity(+event.target.value)}
        />

        <button type="button" className="w-6 h-6" onClick={decrement}>
          <Icon svgId="plus_button" width="13" height="13" />
        </button>
      </div>
    );
  }
);
