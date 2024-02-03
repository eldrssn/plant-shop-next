import { useCallback, useMemo, useState } from 'react';

import { MOBILE_STOP, TABLET_STOP, TABLET_WIDTH } from '@/constants';
import { useWindowSize } from './useWindowSize';

export const useCarousel = ({
  elementWidth,
  listLength,
}: {
  elementWidth: number;
  listLength: number;
}) => {
  const { windowWidth } = useWindowSize();
  const [counter, setCounter] = useState(0);
  const carouselLenght = useMemo(
    () => counter * elementWidth,
    [counter, elementWidth],
  );

  const getLimit = useCallback(
    () =>
      windowWidth && windowWidth >= TABLET_WIDTH ? TABLET_STOP : MOBILE_STOP,
    [windowWidth],
  );

  const moveCounter = (diff: number) => {
    setCounter((counter) => counter + diff);
  };

  const clickNext = () => moveCounter(-1);
  const clickPrev = () => moveCounter(1);

  const isNextButton = useMemo(() => {
    const lengthLimit = listLength - getLimit();
    return carouselLenght >= -lengthLimit * elementWidth;
  }, [carouselLenght, elementWidth, getLimit, listLength]);

  const isPrevButton = useMemo(() => carouselLenght < 0, [carouselLenght]);

  return {
    counter,
    clickNext,
    clickPrev,
    isNextButton,
    isPrevButton,
  };
};
