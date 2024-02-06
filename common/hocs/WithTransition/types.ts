import { ReactNode } from 'react';
import { TransitionStatus } from 'react-transition-group';

export type TWithTransition = {
  isOpen: boolean;
  classNames?: string;
  children: ReactNode;
  timeout?: number;
  style: {
    defaultStyle: Record<string, string>;
    transitionStyles: Record<TransitionStatus, Record<string, string>>;
  };
};
