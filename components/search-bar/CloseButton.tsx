import React, { FC } from 'react';
import { ClassName } from '@/common/types';
import { Icon } from '@/components/ui/icons/Icon';
import { TOnClick } from '../ui/buttons/types';

export const CloseButton: FC<TOnClick & ClassName> = ({
  onClick,
  className,
}) => (
  <button type="button" className="p-6 mx-2" onClick={onClick}>
    <Icon
      svgId="icon-close"
      width="21px"
      height="21px"
      className={`fill-neutral-500 ${className}`}
    />
  </button>
);
