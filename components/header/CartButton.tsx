'use client';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { Icon } from '@/components/ui/icons/Icon';
import { useStore } from '@/common/store/useStore';

import { Cart } from '../cart';

export const CartButton = observer(() => {
  const [isOpenedCart, setIsOpenCart] = useState(false);
  const { length } = useStore();

  const handleClose = () => setIsOpenCart(false);
  const handleOpen = () => setIsOpenCart(true);

  const isLength = length > 0;

  return (
    <>
      <button type="button" className="relative p-3" onClick={handleOpen}>
        <Icon
          width="20px"
          height="25px"
          svgId={isLength ? 'icon-shopping-bag-black' : 'icon-shopping-bag'}
        />
        <span
          className={`absolute top-0 right-0 w-6 h-6 font-bold font-xs bg-teal-700 text-white rounded-full text-center flex justify-center items-center ${
            !isLength && 'hidden'
          }`}
        >
          {length}
        </span>
      </button>

      <Cart handleClose={handleClose} isOpen={isOpenedCart} />
    </>
  );
});
