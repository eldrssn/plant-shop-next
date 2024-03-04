import { FC } from 'react';

import { AdItem } from './AdItem';
import { TAdItem } from './types';

type AdsScreenProps = {
  ads: TAdItem[];
};

const AdsScreen: FC<AdsScreenProps> = ({ ads }) => (
  <section className="bg-zinc-50">
    <div className="max-w-[75rem] m-auto">
      {ads.map((item) => (
        <AdItem key={item.id} {...item} />
      ))}
    </div>
  </section>
);

export { AdsScreen };
