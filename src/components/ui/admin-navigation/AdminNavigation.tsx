import React from 'react'
import styles from './AdminNavigation.module.scss'
import { navItems } from './admin-navigation.data'
import { NavItem } from './AdminNavItem'

export const AdminNavigation = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {navItems.map(item => <NavItem key={item.link} item={item} />)}
      </ul>
    </nav>
  )
}
