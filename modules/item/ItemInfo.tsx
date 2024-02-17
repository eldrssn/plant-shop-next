'use client';
import { FilledActionBox } from '@/components/ui/filled-action-button';
import { Product } from '@/models/Product';
import React, { FC, useState } from 'react';

export const ItemInfo: FC<Product> = ({
  title,
  variants,
  latinName,
  realName,
}) => {
  const [choosenVariantIndex, setChoosenVariantIndex] = useState(0);
  return (
    <div className="text-zinc-800 px-6 flex flex-col md:basis-1/2">
      <h1 className="text-4xl font-bold font-header mb-4 md:text-6xl">
        {title}
      </h1>
      <p className="text-xl font-bold mb-4 md:text-2xl">
        £{variants[choosenVariantIndex].price}.00
      </p>

      <div className="flex flex-col gap-3">
        <p className="font-bold">Choose plant height (cm)</p>
        <ul className="flex gap-2 mb-8">
          {variants.map(({ size }, i) => (
            <li
              className={`text-sm px-4 py-3 border font-bold transition-colors
                  border-zinc-800 cursor-pointer ${
                    i === choosenVariantIndex ? 'bg-zinc-800 text-white' : ''
                  }`}
              key={size}
              onClick={() => setChoosenVariantIndex(i)}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>

      <p className="font-bold text-sm mb-2">{realName}</p>
      <p className="text-neutral-500 text-sm mb-2">{latinName}</p>

      <FilledActionBox className="max-w-full mb-12 mt-5 md:mt-auto md:mb-0">
        Add to bag
      </FilledActionBox>
    </div>
  );
};