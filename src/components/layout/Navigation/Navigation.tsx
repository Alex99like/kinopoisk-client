import React from 'react'
import styles from './Navigation.module.scss'
import { Logo } from './Logo'
import { MenuContainer } from './MenuContainer/MenuContainer'

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Logo />
      <MenuContainer />
    </div>
  )
}
