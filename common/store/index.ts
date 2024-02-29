import { makeAutoObservable } from 'mobx';
import { enableStaticRendering } from 'mobx-react-lite';

import { CartProduct } from '@/models/Product';

enableStaticRendering(typeof window === 'undefined');

export interface CartStoreProps {
  items: CartProduct[];
  _deliveryPrice: number;
  getItem: (_id: string) => CartProduct | undefined;
  changeQuantity: (_id: string, quantity: number) => void;
  addItem: (item: CartProduct) => void;
  deleteItem: (_id: string) => void;
  length: number;
  subTotal: number;
  deliveryPrice: number;
  total: number;
  hydrate: (data: { items: CartProduct[] }) => void;
}

class CartStore implements CartStoreProps {
  items: CartProduct[] = [];
  _deliveryPrice: number = 20;

  constructor() {
    makeAutoObservable(this);
  }

  getItem = (_id: string) => this.items.find((item) => item._id === _id);

  changeQuantity = (_id: string, quantity: number) => {
    const item = this.getItem(_id);
    if (item) {
      item.quantity = quantity;
    }
  };

  addItem = (item: CartProduct) => {
    const olditem = this.getItem(item._id);
    if (olditem) {
      console.log(olditem);

      olditem.quantity += 1;
      return;
    }

    this.items.push(item);
  };

  deleteItem = (_id: string) => {
    this.items = this.items.filter((item) => item._id !== _id);
  };

  get length() {
    return this.items.length;
  }

  get subTotal() {
    return this.items.reduce((accum, next) => {
      return accum + next.variant.price * next.quantity;
    }, 0);
  }

  get deliveryPrice() {
    return this._deliveryPrice;
  }

  get total() {
    return this.subTotal + this._deliveryPrice;
  }

  hydrate = (data: { items: CartProduct[] }) => {
    if (!data) return;
    this.items = data.items || [];
  };
}

export default CartStore;