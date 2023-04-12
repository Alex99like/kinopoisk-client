import { axiosClassic } from "@/api/interseptor"
import { getMoviesUrl } from "@/config/api.config"
import { getGenreUrl } from "@/config/url.config"
import { IGenre, IMovie } from "@/shared/types/movie.types"

export const MovieService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IMovie[]>(getMoviesUrl(``), {
      params: searchTerm
      ? {
        searchTerm
      } : {}
    })
  },

  async getMostPopularMovies() {
    const { data: movies } = await axiosClassic.get<IMovie[]>(
      getMoviesUrl('/most-popular')
    )
    return movies
  }
}