import { commonLinks } from '@/content/footer';
import { JoinBox } from './JoinBox';
import { CommonLinks } from './CommonLinks';
import { SocialLinks } from './SocialLinks';
import { Copyright } from './Copyright';

const Footer = () => (
  <footer className="p-12 text-white bg-zinc-800">
    <div className="flex flex-col m-auto md:flex-row md:max-w-6xl">
      <JoinBox />
      {commonLinks.map((list, index) => (
        <CommonLinks key={list.id} {...list} order={index} />
      ))}
    </div>
    <SocialLinks />
    <Copyright />
  </footer>
);

export { Footer };
