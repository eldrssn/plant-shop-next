import { FC, Suspense } from 'react';

import { Filter } from '@/common/models/Filters';
import { Product } from '@/common/models/Product';

import { Sorting } from './Sorting';
import { FiltersButtonsMobile } from './FiltersButtonsMobile';
import { Results } from './Results';
import { FilterCategories } from './FilterCategories';
import { ResetButton } from './ResetButton';

type ProductsContentProps = {
  filters: Filter[];
  products: Product[];
  results?: number;
};

export const ProductsContent: FC<ProductsContentProps> = ({
  filters,
  results = 0,
  products,
}) => (
  <>
    <FiltersButtonsMobile filters={filters} />

    <div className="flex justify-center w-full max-w-screen-xl gap-4 mx-auto md:px-10">
      <div className="hidden w-1/4 mb-20 border h-fit md:block">
        <div className="flex items-center justify-between gap-10 px-6 py-4 border-b bg-emerald-200">
          <h2 className="text-lg font-bold">Filter</h2>
          <ResetButton />
        </div>

        <FilterCategories filters={filters} />
      </div>

      <div className="w-full md:w-3/4">
        <div className="items-center justify-between hidden pb-3 pl-3 md:flex">
          <p className="text-sm text-neutral-500">{results} results</p>
          <Suspense>
            <Sorting />
          </Suspense>
        </div>
        <Results products={products} />
      </div>
    </div>
  </>
);
