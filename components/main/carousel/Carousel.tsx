'use client';

import { FC, useRef } from 'react';
import { useCarousel } from '@/hooks/useCarousel';
import { useInViewportOnce } from '@/hooks/useInViewportOnce';
import { WithTransition } from '@/hocs/WithTransition';

import { CarouselItem } from './components/CarouselItem';
import { ArrowButton } from './components/ArrowButton';

import { getDefaultStyles, transitionStyles } from './constants';
import { Directions, TCarousel } from './types';

const Carousel: FC<TCarousel> = ({ carouselList }) => {
  const ref = useRef<HTMLDivElement>(null);
  const listLength = carouselList.length;
  const elementWidth = ref.current?.offsetWidth || 0;

  const { counter, clickNext, clickPrev, isNextButton, isPrevButton } =
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
              {carouselList.map((item, index) => (
                <WithTransition
                  key={item.title}
                  style={{
                    defaultStyle: getDefaultStyles(++index),
                    transitionStyles,
                  }}
                  isOpen={isInViewport}
                  classNames="min-w-full"
                >
                  <CarouselItem {...item} key={item.id} />
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
            isDisabled={!isNextButton}
          />
        </div>
      </div>
    </>
  );
};

export { Carousel };
