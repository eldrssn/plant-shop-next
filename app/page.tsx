import { firstAds, secondAds } from '@/content/offers';
import { HeroScreen } from '@/modules/home/HeroScreen';
import { DescriptionScreen } from '@/modules/home/DescriptionScreen';
import { AdsScreen } from '@/modules/home/AdsScreen';
import { PromiseScreen } from '@/modules/home/PromiseScreen';
import { PopularItemsScreen } from '@/modules/home/PopularItemsScreen';
import { TopItemsScreen } from '@/modules/home/TopItemsScreen';

export default function Page() {
  return (
    <main>
      <HeroScreen />
      <PromiseScreen />
      <DescriptionScreen />
      <PopularItemsScreen />
      <AdsScreen ads={firstAds} />
      <TopItemsScreen />
      <AdsScreen ads={secondAds} />
    </main>
  );
}