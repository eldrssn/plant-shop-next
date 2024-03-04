'use client';

import React, { FC } from 'react';
import { Icon } from '@/components/ui/icons/Icon';

type CartItemQuantityProps = {
  quantity: number;
  changeQuantity: (quantity: number) => void;
};

export const CartItemQuantity: FC<CartItemQuantityProps> = ({
  quantity,
  changeQuantity,
}) => {
  const handleChange = (diff: number) => () => {
    const nextQuantity = quantity + diff;
    if (nextQuantity < 1) {
      return;
    }

    changeQuantity(nextQuantity);
  };

  return (
    <div className="flex gap-4">
      <button type="button" className="w-6 h-6" onClick={handleChange(-1)}>
        <Icon svgId="minus_button" width="13" height="13" />
      </button>

      <input
        type="number"
        className="w-8 text-sm text-center"
        value={quantity}
        onChange={(event) => changeQuantity(+event.target.value)}
      />

      <button type="button" className="w-6 h-6" onClick={handleChange(1)}>
        <Icon svgId="plus_button" width="13" height="13" />
      </button>
    </div>
  );
};
