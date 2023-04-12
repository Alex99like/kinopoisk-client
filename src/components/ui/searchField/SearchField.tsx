import React, { FC, ChangeEvent } from 'react'

import styles from './SearchField.module.scss'
import { MaterialIcon } from '../MaterialIcon'

interface ISearchTerm {
  searchTerm: string
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

export const SearchField: FC<ISearchTerm> = ({ handleSearch, searchTerm }) => {
  return (
    <div className={styles.search}>
      <MaterialIcon name='MdSearch' />
      <input placeholder='Search' value={searchTerm} onChange={handleSearch} />
    </div>
  )
}
