import { popularSearchLinks } from './constants';
import { PopularLink } from './PopularLink';

export const PopularLinks = () => (
  <div>
    <h3 className="mb-6 font-bold text-zinc-800">Popular</h3>
    <ul className="flex flex-wrap justify-between">
      {popularSearchLinks.map((link) => (
        <PopularLink {...link} key={link.title} />
      ))}
    </ul>
  </div>
);
