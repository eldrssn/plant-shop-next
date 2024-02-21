'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { LinkToOptions } from '../carousel/LinkToOptions';
import { ActionToCart } from '../carousel/ActionToCart';
import { Product } from '@/models/Product';
import { ITEM_SLUG } from '@/common/constants';

const ProductItem: FC<Product> = ({ url, imgs, realName, title, variants }) => (
  <article className="px-3 bg-transparent">
    <div className="flex flex-col border text-zinc-800">
      <Link
        href={`/${ITEM_SLUG}/${url}`}
        className="relative overflow-hidden aspect-square"
      >
        <Image
          fill={true}
          src={imgs[0]}
          alt={title}
          className="transition-transform duration-300 hover:scale-105"
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

        <p>£{variants[0].price}.00</p>
      </div>

      {variants.length > 1 ? (
        <LinkToOptions href={`/${ITEM_SLUG}/${url}`} />
      ) : (
        <ActionToCart />
      )}
    </div>
  </article>
);

export { ProductItem };
