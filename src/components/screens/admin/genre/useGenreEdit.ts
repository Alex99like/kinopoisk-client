import { getAdminUrl } from "@/config/url.config"
import { GenreService } from "@/service/genre.service"
import { toastError } from "@/utils/toastError"
import { useRouter } from "next/router"
import { UseFormSetValue, SubmitHandler } from "react-hook-form"
import { useQuery, useMutation } from "react-query"
import { toastr } from "react-redux-toastr"
import { IGenreEditInput } from "./genre-edit.interface"
import { getKeys } from "@/utils/object/getKeys"

export const useGenreEdit = (setValue: UseFormSetValue<IGenreEditInput>) => {
	const { query, push } = useRouter()

	const genreId = String(query.id)

	const { isLoading } = useQuery(
		['genre', genreId],
		() => GenreService.getById(genreId),
		{
			onSuccess({ data }) {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError(error) {
				toastError(error, 'Get genre')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update genre',
		(data: IGenreEditInput) => GenreService.update(genreId, data),
		{
			onError(error) {
				toastError(error, 'Update genre')
			},
			onSuccess() {
				toastr.success('Update genre', 'update was successful')
				push(getAdminUrl('genres'))
			},
		}
	)

	const onSubmit: SubmitHandler<IGenreEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
