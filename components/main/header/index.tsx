import { buttonIcons } from '@/common/constants/header';
import { LogoIcon } from '@/components/ui/icons/LogoIcon';
import { Icon } from '@/components/ui/icons/Icon';

import { Nav } from './Nav';

const Header = () => (
  <header className="sticky top-0 z-10 w-full h-16 bg-white/80 lg:h-20">
    <div className="max-w-[75rem] w-full flex flex-row items-center m-auto h-full">
      <Nav />

      <div className="flex justify-center flex-1 w-1/3 lg:flex-none lg:w-auto lg:-order-1 lg:justify-start lg:px-2">
        <LogoIcon />
      </div>

      <div className="flex-1 w-1/3 ">
        <div className="flex flex-row float-right clear-both pr-4">
          {buttonIcons.map(({ svgId }) => (
            <button className="p-3" key={svgId}>
              <Icon className="w-[20px] h-[25px]" svgId={svgId} />
            </button>
          ))}
        </div>
      </div>
    </div>
  </header>
);

export { Header };
