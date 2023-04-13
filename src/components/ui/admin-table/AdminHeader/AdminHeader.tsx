import React, { ChangeEvent, FC } from 'react'
import styles from './AdminHeader.module.scss'
import { SearchField } from '../../searchField/SearchField'
import { AdminCreateButton } from '../AdminCreateButton/AdminCreateButton'

interface IAdminHeader {
  onClick?: () => void
  searchTerm: string
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

export const AdminHeader: FC<IAdminHeader> = ({ onClick, handleSearch, searchTerm }) => {
  return (
    <div className={styles.header}>
      <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
      {onClick && <AdminCreateButton onClick={onClick} />}
    </div>
  )
}
