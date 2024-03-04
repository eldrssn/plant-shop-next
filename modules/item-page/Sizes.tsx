'use client';
import React, { FC } from 'react';
import { ProductVariant } from '@/common/models/Product';
import { SizeBox } from './SizeBox';
import { SizesHeading } from './SizesHeading';

type SizesProps = {
  productType: string;
  variants: ProductVariant[];
  choosenVariantIndex: number | null;
  setChoosenVariantIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

export const Sizes: FC<SizesProps> = ({
  productType,
  variants,
  choosenVariantIndex,
  setChoosenVariantIndex,
}) => (
  <div className="flex flex-col gap-3">
    <SizesHeading productType={productType} isSingle={variants.length === 1} />

    <ul className="flex flex-wrap gap-2 mb-8">
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
