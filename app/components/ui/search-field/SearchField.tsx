import {useSearch} from "@/app/components/layout/Sidebar/Search/useSearch";
import styles from './SearchField.module.scss'
import {ChangeEvent, FC} from "react";
import {MaterialIcon} from "@/app/components/ui/MaterialIcon";

interface ISearchField {
  searchTerm: string
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

export const SearchField: FC<ISearchField> = ({ searchTerm, handleSearch }) => {
  return (
    <div className={styles.search}>
      <MaterialIcon name={'MdSearch'} />
      <input placeholder={'Search'} value={searchTerm} onChange={handleSearch} />
    </div>
  )
}