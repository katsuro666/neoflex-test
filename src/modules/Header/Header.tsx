import React from 'react'
import { observer } from 'mobx-react'
import { CartStoreInstance } from 'store' 
import { Logo } from 'components'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { PATH_LIST } from 'constants/index'


function HeaderProto() {

  let cartCount = 0 
  CartStoreInstance.cartArray.forEach(item => cartCount += item.quantity)
  return (
    <header className={styles.header}>
      <Link to={PATH_LIST.ROOT} style={{ textDecoration: 'none' }}>
        <Logo />
      </Link>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <img width='22' height='20' src='/assets/icons/heart.svg' alt="Favorites" />
        </li>
        <li className={styles.list_item}>
          <Link to={PATH_LIST.CART} style={{ textDecoration: 'none' }}>
            <button className={styles.cartBtn}>
              <img width='23' height='23' src='/assets/icons/cart.svg' alt="Your cart"/>
              {cartCount !== 0 && <span className={styles.badge}>{cartCount}</span>}
            </button>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export const Header = observer(HeaderProto);
