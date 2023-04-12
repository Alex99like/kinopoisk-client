import React from 'react'
import styles from './Sidebar.module.scss'
import { Search } from './Search/Search'
import { MoviesContainer } from './MoviesContainer/MoviesContainer'

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Search />
      <MoviesContainer />
    </div>
  )
}
