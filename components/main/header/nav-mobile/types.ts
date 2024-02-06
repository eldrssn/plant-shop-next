import { TMenuItem } from '@/components/main/header/types';

export type TItem = TMenuItem & {
  onClick: () => void;
};
