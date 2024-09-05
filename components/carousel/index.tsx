'use client';

import { FC, useRef } from 'react';

import { useCarousel } from '@/common/hooks/useCarousel';
import { useInViewportOnce } from '@/common/hooks/useInViewportOnce';
import { WithTransition } from '@/common/hocs/WithTransition';
import { Product } from '@/common/models/Product';

import { ArrowButton } from './ArrowButton';
import { ItemCard } from '../item-card';

import { getDefaultStyles, transitionStyles } from './animation';
import { Directions } from './types';

export type CarouselProps = {
  items: Product[];
};

const Carousel: FC<CarouselProps> = ({ items }) => {
  const ref = useRef<HTMLDivElement>(null);
  const listLength = items?.length || 0;
  const elementWidth = ref.current?.offsetWidth || 0;

  const { counter, clickNext, clickPrev, isNexTLink, isPrevButton } =
    useCarousel({ elementWidth, listLength });

  const isInViewport = useInViewportOnce(ref);

  return (
    <>
      <div className="w-full overflow-hidden lg:basis-3/4">
        <div className="relative overflow-hidden ">
          <div className="md:w-[30%] m-auto md:m-0">
            <div
              ref={ref}
              style={{ transform: `translateX(${counter * elementWidth}px)` }}
              className={`flex flex-row flex-nowrap transition-transform duration-200`}
            >
              {items &&
                items.map((item, index) => (
                  <WithTransition
                    key={item.title}
                    style={{
                      defaultStyle: getDefaultStyles(++index),
                      transitionStyles,
                    }}
                    isOpen={isInViewport}
                    classNames="min-w-full"
                  >
                    <ItemCard item={item} key={item._id} index={index} />
                  </WithTransition>
                ))}
            </div>
          </div>

          <ArrowButton
            onClick={clickPrev}
            direction={Directions.PREV}
            isDisabled={!isPrevButton}
          />
          <ArrowButton
            onClick={clickNext}
            direction={Directions.NEXT}
            isDisabled={!isNexTLink}
          />
        </div>
      </div>
    </>
  );
};

export { Carousel };
