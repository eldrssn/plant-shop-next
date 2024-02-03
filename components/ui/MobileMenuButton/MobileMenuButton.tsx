import { FC } from 'react';
import { TOnClick } from '@/types';

const MobileMenuButton: FC<TOnClick> = ({ onClick }) => (
  <button
    className='relative float-left clear-both w-5 h-4 ml-7'
    onClick={onClick}
  >
    <span
      className='
            bg-black content-[""] h-[2px] w-5 absolute top-1/2 -translate-y-2/4 left-0
            after:bg-black after:content-[""] after:h-[2px] after:w-5 after:absolute after:bottom-1.5 after:left-0
            before:bg-black before:content-[""] before:h-[2px] before:w-5 before:absolute before:top-1.5 before:left-0
          '
    ></span>
  </button>
);

export { MobileMenuButton };
