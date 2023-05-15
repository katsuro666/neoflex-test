import React from 'react'
import styles from './CartItem.module.css'
import { CartItemProps } from './CartItem.types'

export function CartItem({item}: CartItemProps) {
  return (
    <div className={styles.cartItem}>
      <div>
        <img className={styles.img} src={item.img} alt={item.title} />
        <div className={styles.controllers}>
          <button className={styles.minus}>-</button>
          <span className={styles.count}>1</span>
          <button className={styles.plus}>+</button>
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
