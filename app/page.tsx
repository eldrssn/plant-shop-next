import { firstAds, secondAds } from '@/content/offers';
import { HeroScreen } from '@/modules/home/HeroScreen';
import { DescriptionScreen } from '@/modules/home/DescriptionScreen';
import { AdsScreen } from '@/modules/home/AdsScreen';
import { PromiseScreen } from '@/modules/home/PromiseScreen';
import { NewItemsScreen } from '@/modules/home/NewItemsScreen';
import { PopularItemsScreen } from '@/modules/home/PopularItemsScreen';
import { getProducts } from '@/lib/products-db';
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
