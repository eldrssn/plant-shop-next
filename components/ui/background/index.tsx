import { FC } from 'react';
import useBodyOverflow from '@/common/hooks/useBodyOverflow';
import { WithTransition } from '@/common/hocs/WithTransition';
import { defaultStyle, transitionStyles } from './animation';

type TBackground = {
  isOpen: boolean;
  className?: string;
  onClick?: () => void;
};

const Background: FC<TBackground> = ({ className, onClick, isOpen }) => {
  useBodyOverflow(isOpen);

  return (
    <WithTransition
      style={{
        defaultStyle,
        transitionStyles,
      }}
      timeout={500}
      isOpen={isOpen}
      classNames={`absolute w-full h-screen bg-black/30 left-0 top-0 z-10 ${className}`}
    >
      <div onClick={onClick} className={`h-full w-full`} />
    </WithTransition>
  );
};

export { Background };
