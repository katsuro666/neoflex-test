import React from 'react'
import { observer } from 'mobx-react'
import { CartStoreInstance } from 'store'
import styles from './CartItem.module.css'
import { DataItem } from 'data/data.types'
import { CartItemFields } from 'store/Cart.types'

export function CartItemProto(item: DataItem) {

  const {cartArray, setQuantity} = CartStoreInstance

  const currentItem = cartArray.find((el) => el.product.id === item.id) as CartItemFields

  const addToCart = () => {
    setQuantity(currentItem.quantity + 1, currentItem.product.id)
  }

  const removeFromCart = () => {
    if (currentItem.quantity > 0) {
      setQuantity(currentItem.quantity - 1, item.id)
    }
  }

  const isDisabled = () => {
    return currentItem.quantity === 0
  }


  return (
    <div className={styles.cartItem}>
      <div>
        <img className={styles.img} src={item.img} alt={item.title} />
        <div className={styles.controllers}>
          <button className={styles.minus} onClick={removeFromCart} disabled={isDisabled()} >-</button>
          <span className={styles.count}>
            {currentItem.quantity}
          </span>
          <button className={styles.plus} onClick={addToCart}>+</button>
        </div>
      </div>

      <div className={styles.descSection}>
        <div className={styles.desc}>
          <h4 className={styles.title}>{item.title}</h4>
          <p className={styles.addPrice}>{`${item.price} ${item.currency}`}</p>
        </div>
        <p className={styles.price}>{item.price}</p>
        <button className={styles.remove}>
          <img src="/assets/icons/remove.png" alt="" />
        </button>
      </div>
    </div>
  )
}

export const CartItem = observer(CartItemProto)