import { getCurrentYear } from '@/common/utils';

const Copyright = () => (
  <p className="p-6 text-sm text-center ">
    © {getCurrentYear()} Maxim Kalumullin
  </p>
);

export { Copyright };
