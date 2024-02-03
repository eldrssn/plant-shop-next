import { FC } from 'react';
import { TFooterLinksList } from '../types';

const FooterLinksList: FC<TFooterLinksList> = ({ order, title, links }) => (
  <section className={`text-sm md:basis-1/3 md:order-${order}`}>
    <div
      className={`flex flex-col text-center md:text-start m-auto pb-8 gap-y-2 md:w-fit`}
    >
      <h5 className='text-base font-bold'>{title}</h5>
      {links.map(({ title, link }, index) => (
        <a
          key={index}
          href={link}
          target='_blank'
          rel='noreferrer'
          className='cursor-pointer hover:underline'
        >
          {title}
        </a>
      ))}
    </div>
  </section>
);

export { FooterLinksList };
