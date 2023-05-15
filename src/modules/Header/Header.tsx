import { Logo } from 'components'
import React from 'react'
import styles from './Header.module.css'


export function Header() {
  return (
    <header className={styles.header}>
    <Logo />
    <ul className={styles.list}>
      <li className={styles.list_item}>
        <img width='22' height='20' src='/assets/icons/heart.svg' alt="Favorites" />
      </li>
      <li className={styles.list_item}>
        <img width='23' height='23' src='/assets/icons/cart.svg' alt="Your cart" />
      </li>
    </ul>
    </header>
  )
}
