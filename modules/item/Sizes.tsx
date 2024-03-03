'use client';
import React, { useMemo } from 'react';
import { ProductVariant } from '@/models/Product';
import { SizeBox } from './SizeBox';
import { SizesHeading } from './SizesHeading';

export const Sizes = ({
  productType,
  variants,
  choosenVariantIndex,
  setChoosenVariantIndex,
}: {
  productType: string;
  variants: ProductVariant[];
  choosenVariantIndex: number | null;
  setChoosenVariantIndex: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  return (
    <div className="flex flex-col gap-3">
      <SizesHeading
        productType={productType}
        isSingle={variants.length === 1}
      />

      <ul className="flex gap-2 mb-8 flex-wrap">
        {variants.map(({ size }, i) => (
          <SizeBox
            key={i}
            size={Array.isArray(size) ? size.join('-') : size}
            isChosen={i === choosenVariantIndex}
            handleClick={() => setChoosenVariantIndex(i)}
          />
        ))}
      </ul>
    </div>
  );
};
