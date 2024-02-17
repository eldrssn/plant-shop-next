'use client';

import { FC } from 'react';
import Image from 'next/image';
import { TItem } from '@/common/types';
import { LinkToOptions } from '../carousel/LinkToOptions';
import { ActionToCart } from '../carousel/ActionToCart';
import Link from 'next/link';

type ProductVariant = {
  size: string;
  price: number;
  inStock: boolean;
  imgIndex: number;
};

type ProductDetails = {
  enviroment: string;
  light: string;
  careLevel: string;
  wind: boolean;
  plantType: string;
};

type Product = {
  _id: string;
  url: string;
  productType: string;
  title: string;
  realName: string;
  latinName: string;
  details: ProductDetails;
  imgs: string[];
  variants: ProductVariant[];
};

const ProductItem: FC<Product> = ({ url, imgs, realName, title, variants }) => (
  <article className="px-3 bg-transparent">
    <div className="flex flex-col border text-zinc-800">
      <Link
        href={`item/${url}`}
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
          href={`item/${url}`}
          className="transition-colors hover:text-teal-700"
        >
          <h3 className="pb-2 text-xl font-bold">{title}</h3>
          <p className="text-xs uppercase">{realName}</p>
        </Link>

        <p>£{variants[0].price}.00</p>
      </div>

      {variants.length > 1 ? <LinkToOptions href="#" /> : <ActionToCart />}
    </div>
  </article>
);

export { ProductItem };
