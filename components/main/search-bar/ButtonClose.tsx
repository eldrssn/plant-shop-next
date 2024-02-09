import { TOnClick } from '@/common/types';
import { Icon } from '@/components/ui/icons/Icon';
import React, { FC } from 'react';

export const ButtonClose: FC<TOnClick> = ({ onClick }) => (
  <button type="button" className="ml-auto p-6 mx-2" onClick={onClick}>
    <Icon
      svgId="icon-close"
      width="21px"
      height="21px"
      className="fill-neutral-500"
    />
  </button>
);
