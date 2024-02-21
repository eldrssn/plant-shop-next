import { OutlinedActionButton } from '@/components/ui/outlined-action-button';

const LinkToOptions = ({ href }: { href: string }) => (
  <OutlinedActionButton
    href={href}
    className="h-12 py-[.625rem] align-middle font-medium md:max-w-full "
  >
    See options
  </OutlinedActionButton>
);

export { LinkToOptions };
