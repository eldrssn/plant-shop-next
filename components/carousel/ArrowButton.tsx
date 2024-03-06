import { FC } from 'react';

import { Icon } from '@/components/ui/icons/Icon';
import { Directions } from './types';

export type ArrowButtonProps = {
  onClick: () => void;
  isDisabled: boolean;
  direction: Directions;
};

const ArrowButton: FC<ArrowButtonProps> = ({
  onClick,
  isDisabled,
  direction,
}) => {
  const isNext = direction === Directions.NEXT;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={`bg-teal-700 w-12 h-12 absolute opasity-100 top-1/2 transition-opacity duration-300 
      ${isDisabled ? ' opacity-0' : ''}
      ${isNext ? ' right-0' : ' left-0'}`}
      aria-label={`${direction}-arrow`}
    >
      <span className="hidden">{direction}</span>
      <Icon
        svgId="arrow"
        className={`w-12 h-12 p-3 ${isNext ? '' : 'rotate-180'}`}
      />
    </button>
  );
};

export { ArrowButton };
