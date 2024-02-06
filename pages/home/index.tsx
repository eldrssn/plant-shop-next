import { firstAds, secondAds } from '@/content/offers';
import { DescriptionScreen } from './components/DescriptionScreen';
import { AdsScreen } from './components/AdsScreen';
import { PromiseScreen } from './components/PromiseScreen';
import { HeroScreen } from './components/HeroScreen';
import { DeliveryOffer } from './components/DeliveryOffer';
import { DetailsScreen } from './components/DetailsScreen';
import { PopularItemsScreen } from './components/PopularItemsScreen';
import { TopItemsScreen } from './components/TopItemsScreen';

const HomePage = () => (
  <main>
    <HeroScreen />
    <PromiseScreen />
    <DescriptionScreen />
    <PopularItemsScreen />
    <AdsScreen ads={firstAds} />
    <TopItemsScreen />
    <AdsScreen ads={secondAds} />
    <DeliveryOffer />
    <DetailsScreen />
  </main>
);

export { HomePage };
