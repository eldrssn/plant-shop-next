import { FC } from 'react';

import { Carousel } from '@/components/carousel';
import { Product } from '@/common/models/Product';

export type CarouselWrapperProps = {
  header: string;
  description: string;
  items: Product[];
};

const CarouselWrapper: FC<CarouselWrapperProps> = ({
  header,
  description,
  items,
}) => (
  <section className="flex flex-col lg:flex-row pt-32 pb-16 max-w-[1680px] m-auto">
    <article className="p-5 lg:basis-1/4 lg:min-w-[25%]">
      <div className="lg:ml-[25%]">
        <h2 className="mb-6 text-2xl font-bold">{header}</h2>
        <p>{description}</p>
      </div>
    </article>
    <Carousel items={items} />
  </section>
);

export { CarouselWrapper };
