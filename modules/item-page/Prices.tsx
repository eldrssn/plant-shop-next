'use client';
import { FC } from 'react';
import { ProductVariant } from '@/common/models/Product';

type PricesProps = {
  variants: ProductVariant[];
  choosenVariantIndex: number | null;
};

export const Prices: FC<PricesProps> = ({ variants, choosenVariantIndex }) => {
  return (
    <p className="mb-4 text-xl font-bold md:text-2xl">
      {choosenVariantIndex === null
        ? `£${variants[0].price}.00 - £${
            variants[variants.length - 1].price
          }.00`
        : `£${variants[choosenVariantIndex].price}.00`}
    </p>
  );
};
