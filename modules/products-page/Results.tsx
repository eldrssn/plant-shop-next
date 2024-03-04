'use client';
import { FC } from 'react';

import { ItemCard } from '@/components/item-card';
import { Product } from '@/common/models/Product';
import { Conclusion } from './Conclusion';

type ResultsProps = {
  products: Product[];
};

export const Results: FC<ResultsProps> = ({ products }) => {
  return (
    <>
      <div className="grid grid-cols-2 mb-10 gap-y-6 lg:grid-cols-3">
        {products.map((item, index) => (
          <ItemCard key={item._id} item={item} index={index} />
        ))}
      </div>
      <Conclusion length={products.length} />
    </>
  );
};
