import React from 'react'
import { CartStoreInstance } from 'store'
import styles from './CartSection.module.css'
import { CartItem } from './components/CartItem'
import { headphones } from 'data/index'

export function CartSection() {
  return (
    <>
      <h2 className={styles.header}>Корзина</h2> 
      <div className={styles.cart}>
      <CartItem key={1} item={headphones[0]} />
        {CartStoreInstance.showCart.length > 0 ? (
          CartStoreInstance.showCart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))
        ) : (
          <p className={styles.emptyCart}>Корзина пуста</p>
        )}
        <div>
          {/* cartResult */}
        </div>
      </div>
    </>
  )
}
