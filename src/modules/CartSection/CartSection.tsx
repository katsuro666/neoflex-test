import React from 'react'
import { CartStoreInstance } from 'store'
import styles from './CartSection.module.css'
import { CartItem } from './components/CartItem'

export function CartSection() {

  const { cartArray } = CartStoreInstance

  return (
    <>
      <h2 className={styles.header}>Корзина</h2> 
      <div className={styles.cart}>
          {cartArray.length > 0 ? (
            <>
            <div className={styles.items}>
            {cartArray.map((item) => (
              <CartItem 
                key={item.product.id} 
                img={item.product.img} 
                title={item.product.title} 
                price={item.product.price} 
                currency={item.product.currency} 
                rate={item.product.rate} 
                id={item.product.id} />
            ))}
            </div>

            <div className={styles.checkout}>
            <div className={styles.total}>
              <p>Итого</p>
              <p>Сумма</p>
            </div>
            <button className={styles.button}>Перейти к оформлению</button>
          </div>
          </>
              
            
          ) : (
            <p className={styles.emptyCart}>Корзина пуста</p>
          )}
          {/* <div className={styles.checkout}>
            <div className={styles.total}>
              <p>Итого</p>
              <p>Сумма</p>
            </div>
            <button className={styles.button}>Перейти к оформлению</button>
          </div> */}
      </div>
    </>
  )
}
