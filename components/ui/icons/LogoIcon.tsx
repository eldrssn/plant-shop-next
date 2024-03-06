import Link from 'next/link';
import { Icon } from './Icon';

const LogoIcon = () => (
  <Link href={'/'} aria-label='Go to main page'>
    <Icon
      svgId="patch-logo"
      className="w-[105px] h-[21px] lg:w-[143px] lg:h-[32px]"
    />
  </Link>
);

export { LogoIcon };
