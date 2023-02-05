import styles from './Search.module.scss'
import {FC} from "react";
import {useSearch} from "@/app/components/layout/Sidebar/Search/useSearch";
import {SearchList} from "@/app/components/layout/Sidebar/Search/SearchList/SearchList";
import {SearchField} from "@/app/components/ui/search-field/SearchField";

export const Search: FC = () => {
  const { isSuccess, data, handleSearch, searchTerm } = useSearch()

  return (
    <div className={styles.wrapper}>
      <SearchField searchTerm={searchTerm} handleSearch={handleSearch}/>
      {isSuccess && <SearchList movies={data || []} />}
    </div>
  )
}