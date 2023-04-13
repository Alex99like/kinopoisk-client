import { getAdminUrl } from "@/config/url.config"
import { MovieService } from "@/service/movie.service"
import { getKeys } from "@/utils/object/getKeys"
import { toastError } from "@/utils/toastError"
import { useRouter } from "next/router"
import { UseFormSetValue, SubmitHandler } from "react-hook-form"
import { useQuery, useMutation } from "react-query"
import { toastr } from "react-redux-toastr"
import { IMovieEditInput } from "./movie-edit.interface"

export const useMovieEdit = (setValue: UseFormSetValue<IMovieEditInput>) => {
	const { query, push } = useRouter()

	const movieId = String(query.id)

	const { isLoading } = useQuery(
		['movie', movieId],
		() => MovieService.getById(movieId),
		{
			onSuccess({ data }) {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError(error) {
				toastError(error, 'Get movie')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update movie',
		(data: IMovieEditInput) => MovieService.update(movieId, data),
		{
			onError(error) {
				toastError(error, 'Update movie')
			},
			onSuccess() {
				toastr.success('Update movie', 'update was successful')
				push(getAdminUrl('movies'))
			},
		}
	)

	const onSubmit: SubmitHandler<IMovieEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
