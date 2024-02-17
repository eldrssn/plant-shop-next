import { Sorting } from '@/modules/producs/Sorting';
import { FiltersButtonsMobile } from '@/modules/producs/FiltersButtonsMobile';
import { Results } from '@/modules/producs/Results';
import { FilterCategories } from '@/modules/producs/FilterCategories';
import { getProducts } from '@/lib/products-db';

export default async function Page() {
  const { products, results } = await getProducts();

  return (
    <main>
      <div className="flex flex-col gap-3 my-10">
        <h1 className="text-5xl font-bold text-zinc-800 font-header text-center">
          All Products
        </h1>
        <p className="text-center block md:hidden">{results} results</p>
      </div>

      <FiltersButtonsMobile />

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
            <p className="text-sm text-neutral-500">{results} results</p>

            <Sorting />
          </div>
          <Results products={products} />
        </div>
      </div>
    </main>
  );
}
