import { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import { FilledActionBox } from '@/components/ui/filled-action-button';
import { OfferPositions } from '@/common/types';
import { TAdItem } from './types';

const AdItem: FC<TAdItem> = ({
  title,
  description,
  buttonText,
  buttonHref,
  image,
  position,
}) => (
  <article
    className={clsx('md:flex md:flex-row py-20 md:justify-between', {
      'md:flex-row-reverse': position === OfferPositions.RIGHT,
    })}
  >
    <div className="relative h-80 md:w-1/2 md:h-[32rem] md:aspect-square">
      <Image
        fill={true}
        src={image}
        alt={title}
        className="object-cover object-center w-full h-full"
      />
    </div>

    <div className="my-auto md:w-2/5">
      <div className="py-12 px-7">
        <h3 className="mb-6 text-2xl font-bold text-zinc-800 md:text-4xl">
          {title}
        </h3>
        <p className="mb-8">{description}</p>

        <FilledActionBox href={buttonHref}>{buttonText}</FilledActionBox>
      </div>
    </div>
  </article>
);

export { AdItem };
