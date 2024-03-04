'use client';
import { FC } from 'react';

type SizeBoxProps = {
  size: string | number;
  isChosen: boolean;
  handleClick: () => void;
};

export const SizeBox: FC<SizeBoxProps> = ({ size, isChosen, handleClick }) => (
  <li
    className={`text-sm px-5 py-3 border font-bold transition-colors border-zinc-800 cursor-pointer w-28 text-center 
      ${isChosen ? 'bg-zinc-800 text-white' : ''}`}
    onClick={handleClick}
  >
    {size}
  </li>
);
