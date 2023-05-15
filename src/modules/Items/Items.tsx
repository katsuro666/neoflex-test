import React from 'react'
import { headphones, wirelessHeadphones } from '../../data';
import styles from './Items.module.css';
import { Item } from 'modules/Items/components/Item/index';

export function Items() {
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.header}>Наушники</h2> 
        <div className={styles.items}>
          {headphones.map((item, index) => (
            <Item key={index} item={item}/>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.header}>Беспроводные наушники</h2> 
        <div className={styles.items}>
          {wirelessHeadphones.map((item, index) => (
            <Item key={index} item={item}/>
          ))}
        </div>
      </section>
    </>
  )
}
