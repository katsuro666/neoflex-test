import React from 'react'
import { ItemProps } from './Item.types';
import styles from './Item.module.css';

export function Item({ item }: ItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.img_container}>
        <img src={item.img} alt="headphones" className={styles.img} />
      </div>
      <div className={styles.info}>
        <h4 className={styles.title}>{item.title}</h4>
        <p className={styles.price}>{`${item.price} ${item.currency}`}</p>
        {item.oldPrice &&
          <span className={styles.oldPrice}>{`${item.oldPrice} ${item.currency}`}</span>}
      </div>
      <div className={styles.bottom_panel}>
        <div className={styles.rating}>
          <img src="/assets/icons/rating.svg" alt="" />
          <span>{item.rate}</span>
        </div>
          <button className={styles.btn}>Купить</button>
      </div>
    </div>
  )
}
