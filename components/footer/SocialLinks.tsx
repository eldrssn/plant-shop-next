import Link from 'next/link';
import { socialLinks } from './constants/social-links';

const SocialLinks = () => (
  <ul className="pt-4 m-auto w-fit">
    {socialLinks.map(({ title, link, id, Icon }) => (
      <li className="inline-block p-2 m-auto" key={id}>
        <Link
          aria-label={`Go to ${title}`}
          href={link}
          target="_blank"
          rel="noreferrer"
          className="m-auto fill-white"
        >
          <span className="hidden">{title}</span>
          <Icon />
        </Link>
      </li>
    ))}
  </ul>
);

export { SocialLinks };
