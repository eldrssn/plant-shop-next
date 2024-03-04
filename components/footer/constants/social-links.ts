import { TwitterIcon } from '@/components/ui/icons/TwitterIcon';
import { FBIcon } from '@/components/ui/icons/FBIcon';
import { InstIcon } from '@/components/ui/icons/InstIcon';
import { TSocialLinks } from '../types';

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
