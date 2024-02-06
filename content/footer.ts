import { TCommonLink, TSocialLinks } from '@/components/main/footer/types';

import { FBIcon } from '@/components/ui/icons/FBIcon';
import { InstIcon } from '@/components/ui/icons/InstIcon';
import { TwitterIcon } from '@/components/ui/icons/TwitterIcon';

export const commonLinks: TCommonLink[] = [
  {
    id: 1,
    title: 'About',
    links: [
      {
        id: 1,
        title: 'About Patch',
        link: '/',
      },
      {
        id: 2,
        title: 'Plant Care',
        link: '/',
      },
      {
        id: 3,
        title: 'Rewild Articles',
        link: '/',
      },
      {
        id: 4,
        title: 'FAQ',
        link: '/',
      },
      {
        id: 5,
        title: 'Contact',
        link: '/',
      },
      {
        id: 6,
        title: 'Career',
        link: '/',
      },
      {
        id: 7,
        title: 'Impact at Patch',
        link: '/',
      },
    ],
  },
  {
    id: 2,
    title: 'Terms',
    links: [
      {
        id: 1,
        title: 'Terms of Service',
        link: '/',
      },
      {
        id: 2,
        title: 'Privacy Policy',
        link: '/',
      },
      {
        id: 3,
        title: 'Returns and Delivery',
        link: '/',
      },
      {
        id: 4,
        title: 'Cookies',
        link: '/',
      },
    ],
  },
];

export const socialLinks: TSocialLinks[] = [
  {
    id: 1,
    title: 'twitter',
    link: 'https://twitter.com/',
    Icon: TwitterIcon,
  },
  {
    id: 2,
    title: 'facebook',
    link: 'https://facebook.com/',
    Icon: FBIcon,
  },
  {
    id: 3,
    title: 'instagram',
    link: 'https://www.instagram.com/',
    Icon: InstIcon,
  },
];
