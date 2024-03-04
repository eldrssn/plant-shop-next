import { links } from './constants/links';
import { JoinBox } from './JoinBox';
import { CommonLinks } from './CommonLinks';
import { SocialLinks } from './SocialLinks';
import { Copyright } from './Copyright';
import { DeliveryOffer } from './DeliveryOffer';
import { DetailsScreen } from './DetailsScreen';

const Footer = () => (
  <footer>
    <DeliveryOffer />
    <DetailsScreen />
    <section className="p-12 text-white bg-zinc-800">
      <div className="flex flex-col m-auto md:flex-row md:max-w-6xl">
        <JoinBox />
        {links.map((list, index) => (
          <CommonLinks key={list.id} {...list} order={index} />
        ))}
      </div>
      <SocialLinks />
      <Copyright />
    </section>
  </footer>
);

export { Footer };
