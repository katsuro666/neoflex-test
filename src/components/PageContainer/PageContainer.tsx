import React from 'react'
import { Props } from './PageContainer.types'
import styles from './PageContainer.module.css'

export function PageContainer({children}: Props) {
  return (
    <div className={styles.container}>{children}</div>
  )
}
