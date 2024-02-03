import { ButtonLink } from '@/components/ui/ButtonLink';

const ButtonOptions = ({ href }: { href: string }) => (
  <ButtonLink
    href={href}
    className='h-12 py-[.625rem] font-medium md:max-w-full p-o'
  >
    See options
  </ButtonLink>
);

export { ButtonOptions };
