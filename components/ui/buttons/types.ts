import { Children } from '@/common/types';

export type TOnClick = { onClick?: () => void };

export type ButtonProps = Children &
  TOnClick & {
    href?: string;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
  };
