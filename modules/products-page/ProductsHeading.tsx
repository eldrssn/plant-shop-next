import { FC } from 'react';

type ProductsHeadingProps = {
  title: string;
  results?: number;
};

export const ProductsHeading: FC<ProductsHeadingProps> = ({
  title,
  results = 0,
}) => (
  <div className="flex flex-col gap-3 my-10">
    <h1 className="text-5xl font-bold text-center text-zinc-800 font-header">
      {title}
    </h1>
    <p className="block text-center md:hidden">
      {results} result{results && results > 1 ? 's' : ''}
    </p>
  </div>
);
