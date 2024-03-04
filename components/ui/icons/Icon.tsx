import { FC } from 'react';

export type IconProps = {
  svgId: string;
  className?: string;
  onClick?: () => void;
  width?: string;
  height?: string;
};

const Icon: FC<IconProps> = ({ svgId, className, onClick, width, height }) => (
  <svg className={className} onClick={onClick} width={width} height={height}>
    <use href={`/sprite.svg#${svgId}`} />
  </svg>
);

export { Icon };
