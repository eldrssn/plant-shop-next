'use client';
import React from 'react';

export const SizeBox = ({
  size,
  isChosen,
  handleClick,
}: {
  size: string | number;
  isChosen: boolean;
  handleClick: () => void;
}) => (
  <li
    className={`text-sm px-5 py-3 border font-bold transition-colors border-zinc-800 cursor-pointer w-28 text-center 
      ${isChosen ? 'bg-zinc-800 text-white' : ''}`}
    onClick={handleClick}
  >
    {size}
  </li>
);
