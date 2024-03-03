'use client';
import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';

import { FilledActionBox } from '@/components/ui/filled-action-button';
import { Product } from '@/models/Product';
import { transformItem } from '@/common/utility';
import { useStore } from '@/common/hooks/useStore';

import { PotsColor } from './PotsColor';
import { Prices } from './Prices';
import { Sizes } from './Sizes';

export const ItemInfo: FC<{
  item: Product;
  choosenVariantIndex: null | number;
  choosenColorIndex: number;
  setChoosenVariantIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setChoosenColorIndex: React.Dispatch<React.SetStateAction<number>>;
}> = observer(
  ({
    item,
    choosenVariantIndex,
    choosenColorIndex,
    setChoosenVariantIndex,
    setChoosenColorIndex,
  }) => {
    const { addItem } = useStore();

    const { title, variants, latinName, realName, productType } = item;

    const handleAddItemToCart = () => {
      if (choosenVariantIndex === null) {
        return;
      }

      addItem(transformItem({ item, choosenVariantIndex, choosenColorIndex }));
    };

    return (
      <div className="text-zinc-800 px-6 flex flex-col md:basis-1/2">
        <h1 className="text-4xl font-bold font-header mb-4 md:text-6xl">
          {title}
        </h1>

        <Prices variants={variants} choosenVariantIndex={choosenVariantIndex} />

        <Sizes
          productType={productType}
          variants={variants}
          choosenVariantIndex={choosenVariantIndex}
          setChoosenVariantIndex={setChoosenVariantIndex}
        />

        {choosenVariantIndex !== null && (
          <PotsColor
            color={variants[choosenVariantIndex].color}
            choosenColorIndex={choosenColorIndex}
            setChoosenColorIndex={setChoosenColorIndex}
          />
        )}

        <p className="font-bold text-sm mb-2">{realName}</p>
        <p className="text-neutral-500 text-sm mb-2">{latinName}</p>

        <FilledActionBox
          className="max-w-full mb-12 mt-5 md:mt-auto md:mb-0"
          onClick={handleAddItemToCart}
        >
          Add to bag
        </FilledActionBox>
      </div>
    );
  }
);
