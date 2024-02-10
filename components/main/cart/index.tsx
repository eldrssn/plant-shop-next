import React, { FC } from 'react';

import { WithTransition } from '@/common/hocs/WithTransition';
import { Background } from '@/components/ui/background';

import { defaultStyle, transitionStyles } from './animation';
import { EmptyCart } from './EmptyCart';
import { CartWithItems } from './CartWithItems';

type TCart = {
  handleClose: () => void;
  isOpen: boolean;
};

export const cartItems = [
  {
    id: 1,
    description: '120-130cm',
    title: 'Big Ken',
    price: 75,
    isOptions: false,
    img: '/pictures/vxnuidely9mqnh1zuwuv.webp',
  },
  {
    id: 1,
    description: '120-130cm',
    title: 'Big Ken',
    price: 75,
    isOptions: false,
    img: '/pictures/vxnuidely9mqnh1zuwuv.webp',
  },
  {
    id: 1,
    description: '120-130cm',
    title: 'Big Ken',
    price: 75,
    isOptions: false,
    img: '/pictures/vxnuidely9mqnh1zuwuv.webp',
  },
];

export const Cart: FC<TCart> = ({ handleClose, isOpen }) => {
  return (
    <>
      <Background isOpen={isOpen} onClick={handleClose} />

      <WithTransition
        style={{
          defaultStyle,
          transitionStyles,
        }}
        isOpen={isOpen}
        classNames="fixed top-0 right-0 overflow-auto max-w-[450px] w-full h-screen bg-white z-20"
      >
        {/* <EmptyCart handleClose={handleClose} /> */}
        <CartWithItems handleClose={handleClose} />
      </WithTransition>
    </>
  );
};
