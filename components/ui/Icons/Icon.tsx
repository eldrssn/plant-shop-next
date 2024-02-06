import { FC } from 'react';
import { TIcon } from './types';

const Icon: FC<TIcon> = ({ svgId, className }) => (
  <svg className={className}>
    <use href={`sprite.svg#${svgId}`} />
  </svg>
);

export { Icon };
