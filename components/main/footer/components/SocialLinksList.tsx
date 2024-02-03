import { socialLinksList } from '@/content/footer';

const SocialLinksList = () => (
  <ul className='pt-4 m-auto w-fit'>
    {socialLinksList.map(({ title, link, id, Icon }) => (
      <li className='inline-block p-2 m-auto' key={id}>
        <a
          href={link}
          target='_blank'
          rel='noreferrer'
          className='m-auto fill-white'
        >
          <span className='hidden'>{title}</span>
          <Icon />
        </a>
      </li>
    ))}
  </ul>
);

export { SocialLinksList };
