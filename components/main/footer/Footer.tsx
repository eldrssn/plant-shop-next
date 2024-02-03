import { footerList } from '@/content/footer';
import { JoinBox } from './components/JoinBox';
import { FooterLinksList } from './components/FooterLinksList';
import { SocialLinksList } from './components/SocialLinksList';
import { Copyright } from './components/Copyright';

const Footer = () => (
  <footer className='p-12 text-white bg-zinc-800'>
    <div className='flex flex-col m-auto md:flex-row md:max-w-6xl'>
      <JoinBox />
      {footerList.map((list, index) => (
        <FooterLinksList key={list.id} {...list} order={index} />
      ))}
    </div>
    <SocialLinksList />
    <Copyright />
  </footer>
);

export { Footer };
