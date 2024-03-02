'use client';
import { FC } from 'react';

import { ProductItem } from '@/components/main/product-item';
import { Product } from '@/models/Product';
import { Conclusion } from './Conclusion';

type ResultsProps = {
  products: Product[];
};

export const Results: FC<ResultsProps> = ({ products }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-y-6 mb-10 lg:grid-cols-3">
        {products.map((item, index) => (
          <ProductItem key={item._id} item={item} index={index} />
        ))}
      </div>
      <Conclusion length={products.length} />
    </>
  );
};
