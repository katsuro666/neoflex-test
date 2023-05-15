import React from 'react'
import styles from './FakeLink.module.css'
import { FakeLinkProps } from './FakeLink.types'

export function FakeLink({children}: FakeLinkProps) {
  return (
    <button className={styles.fakeBtn}>{children}</button>
  )
}
