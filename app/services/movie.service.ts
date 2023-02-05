import {axiosClassic} from "@/app/api/intercepters";
import {IMovie} from "@/app/shared/types/movie.types";
import {getMoviesUrl} from "@/app/config/api.config";

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