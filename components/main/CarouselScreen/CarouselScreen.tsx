import { FC } from 'react';

import { Carousel } from '@/components/main/carousel';
import { TCarouselScreen } from './types';

const CarouselScreen: FC<TCarouselScreen> = ({
  header,
  description,
  carouselList,
}) => (
  <section className='flex flex-col lg:flex-row pt-32 pb-16 max-w-[1680px] m-auto'>
    <article className='p-5 lg:basis-1/4 lg:min-w-[25%]'>
      <div className='lg:ml-[25%]'>
        <h3 className='mb-6 text-2xl font-bold'>{header}</h3>
        <p>{description}</p>
      </div>
    </article>
    <Carousel carouselList={carouselList} />
  </section>
);

export { CarouselScreen };
