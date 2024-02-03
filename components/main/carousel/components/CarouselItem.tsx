import { FC } from 'react';
import { TCarouselItem } from '@/types';
import { ButtonOptions } from './ButtonOptions';
import { ButtonToCart } from './ButtonToCart';

const CarouselItem: FC<TCarouselItem> = ({
  id,
  title,
  description,
  price,
  isOptions,
  img,
}) => (
  <article className='px-3 bg-transparent'>
    <div className='flex flex-col border text-zinc-800'>
      <a href='/' className='overflow-hidden'>
        <img
          src={img}
          alt={title}
          className='transition-transform duration-300 aspect-square hover:scale-105'
        />
      </a>
      <div className='flex flex-col justify-between px-5 py-4 h-36'>
        <a href='/' className='transition-colors hover:text-teal-700'>
          <h3 className='pb-2 text-xl font-bold'>{title}</h3>
          <p className='text-xs uppercase'>{description}</p>
        </a>

        <p>£{price}.00</p>
      </div>

      {isOptions ? <ButtonOptions href='#' /> : <ButtonToCart id={id} />}
    </div>
  </article>
);

export { CarouselItem };
