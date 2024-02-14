'use client';
import { FilledActionBox } from '@/components/ui/filled-action-button';
import React, { FC, useState } from 'react';

type TSize = {
  title: string;
  price: string;
};
type TItem = {
  photos: string[];
  title: string;
  fullName: string;
  pronunciation: string;
  sizes: TSize[];
  highlights: string[];
};

export const ItemInfo: FC<TItem> = ({
  title,
  sizes,
  fullName,
  pronunciation,
}) => {
  const [choosenSizeIndex, setChoosenSizeIndex] = useState(0);
  return (
    <div className="text-zinc-800 px-6 flex flex-col md:basis-1/2">
      <h1 className="text-4xl font-bold font-header mb-4 md:text-6xl">
        {title}
      </h1>
      <p className="text-xl font-bold mb-4 md:text-2xl">
        £{sizes[choosenSizeIndex].price}.00
      </p>

      <div className="flex flex-col gap-3">
        <p className="font-bold">Choose plant height (cm)</p>
        <ul className="flex gap-2 mb-8">
          {sizes.map((size, i) => (
            <li
              className={`text-sm px-4 py-3 border font-bold transition-colors
                  border-zinc-800 cursor-pointer ${
                    i === choosenSizeIndex ? 'bg-zinc-800 text-white' : ''
                  }`}
              key={size.title}
              onClick={() => setChoosenSizeIndex(i)}
            >
              {size.title}
            </li>
          ))}
        </ul>
      </div>

      <p className="font-bold text-sm mb-2">{fullName}</p>
      <p className="text-neutral-500 text-sm">{pronunciation}</p>

      <FilledActionBox className="max-w-full mb-12 mt-5 md:mt-auto md:mb-0">
        Add to bag
      </FilledActionBox>
    </div>
  );
};
