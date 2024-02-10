import React, { FC } from 'react';
import { CloseButton } from '@/components/ui/close-button';
import { FilledActionBox } from '@/components/ui/filled-action-button';
import { CartItem } from './CartItem';
import { cartItems } from '.';

type TCartWithItems = {
  handleClose: () => void;
};
export const CartWithItems: FC<TCartWithItems> = ({ handleClose }) => (
  <>
    <div className="flex flex-col pt-8 px-4 mb-16 md:pt-16 md:px-12 h-full">
      <div className="flex justify-between mb-10">
        <h3 className="font-bold text-zinc-800 text-xl">Your bag</h3>
        <CloseButton onClick={handleClose} />
      </div>

      <ul className="flex flex-col gap-6">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      <hr className="mt-6" />

      <div className="flex justify-between mt-6">
        <p className="font-bold text-sm">Subtotal</p>
        <p className="font-bold text-right text-sm">£20.00</p>
      </div>

      <div className="flex justify-between mt-6">
        <p className="font-bold text-sm">Delivery </p>
        <p className="font-bold text-right text-sm">£20.00</p>
      </div>

      <hr className="mt-6" />

      <div className="flex justify-between mt-6">
        <p className="font-bold text-sm">Total </p>
        <p className="font-bold text-right">£20.00</p>
      </div>
    </div>

    <div className="sticky bottom-0 bg-white left-0 right-0 shadow-checkout  ">
      <FilledActionBox
        onClick={handleClose}
        className="max-w-full flex gap-5 justify-center items-center"
      >
        Checkout
      </FilledActionBox>
    </div>
  </>
);
