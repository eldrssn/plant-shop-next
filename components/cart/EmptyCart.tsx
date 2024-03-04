import React, { FC } from 'react';
import Image from 'next/image';

import { FilledActionButton } from '@/components/ui/buttons/FilledActionButton';
import { Icon } from '@/components/ui/icons/Icon';
import { CloseButton } from '@/components/ui/buttons/CloseButton';

type EmptyCartProps = {
  handleClose: () => void;
};

export const EmptyCart: FC<EmptyCartProps> = ({ handleClose }) => (
  <div className="flex flex-col mx-4 mt-8 mb-16 md:mt-16 md:mx-12">
    <div className="mb-5 ml-auto">
      <CloseButton onClick={handleClose} />
    </div>

    <div className="flex flex-col items-center justify-center">
      <h2 className="mt-3 text-xl font-bold text-zinc-800">
        Oops looks like your bag is empty
      </h2>

      <Image
        src="/svg/empty-bag.svg"
        alt="Empty bag"
        width={180}
        height={180}
        className="my-16"
      />

      <FilledActionButton
        onClick={handleClose}
        className="flex items-center justify-center max-w-full gap-5"
      >
        <Icon
          svgId="icon-arrow-left"
          className="fill-white"
          width="15px"
          height="17px"
        />
        Continue shopping
      </FilledActionButton>
    </div>
  </div>
);
