'use client';

import { FC, createRef } from 'react';
import { Transition } from 'react-transition-group';

import { TWithTransition } from './types';

const WithTransition: FC<TWithTransition> = ({
  isOpen,
  classNames,
  children,
  timeout = 150,
  style: { defaultStyle, transitionStyles },
}) => {
  const nodeRef = createRef<HTMLElement>();

  return (
    <Transition nodeRef={nodeRef} in={isOpen} timeout={timeout}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          className={classNames}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export { WithTransition };
