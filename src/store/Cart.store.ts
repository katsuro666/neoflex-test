import { DataItem } from "data/data.types";
import { makeAutoObservable } from "mobx";
import { CartItemFields } from "./Cart.types";

export class CartStore {
  constructor() {
    makeAutoObservable(this);
  }

  private _cart: CartItemFields[] = [];
  
  get showCart() {
    return this._cart;
  }

  addToCart(item: DataItem) {
    let duplicate = this._cart.find((cartItem) => cartItem.product.id === item.id);
    if (duplicate) {
      duplicate.quantity += 1
    } else {
    this._cart.push({
      quantity: 1,
      product: {
        ...item
      }
    })
    }
  }
}

export const CartStoreInstance = new CartStore();