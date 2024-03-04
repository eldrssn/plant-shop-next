import type { Metadata } from 'next';

import { getProducts } from '@/common/lib/products-db';
import { getFiltersList } from '@/common/lib/filters-db';
import { generateFilterTitle, convertSlugsToObject } from '@/common/utils/';
import { SearchParams } from '@/common/types';
import { ProductsHeading } from '@/modules/products-page/ProductsHeading';
import { ProductsContent } from '@/modules/products-page/ProductsContent';

type Props = {
  params: { slugs: string[] };
  searchParams: SearchParams;
};

export async function generateMetadata({
  params: { slugs },
  searchParams,
}: Props): Promise<Metadata> {
  const slugObject = convertSlugsToObject(slugs);

  const { filters } = await getFiltersList(slugObject);
  const title = generateFilterTitle({
    filters,
    slugs: { ...slugObject, ...searchParams },
    isHead: true,
  });

  return {
    title: `${title} | Patch`,
  };
}

export default async function Page({ params: { slugs }, searchParams }: Props) {
  const slugObject = convertSlugsToObject(slugs);
  const allParams = { ...slugObject, ...searchParams };

  const { products, results } = await getProducts(allParams);
  const { filters } = await getFiltersList(slugObject);

  const title = generateFilterTitle({ filters, slugs: allParams });

  return (
    <main>
      <ProductsHeading title={title} results={results} />
      <ProductsContent
        filters={filters}
        results={results}
        products={products}
      />
    </main>
  );
}
