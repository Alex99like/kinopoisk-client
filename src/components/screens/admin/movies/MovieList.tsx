import { AdminNavigation } from "@/components/ui/admin-navigation/AdminNavigation"
import { AdminHeader } from "@/components/ui/admin-table/AdminHeader/AdminHeader"
import { AdminTable } from "@/components/ui/admin-table/AdminTable/AdminTable"
import { Heading } from "@/components/ui/heading/Heading"
import { Meta } from "@/utils/meta/Meta"
import { FC } from "react"
import { useMovies } from "./useMovies"

export const MovieList: FC = () => {
  const {
  	createAsync,
  	data,
  	isLoading,
  	deleteAsync,
  	searchTerm,
  	handleSearch,
  } = useMovies()
  
  return (
  	<Meta title="Movies">
  	  <AdminNavigation />
  	  <Heading title="Movies" />
  	  <AdminHeader
  	  	onClick={createAsync}
  	  	handleSearch={handleSearch}
  	  	searchTerm={searchTerm}
  	  />
  	  <AdminTable
  	  	tableItems={data || []}
  	  	headerItems={['Title', 'Genres', 'Rating']}
  	  	isLoading={isLoading}
  	  	removeHandler={deleteAsync}
  	  />
  	</Meta>
  )
}