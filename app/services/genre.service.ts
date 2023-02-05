import axios from "axios";
import {getGenresUrl} from "@/app/config/api.config";
import {IGenre} from "@/app/shared/types/movie.types";
import {axiosClassic} from "@/app/api/intercepters";

export const GenreService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
      params: searchTerm
        ? {
          searchTerm: searchTerm
        } : {},
    })
  }
  // async getPopularGenres() {
  //   return axiosClassic.get<IGenre[]>(getGenresUrl('/popular'))
  // }
}