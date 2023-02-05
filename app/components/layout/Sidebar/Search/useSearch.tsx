import {ChangeEvent, useState} from "react";
import {useDebounce} from "@/app/hooks/useDebounce";
import {useQuery} from "react-query";
import {MovieService} from "@/app/services/movie.service";

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)

  const { isSuccess, data } = useQuery(['search movie list', debouncedSearch], () =>
    MovieService.getAll(debouncedSearch), {
    select: ({ data }) => data,
    enabled: !!debouncedSearch
  })

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return { isSuccess, handleSearch, data, searchTerm }
}