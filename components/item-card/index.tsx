'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/common/models/Product';
import { ITEM_SLUG, MIN_PRELOADED_IMAGES } from '@/common/constants';

import { LinkToOptions } from './LinkToOptions';
import { ActionToCart } from './ActionToCart';

type ItemCardProps = { item: Product; index: number };

const ItemCard: FC<ItemCardProps> = ({ item, index }) => {
  const { url, imgs, realName, title, variants } = item;
  const isSingle = variants.length === 1;

  return (
    <article className="px-3 bg-transparent">
      <div className="flex flex-col border text-zinc-800">
        <Link
          href={`/${ITEM_SLUG}/${url}`}
          className="relative overflow-hidden bg-center bg-no-repeat bg-cover aspect-square bg-placeholder-image"
        >
          <Image
            fill={true}
            src={imgs[0]}
            alt={title}
            className="transition-transform duration-300 hover:scale-105"
            priority={index < MIN_PRELOADED_IMAGES}
          />
        </Link>
        <div className="flex flex-col justify-between px-5 py-4 h-36">
          <Link
            href={`/${ITEM_SLUG}/${url}`}
            className="transition-colors hover:text-teal-700"
          >
            <h3 className="pb-2 text-xl font-bold">{title}</h3>
            <p className="text-xs uppercase">{realName}</p>
          </Link>

          <p>
            {isSingle ? '' : 'From '}£{variants[0].price}.00
          </p>
        </div>

        {isSingle ? (
          <ActionToCart item={item} />
        ) : (
          <LinkToOptions href={`/${ITEM_SLUG}/${url}`} />
        )}
      </div>
    </article>
  );
};

export { ItemCard };
