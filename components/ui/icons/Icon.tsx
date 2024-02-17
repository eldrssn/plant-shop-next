import { FC } from 'react';
import { TIcon } from './types';

const Icon: FC<TIcon> = ({ svgId, className, onClick, width, height }) => (
  <svg className={className} onClick={onClick} width={width} height={height}>
    <use href={`/sprite.svg#${svgId}`} />
  </svg>
);

export { Icon };
