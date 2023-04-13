import { AdminNavigation } from "@/components/ui/admin-navigation/AdminNavigation"
import { AdminHeader } from "@/components/ui/admin-table/AdminHeader/AdminHeader"
import { AdminTable } from "@/components/ui/admin-table/AdminTable/AdminTable"
import { Heading } from "@/components/ui/heading/Heading"
import { Meta } from "@/utils/meta/Meta"
import { FC } from "react"
import { useActors } from "./useActors"

export const ActorList: FC = () => {
  const {
  	createAsync,
  	data,
  	isLoading,
  	deleteAsync,
  	searchTerm,
  	handleSearch,
  } = useActors()
  
  return (
  	<Meta title="Actors">
  	  <AdminNavigation />
  	  <Heading title="Actors" />
  	  <AdminHeader
  	  	onClick={createAsync}
  	  	handleSearch={handleSearch}
  	  	searchTerm={searchTerm}
  	  />
  	  <AdminTable
  	  	tableItems={data || []}
  	  	headerItems={['Name', 'Count movies']}
  	  	isLoading={isLoading}
  	  	removeHandler={deleteAsync}
  	  />
  	</Meta>
  )
}