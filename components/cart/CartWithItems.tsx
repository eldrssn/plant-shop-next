import React, { FC } from 'react';

import { CloseButton } from '@/components/ui/buttons/CloseButton';
import { FilledActionButton } from '@/components/ui/buttons/FilledActionButton';
import { useStore } from '@/common/store/useStore';
import { CartItem } from './CartItem';

type CartWithItemsProps = {
  handleClose: () => void;
};

export const CartWithItems: FC<CartWithItemsProps> = ({ handleClose }) => {
  const { items, subTotal, deliveryPrice, total } = useStore();

  return (
    <div className="flex flex-col h-full pt-8 mx-4 md:pt-16 md:mx-12">
      <div className="flex justify-between mb-10">
        <h2 className="text-xl font-bold text-zinc-800">Your bag</h2>
        <CloseButton onClick={handleClose} />
      </div>

      <ul className="flex flex-col gap-6">
        {items.map((item) => (
          <CartItem key={item._id} item={item} />
        ))}
      </ul>

      <hr className="mt-6" />

      <div className="flex justify-between mt-6">
        <p className="text-sm font-bold">Subtotal</p>
        <p className="text-sm font-bold text-right">£{subTotal}.00</p>
      </div>

      <div className="flex justify-between mt-6">
        <p className="text-sm font-bold">Delivery </p>
        <p className="text-sm font-bold text-right">£{deliveryPrice}.00</p>
      </div>

      <hr className="mt-6" />

      <div className="flex justify-between my-6">
        <p className="text-sm font-bold">Total </p>
        <p className="font-bold text-right">£{total}.00</p>
      </div>

      <div className="sticky bottom-0 left-0 right-0 mt-auto -mx-4 bg-white md:-mx-12">
        <FilledActionButton
          onClick={handleClose}
          className="flex items-center justify-center max-w-full gap-5"
        >
          Checkout
        </FilledActionButton>
      </div>
    </div>
  );
};
