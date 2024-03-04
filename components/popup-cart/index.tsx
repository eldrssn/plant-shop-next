'use client';

import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/common/store/useStore';
import { WithTransition } from '@/common/hocs/WithTransition';
import { formatSizes } from '@/common/utils';

import { CloseButton } from '../search-bar/CloseButton';
import { DELAY, defaultStyle, transitionStyles } from './animation';

export const PopupCart = observer(() => {
  const { lastItem } = useStore();
  const [isOpen, setIsOpen] = useState(!!lastItem);

  const { quantity, title, variant } = lastItem || {};

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    setIsOpen(!!lastItem);
    const timer = setTimeout(handleClose, DELAY);

    return () => {
      clearTimeout(timer);
    };
  }, [lastItem]);

  return (
    <WithTransition
      style={{
        defaultStyle,
        transitionStyles,
      }}
      isOpen={isOpen}
      classNames="fixed top-16 lg:top-20 right-0 left-0 bg-teal-700 text-white py-0 lg:py-1 px-2"
    >
      <div className="flex items-center justify-between max-w-screen-xl m-auto">
        <p className="p-0 font-bold">
          {quantity} X {title} - {formatSizes(variant?.size)}
          cm {variant?.color?.name} added to bag
        </p>
        <CloseButton onClick={handleClose} className="fill-white" />
      </div>
    </WithTransition>
  );
});
