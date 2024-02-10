import React, { useState } from 'react';
import { Icon } from '@/components/ui/icons/Icon';

export const CartItemQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const decrement = () => {
    if (quantity <= 1) {
      return;
    }
    setQuantity((quantity) => quantity - 1);
  };

  const increment = () => {
    setQuantity((quantity) => quantity + 1);
  };

  return (
    <div className="flex gap-4">
      <button type="button" className="w-6 h-6" onClick={decrement}>
        <Icon svgId="minus_button" width="13" height="13" />
      </button>

      <input
        type="number"
        className="w-8 text-center text-sm"
        value={quantity}
        onChange={(event) => setQuantity(+event.target.value)}
      />

      <button type="button" className="w-6 h-6" onClick={increment}>
        <Icon svgId="plus_button" width="13" height="13" />
      </button>
    </div>
  );
};
