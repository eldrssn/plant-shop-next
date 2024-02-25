'use client';

import React, { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Icon } from '@/components/ui/icons/Icon';

type CartItemQuantityProps = {
  quantity: number;
  changeQuantity: (quantity: number) => void;
};

export const CartItemQuantity: FC<CartItemQuantityProps> = observer(
  ({ quantity: defaultQuanity, changeQuantity }) => {
    const [quantity, setQuantity] = useState<number>(defaultQuanity);

    const increment = () => {
      if (quantity <= 1) {
        return;
      }
      setQuantity((quantity) => quantity - 1);
    };

    const decrement = () => {
      setQuantity((quantity) => quantity + 1);
    };

    useEffect(() => {
      changeQuantity(quantity);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantity]);

    return (
      <div className="flex gap-4">
        <button type="button" className="w-6 h-6" onClick={increment}>
          <Icon svgId="minus_button" width="13" height="13" />
        </button>

        <input
          type="number"
          className="w-8 text-center text-sm"
          value={quantity}
          onChange={(event) => setQuantity(+event.target.value)}
        />

        <button type="button" className="w-6 h-6" onClick={decrement}>
          <Icon svgId="plus_button" width="13" height="13" />
        </button>
      </div>
    );
  }
);
