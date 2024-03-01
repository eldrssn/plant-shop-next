'use client';
import { FC } from 'react';
import { ProductItem } from '@/components/main/product-item';
import { Product } from '@/models/Product';

type ResultsProps = {
  products: Product[];
};

export const Results: FC<ResultsProps> = ({ products }) => (
  <div className="grid grid-cols-2 gap-y-6 mb-10 lg:grid-cols-3">
    {products.map((item) => (
      <ProductItem key={item._id} item={item} />
    ))}
  </div>
);
