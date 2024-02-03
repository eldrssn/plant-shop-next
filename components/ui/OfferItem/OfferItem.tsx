import { FC } from 'react';
import clsx from 'clsx';

import { OfferButton } from '@/components/ui/OfferButton';
import { OfferPositions } from '@/types';

import { TOfferItem } from './types';

const OfferItem: FC<TOfferItem> = ({
  title,
  description,
  buttonText,
  href,
  image,
  position,
}) => (
  <article
    className={clsx('md:flex md:flex-row py-20 md:justify-between', {
      'md:flex-row-reverse': position === OfferPositions.RIGHT,
    })}
  >
    <div className='h-80 md:w-1/2 md:h-[32rem] md:aspect-square'>
      <img
        src={image}
        alt={title}
        className='object-cover object-center w-full h-full'
      />
    </div>

    <div className='my-auto md:w-2/5'>
      <div className='py-12 px-7'>
        <h3 className='mb-6 text-2xl font-bold text-zinc-800 md:text-4xl'>
          {title}
        </h3>
        <p className='mb-8'>{description}</p>

        <OfferButton href={href}>{buttonText}</OfferButton>
      </div>
    </div>
  </article>
);

export { OfferItem };
