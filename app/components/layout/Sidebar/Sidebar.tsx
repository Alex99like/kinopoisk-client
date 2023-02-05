import styles from './Sidebar.module.scss'
import {Search} from "@/app/components/layout/Sidebar/Search/Search";
import {MoviesContainer} from "@/app/components/layout/Sidebar/MoviesContainer/MoviesContainer";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Search />
      <MoviesContainer />
    </div>
  )
}