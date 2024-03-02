'use client';
import React from 'react';
import { ProductVariant } from '@/models/Product';

export const Prices = ({
  variants,
  choosenVariantIndex,
}: {
  variants: ProductVariant[];
  choosenVariantIndex: number | null;
}) => {
  return (
    <p className="text-xl font-bold mb-4 md:text-2xl">
      {choosenVariantIndex === null
        ? `£${variants[0].price}.00 - £${
            variants[variants.length - 1].price
          }.00`
        : `£${variants[choosenVariantIndex].price}.00`}
    </p>
  );
};
