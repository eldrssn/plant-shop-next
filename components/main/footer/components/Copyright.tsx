import { getCurrentYear } from '@/utility';

const Copyright = () => (
  <p className='p-6 text-sm text-center '>
    © {getCurrentYear()} Maxim Kalumullin
  </p>
);

export { Copyright };
