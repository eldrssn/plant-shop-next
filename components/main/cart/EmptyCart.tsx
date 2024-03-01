import React, { FC } from 'react';
import Image from 'next/image';

import { FilledActionBox } from '@/components/ui/filled-action-button';
import { Icon } from '@/components/ui/icons/Icon';
import { CloseButton } from '@/components/ui/close-button';

type TEmptyCart = {
  handleClose: () => void;
};
export const EmptyCart: FC<TEmptyCart> = ({ handleClose }) => (
  <div className="flex flex-col mt-8 mx-4 mb-16 md:mt-16 md:mx-12">
    <div className="ml-auto mb-5">
      <CloseButton onClick={handleClose} />
    </div>

    <div className="flex flex-col justify-center items-center">
      <h2 className="font-bold text-zinc-800 mt-3 text-xl">
        Oops looks like your bag is empty
      </h2>

      <Image
        src="/svg/empty-bag.svg"
        alt="Empty bag"
        width={180}
        height={180}
        className="my-16"
      />

      <FilledActionBox
        onClick={handleClose}
        className="max-w-full flex gap-5 justify-center items-center"
      >
        <Icon
          svgId="icon-arrow-left"
          className="fill-white"
          width="15px"
          height="17px"
        />
        Continue shopping
      </FilledActionBox>
    </div>
  </div>
);
