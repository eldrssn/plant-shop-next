'use client';

import { Sorting } from '@/modules/catalog/Sorting';
import { useWindowSize } from '@/common/hooks/useWindowSize';
import { FiltersButtonsMobile } from '@/modules/catalog/FiltersButtonsMobile';
import { Results } from '@/modules/catalog/Results';
import { FilterCategories } from '@/modules/catalog/FilterCategories';

export default function Page() {
  const { isTablet } = useWindowSize();

  return (
    <main>
      <div className="flex flex-col gap-3 my-10">
        <h1 className="text-5xl font-bold text-zinc-800 font-header text-center">
          All Products
        </h1>
        {!isTablet && <p className="text-center">214 results</p>}
      </div>

      {!isTablet && <FiltersButtonsMobile />}

      <div className="max-w-screen-xl md:px-10 mx-auto w-full flex justify-center gap-4">
        <div className="w-1/4 border h-fit hidden md:block">
          <div className="flex justify-between gap-10 items-center px-6 py-4 border-b bg-emerald-200">
            <h3 className="font-bold text-lg">Filter</h3>
            <button className="underline underline-offset-2" type="button">
              Reset
            </button>
          </div>

          <FilterCategories />
        </div>

        <div className="w-full md:w-3/4">
          <div className="justify-between items-center pl-3 pb-3 hidden md:flex">
            <p className="text-sm text-neutral-500">214 results</p>

            <Sorting />
          </div>
          <Results />
        </div>
      </div>
    </main>
  );
}
