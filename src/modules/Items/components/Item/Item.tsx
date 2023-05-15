import React from 'react'
import { observer } from 'mobx-react'
import { ItemProps } from './Item.types'
import styles from './Item.module.css'
import { CartStoreInstance } from 'store'

function ItemProto(props: ItemProps) {

  const addToCart = () => {
    CartStoreInstance.addToCart(props.item);
  }


  return (
    <div className={styles.item}>
      <div className={styles.img_container}>
        <img src={props.item.img} alt="headphones" className={styles.img} />
      </div>
      <div className={styles.info}>
        <h4 className={styles.title}>{props.item.title}</h4>
        <p className={styles.price}>{`${props.item.price} ${props.item.currency}`}</p>
        {props.item.oldPrice &&
          <span className={styles.oldPrice}>{`${props.item.oldPrice} ${props.item.currency}`}</span>}
      </div>
      <div className={styles.bottom_panel}>
        <div className={styles.rating}>
          <img src="/assets/icons/rating.svg" alt="" />
          <span>{props.item.rate}</span>
        </div>
          <button className={styles.btn} onClick={addToCart}>Купить</button>
      </div>
    </div>
  )
}

export const Item = observer(ItemProto);
