import { AdminNavigation } from "@/components/ui/admin-navigation/AdminNavigation"
import { AdminHeader } from "@/components/ui/admin-table/AdminHeader/AdminHeader"
import { AdminTable } from "@/components/ui/admin-table/AdminTable/AdminTable"
import { Heading } from "@/components/ui/heading/Heading"
import { Meta } from "@/utils/meta/Meta"
import { FC } from "react"
import { useGenres } from "./useGenres"

export const GenreList: FC = () => {
	const {
		createAsync,
		data,
		isLoading,
		deleteAsync,
		searchTerm,
		handleSearch,
	} = useGenres()

	return (
	  <Meta title="Genres">
	  	<AdminNavigation />
	  	<Heading title="Genres" />
	  	<AdminHeader
	  	  onClick={createAsync}
	  	  searchTerm={searchTerm}
	  	  handleSearch={handleSearch}
	  	/>
	  	<AdminTable
	  	  tableItems={data || []}
	  	  headerItems={['Name', 'Slug']}
	  	  isLoading={isLoading}
	  	  removeHandler={deleteAsync}
	  	/>
	  </Meta>
	)
}