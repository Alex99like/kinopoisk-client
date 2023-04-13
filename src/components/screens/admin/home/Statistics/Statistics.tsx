import React from 'react'
import styles from '../Admin.module.scss'
import { CountUsers } from './CountUsers'
import { PopularMovie } from './PopularMovie'

export const Statistics = () => {
  return (
    <div className={styles.statistics}>
      <CountUsers />
      <PopularMovie />
    </div>
  )
}
