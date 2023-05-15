import React from 'react'
import { Logo } from 'components'
import styles from './Footer.module.css'
import { FakeLink } from 'components'

export function Footer() {
  return (
    <div className={styles.container}>
      <Logo />
      <ul className={styles.list}>
        <li><FakeLink>Избранное</FakeLink></li>
        <li><FakeLink>Корзина</FakeLink></li>
        <li><FakeLink>Контакты</FakeLink></li>
      </ul>
      <div>
        <p className={styles.terms}><FakeLink>Условия сервиса</FakeLink></p>
        <ul className={`${styles.list} ${styles.lang}`}>
          <li><img src="/assets/icons/lang.png" alt="" /></li>
          <li> <FakeLink>Каз</FakeLink></li>
          <li className={styles.currentLang}><FakeLink>Рус</FakeLink></li>
          <li><FakeLink>Eng</FakeLink></li>
        </ul>
      </div>
      <ul className={`${styles.list} ${styles.socials}`}>
        <li><FakeLink><img src="/assets/icons/VK.png" alt="" /></FakeLink></li>
        <li><FakeLink><img src="/assets/icons/Telegram.png" alt="" /></FakeLink></li>
        <li><FakeLink><img src="/assets/icons/Whatsapp.png" alt="" /></FakeLink></li>
      </ul>
    </div>
  )
}
