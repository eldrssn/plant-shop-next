import { AdItem } from '@/modules/home/AdItem';
import { FC } from 'react';
import { TAdsScreen } from './types';

const AdsScreen: FC<TAdsScreen> = ({ ads }) => (
  <section className="bg-zinc-50">
    <div className="max-w-[75rem] m-auto">
      {ads.map((item) => (
        <AdItem key={item.id} {...item} />
      ))}
    </div>
  </section>
);

export { AdsScreen };
