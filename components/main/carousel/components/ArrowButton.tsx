import { Icon } from '@/components/ui/ButtonIcon';
import { FC } from 'react';
import clsx from 'clsx';

import { Directions, TArrowButton } from '../types';

const ArrowButton: FC<TArrowButton> = ({ onClick, isDisabled, direction }) => {
  const isNext = direction === Directions.NEXT;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={clsx(
        'bg-teal-700 w-12 h-12 absolute opasity-100 top-1/2 transition-opacity duration-300',
        {
          'opacity-0': isDisabled,
          'right-0': isNext,
          'left-0': !isNext,
        },
      )}
    >
      <span className='hidden'>{direction}</span>
      <Icon
        svgId='arrow'
        className={clsx('w-12 h-12 p-3', {
          'rotate-180': !isNext,
        })}
      />
    </button>
  );
};

export { ArrowButton };
