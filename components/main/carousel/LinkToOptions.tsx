import { OutlinedLink } from '@/components/ui/outlined-link';

const LinkToOptions = ({ href }: { href: string }) => (
  <OutlinedLink
    href={href}
    className="h-12 py-[.625rem] align-middle font-medium md:max-w-full "
  >
    See options
  </OutlinedLink>
);

export { LinkToOptions };
