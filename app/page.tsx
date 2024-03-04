import { firstAds, secondAds } from '@/modules/home-page/constants/offers';
import { HeroScreen } from '@/modules/home-page/HeroScreen';
import { DescriptionScreen } from '@/modules/home-page/DescriptionScreen';
import { AdsScreen } from '@/modules/home-page/AdsScreen';
import { PromiseScreen } from '@/modules/home-page/PromiseScreen';
import { NewItemsScreen } from '@/modules/home-page/NewItemsScreen';
import { PopularItemsScreen } from '@/modules/home-page/PopularItemsScreen';

import { getProducts } from '@/common/lib/products-db';
import { PARAMS_ITEMS_NEW, PARAMS_ITEMS_POPULAR } from '@/common/constants';

export default async function Page() {
  const { products: newItems } = await getProducts(PARAMS_ITEMS_NEW);
  const { products: popularItems } = await getProducts(PARAMS_ITEMS_POPULAR);

  return (
    <main>
      <HeroScreen />
      <PromiseScreen />
      <DescriptionScreen />
      <PopularItemsScreen items={popularItems} />
      <AdsScreen ads={firstAds} />
      <NewItemsScreen items={newItems} />
      <AdsScreen ads={secondAds} />
    </main>
  );
}
