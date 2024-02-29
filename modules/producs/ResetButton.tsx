'use client';

import Link from 'next/link';
import { PRODUCTS_SLUG } from '@/common/constants';

export const ResetButton = () => (
    <Link
      href={`/${PRODUCTS_SLUG}`}
      className="no-underline underline-offset-2 md:underline"
    >
      Reset
    </Link>
  );

