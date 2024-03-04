'use client';

import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';

import { WithTransition } from '@/common/hocs/WithTransition';
import { Background } from '@/components/ui/background';
import { useStore } from '@/common/store/useStore';

import { defaultStyle, transitionStyles } from './animation';
import { EmptyCart } from './EmptyCart';
import { CartWithItems } from './CartWithItems';

type CartProps = {
  handleClose: () => void;
  isOpen: boolean;
};

export const Cart: FC<CartProps> = observer(({ handleClose, isOpen }) => {
  const { length } = useStore();
  return (
    <>
      <Background isOpen={isOpen} onClick={handleClose} className="z-30" />

      <WithTransition
        style={{
          defaultStyle,
          transitionStyles,
        }}
        isOpen={isOpen}
        classNames="fixed top-0 right-0 bottom-0 overflow-auto max-w-[450px] w-full h-screen bg-white z-30"
      >
        {length > 0 ? (
          <CartWithItems handleClose={handleClose} />
        ) : (
          <EmptyCart handleClose={handleClose} />
        )}
      </WithTransition>
    </>
  );
});
