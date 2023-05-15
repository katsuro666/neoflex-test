import React from 'react'
import { observer } from 'mobx-react'
import { CartStoreInstance } from 'store' 
import { Logo } from 'components'
import styles from './Header.module.css'


function HeaderProto() {
  return (
    <header className={styles.header}>
    <Logo />
    <ul className={styles.list}>
      <li className={styles.list_item}>
        <img width='22' height='20' src='/assets/icons/heart.svg' alt="Favorites" />
      </li>
      <li className={styles.list_item}>
        <button className={styles.cartBtn}>
          <img width='23' height='23' src='/assets/icons/cart.svg' alt="Your cart"/>
          {CartStoreInstance.showCart.length !== 0 && <span className={styles.badge}>{CartStoreInstance.showCart.length}</span>}
        </button>
      </li>
    </ul>
    </header>
  )
}

export const Header = observer(HeaderProto);
