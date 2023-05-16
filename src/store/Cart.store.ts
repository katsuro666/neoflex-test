import { DataItem } from "data/data.types";
import { makeAutoObservable } from "mobx";
import { CartItemFields } from "./Cart.types";

export class CartStore {
  constructor() {
    makeAutoObservable(this);
  }

  private _cart: CartItemFields[] = JSON.parse(sessionStorage.getItem("cart") || "[]");
  
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
    sessionStorage.setItem('cart', JSON.stringify(this._cart));
  }

  setQuantity = (quantity: number, id: number) => {
    const index = this._cart.findIndex((cartItem) => cartItem.product.id === id);
    if (index >= 0) {
      this._cart[index].quantity = quantity;
    }
  }
}

export const CartStoreInstance = new CartStore();