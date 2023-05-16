import React from 'react'
import { observer } from 'mobx-react'
import { CartStoreInstance } from 'store'
import styles from './CartItem.module.css'
import { DataItem } from 'data/data.types'
import { CartItemFields } from 'store/Cart.types'

export function CartItemProto(props: DataItem) {
  const item = CartStoreInstance.showCart.find((el) => el.product.id === props.id) as CartItemFields


  return (
    <div className={styles.cartItem}>
      <div>
        <img className={styles.img} src={props.img} alt={props.title} />
        <div className={styles.controllers}>
          <button className={styles.minus}>-</button>
          <span className={styles.count}>
            {item.quantity}
          </span>
          <button className={styles.plus}>+</button>
        </div>
      </div>

      <div className={styles.descSection}>
        <div className={styles.desc}>
          <h4 className={styles.title}>{props.title}</h4>
          <p className={styles.addPrice}>{`${props.price} ${props.currency}`}</p>
        </div>
        <p className={styles.price}>{props.price}</p>
        <button className={styles.remove}>
          <img src="/assets/icons/remove.png" alt="" />
        </button>
      </div>
    </div>
  )
}

export const CartItem = observer(CartItemProto)