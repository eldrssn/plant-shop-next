'use client';
import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';

import { FilledActionButton } from '@/components/ui/buttons/FilledActionButton';
import { Product } from '@/common/models/Product';
import { transformItem } from '@/common/utils/';
import { useStore } from '@/common/store/useStore';

import { PotsColor } from './PotsColor';
import { Prices } from './Prices';
import { Sizes } from './Sizes';

type ItemInfoProps = {
  item: Product;
  choosenVariantIndex: null | number;
  choosenColorIndex: number;
  setChoosenVariantIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setChoosenColorIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const ItemInfo: FC<ItemInfoProps> = observer(
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
      <div className="flex flex-col px-6 text-zinc-800 md:basis-1/2">
        <h1 className="mb-4 text-4xl font-bold font-header md:text-6xl">
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

        <p className="mb-2 text-sm font-bold">{realName}</p>
        <p className="mb-2 text-sm text-neutral-500">{latinName}</p>

        <FilledActionButton
          className="max-w-full mt-5 mb-12 md:mt-auto md:mb-0"
          onClick={handleAddItemToCart}
        >
          Add to bag
        </FilledActionButton>
      </div>
    );
  }
);
