import { FC } from 'react';
import { TButton } from '@/types';

const OfferButton: FC<TButton> = ({
  href,
  className,
  children,
  onClick,
  type,
}) => {
  const classNames = `w-full text-white bg-teal-700 font-bold py-4 px-10 block max-w-[300px] ease-in-out transition-colors duration-300
      hover:bg-teal-700/80 text-center ${className}`;

  return href ? (
    <a href={href} className={classNames}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} type={type} className={classNames}>
      {children}
    </button>
  );
};

export { OfferButton };
