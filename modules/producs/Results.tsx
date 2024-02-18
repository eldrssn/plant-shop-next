'use client';
import { ProductItem } from '@/components/main/product-card';
import { Product } from '@/models/Product';
import { FC } from 'react';

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
