import React from 'react'
import { observer } from 'mobx-react'
import { CartStoreInstance } from 'store'
import styles from './CartItem.module.css'
import { DataItem } from 'data/data.types'
import { CartItemFields } from 'store/Cart.types'

export function CartItemProto(item: DataItem) {

  const {cartArray, setQuantity, deleteFromCart} = CartStoreInstance

  const currentItem = cartArray.find((el) => el.product.id === item.id) as CartItemFields

  const addItem = () => {
    setQuantity(currentItem.quantity + 1, currentItem.product.id)
  }

  const removeItem = () => {
    if (currentItem.quantity > 0) {
      setQuantity(currentItem.quantity - 1, item.id)
    }
  }

  const isDisabled = () => {
    if (currentItem) {
      return currentItem.quantity === 0
    }
  }

  const deleteItemFromCart = () => {
    deleteFromCart(item.id)
  }


  return (
    currentItem ? (
      <div className={styles.cartItem}>
        <div>
          <img className={styles.img} src={item.img} alt={item.title} />
          <div className={styles.controllers}>
            <button className={styles.minus} onClick={removeItem} disabled={isDisabled()} >-</button>
            <span className={styles.count}>
              {currentItem?.quantity}
            </span>
            <button className={styles.plus} onClick={addItem}>+</button>
          </div>
        </div>

        <div className={styles.descSection}>
          <div className={styles.desc}>
            <h4 className={styles.title}>{item.title}</h4>
            <p className={styles.addPrice}>{`${item.price.toLocaleString('ru')} ${item.currency}`}</p>
          </div>
          <p className={styles.price}>{`${item.price.toLocaleString('ru')} ${item.currency}`}</p>
          <button className={styles.remove} onClick={deleteItemFromCart}>
            <img src="/assets/icons/remove.png" alt="" />
          </button>
        </div>
      </div>
    ) : null
  )
}

export const CartItem = observer(CartItemProto)