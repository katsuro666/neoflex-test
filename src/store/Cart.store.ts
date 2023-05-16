import { DataItem } from "data/data.types";
import { makeAutoObservable, toJS } from "mobx";
import { CartItemFields } from "./Cart.types";

export class CartStore {
  constructor() {
    makeAutoObservable(this);
  }

  private _cart: CartItemFields[] = [];
  
  get cartArray() {
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

  setQuantity = (quantity: number, id: number) => {
    const index = this._cart.findIndex((cartItem) => cartItem.product.id === id);
    if (index >= 0) {
      this._cart[index].quantity = quantity;
    }
  }
}

export const CartStoreInstance = new CartStore();