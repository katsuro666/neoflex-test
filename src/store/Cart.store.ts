import { DataItem } from "data/data.types";
import { makeAutoObservable } from "mobx";

export class CartStore {
  constructor() {
    makeAutoObservable(this);
  }

  private _cart: DataItem[] = [];

  get showCart() {
    return this._cart;
  }

  addToCart(item: DataItem) {
    this._cart.push(item);
  }
}

export const CartStoreInstance = new CartStore();