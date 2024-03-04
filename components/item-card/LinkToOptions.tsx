import { FC } from 'react';
import { OutlinedActionButton } from '@/components/ui/buttons/OutlinedActionButton';

type LinkToOptions = { href: string };

const LinkToOptions: FC<LinkToOptions> = ({ href }) => (
  <OutlinedActionButton
    href={href}
    className="h-12 py-[.625rem] align-middle font-medium md:max-w-full "
  >
    See options
  </OutlinedActionButton>
);

export { LinkToOptions };
