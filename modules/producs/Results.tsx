'use client';
import { CarouselItem } from '@/components/main/carousel/CarouselItem';
import { ProductItem } from '@/components/main/product-card';
import { popularItems } from '@/content/carousel';
import { FC } from 'react';

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

type ResultsProps = {
  products: Product[];
};

export const Results: FC<ResultsProps> = ({ products }) => (
  <div className="grid grid-cols-2 gap-y-6 mb-10 lg:grid-cols-3">
    {products.map((item) => (
      <ProductItem key={item._id} {...item} />
    ))}
  </div>
);
