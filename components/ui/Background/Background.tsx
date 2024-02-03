import { FC } from 'react';
import { ClassName, TOnClick } from '@/types';

const Background: FC<ClassName & TOnClick> = ({ className, onClick }) => (
  <div
    onClick={onClick}
    className={`absolute w-full h-screen left-0 top-0 bg-black opacity-25 transition-opacity z-0 ${className}`}
  />
);

export { Background };
