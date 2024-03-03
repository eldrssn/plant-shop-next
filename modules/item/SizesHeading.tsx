/* eslint-disable react/display-name */
'use client';
import React, { memo } from 'react';

export const SizesHeading = memo(
  ({ productType, isSingle }: { productType: string; isSingle: boolean }) =>
    isSingle ? (
      <p className="font-bold">
        {productType === 'plant' ? 'Plant  height (cm): ' : 'Pot size: '}
        <span className="font-normal">one size only</span>
      </p>
    ) : (
      <p className="font-bold">
        Choose {productType === 'plant' ? 'plant' : 'pot'} height (cm)
      </p>
    )
);
