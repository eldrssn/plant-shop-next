'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import { Product } from '@/common/models/Product';
import { ItemInfo } from './ItemInfo';

const GalleryWithNoSSR = dynamic(() => import('./Gallery'), { ssr: false });

export const ItemPage = ({ item }: { item: Product }) => {
  const { imgs, title, variants } = item;
  const [choosenVariantIndex, setChoosenVariantIndex] = useState<number | null>(
    variants.length > 1 ? null : 0
  );
  const [choosenColorIndex, setChoosenColorIndex] = useState(0);

  useEffect(() => {
    setChoosenColorIndex(0);
  }, [choosenVariantIndex]);

  return (
    <main className="flex flex-col gap-10 md:flex-row md:mt-16 md:mb-12 md:max-w-screen-xl md:mx-auto md:gap-20">
      <div className="relative w-full bg-center bg-contain aspect-square md:basis-1/2 bg-placeholder-image">
        <GalleryWithNoSSR
          imgs={imgs}
          title={title}
          choosenVariantIndex={choosenVariantIndex}
          choosenColorIndex={choosenColorIndex}
          variants={variants}
        />
      </div>
      <ItemInfo
        item={item}
        choosenVariantIndex={choosenVariantIndex}
        choosenColorIndex={choosenColorIndex}
        setChoosenVariantIndex={setChoosenVariantIndex}
        setChoosenColorIndex={setChoosenColorIndex}
      />
    </main>
  );
};
