'use client';

import { ReactNode, createContext } from 'react';
import CartStore, { CartStoreProps } from '@/common/store';

type StoreContextProps = {
  children: ReactNode;
  initialState?: CartStoreProps;
};

export const StoreContext = createContext<CartStore>({} as CartStore);

function initializeStore(initialData?: CartStoreProps) {
  const _store = new CartStore();

  if (initialData) {
    _store.hydrate(initialData);
  }
  if (typeof window === 'undefined') return _store;

  return _store;
}

export function StoreProvider({
  children,
  initialState: initialData,
}: StoreContextProps) {
  const store = initializeStore(initialData);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
