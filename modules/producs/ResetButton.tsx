'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const ResetButton = () => {
  const pathname = usePathname();

  return (
    <Link
      href={pathname}
      className="no-underline underline-offset-2 md:underline"
    >
      Reset
    </Link>
  );
};
