/* eslint-disable react/display-name */
'use client';
import { FC, memo } from 'react';

type SizesHeadingProps = { productType: string; isSingle: boolean };

export const SizesHeading: FC<SizesHeadingProps> = memo(
  ({ productType, isSingle }) =>
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
